import React, { useState } from 'react';
import { Image, FlatList, View, Dimensions } from 'react-native';
import { styles } from './styles';

const { width } = Dimensions.get("window");

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollEnd = (event) => {
    const horizontalOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(horizontalOffset / width);
    setActiveIndex(index);
  };

  const renderImage = ({ item }) => {
    return <Image source={{ uri: item }} style={styles.image} />;
  };

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        style={styles.list}
        data={images}
        renderItem={renderImage}
        onMomentumScrollEnd={handleScrollEnd}
      />
      <View style={styles.pagination}>
        {images?.map((_, i) => (
          <View key={i} style={[styles.paginationLine, i === activeIndex && styles.activeLine]} />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;