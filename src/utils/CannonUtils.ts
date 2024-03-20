import type { ConvexPolyhedronArgs } from '@react-three/cannon';
import { type BufferAttribute, type BufferGeometry, Vector3 } from 'three';

interface Face3 {
  a: number;
  b: number;
  c: number;
  normals: Vector3[];
}

class CannonUtils {
  public static toTrimeshProps(geometry: BufferGeometry) {
    let vertices;
    if (geometry.index === null) {
      vertices = (geometry.attributes.position as BufferAttribute).array;
    } else {
      vertices = (
        geometry.clone().toNonIndexed().attributes.position as BufferAttribute
      ).array;
    }

    const indices = Object.keys(vertices).map(Number);
    return [vertices, indices];
  }

  public static toConvexPolyhedronProps(geometry: BufferGeometry) {
    const position = geometry.attributes.position as BufferAttribute;
    const normal = geometry.attributes.normal as BufferAttribute;
    const vertices: Vector3[] = [];
    for (let i = 0; i < position.count; i += 1) {
      vertices.push(new Vector3().fromBufferAttribute(position, i));
    }

    const faces: Face3[] = [];
    for (let i = 0; i < position.count; i += 3) {
      const vertexNormals =
        normal === undefined
          ? []
          : [
              new Vector3().fromBufferAttribute(normal, i),
              new Vector3().fromBufferAttribute(normal, i + 1),
              new Vector3().fromBufferAttribute(normal, i + 2),
            ];
      const face: Face3 = { a: i, b: i + 1, c: i + 2, normals: vertexNormals };
      faces.push(face);
    }

    const verticesMap: { [key: string]: number } = {};
    const points = [];
    const changes: number[] = [];
    for (let i = 0, il = vertices.length; i < il; i += 1) {
      const v = vertices[i]!;
      const key = `${Math.round(v.x * 100)}_${Math.round(v.y * 100)}_${Math.round(v.z * 100)}`;
      if (verticesMap[key] === undefined) {
        verticesMap[key] = i;
        points.push({
          x: vertices[i]?.x,
          y: vertices[i]?.y,
          z: vertices[i]?.z,
        });
        changes[i] = points.length - 1;
      } else {
        changes[i] = changes[verticesMap[key]!]!;
      }
    }

    const faceIdsToRemove = [];
    for (let i = 0, il = faces.length; i < il; i += 1) {
      const face = faces[i]!;
      face.a = changes[face.a]!;
      face.b = changes[face.b]!;
      face.c = changes[face.c]!;
      const indices = [face?.a, face?.b, face?.c];
      for (let n = 0; n < 3; n += 1) {
        if (indices[n] === indices[(n + 1) % 3]) {
          faceIdsToRemove.push(i);
          break;
        }
      }
    }

    for (let i = faceIdsToRemove.length - 1; i >= 0; i -= 1) {
      const idx = faceIdsToRemove[i];
      faces.splice(idx!, 1);
    }

    const cannonFaces: number[][] = faces.map((f) => {
      return [f.a, f.b, f.c];
    });

    return [
      points.map((v) => [v.x, v.y, v.z]),
      cannonFaces,
    ] as ConvexPolyhedronArgs;
  }

  public static offsetCenterOfMass(body: any, centerOfMass: any): void {
    body.shapeOffsets.forEach((offset: any) => {
      centerOfMass.vadd(offset, centerOfMass);
    });
    centerOfMass.scale(1 / body.shapes.length, centerOfMass);
    body.shapeOffsets.forEach((offset: any) => {
      offset.vsub(centerOfMass, offset);
    });

    const worldCenterOfMass = { x: 0, y: 0, z: 0 };
    body.vectorToWorldFrame(centerOfMass, worldCenterOfMass);
    body.position.vadd(worldCenterOfMass, body.position);
  }
}

export default CannonUtils;
