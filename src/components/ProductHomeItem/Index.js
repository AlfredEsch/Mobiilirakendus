import React, { useState } from "react";
import { Text, Pressable, View, Image, Input } from "react-native";
import { styles } from './styles'

const ProductHomeItem = ({ title, image, price, onPress }) => {
    return (
      <Pressable onPress={onPress} style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: image}} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
      </Pressable> 
    );
};

export default React.memo(ProductHomeItem);