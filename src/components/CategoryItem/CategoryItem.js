import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import styles from './CategoryItem.style';

function CategoryItem({ category, handleCategory}) {
    return (
        <TouchableOpacity onPress={() => handleCategory(category.strCategory)}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: category.strCategoryThumb }}></Image>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{category.strCategory}</Text>
                    <Text style={styles.desc}>{category.strCategoryDescription}</Text>
                </View>

            </View>
        </TouchableOpacity>


    )
}

export default CategoryItem