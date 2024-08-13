'use client';

import { decrement, increment } from '@/libs/features';
import { useAppDispatch, useAppSelector } from '@/libs/hooks';

import styles from './page.module.css';

export default function ReduxExample() {
  const count = useAppSelector((state) => state.counter.data);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2 className={styles.title}>Counter Example</h2>
      <div className={styles.redux}>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrease
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => dispatch(increment())}>
          Increase
        </button>
      </div>
    </>
  );
}
