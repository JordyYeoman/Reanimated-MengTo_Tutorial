import React, {useEffect} from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import styled from 'styled-components';
import Card from '../components/Card';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import { NotificationIcon } from '../components/Icons';
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';
import {connect} from 'react-redux';

//Icon.loadFont();

const HomeScreen = (props) => {

  let scale = 1;
  let opacity = 1;

  const backgroundScreenScale = useSharedValue(scale);
  const backgroundScreenOpacity = useSharedValue(opacity);

  // Config values for animation
  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      transform: [{scale: withTiming(backgroundScreenScale.value, config)}],
      width: '100%',
      height: '100%',
      opacity: withTiming(backgroundScreenOpacity.value, config),
      flex: 1,
      backgroundColor: '#f0f3f5',
      borderRadius: 10,
    };
  });

  toggleMenu = () => {
    if (props.action == "openMenu"){
      backgroundScreenScale.value = 0.9;
      backgroundScreenOpacity.value = 0.8;

      StatusBar.setBarStyle("light-content", true);
    }
     if (props.action == "closeMenu"){
      backgroundScreenScale.value = 1;
      backgroundScreenOpacity.value = 1;

      StatusBar.setBarStyle("dark-content", true);
    }
  }

  // On Load useEffect
  useEffect(() => {
    StatusBar.setBarStyle("dark-content", true);
  }, []);

   // Get the initial state from Redux and apply once component has mounted
   useEffect(() => {
    toggleMenu();
    console.log("Called from Homescreen Comp - Menu Minimized?");
    console.log(backgroundScreenScale.value);
  }, [props.action]);

  return(
    <RootView>
      <Menu />
    <Animated.View style={ style }>
      <SafeAreaView>
      <ScrollView>
      <TitleBar>
        <TouchableOpacity 
        style= {{ position: "absolute", left: 0, top: 0 }}
        onPress={()  => 
          {
            props.openMenu();
          }
        } >
        <Avatar source={require("../assets/avatar.jpeg")} />
        </TouchableOpacity>
        <Title>Welcome back,</Title>
        <Name>Jordy</Name>
      <NotificationIcon style={{ position: 'absolute', right: 20, top: 5 }}/>
      </TitleBar>
      <ScrollView
        showsHorizontalScrollIndicator={false} 
        style={{ flexDirection: 'row', padding: 20, paddingLeft: 12, paddingTop: 30}} 
        horizontal={true} 
        >
        {logos.map((logo, index) => ( 
          <Logo 
            image={logo.image} 
            text={logo.text}
            key={index}
          />
          ))}
      </ScrollView>
      <Subtitle>Continue Learning</Subtitle>
      <ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
        {cards.map((card, index) => (
            <Card 
            title={card.title}
            image={card.image}
            caption={card.caption} 
            logo={card.logo}
            subtitle={card.subtitle}
            key={index}
            />
        ))}
     
      </ScrollView>
      <Subtitle>Popular Courses</Subtitle>
      {courses.map((course,index) => (
        <Course 
          key={index}
          image={course.image}
          title={course.title}
          subtitle={course.subtitle}
          logo={course.logo}
          author={course.author}
          avatar={course.avatar}
          caption={course.caption}
        />
      ))}
      </ScrollView>
      </SafeAreaView>
     </Animated.View>
     </RootView>
  )}

const RootView = styled.View`
background: black;
flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left:20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height:44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
`;

const Container = styled.View`
  background-color: #f0f3f5;
`;

const Title = styled.Text`
font-size: 16px;
color: #b8bece;
font-weight: 500;
`;

const Name = styled.Text`
font-size:20px;
color: #3c4560;
font-weight:bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left:80px;
`;

const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("../assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    subtitle: "React Native",
    caption: "4 of 7 sections",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "Props and Icons",
    image: require("../assets/background13.jpg"),
    subtitle: "React Native",
    caption: "4 of 6 sections",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "Static Data and Loop",
    image: require("../assets/background14.jpg"),
    subtitle: "React Native",
    caption: "2 of 3 sections",
    logo: require("../assets/logo-react.png"),
  }
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Jordy Yeoman",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Jordy Yeoman",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Jordy Yeoman",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Jordy Yeoman",
    avatar: require("../assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];

// Map the Redux State to Props so component has access
const mapStateToProps = state => ({
  action: state.action
})

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    openMenu: () => dispatch({ type: 'OPEN_MENU' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);