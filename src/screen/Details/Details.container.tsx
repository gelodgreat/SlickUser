/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo} from 'react';
import DetailsScreen from './Details.view';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from 'types/Store';
import {DetailsPrivateProps} from './Details.props';
import {Users} from 'types/Users';

const DetailsContainer = (props: any) => {
  const dispatch = useDispatch();
  const detailsId =
    useSelector((state: Store) => state.detail?.detailsId) || '';
  const users = useSelector((state: Store) => state.users.users) || [];

  const details: Users = useMemo(
    () => users.find(list => list.id === detailsId),
    [detailsId, users],
  );

  const generatedProps: DetailsPrivateProps = {details};

  return <DetailsScreen {...generatedProps} {...props} />;
};
export default DetailsContainer;
