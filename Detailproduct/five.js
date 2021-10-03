

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
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import PizzaSlide from '../Components/PizzaSlide'
import Categories from '../Components/Categories'

function SignInScreen({ navigation }) {
    return (



        <View style={styles.container}>

            <StatusBar backgroundColor='#fff' BarStyle='light-content' />

            <View style={styles.header}>

                <View style={{
                    flexDirection: "row", width: '100%', justifyContent: "space-between", marginTop: -30
                }}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name='md-chevron-back-circle-outline'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={33}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Tabs')}
                    >
                        <MaterialIcons
                            name='cancel'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={33}
                        />
                    </TouchableOpacity>
                </View>
                <Image style={{
                    height: 270, width: "100%", resizeMode: "contain", alignSelf: "center"
                }}
                    source={require("../Assets/Pizza/7.png")} />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        backgroundColor: '#d42f2f',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff',

                    }]}>$ 7.3</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", }}>
                    <Text style={{ color: '#ff6303', fontSize: 67, marginLeft: 10, marginTop: -47 }}>
                        .</Text>
                    <Text style={{ color: '#ff6303', fontSize: 17, marginTop: 15, marginLeft: 4, }}>
                        CHICKEN CHEES</Text>
                </View>
                <View style={{ flexDirection: "row", }}>
                    <Text style={{ color: '#000', fontSize: 27, marginLeft: 18, marginTop: 13, fontWeight: "bold" }}>
                        Chicken  Pizza</Text>

                    <TouchableOpacity
                        onPress={() => alert("Sucssesfully added to your bag")}
                        style={{
                            backgroundColor: '#d42f2f',
                            width: '40%',
                            height: 55,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            marginTop: 30,
                            marginLeft: 18,


                        }}>
                        <Text style={{ color: '#fff', fontWeight: "bold", fontSize: 19 }}>
                            Add to bag</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ color: '#d42f2f', fontSize: 20, marginLeft: 18, }}>
                    Let's make it better</Text>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", }}>
                    <Image style={{
                        height: 90, width: "30%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/tomatto.png")} />


                    <Image style={{
                        height: 120, width: "30%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/leves.png")} />


                    <Image style={{
                        height: 70, width: "30%", resizeMode: "contain", alignSelf: "center"
                    }}
                        source={require("../Assets/masala.png")} />

                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: -20 }}>Tomatoes</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: -20 }}>Broccoli</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: -20 }}>Meeres</Text>

                </View>
                <View style={{ flexDirection: "row", width: "95%", justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 17, marginTop: -10, color: "#d42f2f", marginLeft: 22, marginTop: 3 }}>250g</Text>
                    <Text style={{ fontSize: 17, marginTop: -10, color: "#d42f2f", marginLeft: 22, marginTop: 3 }}>250g</Text>
                    <Text style={{ fontSize: 17, marginTop: -10, color: "#d42f2f", marginLeft: 15, marginTop: 3 }}>250g</Text>

                </View>
                <View style={{ flexDirection: "row", width: "95%", justifyContent: "space-between", }}>
                    <TouchableOpacity
                        onPress={() => alert("Sucssesfully added to your bag")}
                        style={{
                            width: '13%',
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            marginTop: -140,
                            backgroundColor: '#d42f2f',
                            marginLeft: 80
                        }}>
                        <MaterialCommunityIcons
                            name='plus'
                            color='#fff'
                            size={27}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => alert("Sucssesfully added to your bag")}
                        style={{
                            width: '13%',
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            marginTop: -140,
                            marginRight: 20,

                            backgroundColor: '#d42f2f',
                        }}>
                        <MaterialCommunityIcons
                            name='plus'
                            color='#fff'
                            size={27}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => alert("Sucssesfully added to your bag")}
                        style={{
                            width: '13%',
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            marginTop: -140,
                            marginRight: -30,
                            backgroundColor: '#d42f2f',
                        }}>
                        <MaterialCommunityIcons
                            name='plus'
                            color='#fff'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>

            </View>

            <Animatable.View style={styles.footer}
                animation="fadeInUpBig">

                <View style={{
                    height: 100, backgroundColor: '#d42f2f', flexDirection: "row"

                }}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Shose')}
                    >
                        <Image style={{
                            height: 80, width: "23%", marginTop: 5, borderRadius: 100
                        }}
                            source={require("../Assets/Pizza/7.png")} />


                        <Text style={{ color: '#fff', fontSize: 15, marginTop: -65, marginLeft: '35%', }}>
                            Chicken Pizza ( 14" )</Text>
                        <Text style={{ color: '#ff6303', fontSize: 15, marginTop: 7, marginLeft: '35%', }}>
                            No chill for children</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Bookmark')}
                    >

                        <Fontisto

                            style={{
                                marginTop: 10, borderRadius: 30, backgroundColor: "#fff", width: 80, height: 60,
                                padding: 10, marginLeft: 10
                            }}
                            name='opencart'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={37}
                        />
                    </TouchableOpacity>
                </View>

            </Animatable.View>

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

        flex: 5,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    footer: {
        flex: 0.8,
        paddingHorizontal: 20,
        width: "100%",

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
        width: '20%',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: -50
    },
});