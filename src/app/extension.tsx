import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Begin() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You email your teacher and get a reply within a few minutes.{'\n'}{'\n'} He says: "Of course you can have an extension! Turn it in next class"{'\n'}{'\n'} You're safe.</Text>
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
