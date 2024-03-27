import React from 'react';
import { View, Image, TextInput, StyleSheet, KeyboardType } from 'react-native';
import { inputStyles, imgStyles, formStyles } from '../../../src/css/styles';

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText
}: Props) => {
    return (
        <View style={formStyles.log}>
            <Image
                style={imgStyles.user}
                source={ image }
            />
            <TextInput
                style={inputStyles.login}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={ text => onChangeText(property, text)}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default CustomTextInput;