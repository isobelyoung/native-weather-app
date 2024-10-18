import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { init } from './firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/Home';
import WeatherScreen from './screens/Weather';

const Stack = createNativeStackNavigator();

export default function App() {
    init();

    return (
        <Provider store={store}>
            {/* add loading to nav */}
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='Weather' component={WeatherScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
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
