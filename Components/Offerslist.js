import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



function OfferList({ navigation }) {
    return (

        <View style={{ backgroundColor: '#fff', marginTop: 40, width: 330, alignSelf: "center" }}>
            <ScrollView>



                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white',

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('two')}
                    >
                        <Image style={{
                            height: 124, width: "36%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/1.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white', marginTop: 10

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('three')}
                    >
                        <Image style={{
                            height: 124, width: "30%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/5.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white', marginTop: 10

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('four')}
                    >
                        <Image style={{
                            height: 124, width: "30%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/6.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white', marginTop: 10

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('one')}
                    >
                        <Image style={{
                            height: 124, width: "32%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/7.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>



                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white',

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('two')}
                    >
                        <Image style={{
                            height: 124, width: "37%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/1.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white', marginTop: 10

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('six')}
                    >
                        <Image style={{
                            height: 124, width: "32%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/8.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white', marginTop: 10

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('one')}
                    >
                        <Image style={{
                            height: 124, width: "32%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/9.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white', marginTop: 10

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('eight')}
                    >
                        <Image style={{
                            height: 124, width: "32%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/10.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>







                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white',

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('two')}
                    >
                        <Image style={{
                            height: 124, width: "36%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/3.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white', marginTop: 10

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('three')}
                    >
                        <Image style={{
                            height: 124, width: "36%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/5.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    borderWidth: 0.5, borderColor: "#cfcfcf", borderRadius: 5, height: 130, backgroundColor: 'white', marginTop: 10

                }}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Shose')}
                    >
                        <Image style={{
                            height: 124, width: "36%", resizeMode: "contain", marginTop: 5
                        }}
                            source={require("../Assets/Pizza/1.png")} />


                        <Text style={{ color: '#000', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                            Cperese Salad</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '37%', }}>
                            Best Option</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>

    )
}
export default OfferList;


const styles = StyleSheet.create({
    signIn: {
        width: '15%',
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
    },
});