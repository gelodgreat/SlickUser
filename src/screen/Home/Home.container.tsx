import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearUsersList, currentUser, loadUsers} from 'redux/actions';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Store} from 'types/Store';
import {DETAILS_SCREEN} from 'const/screens';
import {Users} from 'types/Users';
import HomeScreen from './Home.view';
import {HomePrivateProps, HomeProps} from './Home.props';

const HomeContainer = (props: HomeProps) => {
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
      dispatch(loadUsers());
      setLoading(false);
    } catch (error) {
      console.log({error});
    }
  };

  useFocusEffect(
    useCallback(() => {
      getUsers();
    }, []),
  );

  const generatedProps: HomePrivateProps = {
    users,
    loading,
    onNavigateDetails,
  };

  return <HomeScreen {...generatedProps} {...props} />;
};
export default HomeContainer;
