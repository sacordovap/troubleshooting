import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/*import {
  Avatar,
  FlatFeed,
  Activity,
  LikeButton,
  ReactionIcon
} from "expo-activity-feed";*/

class DatosInicialesScreen extends React.Component {
  render() {
    return (
      <><View style={styles.container}>
        <Text>Aqui va el codigo de vista</Text>
        <View style={styles.container}>
          <Text>nuevo codigo</Text>
        </View>
        <View style={styles.container}>
          <Text>nuevo codigo</Text>
        </View>
      </View><View style={styles.container}>
          <Text>Aqui va el codigo de vista</Text>
          <View style={styles.container}>
            <Text>nuevo codigo</Text>
          </View>
          <View style={styles.container}>
            <Text>nuevo codigo</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text>Aqui va el codigo de vista</Text>
          <View style={styles.container}>
            <Text>nuevo codigo</Text>
          </View>
          <View style={styles.container}>
            <Text>nuevo codigo</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text>Aqui va el codigo de vista</Text>
          <View style={styles.container}>
            <Text>nuevo codigo</Text>
          </View>
          <View style={styles.container}>
            <Text>nuevo codigo</Text>
          </View>
        </View>
        </>   
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

export default DatosInicialesScreen;