export type AsyncState<D> = {
  data: D;
  status: 'fulfilled' | 'pending' | 'rejected';
};

export type CatFact = {
  status: {
    verified: boolean;
    sentCount: number;
  };
  _id: string;
  user: string;
  text: string;
  __v: number;
  source: string;
  updatedAt: string;
  type: string;
  createdAt: string;
  deleted: boolean;
  used: boolean;
};
