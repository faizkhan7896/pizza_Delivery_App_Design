

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

} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// const userInfo = { user: "admin", Password: "admin1234" }

function SignInScreen({ navigation }) {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         username: '',
    //         Password: '',
    //     }
    // }

    const [data, setData] = React.useState({
        email: '',
        Password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    })

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry

        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }
    const loginHandle = (userName, password) => {
        signIn(userName, password);
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#d42f2f' BarStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>PIZZA</Text>
            </View>

            <Animatable.View style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.text_footer}>Name</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='your name'
                        placeholderTextColor="gray"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}

                    // onChangeText={(username) => this.setstate({ username })}
                    // value={this.state.username}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn">

                            <Feather
                                name='check-circle'
                                color='green'
                                size={20}
                            />

                        </Animatable.View>

                        : null}
                </View>
                {data.isValidUser ? null :

                    <Animatable.View animation="fadeInLeft" duration={1000}>
                        <Text style={styles.errorMsg}>Username must be 4 charecter long.</Text>

                    </Animatable.View>
                }


                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>
                    Password
                    </Text>

                <View style={styles.action}>
                    <Feather

                        name='lock'
                        color='#05375a'
                        size={20}
                    />

                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="gray"

                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)}


                    // onChangeText={(password) => this.setstate({ Password })}
                    // value={this.state.Password}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name='eye-off'
                                color='gray'
                                size={20}
                            />
                            :
                            <Feather
                                name='eye'
                                color='gray'
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={1000}>
                        <Text style={styles.errorMsg}>Password must be 8 charecter long.</Text>

                    </Animatable.View>
                }

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => navigation.navigate('Offers')}
                    // onPress={this._login()}

                    >
                        <LinearGradient
                            colors={['#eb483d', '#d42f2f']}
                            style={styles.signIn}>

                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}> Sing in</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                        style={[styles.signIn, {
                            borderColor: '#fff',
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            marginTop: 15,
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#000'

                        }]}>I don't have an account yet</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>

        </View>


    );
    // _login = async () => {
    //     if (userInfo.username === this.state.username && userInfo.Password === this.state.Password) {
    //         alert('loged in');
    //     } else {
    //         alert('username or password is incorrect.')
    //     }
    // }
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
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fef4ee',
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
        marginBottom: 20,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#cfcfcf',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    textSign: {
        fontSize: 15,
    }
});