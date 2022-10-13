import {Users} from './Users';

export interface Store {
  detail: {detailsId: string | number};
  user: {users: Users[]};
}
