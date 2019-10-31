import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = ({ headerText }) => ( //{ headerText } === props.headertext
    <Header
        centerComponent={{ text: headerText, style: { color: '#fff' }}}
        barStyle="light-content"
        containerStyle={{
            backgroundColor: '#E62117',
            justifyContent: 'space-around',
        }}
    />
);

export default AppHeader;
