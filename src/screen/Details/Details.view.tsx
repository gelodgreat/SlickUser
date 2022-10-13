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
              style={{width: 300, height: 300}}
            />
          </Row>
        )}

        <Row>
          <Text>
            Name: {details.first_name} {details.last_name}
          </Text>
        </Row>
        <Row style={{marginTop: 24}}>
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

        <Row style={{marginTop: 48}} />
      </ContentContainer>
    </Container>
  );
};

export default DetailsScreen;
