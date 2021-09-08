import React from 'react';
import {View, Text, ImageBackground} from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";
const CarItem = ({ cars }) => {

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={ cars.image }
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{ cars.name }</Text>
                <Text style={styles.subtitle}>{ cars.tagline }{' '}
                    <Text style={styles.subtitleCTA}>
                        { cars.taglineCTA }
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton type="primary" content="custom order" onPress=''/>
                <StyledButton type="secondary" content="existing inventory" onPress=''/>
            </View>
        </View>
    );
};

export default CarItem;