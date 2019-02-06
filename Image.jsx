import React from 'react';
import { ImageBackground, Text } from 'react-native';

export default class ImageComponent extends React.Component {
  remote =
    'https://images.unsplash.com/photo-1549241520-425e3dfc01cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
  render() {
    return (
      <ImageBackground
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          resizeMode: 'cover',
          position: 'absolute',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}
        source={{ uri: this.remote }}>
        <Text
          style={{
            textAlign: 'center'
          }}>
          Hi!
        </Text>
      </ImageBackground>
    );
  }
}
