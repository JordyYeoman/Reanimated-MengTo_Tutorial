import React, { useState } from 'react';
import styled from 'styled-components';
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import { TouchableOpacity, Dimensions } from 'react-native';
import {CloseIcon} from './Icons';

// Get height of Device
const screenHeight = Dimensions.get("window").height;

const Menu = () => {

  // Dev 

  const neonPink = '#ff6ec7';

  // Initialize State Variables

  // Set initial State of menu to hidden through top position
  //const [menuTopPosition, setMenuTopPosition ] = useState(screenHeight);
  
  const menuOverlayTop = useSharedValue(0);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      top: withTiming(menuOverlayTop.value, config),
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      position: "absolute",
      zIndex: 100,
    };
  });

  toggleMenu = () => {
    menuOverlayTop.value = screenHeight;
  }


    return (
     <Animated.View style={ style }>
       <Cover>
         <Image source={require('../assets/background2.jpg')} />
         <Title>Jordy Yeoman</Title>
         <Subtitle>Dev at Moshi Moshi</Subtitle>
       </Cover>
       <TouchableOpacity onPress={toggleMenu} style={{position: "absolute", top: 120, left: "50%", marginLeft: -30, zIndex: 1 }}>
        <CloseView>
          <CloseIcon color={'#546bfb'}/>
        </CloseView>
        </TouchableOpacity>
       
       <Content />
     </Animated.View>
    )
}

export default Menu;


const Content = styled.View`
    height: ${screenHeight}px;
    background: #f0f3f5;
    padding: 50px;
`;


const Cover = styled.View`
    justify-content: center;
    align-items:center;
    height: 142px;
    background: black;
`;

const Title = styled.Text`
    font-size:24px;
    color: white;
    font-weight:600;
`;


const CloseView = styled.View`
    background-color: white;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Subtitle = styled.Text`
    font-size: 13px;
    color: rgba(255,255, 255, 0.5);
    margin-top: 8px;
`;

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings"
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments"
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course"
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!"
  }
];



