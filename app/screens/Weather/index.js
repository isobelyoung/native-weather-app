import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../store/reducers/dataReducer';
import { WeatherCodes, WeatherDesc } from '../../constants';
import { Images } from '../../assets/weather-images';

export default function WeatherScreen({ navigation }) {
    const data = useSelector((state) => state.data);
    const icon = Images[WeatherCodes[data.weathercode.toString()][data.is_day.toString()]]

    const date = new Date(data.time);
    
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FFFFFF', '#7490F5']}
                style={styles.background}
            >
                <View />
                <View>
                    <Text style={styles.heading}>{data.temperature}{data.tempUnit}</Text>
                    <View style={styles.iconContainer}>
                        <Image style={styles.weatherIcon} source={icon} />
                    </View>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.textBold}>{date.toDateString()}</Text>
                    <Text style={styles.text}>{date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        width: '100%',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10%',
    },
    textBold: {
        color: '#000',
        fontSize: '20px',
        fontWeight: '600',
    },
    text: {
        textAlign: 'center',
        paddingTop: '2%',
    },
    heading: {
        fontWeight: '800',
        fontSize: '60px',
    },
    weatherIcon: {
        resizeMode: 'contain',
        width: '100%',
        height: 200,
    },
    iconContainer: {
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        paddingTop: '10%',
    },
});
