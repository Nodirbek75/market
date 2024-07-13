import React, {useState} from 'react';
import styled from 'styled-components/native';

// components
import {CategoryCard} from 'components/cards';

const category = [
  {key: 'popular', title: 'Popular', icon: require('assets/icons/star.svg')},
  {key: 'chair', title: 'Chair', icon: require('assets/icons/chair.svg')},
  {key: 'table', title: 'Table', icon: require('assets/icons/table.svg')},
  {key: 'armchair', title: 'Armchair', icon: require('assets/icons/sofa.svg')},
  {key: 'bed', title: 'Bed', icon: require('assets/icons/bed.svg')},
  {key: 'lamp', title: 'Lamp', icon: require('assets/icons/lamp.svg')},
  {key: 'cabinet', title: 'Cabinet', icon: require('assets/icons/cabinet.svg')},
];

const CategoryList = () => {
  const [selected, setSelected] = useState('popular');
  return (
    <Wrapper horizontal showsHorizontalScrollIndicator={false}>
      {category.map((el, index) => (
        <CategoryCard
          {...el}
          selected={selected === el.key}
          last={index === category.length - 1}
          onPress={() => setSelected(el.key)}
        />
      ))}
    </Wrapper>
  );
};

export default CategoryList;

const Wrapper = styled.ScrollView``;
