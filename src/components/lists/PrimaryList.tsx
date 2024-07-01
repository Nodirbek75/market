import React from 'react';
import {FlatList} from 'react-native';

// components
import {PrimaryCard} from 'components/cards';

const dummyData = [
  {
    id: '1',
    title: 'Black Simple Lamp',
    picture:
      'https://images.unsplash.com/photo-1711617481872-7851c36cc5c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '$12.00',
    category: 'Light',
  },
  {
    id: '2',
    title: 'Wooden chair',
    picture:
      'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '$99.00',
    category: 'Chair',
  },
  {
    id: '3',
    title: 'Soft sofa',
    picture:
      'https://images.unsplash.com/photo-1718049719688-764249c6800d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '$71.00',
    category: 'Armchair',
  },
  {
    id: '4',
    title: 'Sofa',
    picture:
      'https://plus.unsplash.com/premium_photo-1683120864014-0dda85e3e52c?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '$52.00',
    category: 'Armchair',
  },
];

const PrimaryList = () => {
  const renderItemHandler = ({item}: {item: PrimaryCardProps}) => (
    <PrimaryCard {...item} />
  );

  return (
    <FlatList
      data={dummyData}
      renderItem={renderItemHandler}
      numColumns={2}
      style={{paddingHorizontal: 10}}
    />
  );
};

export default PrimaryList;
