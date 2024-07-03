import React from 'react';
import styled from 'styled-components/native';
import {Colors, useTheme} from '@rneui/themed';
import {CategoryList, PrimaryList} from 'components/lists';

const Home = () => {
  const {colors} = useTheme().theme;
  return (
    <Wrapper colors={colors}>
      <CategoryList />
      <PrimaryList />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.View<{colors: Colors}>`
  flex: 1;
  background-color: ${({colors}) => colors.white};
`;
