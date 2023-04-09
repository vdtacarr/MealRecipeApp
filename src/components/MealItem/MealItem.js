import React, { useState } from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import styles from './MealItem.style';
import {useSelector, useDispatch} from 'react-redux'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

function CategoryItem({ meal, handleMeal}) {
    const dispatch = useDispatch();
    const favorites = useSelector((el) => el.favoriteItems);

    const handleLike = (mealId) => {
      if(favorites.includes(mealId)){
        dispatch({type:'REMOVE-FROM-FAVORITES', payload:{"unfav": mealId}})  
      }else{
        dispatch({type:'ADD-FAVORITES', payload:{"favorite": mealId}})
      }
      
    }
    return (
        <TouchableOpacity onPress={() => handleMeal(meal.idMeal)}>
            <View style={styles.container}>
                  <Image style={styles.image} source={{ uri: meal.strMealThumb }}></Image>
                  
                
                <View style={styles.body_container}>
                {favorites.includes(meal.idMeal) ?  
                    <Icon name='heart' size={20} onPress={() => handleLike(meal.idMeal)} style={styles.icon}/> : 
                    <Icon name='heart-outline' size={20} onPress={() => handleLike(meal.idMeal)} style={styles.icon}/>
                    }
                    <Text style={styles.title}>{meal.strMeal}</Text>
                </View>

            </View>
        </TouchableOpacity>


    )
}

export default CategoryItem