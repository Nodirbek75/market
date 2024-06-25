import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '@rneui/base';
import {useTheme} from '@rneui/themed';

type Props = {
  text: string;
  btnStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
};

const PrimaryBtn: React.FC<Props> = ({text, btnStyle, textStyle, onPress}) => {
  const {theme} = useTheme();
  return (
    <Btn style={btnStyle} colors={theme.colors} onPress={onPress}>
      <BtnText style={textStyle} colors={theme.colors}>
        {text}
      </BtnText>
    </Btn>
  );
};

export default PrimaryBtn;

const Btn = styled.TouchableOpacity<{colors: Colors}>`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({colors}) => colors.primary};
  padding-vertical: 10px;
`;

const BtnText = styled.Text<{colors: Colors}>`
  font-size: 22px;
  color: ${({colors}) => colors.white};
`;
