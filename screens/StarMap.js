import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from'react-native-webview'

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TextInput
                        style={StyleSheet.inputStyle}
                        placeholder="digite sua latitude"
                        placeholderTextColor="white"
                        onChangeText={(text) =>{
                            this.setState({
                                latitude: text
                            })
                        }
                        
                        }
                    />
                <Text>Tela do mapa estelar!</Text>
            </View>
        )
    }
}

const{ longitude, latitude} = this.state;
const path='https://virtualsky.lco.global/embed/index.html?longitude='
'${longitude}&latitude=${latitude}&constellations=true&constellationlabels='
'true&showstarbels=true&gridlines_az=true&projections=stereo&showstarbels'
'date=false&showposition=false'