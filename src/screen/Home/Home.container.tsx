import React, {useEffect, useState} from 'react';
import HomeScreen from './Home.view';
import {useDispatch, useSelector} from 'react-redux';
import {clearUsersList, currentUser, loadUsers} from 'redux/actions';
import {useNavigation} from '@react-navigation/native';
import {Store} from 'types/Store';
import {DETAILS_SCREEN} from 'const/screens';
import {HomePrivateProps} from './Home.props';
import {Users} from 'types/Users';

const HomeContainer = (props: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const users = useSelector((state: Store) => state.users?.users) || [];

  const onNavigateDetails = (details: Users) => {
    dispatch(currentUser(details.id));
    navigation.navigate(DETAILS_SCREEN, {screen: DETAILS_SCREEN});
  };

  const getUsers = async () => {
    try {
      setLoading(true);
      await dispatch(clearUsersList());
      await dispatch(loadUsers());
      setLoading(false);
    } catch (error) {
      console.log({error});
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const generatedProps: HomePrivateProps = {
    users,
    loading,
    onNavigateDetails,
  };

  return <HomeScreen {...generatedProps} {...props} />;
};
export default HomeContainer;
