/* eslint-disable no-underscore-dangle */

'use client';

import { decrement, getCatFacts, increment } from '@/libs/features';
import { useAppDispatch, useAppSelector } from '@/libs/hooks';
import type { CatFact } from '@/types';

import styles from './page.module.css';

export default function ReduxExample() {
  const count = useAppSelector((state) => state.counter.data);
  const catFacts = useAppSelector((state) => state.catFacts.data);
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
      <h2 className={styles.title}>API Example (Cat Facts)</h2>
      <div>
        <button type="button" onClick={() => dispatch(getCatFacts())}>
          Get Cat Facts
        </button>
        <div>
          {catFacts &&
            catFacts.map((catFact: CatFact) => (
              <div key={catFact._id}>
                <span>---------------------------</span>
                <p>
                  status: [ verified: {catFact.status.verified}, sentCount:{' '}
                  {catFact.status.sentCount} ]
                </p>
                <p>
                  type: {catFact.type}, id: {catFact._id}
                </p>
                <p>text: {catFact.text}</p>
                <p>created date: {catFact.createdAt}</p>
                <p>updated date: {catFact.updatedAt}</p>
                <p>user: {catFact.user}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
