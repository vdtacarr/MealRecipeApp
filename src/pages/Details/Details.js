import React, { useState, useEffect } from 'react'
import { View, Image, Text, Linking, ScrollView } from 'react-native'
import styles from './Details.style'
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux'

function Details({ route }) {
  const { meal } = route.params;
  const [mealDetail, SetMealDetail] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  },
  []);
  const fetchData = async () => {
    const { data: mealData } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
    const mealObject = mealData.meals[0];
    SetMealDetail(mealObject);
    dispatch({type:"ADD", payload:{"detail": mealObject}})
  }

  return (
    <View style={styles.container}>
      {mealDetail.strSource ? 
       <Image style={styles.image} source={{ uri: mealDetail.strMealThumb }}></Image>
       : 
       <Image style={styles.image} source={{ uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.publicdomainpictures.net%2Fen%2Fview-image.php%3Fimage%3D270609%26picture%3Dnot-found-image&psig=AOvVaw0Ze3NdQP_DlT2vPmuin67m&ust=1681071046692000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjT3_GLm_4CFQAAAAAdAAAAABAE' }}></Image>
      }

      <ScrollView style={{marginTop:5}}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: '#abcdef' }}>
          <Text style={styles.text}>{mealDetail.strInstructions}</Text>

          {
          mealDetail.strYoutube ? 
          <Text style={{ color: 'blue', flex: 1, textAlign: 'right', }} onPress={() => Linking.openURL(mealDetail.strYoutube)}>Watch Recipe Video </Text>
          : <Text style={{color: 'blue'}}> No videos available</Text>
          }

        </View>
      </ScrollView>
      <Icon name='account' size={30} />

    </View>
  )
}

export default Details