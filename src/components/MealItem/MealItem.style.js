import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#bdbdbd',
        backgroundColor:'#eeeeee',
        margin:10,
        flexDirection:'row'
    },body_container:{
        flex:1
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain',
        backgroundColor:'white',
    },
    title:{
     fontWeight:'bold',
     padding:5,
     textAlign:'right'
    },
   

})