import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Map() {
  return (
    <View style={styles.container}>
        <View style={styles.container_top}>
            <Text>Travel information :</Text>
            <TextInput style={styles.input} placeholder='From'/>
            <TextInput style={styles.input} placeholder='To'/>
            <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      marginTop: 40,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'top',
    },
    container_top: {
        width: '100%',
        padding: 10,
        backgroundColor: 'whitesmoke',
        alignItems: 'left',
        justifyContent: 'top',
    },
    input: {
        marginTop: 2,
        paddingLeft: 5,
        width: '80%',
        height: 30,
        borderWidth: 1,
        borderColor: 'black'
    }
  });
