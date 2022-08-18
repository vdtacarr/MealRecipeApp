import axios from 'axios';
import React from 'react'
import { View,FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import CategoryItem from '../../components/CategoryItem/CategoryItem'
function Categories({navigation}) {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
     fetchData();
    },
    []);

    const fetchData = async () => {
          const {data:mealCategories} = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
          setCategories(mealCategories.categories);
    }
    const renderCategories = ({item}) => <CategoryItem category={item} handleCategory={handleCategory} ></CategoryItem>;
    
    const handleCategory = (category) =>{
        navigation.navigate("Meals", {category});
    } 
    return (
        <View>
           <FlatList data={categories} renderItem={renderCategories} />
        </View>
    )
}

export default Categories