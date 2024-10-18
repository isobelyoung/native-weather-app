import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setData } from '../../store/reducers/dataReducer';

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            const res = await axios.get(
                'https://us-central1-ldn-weather-app.cloudfunctions.net/getWeather'
            );
            const currentConditions = res.data.current_weather;
            dispatch(setData({...currentConditions, unit: res.data.hourly_units.temperature_2m}));
            navigation.navigate('Weather');
        } catch (error) {
            alert('There has been an error');
        }
    };

    const handlePress = () => {
        getData();
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FFFFFF', '#7490F5']}
                style={styles.background}
            >
                <TouchableOpacity
                    title='Get Weather'
                    style={styles.button}
                    onPress={handlePress}
                    accessibilityLabel='Get current weather in London'
                >
                    <Text style={styles.text}>Get Weather</Text>
                </TouchableOpacity>
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
        justifyContent: 'flex-end',
        padding: '10%',
    },
    button: {
        backgroundColor: '#3626EA',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingLeft: '10%',
        paddingRight: '10%',
        borderRadius: '50%',
    },
    text: {
        color: '#FFFFFF',
        fontSize: '20px',
        fontWeight: '600',
    },
});
