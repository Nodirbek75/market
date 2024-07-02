import React from 'react';
import styled from 'styled-components/native';
import {Colors, useTheme} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome6';

type Props = {
  title: string;
  icon: string;
  selected: boolean;
  last: boolean;
  onPress: () => void;
};

const CategoryCard: React.FC<Props> = ({
  title,
  icon,
  selected,
  last,
  onPress,
}) => {
  const {colors} = useTheme().theme;

  return (
    <Wrapper onPress={onPress} last={last}>
      <IconWrapper colors={colors} selected={selected}>
        <Icon
          name={icon}
          size={22}
          color={selected ? colors.white : colors.grey1}
        />
      </IconWrapper>
      <Title colors={colors} selected={selected}>
        {title}
      </Title>
    </Wrapper>
  );
};

export default CategoryCard;

const Wrapper = styled.TouchableOpacity<{last: boolean}>`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: ${({last}) => (last ? 20 : 0)}px;
`;

const IconWrapper = styled.View<{colors: Colors; selected: boolean}>`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 5px;
  background-color: ${({colors, selected}) =>
    selected ? colors.primary : colors.white1};
`;

const Title = styled.Text<{colors: Colors; selected: boolean}>`
  font-size: 14px;
  font-weight: 500;
  color: ${({colors, selected}) => (selected ? colors.black : colors.grey1)};
`;
