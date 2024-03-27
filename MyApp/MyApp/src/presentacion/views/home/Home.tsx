import { Text, Image, View, TextInput, ToastAndroid, TouchableOpacity } from "react-native";
import { textoStyle, imgStyles, formStyles, inputStyles, styles } from "../../../../src/css/styles";
import { ButtonRound } from "../../components/buttonRound";
import { useNavigation } from "@react-navigation/native"; 
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import  CustomTextInput  from '../../components/CustomTextInputs';
import  HomeViewModel  from './HomeViewModel';

export const HomeScreen = () => {

    const { email, password, onChange } = HomeViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image source={require('../../../img/fondoPan.jpg')}
            style={imgStyles.fondo}/>
            <View style={formStyles.form}>
            <Image source={require('../../../img/RicaTorta.png')}
            style={imgStyles.img}/>
            <Text style={textoStyle.h1}>Bienvenido!</Text>
            <View style={formStyles.log}>
                <CustomTextInput
                image={require('../../../img/user.png')}
                placeholder="Correo Electrónico"
                keyboardType="email-address"
                property="email"
                onChangeText={ onChange }
                value={ email }/>
            </View>
            <View style={formStyles.log}>
                <CustomTextInput 
                image={require('../../../img/pass.png')}
                placeholder="Contraseña"
                keyboardType="default"
                property="password"
                onChangeText={ onChange }
                value={ password }
                secureTextEntry={ true }/>
            </View>
            <View style={inputStyles.btn}>
                <ButtonRound
                text="Ingresar"
                onPress={() => {
                    console.log('Email: ' + email);
                    console.log('Password: ' + password);
                }}
                />
            </View>
            <View>
                <Text style={textoStyle.more}>¿No tienes cuenta?</Text>
                <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen')}>
                <Text style={textoStyle.registro}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}