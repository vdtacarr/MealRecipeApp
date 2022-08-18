import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals/Meals';
import Details from './pages/Details/Details';
import ItemProvider from './context/Provider';
import React from 'react'

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={Categories}></Stack.Screen>
          <Stack.Screen name='Meals' component={Meals}></Stack.Screen>
          <Stack.Screen name='Details' component={Details}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>

  )
}
export default App;
