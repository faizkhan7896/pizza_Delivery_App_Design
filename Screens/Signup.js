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

function SignInScreen({ navigation }) {

    const [data, setData] = React.useState({
        email: '',
        Password: '',
        Confirm_Password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        Confirm_secureTextEntry: true,
    })

    const textInputChange = (val) => {
        if (val !== '') {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            Password: val,
        });
    }
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            Confirm_Password: val,
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry

        });
    }
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            Confirm_secureTextEntry: !data.Confirm_secureTextEntry

        });
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
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='your Email'
                        placeholderTextColor="gray"

                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
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
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>
                    Confirm Password
                    </Text>

                <View style={styles.action}>
                    <Feather
                        name='lock'
                        color='#05375a'
                        size={20}
                    />

                    <TextInput
                        placeholder='Confirm your Password'
                        placeholderTextColor="gray"

                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => handleConfirmPasswordChange(val)}

                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
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
                <View style={styles.button}>

                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => navigation.navigate('Offers')}>

                        <LinearGradient
                            colors={['#d42f2f', '#d42f2f']}
                            style={styles.signIn}>

                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}> Sing Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: '#fff',
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            marginTop: 15,
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#000',

                        }]}>Alredy have an account ?</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>

        </View>


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
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
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
        alignSelf: "center"
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    text_: {
        color: '#05375a',
        fontSize: 18,
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