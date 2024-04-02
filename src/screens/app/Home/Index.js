import React, { useEffect } from "react";
import {View, Text} from "react-native";
import {styles} from "./styles";
import Header from "../../../components/Header/Index";
import {SafeAreaView} from "react-native-safe-area-context";
import { categories } from "../../../data/categories";
import { FlatList } from "react-native";
import CategoryBox from "../../../components/CategoryBox/Index";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem/Index";
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = React.useState();
    const [keyword, setKeyword] = React.useState();
    const [selectedProducts, setSelectedProducts] = React.useState(products);

    useEffect(() => {
        if (selectedCategory && !keyword){
        const updatedSelectedProducts = products.filter((product) => product?.category === selectedCategory);
        setSelectedProducts(updatedSelectedProducts);
        } else if (!keyword && !selectedCategory) {
            setSelectedProducts(products);
        } else if (keyword && !selectedCategory) {
            const updatedSelectedProducts = products.filter((product) => product?.title.toLowerCase().includes(keyword.toLowerCase()));
            setSelectedProducts(updatedSelectedProducts);
        } else if (keyword && selectedCategory) {
            const updatedSelectedProducts = products.filter((product) => product?.category === selectedCategory && product?.title.toLowerCase().includes(keyword.toLowerCase()));
            setSelectedProducts(updatedSelectedProducts);
        }
    }, [selectedCategory, keyword]);
    

    const renderCategoryItem = ({ item }) => {
        return (
            <CategoryBox onPress={() => setSelectedCategory(item?.id)}
            isSelected={selectedCategory === item.id} 
            title={item.title} image={item.image} />
        );
    };
    
    
    const renderProductItem = ({ item }) => {
        const onProductPress = (product) => {
            navigation.navigate("ProductDetails", {product});
        };
        return (
            <ProductHomeItem onPress={() => onProductPress(item)}
            {...item} />
        )
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Header showSearch={true} onSearchKeyword={setKeyword} keyword={keyword} title="Find All You Need" />
            <FlatList showHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) =>
            String(index)} />
            <FlatList numColumns={2} data={selectedProducts} renderItem={renderProductItem} 
            keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{ height: 250 }} />} />
        </View>
        </SafeAreaView>
    )
}

export default Home;