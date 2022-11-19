/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import HomeContainer from 'screen/Details';
import DetailsContainer from 'screen/Details';
import {DETAILS_SCREEN, HOME_SCREEN} from 'const/screens';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name={HOME_SCREEN}
        component={HomeContainer}
        options={{headerTitle: 'Home'}}
      />
      <Stack.Screen
        name={DETAILS_SCREEN}
        component={DetailsContainer}
        options={({navigation, route}) => ({
          headerTitle: 'Details',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{marginRight: 8}}>
              <Text>Back</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
