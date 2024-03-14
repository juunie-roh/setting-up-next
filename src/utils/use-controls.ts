import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';

const keyControlMap = {
  ' ': 'brake',
  ArrowDown: 'backward',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'forward',
  a: 'left',
  d: 'right',
  r: 'reset',
  s: 'backward',
  w: 'forward',
} as const;

type KeyCode = keyof typeof keyControlMap;
type GameControl = (typeof keyControlMap)[KeyCode];

const keyCodes = Object.keys(keyControlMap) as KeyCode[];
const isKeyCode = (v: unknown): v is KeyCode => keyCodes.includes(v as KeyCode);

const useKeyControls = (
  { current }: MutableRefObject<Record<GameControl, boolean>>,
  map: Record<KeyCode, GameControl>,
) => {
  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (!isKeyCode(key)) return;
      // eslint-disable-next-line no-param-reassign
      current[map[key]] = true;
    };
    window.addEventListener('keydown', handleKeyDown);

    const handleKeyUp = ({ key }: KeyboardEvent) => {
      if (!isKeyCode(key)) return;
      // eslint-disable-next-line no-param-reassign
      current[map[key]] = false;
    };
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [current, map]);
};

export const useControls = () => {
  const controls = useRef<Record<GameControl, boolean>>({
    backward: false,
    brake: false,
    forward: false,
    left: false,
    reset: false,
    right: false,
  });

  useKeyControls(controls, keyControlMap);

  return controls;
};
