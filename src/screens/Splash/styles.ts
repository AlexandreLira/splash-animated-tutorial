import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.color.primary};
`

export const Text = styled.Text`
  color: '#000';
  font-size: 17px;
`