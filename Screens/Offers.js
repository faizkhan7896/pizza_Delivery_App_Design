

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Feather from 'react-native-vector-icons/Feather';

import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Offerscreen from '../Components/Offerscreen';

import Home from '../Screens/Home';
import Search from '../BottomTab/Search';
import Bookmark from '../BottomTab/Bookmark';
import Profile from '../BottomTab/Profile';


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
                    left: 85,
                    right: 85,
                    bottom: 25,
                    elevation: 0,
                    backgroundColor: "#fef4ee",
                    borderRadius: 45,
                    height: 90
                }
            }}
        >
            <Tab.Screen name="Offerscreen" component={Offerscreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Text style={{ color: focused ? '#d42f2f' : 'gray', fontSize: 18, fontWeight: "bold" }}>Pizza</Text>
                            {/* <MaterialCommunityIcons
                                name="chef-hat" color={color} size={26} /> */}
                        </View>
                    ),
                }} />

            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Text style={{ color: focused ? '#d42f2f' : 'gray', fontSize: 18, fontWeight: "bold" }}>
                                Other
                            </Text>
                        </View>
                        // <Octicons name="search" color={color} size={26} />
                    ),
                }} />


        </Tab.Navigator>

    )
}

export default Tabs;