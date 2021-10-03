import React from 'react';
import { Text, TouchableOpacity, View, Image, ActivityIndicator, StatusBar } from 'react-native';

const HelloWorldApp = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#d42f2f', height: 800, }}>
            <View style={{ backgroundColor: '#d42f2f' }}>
                <ActivityIndicator size="large" />
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='#d42f2f' />

                <Image style={{
                    height: '100%', width: "100%", marginTop: -37
                }}
                    source={require("../Assets/Pizza1.png")} />

            </View>

            <Text style={{ fontSize: 24, color: "white", marginTop: -330, alignSelf: "center" }}>SignIn</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between", width: '89%', alignSelf: "center", marginTop: 20 }}>

                <Text style={{
                    fontSize: 15, color: "white", paddingLeft: 35, padding: 10, width: "40%", backgroundColor: "#FFF", color: "#000",
                    borderRadius: 50,
                }}>Facebook</Text>

                <Text style={{
                    fontSize: 15, color: "white", paddingLeft: 35, padding: 10, width: "35%", backgroundColor: "#FFF", color: "#000",
                    borderRadius: 50,
                }}>Google</Text>


            </View>

            <TouchableOpacity
                style={{
                    width: '90%',
                    height: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: "center",
                    borderRadius: 35,
                    backgroundColor: "#fff",
                    marginTop: 60
                }}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{
                    color: '#000', fontSize: 16,
                }}>Ragister with Username</Text>
            </TouchableOpacity>
        </View>

    )
}
export default HelloWorldApp;