import { Image } from "expo-image";
import { Link } from 'expo-router';
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Cover Image.png')} style={styles.image}/>
      <Link style={styles.link} href="/begin">Begin Your Adventure</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: '#060606',
    fontSize: 25,
  },

 link: {
    color: '#054a82',
    fontSize: 23,
    marginBottom: 30,
    textAlign: 'center',
  },

  image: {
    width: 350,
    height: 475,
    marginBottom: 20,
  },
});
