import React, { useState, useEffect } from 'react'
import { View, Image, Text, Pressable, Linking, ScrollView } from 'react-native'
import styles from './Details.style'
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import usePost from '../../hooks/usePost';
import { useDispatch,useSelector } from 'react-redux'
import { validatePathConfig } from '@react-navigation/native';
function Details({ route }) {
  const { meal } = route.params;
  const [abc, Setabc] = useState({"name":"vedat"});
  const dispatch = useDispatch();
  const { data, loading, error, post } = usePost();
  useEffect(() => {
    fetchData();
  },
  []);

  useEffect(() => {
    dispatch({type:'ADD', payload:{"abc":abc}});
    const {selected} = useSelector(e => e.mealItem);
    console.log(selected);

    
  },[abc])

  const fetchData = async () => {
    const { data: mealData } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
    Setabc(...mealData.meals);
    
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: abc.strSource }}></Image>

      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: '#abcdef' }}>
          <Text style={styles.text}>{abc.strInstructions}</Text>
          <Text style={{ color: 'blue', flex: 1, textAlign: 'right', }} onPress={() => Linking.openURL(abc.strYoutube)}>Watch Recipe Video </Text>
        </View>
      </ScrollView>
      <Icon name='account' size={30} />

    </View>
  )
}

export default Details