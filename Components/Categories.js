import React, { useRef, useState } from "react";
import {
    Image, Button, FlatList, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity,
    ScrollView,
} from "react-native";



const App = ({ navigation }) => {


    const listing = [


        {
            id: 'cheese topping',
            link: "two"
        },
        {
            id: 'Cheese Margherita',
            link: "three"
        },
        {
            id: 'Peppy Paneer',
            link: "four"
        },

        {
            id: 'Mexican Green Wave',
            link: "five"
        },
        {
            id: 'Deluxe Veggie',
            link: "six"
        },
        {
            id: 'Veg Extravaganza',
            link: "seven"
        },
        {
            id: 'Cheese n corn',
            link: "eight"
        },

    ];


    return (
        <ScrollView>
            <View>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    data={listing}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ index, item }) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(item.link)}
                            style={{
                                marginTop: 25, height: 60, width: 170, alignItems: "center", justifyContent: "center",
                                marginLeft: 25, borderRadius: 30, backgroundColor: "#fff",
                            }}>


                            <Text style={{ fontWeight: "bold", alignSelf: 'center', fontSize: 15, color: "#d42f2f" }}>{item.id}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: "row",
        padding: 16,
        marginTop: 15
    },
    navigationContainer: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
    },

    paragraph: {
        marginTop: 20,
        fontSize: 20,
        marginLeft: 30, fontSize: 20,
        fontWeight: "bold"
    }
});

export default App;


// // In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';

// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//         </View>
//     );
// }

// export default HomeScreen;