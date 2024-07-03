import React, {useState} from 'react';
import styled from 'styled-components/native';

// components
import {CategoryCard} from 'components/cards';

const category = [
  {key: 'popular', title: 'Popular', icon: 'star'},
  {key: 'chair', title: 'Chair', icon: 'chair'},
  {key: 'table', title: 'Table', icon: 'table'},
  {key: 'armchair', title: 'Armchair', icon: 'couch'},
  {key: 'bed', title: 'Bed', icon: 'bed'},
  {key: 'lamp', title: 'Lamp', icon: 'lamp'},
  {key: 'wooden', title: 'Wooden', icon: 'wood'},
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
