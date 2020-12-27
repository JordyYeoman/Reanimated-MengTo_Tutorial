import React, { useState, useEffect } from 'react';
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
import MenuItem from './Menuitem';
import { connect } from 'react-redux';

// Get height of Device
const screenHeight = Dimensions.get("window").height;

const Menu = (props) => {

  // Dev 

  const neonPink = '#ff6ec7';

  // Initialize State Variables

  // Set initial State of menu to hidden through top position
  //const [menuTopPosition, setMenuTopPosition ] = useState(screenHeight);
  
  const menuOverlayTop = useSharedValue(screenHeight);

  const config = {
    // duration: 12500,
    // easing: Easing.bezier(0.5, 0.01, 0, 1),
    mass: 1,
    damping: 16
  };

  const style = useAnimatedStyle(() => {
    return {
      top: withSpring(menuOverlayTop.value, config),
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      position: "absolute",
      zIndex: 100,
      borderRadius: 10,
      overflow: 'hidden',
    };
  });

  toggleMenu = () => {
    if (props.action == "openMenu"){
      menuOverlayTop.value = 60;
    }
     if (props.action == "closeMenu"){
      menuOverlayTop.value = screenHeight;
    }
  }

  // Get the initial state from Redux and apply once component has mounted
  useEffect(() => {
    toggleMenu();
    console.log(props.action);
  }, [props]);


    return (
      
     <Animated.View style={ style }>
       <Cover>
         <Image source={require('../assets/background2.jpg')} />
         <Title>Jordy Yeoman</Title>
         <Subtitle>Dev at Moshi Moshi</Subtitle>
       </Cover>
       <TouchableOpacity onPress={()  => 
          {
            props.closeMenu();
          }
        } 
         
         style={{position: "absolute", top: 120, left: "50%", marginLeft: -30, zIndex: 1 }}>
        <CloseView>
          <CloseIcon color={'#546bfb'}/>
        </CloseView>
        </TouchableOpacity>
       
       <Content>
         {items.map((item, index) => (
          <MenuItem key={index} icon={item.icon} title={item.title} text={item.text} />
         ))}
       </Content>
     </Animated.View>
    )
}

// Map the Redux State to Props so component has access
const mapStateToProps = state => ({
  action: state.action
})

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    closeMenu: () => dispatch({ type: 'CLOSE_MENU' }),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Menu);



// Menu Overlay Styles

const Content = styled.View`
    height: ${screenHeight}px;
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
    icon: "SettingsIcon",
    title: "Account",
    text: "settings"
  },
  {
    icon: "CardIcon",
    title: "Billing",
    text: "payments"
  },
  {
    icon: "CompassIcon",
    title: "Learn React",
    text: "start course"
  },
  {
    icon: "ExitIcon",
    title: "Log out",
    text: "see you soon!"
  }
];



