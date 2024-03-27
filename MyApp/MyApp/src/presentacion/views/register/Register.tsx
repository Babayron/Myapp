import React from "react";
import { Text, Image, View } from "react-native";
import { textoStyle, imgStyles, formStyles, inputStyles, styles } from "../../../../src/css/styles";
import { ButtonRound } from "../../components/buttonRound";
import RegisterViewModel from "./RegisterViewModel";
import CustomTextInput from "../../components/CustomTextInputs";

export const RegisterScreen = () => {

    const {name, lastname, email, phone, password, onChange, register } = RegisterViewModel();

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
                placeholder="Nombre"
                keyboardType="default"
                property='name'
                onChangeText={ onChange }
                value={ name }
                />
            </View>
            <View style={formStyles.log}>
                <CustomTextInput
                placeholder="Apellido"
                keyboardType="default"
                image={require('../../../img/user.png')}
                property="lastname"
                onChangeText={ onChange }
                value={ lastname }
                />
            </View>
            <View style={formStyles.log}>
                <CustomTextInput
                placeholder="Telefono"
                keyboardType="numeric"
                image={require('../../../img/phone.png')}
                property="phone"
                onChangeText={ onChange }
                value={ phone }
                />
            </View>
            <View style={formStyles.log}>
                <CustomTextInput
                placeholder="Correo Electrónico"
                keyboardType="email-address"
                image={require('../../../img/mail.png')}
                property="email"
                onChangeText={ onChange }
                value={ email }
                />
            </View>
            <View style={formStyles.log}>
                <CustomTextInput
                placeholder="Contraseña"
                keyboardType="default"
                image={require('../../../img/pass.png')}
                property="password"
                onChangeText={ onChange }
                value={ password }
                secureTextEntry={true}/>
            </View>
            <View style={inputStyles.btn2}>
                <ButtonRound
                text="Confirmar"
                onPress={ () => register() }
                />
            </View>
            </View>
        </View>
    )
}
