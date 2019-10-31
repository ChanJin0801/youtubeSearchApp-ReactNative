import React from 'react';
import { Button } from 'react-native-elements'; 
//import { WebBrowser } from 'expo';
import * as WebBrowser from 'expo-web-browser';

const WatchButton = ({ videoId }) => (
    <Button
        raised
        title="Watch on Youtube"
        icon={{ name: 'play-arrow' }}
        containerStyle={{ marginTop: 10 }}
        //backgroundColor="#E62117"
        onPress={() => {
            WebBrowser.openBrowserAsync(
                //따움표 주의!!
                `https://m.youtube.com/watch?v=${videoId}`
            );
        }}
    />
);


export default WatchButton;

