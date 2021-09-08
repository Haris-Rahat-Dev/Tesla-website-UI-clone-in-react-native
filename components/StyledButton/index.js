import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from "./styles";

const StyledButton = ({ type,content }) => {

    const Type = type;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const color = type === 'primary' ? '#FFFFFF' : '#171A20';
    return (
        <View style={styles.container}>
            <Pressable style={ {...styles.button, backgroundColor} } onPress={ () => console.log('hello') }>
                <Text style={{...styles.text, color}}>{ content }</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;
