import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FFFFFF', '#7490F5']}
                style={styles.background}
            >
                <TouchableOpacity
                    title='Get Weather'
                    style={styles.button}
                    onPress={() => console.log('Button Pressed')}
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
    }
});
