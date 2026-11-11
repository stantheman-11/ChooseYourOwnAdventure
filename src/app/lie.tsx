import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Begin() {
  return (
    <View style={styles.container}>
    <Image source={require('../../assets/images/swat team.png')} style={styles.image}></Image>
      <Text style={styles.text}>Your teacher appears to believe your lie! You go about the rest of your day as normal.{'\n'}{'\n'}
        But suddenly....in the middle of the night, you are woken up by the sound of your burglar alarm. You look out the window to see what's going on.{'\n'}{'\n'}

The Crossroads Academic Honesty Police have entered your home in full tactical gear.</Text>
      <Link href="/run" style={styles.link}>Jump out of the opposite window into your garden and make a run for it</Link>
      <Link href="/surrender" style={styles.link}>Surrender and face severe penalties</Link>
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
    marginTop: 80,
    width: 250,
    height: 150,
    marginBottom: 20,
  },
});
