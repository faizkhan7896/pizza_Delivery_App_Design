

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
    FlatList

} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Offerslist from '../Components/Offerslist'
import Octicons from 'react-native-vector-icons/Octicons';





function SignInScreen({ navigation }) {
    const listing = [


        {
            id: 'Pizza Mozeralla',
            link: "two"
        },
        {
            id: 'Cheese Margherita',
            link: "three"
        },
        {
            id: 'Peppy Paneer',
            link: "four"
        },

        {
            id: 'Chinese Pizza',
            link: "five"
        },
        {
            id: 'Deluxe Veggie',
            link: "six"
        },
        {
            id: 'Veg Extravaganza',
            link: "seven"
        },
        {
            id: 'Cheese n corn',
            link: "eight"
        },

    ];


    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor='#d42f2f'
                BarStyle='light-content'
            />
            <View style={styles.header}>

            </View>

            <Animatable.View style={styles.footer}
                animation="fadeInUpBig">


                <View style={{ flexDirection: "row", alignSelf: "center", }}>
                    <Octicons style={{ marginTop: 20, marginLeft: 20 }} name="search" color="gray" size={20} />

                    <TextInput
                        style={{
                            borderWidth: 1.5, borderRadius: 20, height: 60, paddingLeft: 50, width: '95%',
                            marginLeft: -35, borderColor: "#ffb575"
                        }}
                        placeholder="Search any pizza"
                        placeholderTextColor="gray" />

                    <Ionicons
                        style={{
                            marginTop: 10, marginLeft: -50, alignSelf: "center"

                        }}
                        name='filter-outline'
                        color='#d42f2f'
                        backgroundColor='#000'
                        size={30}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.text_header}>Recent Search</Text>
                    <Text style={{
                        color: "#ffb575", fontSize: 15,
                        marginTop: 40,
                        marginLeft: 120,
                    }}>Clear All</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}>

                    <View>
                        <FlatList
                            keyExtractor={(item) => item.id.toString()}
                            data={listing}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ index, item }) =>
                                <TouchableOpacity
                                    // onPress={() => navigation.navigate(item.link)}
                                    style={{
                                        height: 60, justifyContent: "center",
                                        marginLeft: 25,
                                    }}>


                                    <Text style={{ fontSize: 18, color: "#d42f2f" }}>{item.id}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </View>


                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.text_header}>Most Poupular</Text>
                        <Text style={{
                            color: "#ffb575", fontSize: 15,
                            marginTop: 40,
                            marginLeft: 140,
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
                </ScrollView>


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
        flex: 0.1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
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
        color: '#000',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 35,
        marginLeft: 20,

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
    navigationContainer: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
    },

    paragraph: {
        marginTop: 20,
        fontSize: 20,
        marginLeft: 30, fontSize: 20,
        fontWeight: "bold"
    }
});

