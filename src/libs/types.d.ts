export type AsyncState<D> = {
  data: D;
  status: 'fulfilled' | 'pending' | 'rejected';
};
