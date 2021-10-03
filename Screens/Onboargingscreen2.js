import React from 'react';
import { Text, TouchableOpacity, View, Image, ActivityIndicator, StatusBar } from 'react-native';

const HelloWorldApp = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#de2a2a', height: 800, }}>
            <View style={{ backgroundColor: '#de2a2a' }}>
                <ActivityIndicator size="large" />
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='#de2a2a' />

                <Image style={{
                    height: '100%', width: "100%", marginTop: -37, resizeMode: "contain"
                }}
                    source={require("../Assets/onboarding/onboard1.png")} />

            </View>
            <TouchableOpacity
                style={{
                    width: '20%',
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 35,
                    marginTop: -100,
                    marginLeft: 320
                }}
                onPress={() => navigation.navigate('Onboargingscreen3')}
            >
                <Text style={{
                    color: '#fff', fontSize: 18,
                }}>Next</Text>
            </TouchableOpacity>



        </View>

    )
}
export default HelloWorldApp;