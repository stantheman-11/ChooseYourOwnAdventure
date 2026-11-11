import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Begin() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You get to class, and your teacher asks you. "Did you use AI to complete this assignment?"</Text>
      <Link href="/lie" style={styles.link}>Lie and insist to your teacher that you did it yourself.</Link>
      <Link href="/admit" style={styles.link}>Admit that you used AI</Link>
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
});
