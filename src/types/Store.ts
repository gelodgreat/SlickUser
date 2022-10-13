import {Users} from './Users';

export interface Store {
  detail: {detailsId: string | number};
  users: {users: Users[]};
}
