import React from 'react';
import styles from './styles'
import cars from './cars';
import {View, FlatList, Dimensions} from "react-native";
import CarItem from "../CarItem";

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={ ({ item })=> <CarItem cars={ item }/> }
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('screen').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CarsList;