/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, DataContainer} from './Home.style';
import {HomeProps} from './Home.props';
import {ActivityIndicator} from 'react-native-paper';
import { Image} from 'react-native';
import {Users} from 'types/Users';
import Slick from 'react-native-slick';

const HomeScreen = (props: HomeProps) => {
  const {loading, onNavigateDetails, users} = props;

  const renderItem = ({item}: any) => {
    const itemData: Users = item;

    return (
      <DataContainer
        onPress={() => onNavigateDetails(itemData)}
        key={itemData.uid}>
        <Image
          source={{uri: itemData.avatar}}
          style={{width: '100%', height: '75%'}}
        />
      </DataContainer>
    );
  };

  return (
    <Container>
      {loading && <ActivityIndicator animating />}
      {users && (
        <Slick showsButtons>
          {users.map(user => renderItem({item: user}))}
        </Slick>
      )}
    </Container>
  );
};

export default HomeScreen;
