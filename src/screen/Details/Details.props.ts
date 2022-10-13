import {Users} from 'types/Users';

export interface DetailsPublicProps {}
export interface DetailsPrivateProps {
  details: Users;
}
export interface DetailsProps extends DetailsPublicProps, DetailsPrivateProps {}
