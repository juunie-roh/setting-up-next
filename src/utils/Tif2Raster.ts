import * as GeoTIFF from 'geotiff';

/**
 * Usage: `Tif2Raster().then(@callback)`
 * @param path string a path url to data.tif
 * @returns Promise a promise of Float32Array
 */
const Tif2Raster = async (path: string) => {
  const raster = await fetch(path)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
      // Parse the GeoTIFF file
      return GeoTIFF.fromArrayBuffer(arrayBuffer);
    })
    .then((geotiff) => {
      // Now you can access the parsed GeoTIFF data
      // For example, you can read the image data from the GeoTIFF file
      return geotiff.getImage();
    })
    .then((image) => {
      // Now you can work with the image data
      // For example, you can extract the pixel values from the image
      return image.readRasters();
    })
    .then((rasters) => {
      // The 'rasters' array contains the pixel values from the GeoTIFF image
      // console.log(rasters);
      return rasters;
    });

  return raster;
};

export { Tif2Raster };
