/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, DataContainer, TextData} from './Home.style';
import {HomeProps} from './Home.props';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import {formatAddress} from 'utils/address';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FlatList} from 'react-native';
import {Users} from 'types/Users';

const HomeScreen = (props: HomeProps) => {
  const {loading, onNavigateDetails, users} = props;

  const renderItem = ({item}: any) => {
    const itemData: Users = item;

    return (
      <DataContainer onPress={() => onNavigateDetails(itemData)}>
        <TextData>Name: {itemData.first_name}</TextData>
      </DataContainer>
    );
  };

  return (
    <Container>
      {loading && <ActivityIndicator animating />}
      {users && (
        <FlatList
          keyExtractor={() => Math.random().toString()}
          data={users}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
