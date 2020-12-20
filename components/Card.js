import React from 'react';
import styled from 'styled-components';

const Card = (props) => (
<Container>
    <Cover>
    <Image source={props.image} />
        <Title>{props.title}</Title>
    </Cover>
    <Content>
        <Logo source={props.logo}/>
        <Wrapper>
        <Caption>{props.subtitle}</Caption>
        <Subtitle>5 of 12 sections</Subtitle>
        </Wrapper>
    </Content>
</Container>
);

const Container = styled.View`
background: white;
width: 315px;
height: 280px;
border-radius: 14px;
margin-left: 20px;
margin-top: 20px;
box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`;

const Caption = styled.Text`
    color: #3c4560;
    font-size: 20px;
    font-weight: 600;
`;

const Cover = styled.View`
    width:100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow:hidden;
`;

const Wrapper = styled.View`
    margin-left: 10px;
`;

const Subtitle = styled.Text`
    color: #b8bece;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 4px;
`;

const Content = styled.View`
    padding-left: 20px;
    flex-direction: row;
    height: 80px;
    align-items:center;
`;

const Logo = styled.Image`
    width: 44px;
    height: 44px;
`;

const Image = styled.Image`
width: 100%;
height:100%;
position:absolute;
top: 0;
left:0;
`;

const Title = styled.Text`
color: white;
font-size: 24px;
margin-top: 20px;
margin-left: 20px;
font-weight: bold;
width: 170px;
`;


export default Card;