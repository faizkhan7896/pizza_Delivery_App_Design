

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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PizzaSlide from '../Components/PizzaSlide'
import Categories from '../Components/Categories'

function SignInScreen({ navigation }) {
    return (



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
                    <Text style={styles.text_header}>Settings</Text>

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
            </View>

            <Animatable.View style={styles.footer}
                animation="fadeInUpBig">
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
                    <MaterialIcons
                        name='edit'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#000", marginLeft: -130, alignSelf: 'center', }}>Edit Profile</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 20 }}>
                    <FontAwesome5 name="user-alt" color="gray" size={26} />

                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#000", marginLeft: -80, alignSelf: 'center', }}>Account Setting</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 20 }}>
                    <Fontisto
                        name='bell-alt'
                        color='gray'
                        backgroundColor='#000'
                        size={25}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#000", marginLeft: -120, alignSelf: 'center', }}>Notification</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 20 }}>
                    <MaterialIcons
                        name='lock'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#000", marginLeft: -90, alignSelf: 'center', }}>Privacy & Data</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 80 }}>
                    <MaterialIcons
                        name='help'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#000", marginLeft: -150, alignSelf: 'center', }}>Get Help</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 20 }}>
                    <MaterialIcons
                        name='feedback'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#000", marginLeft: -80, alignSelf: 'center', }}>Send Feedback</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 20 }}>
                    <MaterialIcons
                        name='logout'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#d42f2f", marginLeft: -150, alignSelf: 'center', }}>Logout</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='gray'
                        backgroundColor='#000'
                        size={32}
                    />
                </TouchableOpacity>







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
        flex: 1,
        paddingHorizontal: 20,
        width: "100%",
    },
    footer: {
        flex: 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 23,
        alignSelf: "center",
        marginTop: -5



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