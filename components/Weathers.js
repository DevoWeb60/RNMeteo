import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import * as VarStyle from '../assets/css/style'

const getIcon = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`

export default function Weathers({forecast}) {
    return (
        <View style={styles.container}>
            <Text style={styles.hour}>{forecast.hour}h</Text>
            <Image 
                source={{uri: getIcon(forecast?.icon)}}
                style={styles.image}
            />
            <Text style={styles.temp}>{forecast.temp}°C</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: VarStyle.SUBTEXT_LIGHT,
        height:140,
        width:75,
        paddingVertical: 6,
        justifyContent: 'center',
        alignItems:'center',
        marginHorizontal:5,
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset: {width:3, height:3},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    image:{
        width:50,
        height:50
    },
    temp:{
        fontSize: 18,
        fontWeight:"bold",
        color: VarStyle.COLOR_BG
    },
    hour:{
        fontSize: 18,
        fontWeight: "500",
        color:VarStyle.TEXT_LIGHT
    }
})