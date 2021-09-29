import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DataEquipoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Aqui va el codigo de vista</Text>
      </View>
    );
  }
}

//Esto se debe de importar desde styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroups: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        alignItems: "center",
        borderBottomColor: '#cccccc'
    }
});

export default DataEquipoScreen;