import React from 'react';
import {Colors} from '@rneui/base';
import {useTheme} from '@rneui/themed';
import styled from 'styled-components/native';

const PrimaryCard: React.FC<PrimaryCardProps> = props => {
  const {colors} = useTheme().theme;

  return (
    <Wrapper>
      <Image source={{uri: props.picture}} />
      <Title colors={colors}>{props.title}</Title>
      <Category colors={colors}>{props.category}</Category>
      <Price colors={colors}>{props.price}</Price>
    </Wrapper>
  );
};

export default PrimaryCard;

const Wrapper = styled.View`
  flex: 1;
  margin-bottom: 15px;
  margin-horizontal: 10px;
`;

const Image = styled.Image`
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text<{colors: Colors}>`
  font-size: 16px;
  font-weight: 600;
  color: ${({colors}) => colors.black};
  margin-bottom: 2px;
`;

const Category = styled.Text<{colors: Colors}>`
  font-size: 12px;
  font-weight: 400;
  color: ${({colors}) => colors.grey1};
  margin-bottom: 5px;
`;

const Price = styled.Text<{colors: Colors}>`
  font-size: 16px;
  font-weight: 600;
  color: ${({colors}) => colors.black};
`;
