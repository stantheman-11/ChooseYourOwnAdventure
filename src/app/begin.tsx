import { Image } from 'expo-image';
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Begin() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/assignment pic.png')} style={styles.image}/>
      <Text style={styles.text}>You just checked Blackbaud and there's an assignment due in your calendar that you completely forgot about!</Text>
      <Link href="/extension" style={styles.link}>Email your teacher for a last-minute extension</Link>
      <Link href="/ai" style={styles.link}>Complete the assignment using AI</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 35,
  },

  text: {
    color: '#060606',
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
  },

  link: {
    color: '#054a82',
    fontSize: 23,
    marginBottom: 30,
    textAlign: 'center',
  },

  image: {
    width: 350,
    height: 180,
    marginBottom: 20,
  },
});
