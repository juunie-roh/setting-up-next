'use client';

import { useEffect, useRef, useState } from 'react';

import styles from './page.module.css';

export default function Slider() {
  // Dragging State
  const [dragging, setDragging] = useState<boolean>(false);
  // Additional Div State
  const [added, setAdded] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse Event Listener
    const container = containerRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const slider = sliderRef.current;
    if (!container || !left || !right || !slider) return;

    const onmousedown = (e: MouseEvent): void => {
      if (e.target !== slider) return;
      setDragging(true);
      container.style.cursor = 'col-resize';
    };

    const onmousemove = (e: MouseEvent): void => {
      if (dragging) {
        const containerRect = container.getBoundingClientRect();
        const newPosition =
          ((e.clientX - containerRect.left) / containerRect.width) * 100;

        left.style.flex = `0 0 ${newPosition}%`;
        right.style.flex = `0 0 ${100 - newPosition}%`;
      }
    };

    const onmouseup = (_e: MouseEvent): void => {
      setDragging(false);
      container.style.cursor = 'default';
    };

    container.addEventListener('mousedown', onmousedown);
    container.addEventListener('mousemove', onmousemove);
    container.addEventListener('mouseup', onmouseup);

    return () => {
      container.removeEventListener('mousedown', onmousedown);
      container.removeEventListener('mousemove', onmousemove);
      container.removeEventListener('mouseup', onmouseup);
    };
  }, [dragging]);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Left Div */}
      <div
        ref={leftRef}
        className={styles.content}
        style={{ flex: added ? '0 0 50%' : '0 0 100%' }}
      >
        LEFT CONTENT
        <div className={styles.buttons}>
          <button
            type="button"
            onClick={() =>
              setAdded((_added) => {
                const right = rightRef.current;
                if (!right) return _added;
                if (!_added) {
                  right.style.flex = `0 0 50%`;
                }
                return !_added;
              })
            }
          >
            {added ? 'CLOSE' : 'OPEN'}
          </button>
        </div>
      </div>
      {/* Left Div */}

      {/* Slider */}
      <div
        role="none"
        className={styles.slider}
        onMouseDown={(e) => e.preventDefault()}
        style={{ display: added ? 'block' : 'none' }}
      >
        <div ref={sliderRef} />
      </div>
      {/* Slider */}

      {/* Right Div */}
      <div
        ref={rightRef}
        className={styles.content}
        style={{ display: added ? 'flex' : 'none' }}
      >
        RIGHT CONTENT
      </div>
      {/* Right Div */}
    </div>
  );
}
