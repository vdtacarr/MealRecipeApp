import { StyleSheet , Dimensions} from 'react-native'


export default StyleSheet.create({
    container:{
            flex:1
    },
    image:{
        backgroundColor:"gray",
        width:Dimensions.get("window").width,
        height:200,
        resizeMode:'stretch',
    },
    text:{
        flex:3,
        fontSize:10,
        fontWeight:'400',
        fontStyle:'italic'
    }
    


}) 