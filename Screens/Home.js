

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
import Categories from '../Components/Categories'

function SignInScreen({ navigation }) {
    return (



        <View style={styles.container}>

            <StatusBar backgroundColor='#d42f2f' BarStyle='light-content' />

            <View style={styles.header}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -25 }}>
                    <TouchableOpacity
                    // onPress={() => navigation.goBack()}
                    >

                        <Ionicons
                            style={{
                                marginTop: 50, borderRadius: 50, backgroundColor: "#fff", width: 60, height: 60,
                                padding: 10
                            }}
                            name='filter-outline'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={37}
                        />
                    </TouchableOpacity>

                    <Text style={styles.text_header}>PIZZA</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Bookmark')}
                    >

                        <Fontisto

                            style={{
                                marginTop: 40, borderRadius: 30, backgroundColor: "#fff", width: 80, height: 60,
                                padding: 10
                            }}
                            name='opencart'
                            color='#d42f2f'
                            backgroundColor='#000'
                            size={37}
                        />
                    </TouchableOpacity>
                </View>
                <Categories navigation={navigation} />

                <PizzaSlide navigation={navigation} />
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
        paddingHorizontal: 20,
        width: "100%",
    },
    footer: {
        flex: 0.9,
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