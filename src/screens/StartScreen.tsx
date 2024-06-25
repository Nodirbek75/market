import React from 'react';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useThemeMode} from '@rneui/themed';

// components
import {PrimaryBtn} from 'components';

// images
import Chair from 'assets/images/chair.jpg';
import DarkChair from 'assets/images/darkChair.jpg';

type Props = NativeStackScreenProps<RootStackType, 'StartScreen'>;

const StartScreen: React.FC<Props> = ({navigation}) => {
  const {mode, setMode} = useThemeMode();

  return (
    <Wrapper>
      <Image source={mode === 'light' ? Chair : DarkChair} />
      <PrimaryBtn
        text="Get Started"
        onPress={() => navigation.navigate('BottomTabs')}
        btnStyle={{marginBottom: 20, marginHorizontal: 20}}
      />
    </Wrapper>
  );
};

export default StartScreen;

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
