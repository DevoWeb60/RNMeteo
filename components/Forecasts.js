import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

import * as VarStyle from '../assets/css/style'
import Weathers from './Weathers'

export default function Forecasts({data}) {
    const [forecasts, setForecasts] = useState([])

    useEffect(() => {
        const forcastsData = data.list.map(f => {
            const dt = new Date(f.dt * 1000)
            return ({
                date: dt,
                hour: dt.getHours(),
                temp: Math.round(f.main.temp),
                icon: f.weather[0].icon,
                name: format(dt, "EEEE", {locale: fr})
            })
        })

        setForecasts(forcastsData)
    }, [data])

    return (
        <>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}
            >
                {forecasts.map(f => (
                    <View>
                        <Text style={styles.day}>{f.name}</Text>
                        <Weathers forecast={f} />
                    </View>
                ))}
            </ScrollView>
        </>
    )
}

const styles = new StyleSheet.create({
    title:{
        fontSize:24,
        color:VarStyle.TEXT_LIGHT,
        textTransform: "uppercase",
        fontWeight:'500'
    },
    scroll:{
        width:"100%",
        height:"35%",
        marginTop:20,
    },
    day:{
        color:VarStyle.TEXT_LIGHT,
        textAlign:'center',
        margin:5,
        textTransform:'capitalize'
    }
})