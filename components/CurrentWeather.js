import { isSameDay } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import * as VarStyle from '../assets/css/style'

const getIcon = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`

export default function CurrentWeather({data}) {
    const [currentWeather, setCurrentWeather] = useState(null)

    useEffect(() => {
        const currentW = data.list.filter(forecast => {
            const today = new Date().getTime() + Math.abs(data.city.timezone * 1000)
            const forecastDate = new Date(forecast.dt * 1000) 

            return isSameDay(today, forecastDate)
        })
        setCurrentWeather(currentW[0])
    }, [data])

    return (
        <View style={styles.container}>
            <Text style={styles.city}>{data?.city?.name}</Text>
            <Text style={styles.today}>Aujourd'hui</Text>

            <Image 
                source={{uri: getIcon(currentWeather?.weather[0].icon)}}
                style={styles.image}
            />

            <Text style={styles.temp}>{Math.round(currentWeather?.main.temp)}°C</Text>
            <Text style={styles.description}>{currentWeather?.weather[0].description}</Text>
        </View>
    )
}

const styles = new StyleSheet.create({
    container:{
        marginTop: 60,
        alignItems:'center',
        height:"59%"
    },
    city:{
        color: VarStyle.TEXT_LIGHT,
        fontSize: 36,
        textTransform: 'uppercase',
        letterSpacing: 1,
        fontWeight:'bold'
    },
    today:{
        fontSize:24,
        fontWeight:"300",
        color: VarStyle.SUBTEXT_LIGHT
    },
    image:{
        width:150,
        height:150,
    },
    temp:{
        fontSize:80,
        color: VarStyle.TEXT_LIGHT,
        fontWeight:"bold"
    },
    description:{
        fontSize:24,
        color: VarStyle.SUBTEXT_LIGHT,
        textTransform: 'capitalize',
        marginVertical:10,
        fontWeight: "bold"
    }
})