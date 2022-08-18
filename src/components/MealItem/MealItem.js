import React from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import styles from './MealItem.style';
import {useSelector} from 'react-redux'

function CategoryItem({ meal, handleMeal}) {
    
    return (
        <TouchableOpacity onPress={() => handleMeal(meal.idMeal)}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: meal.strMealThumb }}></Image>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{meal.strMeal}</Text>
                </View>

            </View>
        </TouchableOpacity>


    )
}

export default CategoryItem