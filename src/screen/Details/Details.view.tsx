/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, ContentContainer, Row} from './Details.style';
import {DetailsProps} from './Details.props';
import {Text} from 'react-native-paper';
import {Image} from 'react-native';
import {formatAddress} from 'utils/address';

const DetailsScreen = (props: DetailsProps) => {
  const {details} = props;

  return (
    <Container>
      <ContentContainer>
        {details.avatar && (
          <Row>
            <Image
              source={{uri: details.avatar}}
              style={{width: '100%', height: 400}}
            />
          </Row>
        )}

        <Row>
          <Text>
            Name: {details.first_name} {details.last_name}
          </Text>
        </Row>
        <Row style={{marginTop: 16}}>
          <Text>
            Address:{' '}
            {formatAddress(
              details.address.street_address,
              details.address.city,
              details.address.state,
              details.address.zip_code,
              details.address.country,
            )}
          </Text>
        </Row>
        <Row style={{marginTop: 16}}>
          <Text>Position: {details.employment.title}</Text>
        </Row>
        <Row style={{marginTop: 16}}>
          <Text>Username: {details.username}</Text>
        </Row>
        <Row style={{marginTop: 16}}>
          <Text>Subscription: {details.subscription.plan}</Text>
        </Row>
      </ContentContainer>
    </Container>
  );
};

export default DetailsScreen;
