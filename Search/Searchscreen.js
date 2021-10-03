

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
import Offerslist from '../Components/Offerslist'

function SignInScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#d42f2f' BarStyle='light-content' />
            <View style={styles.header}>
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
                            <Ionicons
                                name='md-chevron-back-circle-outline'
                                color='#d42f2f'
                                backgroundColor='#000'
                                size={33}
                            />
                        </TouchableOpacity>
                        <Text style={styles.text_footer}> Offers</Text>
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

                            }]}>Pizza</Text>
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
                    <ScrollView>
                        <Offerslist />
                    </ScrollView>


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
        flex: -0.1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
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

    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        color: "#d42f2f",
        fontWeight: "bold",
        alignSelf: 'center',
    },
    signIn: {
        width: '70%',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
});