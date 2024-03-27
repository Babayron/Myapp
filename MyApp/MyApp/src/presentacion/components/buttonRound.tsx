import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {btnStyles} from '../../../src/css/styles';

interface Props {
    text: String,
    onPress: () => void
}

export const ButtonRound = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity
        style={btnStyles.ButtonRound}
        onLongPress={() => onPress()}>
            <Text style={btnStyles.ButtonRound}>{text}</Text>
        </TouchableOpacity>
    )
}
