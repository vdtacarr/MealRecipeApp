import { StyleSheet , Dimensions} from 'react-native'


export default StyleSheet.create({
    container:{
            flex:1
    },
    image:{
        
        width:Dimensions.get("window").width,
        height:200,
        resizeMode:"contain",
    },
    text:{
        flex:3,
        fontSize:10,
        fontWeight:'400',
        fontStyle:'italic'
    }
    


}) 