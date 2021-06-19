import { action, makeAutoObservable } from 'mobx';

export type Sols = {'img_src': string, name: string, id: string}[];

class SolsStore {
  sols: Sols = []

  loading: boolean = false

  constructor() {
    makeAutoObservable(this, {
      fetchSolsStart: action.bound,
      fetchSolsSuccess: action.bound,
      fetchSolsError: action.bound,
    });
  }

  fetchSolsStart() {
    this.loading = true;
  }

  fetchSolsSuccess(params: Sols) {
    this.loading = false;
    this.sols = params;
  }

  fetchSolsError() {
    this.loading = false;
  }
}

export default new SolsStore();
