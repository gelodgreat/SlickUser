import {Users} from 'types/Users';

export interface HomePublicProps {}
export interface HomePrivateProps {
  users: Users[];
  loading: boolean;
  onNavigateDetails: (details: Users) => void;
}
export interface HomeProps extends HomePublicProps, HomePrivateProps {}
