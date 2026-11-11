import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Begin() {
  return (
    <View style={styles.container}>
    <Image source={require('../../assets/images/newlogo.png')} style={styles.image}/>
      <Text style={styles.text}>
You manage to make it to your neighbour's backyard, and you think you're safe.
But lo and behold! The academic honesty police have evicted your neighbour and taken over their house to use as a headquarters. You are captured. {'\n'}{'\n'}
It turns out you were never in violation of the AI policy. The armed forces in full tactical gear were only coming to politely tell you that lying to teacher is bad, and that you should always read assignment guidelines first because the assignment was in fact an AI green-light. However, because you tried to flee from them, you are sentenced to a fate much worse than death: Designing the new Crossroads logo.
</Text>
      <Link href="/begin" style={styles.link}>Try Again</Link>
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

  image: {
    marginTop: 85,
    width: 220,
    height: 140,
    marginBottom: 20,
  },

});
