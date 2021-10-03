import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



function OfferList({ navigation }) {
    return (

        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}

            style={{ marginLeft: -20, marginRight: -20, marginTop: -20 }}>

            <View style={{
                width: 240, backgroundColor: '#fff', borderRadius: 20, height: 400, marginTop: 40, marginLeft: 25
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center" }}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    >
                        <MaterialIcons
                            style={{ marginTop: 20 }}
                            name='help'
                            color='#cfcfcf'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')} 
                    >
                        <MaterialCommunityIcons

                            style={{ marginTop: 20 }}
                            name='heart'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('one')}
                >
                    <Image style={{
                        height: 170, width: "100%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/Pizza/9.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 67, marginLeft: 20, marginBottom: -20 }}>
                        .</Text>
                    <Text style={{ color: '#ff6303', fontSize: 17, marginTop: -15, marginLeft: 45, }}>
                        NON VEG</Text>
                    <Text style={{ color: '#000', fontSize: 21, marginLeft: 30, marginTop: 13, fontWeight: "bold" }}>
                        Chicken Supereme Veyoga Pizza</Text>

                    <TouchableOpacity
                        // onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            backgroundColor: '#d42f2f',
                            marginLeft: 135,
                            marginTop: -120
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff',
                            fontSize: 19
                        }]}>$ 7.3</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>


            <View style={{
                width: 240, backgroundColor: '#fff', borderRadius: 20, height: 400, marginTop: 40, marginLeft: 30
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center" }}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    >
                        <MaterialIcons
                            style={{ marginTop: 20 }}
                            name='help'
                            color='#cfcfcf'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')} 
                    >
                        <MaterialCommunityIcons

                            style={{ marginTop: 20 }}
                            name='heart'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('two')}
                >
                    <Image style={{
                        height: 170, width: "100%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/Pizza/3.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 67, marginLeft: 20, marginBottom: -20 }}>
                        .</Text>
                    <Text style={{ color: '#ff6303', fontSize: 17, marginTop: -15, marginLeft: 45, }}>
                        VEG</Text>
                    <Text style={{ color: '#000', fontSize: 21, marginLeft: 30, marginTop: 13, fontWeight: "bold" }}>
                        Vegitarian Supereme  Pizza</Text>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            backgroundColor: '#d42f2f',
                            marginLeft: 135,
                            marginTop: -120
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff',
                            fontSize: 19
                        }]}>$ 4.3</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>



            <View style={{
                width: 240, backgroundColor: '#fff', borderRadius: 20, height: 400, marginTop: 40, marginLeft: 30
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center" }}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    >
                        <MaterialIcons
                            style={{ marginTop: 20 }}
                            name='help'
                            color='#cfcfcf'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')} 
                    >
                        <MaterialCommunityIcons

                            style={{ marginTop: 20 }}
                            name='heart'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('three')}
                >
                    <Image style={{
                        height: 170, width: "100%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/Pizza/5.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 67, marginLeft: 20, marginBottom: -20 }}>
                        .</Text>
                    <Text style={{ color: '#ff6303', fontSize: 17, marginTop: -15, marginLeft: 45, }}>
                        CHEES</Text>
                    <Text style={{ color: '#000', fontSize: 21, marginLeft: 30, marginTop: 13, fontWeight: "bold" }}>
                        Chees Supereme Pizza</Text>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            backgroundColor: '#d42f2f',
                            marginLeft: 135,
                            marginTop: -120
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff',
                            fontSize: 19
                        }]}>$ 9.3</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>




            <View style={{
                width: 240, backgroundColor: '#fff', borderRadius: 20, height: 400, marginTop: 40, marginLeft: 30
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center" }}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    >
                        <MaterialIcons
                            style={{ marginTop: 20 }}
                            name='help'
                            color='#cfcfcf'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')} 
                    >
                        <MaterialCommunityIcons

                            style={{ marginTop: 20 }}
                            name='heart'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('four')}
                >
                    <Image style={{
                        height: 170, width: "100%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/Pizza/6.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 67, marginLeft: 20, marginBottom: -20 }}>
                        .</Text>
                    <Text style={{ color: '#ff6303', fontSize: 17, marginTop: -15, marginLeft: 45, }}>
                        VEG CHEES</Text>
                    <Text style={{ color: '#000', fontSize: 21, marginLeft: 30, marginTop: 13, fontWeight: "bold" }}>
                        Veg Chees Pizza</Text>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            backgroundColor: '#d42f2f',
                            marginLeft: 135,
                            marginTop: -120
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff',
                            fontSize: 19
                        }]}>$ 8.3</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>




            <View style={{
                width: 240, backgroundColor: '#fff', borderRadius: 20, height: 400, marginTop: 40, marginLeft: 30
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center" }}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    >
                        <MaterialIcons
                            style={{ marginTop: 20 }}
                            name='help'
                            color='#cfcfcf'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')} 
                    >
                        <MaterialCommunityIcons

                            style={{ marginTop: 20 }}
                            name='heart'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('five')}
                >
                    <Image style={{
                        height: 170, width: "100%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/Pizza/7.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 67, marginLeft: 20, marginBottom: -20 }}>
                        .</Text>
                    <Text style={{ color: '#ff6303', fontSize: 17, marginTop: -15, marginLeft: 45, }}>
                        CHICKEN CHEES</Text>
                    <Text style={{ color: '#000', fontSize: 21, marginLeft: 30, marginTop: 13, fontWeight: "bold" }}>
                        Chicken CHEES Pizza</Text>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            backgroundColor: '#d42f2f',
                            marginLeft: 145,
                            marginTop: -140
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff',
                            fontSize: 19
                        }]}>$11.3</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>




            <View style={{
                width: 240, backgroundColor: '#fff', borderRadius: 20, height: 400, marginTop: 40, marginLeft: 30
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center" }}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    >
                        <MaterialIcons
                            style={{ marginTop: 20 }}
                            name='help'
                            color='#cfcfcf'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')} 
                    >
                        <MaterialCommunityIcons

                            style={{ marginTop: 20 }}
                            name='heart'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('six')}
                >
                    <Image style={{
                        height: 170, width: "100%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/Pizza/8.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 67, marginLeft: 20, marginBottom: -20 }}>
                        .</Text>
                    <Text style={{ color: '#ff6303', fontSize: 17, marginTop: -15, marginLeft: 45, }}>
                        VEG CORN</Text>
                    <Text style={{ color: '#000', fontSize: 21, marginLeft: 30, marginTop: 13, fontWeight: "bold" }}>
                        Veg Corn  Pizza</Text>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            backgroundColor: '#d42f2f',
                            marginLeft: 135,
                            marginTop: -100
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff',
                            fontSize: 19
                        }]}>$ 4.3</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>




            <View style={{
                width: 240, backgroundColor: '#fff', borderRadius: 20, height: 400, marginTop: 40, marginLeft: 30, marginRight: 25
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center" }}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    >
                        <MaterialIcons
                            style={{ marginTop: 20 }}
                            name='help'
                            color='#cfcfcf'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')} 
                    >
                        <MaterialCommunityIcons

                            style={{ marginTop: 20 }}
                            name='heart'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('seven')}
                >
                    <Image style={{
                        height: 170, width: "100%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/Pizza/9.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 67, marginLeft: 20, marginBottom: -20 }}>
                        .</Text>
                    <Text style={{ color: '#ff6303', fontSize: 17, marginTop: -15, marginLeft: 45, }}>
                        NON VEG CORN</Text>
                    <Text style={{ color: '#000', fontSize: 21, marginLeft: 30, marginTop: 13, fontWeight: "bold" }}>
                        Non Veg CORN Pizza</Text>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            backgroundColor: '#d42f2f',
                            marginLeft: 145,
                            marginTop: -140
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff',
                            fontSize: 19
                        }]}>$ 7.3</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <View style={{
                width: 240, backgroundColor: '#fff', borderRadius: 20, height: 400, marginTop: 40, marginLeft: 30, marginRight: 25
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center" }}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    >
                        <MaterialIcons
                            style={{ marginTop: 20 }}
                            name='help'
                            color='#cfcfcf'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')} 
                    >
                        <MaterialCommunityIcons

                            style={{ marginTop: 20 }}
                            name='heart'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('eight')}
                >
                    <Image style={{
                        height: 170, width: "100%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/Pizza/10.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 67, marginLeft: 20, marginBottom: -20 }}>
                        .</Text>
                    <Text style={{ color: '#ff6303', fontSize: 17, marginTop: -15, marginLeft: 45, }}>
                        NON VEG</Text>
                    <Text style={{ color: '#000', fontSize: 21, marginLeft: 30, marginTop: 13, fontWeight: "bold" }}>
                        Chicken  Veyoga Pizza</Text>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            backgroundColor: '#d42f2f',
                            marginLeft: 135,
                            marginTop: -120
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff',
                            fontSize: 19
                        }]}>$ 7.3</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>





        </ScrollView>

    )
}
export default OfferList;


const styles = StyleSheet.create({
    signIn: {
        width: '28%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
    },
});