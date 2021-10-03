

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
import Ionicons from 'react-native-vector-icons/Ionicons';
import PizzaSlide from '../Components/PizzaSlide'

function OrderScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor='#d42f2f' BarStyle='light-content' />
                <View style={styles.header}>
                    <View style={{
                        flexDirection: "row", width: '100%', justifyContent: "space-between", marginTop: 40
                    }}>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons
                                name='md-chevron-back-circle-outline'
                                color='#fff'
                                backgroundColor='#000'
                                size={33}
                            />
                        </TouchableOpacity>
                        <Text style={styles.text_header}>Place order</Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Tabs')}
                        >
                            <MaterialIcons
                                name='cancel'
                                color='#fff'
                                backgroundColor='#000'
                                size={33}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "94%", marginTop: 30, }}>
                        <Text style={{ color: "#fff", fontSize: 17, }}>Date :</Text>

                        <Text style={{ color: "#fff", fontSize: 17, }}>15 Mar, 2020</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "94%", marginTop: 7, marginBottom: 19 }}>
                        <Text style={{ color: "#fff", fontSize: 17, }}>Total Bills :</Text>

                        <Text style={{ color: "#fff", fontSize: 17, }}>$ 19.10</Text>
                    </View>
                </View>




                <Animatable.View style={styles.footer}
                    animation="fadeInUpBig">

                    <View>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Text style={{
                                backgroundColor: "#d42f2f", height: 40, width: 60, color: "#fff",
                                borderRadius: 30, paddingLeft: 23, paddingTop: 5, fontSize: 20, fontWeight: "bold"
                            }}>3</Text>
                            <Text style={{ color: "#000", fontSize: 21, fontWeight: "bold", marginLeft: 30, paddingTop: 5, }}>
                                Item List</Text>

                            <TouchableOpacity
                                style={{ marginLeft: 120 }}
                            // onPress={() => navigation.navigate('Home')}
                            >
                                <MaterialIcons
                                    name='edit'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={27}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        borderRadius: 15, height: 130, backgroundColor: 'white',
                        marginTop: 30,

                    }}>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('Shose')}
                        >
                            <Image style={{
                                height: 124, width: "36%", resizeMode: "contain", marginTop: 5
                            }}
                                source={require("../Assets/Pizza/1.png")} />

                            <View style={{ flexDirection: "row", }}>
                                <Text style={{ color: '#d43f3f', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                                    2 </Text>

                                <Text style={{ color: '#000', fontSize: 15, marginTop: -95, }}>
                                    Cperese Salad</Text>
                            </View>
                            <Text style={{ color: '#ff6303', fontSize: 15, marginTop: -57, marginLeft: '37%', }}>
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
                                    onPress={() => navigation.goBack()}
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
                        borderRadius: 15, height: 130, backgroundColor: 'white',
                        marginTop: 30,

                    }}>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('Shose')}
                        >
                            <Image style={{
                                height: 124, width: "30%", resizeMode: "contain", marginTop: 5
                            }}
                                source={require("../Assets/Pizza/7.png")} />

                            <View style={{ flexDirection: "row", }}>
                                <Text style={{ color: '#d43f3f', fontSize: 15, marginTop: -95, marginLeft: '37%', }}>
                                    2 </Text>

                                <Text style={{ color: '#000', fontSize: 15, marginTop: -95, }}>
                                    Cperese Salad</Text>
                            </View>
                            <Text style={{ color: '#ff6303', fontSize: 15, marginTop: -57, marginLeft: '37%', }}>
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
                                    onPress={() => navigation.goBack()}
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
                        flexDirection: "row", alignSelf: "center", marginTop: 30
                    }}>

                        <TouchableOpacity
                            // onPress={() => navigation.goBack()}
                            style={{
                                width: '40%',
                                height: 65,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 50,
                                backgroundColor: '#fef4ef',
                                marginTop: 75,
                            }}
                        >
                            <Text style={{ color: '#d42f2f', fontSize: 16 }}>Total :$19.10</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Enterpin')}
                            style={{
                                width: '40%',
                                height: 65,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 50,
                                backgroundColor: '#d42f2f',
                                marginTop: 75,
                                flexDirection: "row",
                                marginLeft: 15,
                                marginBottom: 100

                            }}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff', fontSize: 16

                            }]}>Pay</Text>
                            <MaterialIcons
                                style={{ marginLeft: 10, marginTop: 5 }}

                                name='navigate-next'
                                color='#fff'
                                backgroundColor='#000'
                                size={30}
                            />
                        </TouchableOpacity>

                    </View>
                </Animatable.View>


            </View >

        </ScrollView>
    );
}
export default OrderScreen;

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
        flex: 2.5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,



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
        width: '17%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    heading: {
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 30,
        marginLeft: 30
    },
    TextInput: {

        borderRadius: 25,
        height: 150,
        width: '95%',
        padding: 20,
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: "#f4f1eb",
    },
    TextInput2: {
        borderRadius: 40, height: 60, padding: 20, width: '95%',
        marginLeft: 20, marginTop: 20, backgroundColor: "#f4f1eb",
    }
});