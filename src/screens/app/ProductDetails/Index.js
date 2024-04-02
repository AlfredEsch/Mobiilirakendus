import React from 'react';
import { View, Text, Image, ScrollView, Pressable, Linking } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import Button from '../../../components/Button/Index';
import { useNavigation } from '@react-navigation/native';
import ImageCarousel from "../../../components/ImageCarousel";

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params || {};

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    let phone = "real phone number";
    Linking.openURL(`tel:${phone}`);

    let email = "real email";
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <SafeAreaView style={styles.save}>
      <ScrollView>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image source={{ uri: product?.image }} style={styles.image} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image source={require("../../../assets/back.png")} style={styles.backIcon} />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image style={styles.bookmarkIcon} source={require("../../../assets/tabs/bookmark.png")} />
        </Pressable>
        <Button onPress={onContact} title="Contact salesman" />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;