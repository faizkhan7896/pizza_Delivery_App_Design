import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Feather from 'react-native-vector-icons/Feather';

import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Search from './Search';
import Bookmark from './Bookmark';
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {

    return (

        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,

                style: {
                    position: "absolute",
                    left: 30,
                    right: 30,
                    bottom: 5,
                    elevation: 0,
                    backgroundColor: "#fef4ee",
                    borderRadius: 15,
                    height: 90
                }
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <MaterialCommunityIcons
                                style={{ color: focused ? '#d42f2f' : 'gray' }}
                                name="chef-hat" size={26} />
                        </View>
                    ),
                }} />

            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Octicons
                            style={{ color: focused ? '#d42f2f' : 'gray' }}

                            name="search" size={26} />
                    ),
                }} />

            <Tab.Screen name="Bookmark" component={Bookmark}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5
                            style={{ color: focused ? '#d42f2f' : 'gray' }}
                            name="shopping-bag" size={26} />
                    ),
                }} />

            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            style={{ color: focused ? '#d42f2f' : 'gray' }}
                            name="user" size={26} />
                    ),
                }} />

        </Tab.Navigator>

    )
}

export default Tabs;