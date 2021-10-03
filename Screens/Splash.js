import { ActivityIndicator, View, Image, StatusBar } from "react-native"
import { useEffect } from 'react';

import * as React from 'react';
import Onboargingscreen2 from "./Onboargingscreen2";


const Load = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    setTimeout(() => {
        setIsLoading(false);

    }, 3000);

    if (isLoading) {

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#de2a2a" }}>
                <ActivityIndicator size="large" />
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='#de2a2a' />
                <Image style={{
                    height: '120%', width: "100%", resizeMode: "contain", marginTop: -50
                }}
                    source={require("../Assets/Splash.png")} />
            </View>
        )
    }
    return (
        <View style={{ flex: 1, }}>
            <Onboargingscreen2 navigation={navigation} />

        </View>
    )

}
export default Load;