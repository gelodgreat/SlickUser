import {Text} from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  flex: 1;
`;

export const DataContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextData = styled(Text)`
  margin-bottom: 8px;
`;
