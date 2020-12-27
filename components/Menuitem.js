import React from 'react';
import styled from 'styled-components';
import { ExitIcon, SettingsIcon, CardIcon, CompassIcon } from './Icons';

// Prepare all available components inside the file :)
const components = {
    ExitIcon, 
    SettingsIcon, 
    CardIcon, 
    CompassIcon
}

const MenuItem = props => {

    // Dynamically Change component name depending on the icon called. :D
    const ComponentIcon = components[props.icon]
    
    return (
        
    <Container>
        <IconView>
            <ComponentIcon size={48} color="#546bfb" />
        </IconView>
        <Content>
            <Title>
              {props.title}  
            </Title>
            <Text>{props.text}</Text>
        </Content>
    </Container>
)
}

export default MenuItem;

const Container = styled.View`
    flex-direction: row;
    margin: 15px 0;
`;

const IconView= styled.View`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
`;

const Content= styled.View`
    padding-left: 20px;

`;

const Title = styled.Text`
    color: #3c4560;
    font-size: 24px;
    font-weight: 600;
`;

const Text = styled.Text`
    color: #3c4560;
    font-weight: 600;
    margin-top: 5px;
    opacity: 0.6;
`;

