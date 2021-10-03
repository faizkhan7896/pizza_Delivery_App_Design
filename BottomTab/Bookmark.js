

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
                    <Text style={styles.text_header}>Order  Detail</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "94%", marginTop: 30, }}>
                        <Text style={{ color: "#fff", fontSize: 17, }}>Date :</Text>

                        <Text style={{ color: "#fff", fontSize: 17, }}>15 Mar, 2020</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "94%", marginTop: 7, }}>
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

                            <TouchableOpacity
                            // onPress={() => navigation.goBack()}
                            >
                                <Ionicons
                                    name='ios-location'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={27}
                                />
                            </TouchableOpacity>
                            <Text style={styles.text_footer}> your delivery adderes</Text>
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
                        <Text style={styles.text_footer2}> Vijay Nagar, Scheme no.73</Text>
                    </View>

                    <Text style={{ color: "#d42f2f", fontWeight: 'bold', marginTop: 25, marginLeft: 40, }}> Who will Recive this order</Text>
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ color: "#000", fontWeight: 'bold', marginTop: 10, marginLeft: 40, }}> Manthan ji</Text>
                        <Text style={{ color: "gray", marginTop: 10, marginLeft: 10, }}>+91 6260 7869 85</Text>
                    </View>

                    <View style={{
                        borderRadius: 15, height: 130, backgroundColor: 'white',
                        marginTop: 30,

                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('two')}
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

                        <View style={{
                            backgroundColor: "#fef4ee", height: 50, width: "65%", alignSelf: 'center',
                            borderRadius: 30, flexDirection: 'row', marginTop: 20
                        }}>
                            <Text style={{ alignSelf: 'center', color: '#d42f2f', fontSize: 16, marginLeft: 30, }}>Order ID :</Text>
                            <Text style={{ alignSelf: 'center', color: '#d42f2f', fontSize: 16, marginLeft: 15, }}>29284</Text>
                            <MaterialIcons
                                style={{ marginLeft: 33, alignSelf: 'center', }}
                                name='call'
                                color='#d42f2f'
                                backgroundColor='#000'
                                size={26}
                            />

                        </View>


                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Pay")}
                        style={{
                            backgroundColor: '#d42f2f',
                            width: '47%',
                            height: 65,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            borderRadius: 50,
                            marginTop: 120,
                            marginBottom: 150,
                        }}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff', fontSize: 20

                        }]}>Place Order</Text>
                    </TouchableOpacity>

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
        fontSize: 30,
        marginTop: 50,
        marginLeft: 20



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
});