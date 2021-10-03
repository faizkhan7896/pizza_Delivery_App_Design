import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Button, View } from 'react-native'
import Tabs from './Tabs'

const MainScreen = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}
export default MainScreen;