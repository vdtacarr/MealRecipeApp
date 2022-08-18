import React from 'react'
import { View , FlatList} from 'react-native'
import { useState,useEffect } from 'react';
import MealItem from '../../components/MealItem/MealItem'
import axios from 'axios';

function Meals({route, navigation}) {
const {category} = route.params;
 const [meals, SetMeals] = useState([]);
  useEffect(() =>{
    fetchData();
   },
   []);

   const fetchData = async () => {
         const {data:meals} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
         SetMeals(meals.meals);
   }
   const renderMeals = ({item}) => <MealItem meal={item} handleMeal={handleMeal} ></MealItem>;

   const handleMeal = (meal) =>{
    navigation.navigate("Details", {meal});
} 
  return (
    <View>
          <FlatList data={meals} renderItem={renderMeals}></FlatList>
    </View>
  )
}

export default Meals