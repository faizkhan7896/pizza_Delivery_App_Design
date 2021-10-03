

import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    TextInput,
    ScrollView,

} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Offerslist from '../Components/Offerslist'

function SignInScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor='#d42f2f' BarStyle='light-content' />
                <View style={styles.header}>
                    <Text style={{ fontSize: 20, color: "#d42f2f" }}>Steve Rorgers</Text>
                    <Text style={{ fontSize: 20, color: "#d42f2f" }}>Steve Rorgers</Text>

                </View>

                <Animatable.View style={styles.footer}
                    animation="fadeInUpBig">

                    <View style={styles.button}>
                        <View style={{
                            flexDirection: "row", width: '100%', justifyContent: "space-between",
                        }}>

                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                            >
                                <Fontisto
                                    name='bell-alt'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Setting')}
                            >
                                <MaterialIcons
                                    name='settings'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                            </TouchableOpacity>
                        </View>

                        <Image style={{
                            height: 170, width: "45%", alignSelf: "center", borderRadius: 150
                        }}
                            source={require("../Assets/profile1.png")} />
                        <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10, fontWeight: "bold" }}>Steve Rorgers</Text>
                        <Text style={{ fontSize: 17, alignSelf: 'center', marginTop: 10, color: "gray" }}>(012) 6269 0428 95</Text>

                        <View style={{
                            flexDirection: "row", width: '50%', justifyContent: "space-between",
                        }}>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginTop: 25,
                                    marginLeft: 50
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>About</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#fff',
                                    marginTop: 25,
                                    marginLeft: 20

                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: 'gray',

                                }]}>Other</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{
                                color: "#000", fontWeight: "500",
                                fontSize: 25,
                                alignSelf: "center",
                                marginTop: 40
                            }}>Wishlist</Text>
                            <Text style={{
                                color: "#ffb575", fontSize: 15,
                                marginTop: 40,
                                marginLeft: 200,
                            }}>Show All</Text>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginTop: 60, fontSize: 20, }}>Greek</Text>


                            <Image style={{
                                height: 124, width: "37%", resizeMode: "contain", marginTop: 15,
                            }}
                                source={require("../Assets/Pizza/1.png")} />
                            <Text style={{ marginTop: 60, fontSize: 20, }}>Classic</Text>

                            <Image style={{
                                height: 124, width: "27%", resizeMode: "contain", marginTop: 15, marginLeft: 10
                            }}
                                source={require("../Assets/Pizza/5.png")} />

                        </View>
                        <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: 'space-between', width: "100%" }}>
                            <Text style={{ marginTop: 60, fontSize: 20, }}>Italian</Text>


                            <Image style={{
                                height: 124, width: "27%", resizeMode: "contain", marginTop: 15,
                            }}
                                source={require("../Assets/Pizza/6.png")} />
                            <Text style={{ marginTop: 60, fontSize: 20, marginLeft: 35 }}>Cheese</Text>

                            <Image style={{
                                height: 124, width: "30%", resizeMode: "contain", marginTop: 15, marginLeft: -2
                            }}
                                source={require("../Assets/Pizza/7.png")} />

                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginTop: 60, fontSize: 20, }}>Greek</Text>


                            <Image style={{
                                height: 124, width: "33%", resizeMode: "contain", marginTop: 15,
                            }}
                                source={require("../Assets/Pizza/1.png")} />
                            <Text style={{ marginTop: 60, fontSize: 23, }}>Classic</Text>

                            <Image style={{
                                height: 124, width: "33%", resizeMode: "contain", marginTop: 15, marginLeft: 10
                            }}
                                source={require("../Assets/Pizza/1.png")} />

                        </View>



                    </View>
                </Animatable.View>
            </ScrollView>

        </View >


    );
}
export default SignInScreen;

const { height } = Dimensions.get("screen");

const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d42f2f'
    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        width: "100%",
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: "center",
        marginTop: 40



    },
    text_footer: {
        fontSize: 13,
        color: "#d42f2f",
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: -8
    },
    text_footer2: {
        fontSize: 13,
        color: "#000",
        marginLeft: 50,
        marginTop: -18
    },
    signIn: {
        width: '70%',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
});