import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Begin() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You admit you used AI to complete the assignment. He says: {'\n'}{'\n'} "That's absolutely fine! It had an AI green-light. I can tell you didn't know that though, so make sure to read the guidelines thoroughly next time."{'\n'}{'\n'} His tone becomes more ominous: "We don't want any misunderstandings in the future, otherwise the Crossroads Academic Honesty Police might have to get involved".</Text>
      <Link href="/begin" style={styles.link}>Play Again</Link>
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
