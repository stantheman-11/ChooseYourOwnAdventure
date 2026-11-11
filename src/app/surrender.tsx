import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Begin() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
The Crossroads Academic Honesty Police break down the door to your bedroom. 20 officers run in with rifles in hand and full riot gear. One of them steps towards you and says:{'\n'}{'\n'} "We heard that you lied to your teacher about using AI on an assignment. In fact, it was AI green-lighted, so you're not in trouble at all. Things could've gone a lot worse if you'd fled! We've had that happen before. It's not pretty. Anyway, try not to lie again".{'\n'}{'\n'} He gives you a tap on the nose and then they all leave. You're safe.
</Text>
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

  italictext: {
    color: '#060606',
    fontSize: 20,
    fontStyle: 'italic',
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
