

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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{
                            backgroundColor: "#d42f2f", height: 40, width: 60, color: "#fff",
                            borderRadius: 30, paddingLeft: 23, paddingTop: 5, fontSize: 20, fontWeight: "bold"
                        }}>2</Text>
                        <Text style={{ color: "#000", fontSize: 21, fontWeight: "bold", marginLeft: 30, paddingTop: 5, }}>Select Card to Pay</Text>
                    </View>
                    <Image style={{
                        height: 350, width: "100%", resizeMode: "contain", marginTop: 45
                    }}
                        source={require("../Assets/card3.png.png")} />


                    <TouchableOpacity
                        // onPress={() => navigation.navigate("SelectCard")}
                        style={{
                            backgroundColor: '#d42f2f',
                            width: '15%',
                            height: 45,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 320,
                            borderRadius: 50,
                            marginTop: -100
                        }}
                    >
                        <TouchableOpacity

                        // onPress={() => navigation.navigate('Home')}
                        >
                            <Fontisto

                                name='plus-a'
                                color='#fff'
                                size={22}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>



                    <TouchableOpacity

                    // onPress={() => navigation.navigate('Home')}
                    >
                        <MaterialIcons
                            style={{ marginTop: 110 }}
                            name='edit'
                            color='#d42f2f'
                            size={27}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Subtotal")}
                        style={{
                            backgroundColor: '#d42f2f',
                            width: '50%',
                            height: 65,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            borderRadius: 50,
                            marginBottom: 150,
                            flexDirection: "row",
                            marginTop: -40
                        }}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff', fontSize: 20

                        }]}>Select</Text>


                        <SimpleLineIcons
                            style={{ marginLeft: 15 }}
                            name='plus'
                            color='#fff'
                            size={27}
                        />
                    </TouchableOpacity>



                </Animatable.View>


            </View >

        </ScrollView >
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