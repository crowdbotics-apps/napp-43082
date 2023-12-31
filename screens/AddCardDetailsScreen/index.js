import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Image } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput placeholder="First Name" style={styles.input} />
      <TextInput placeholder="Last Name" style={styles.input} />
      <TextInput placeholder="Address Line 1" style={styles.input} />
      <TextInput placeholder="Address Line 2" style={styles.input} />
      <TextInput placeholder="City" style={styles.input} />
      <TextInput placeholder="State" style={styles.input} />
      <TextInput placeholder="Zip" style={styles.input} />
      <TextInput placeholder="Country" style={styles.input} />
      <TextInput placeholder="Card Number" style={styles.input} />
      <TextInput placeholder="Card Expiration date" style={styles.input} />
      <TextInput placeholder="CVV" style={styles.input} />
      <View style={styles.buttonContainer}>
        <Button title="Update" onPress={() => {}} />
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ConfirmationPopUp");
    }}><Text style={styles.IMIWOHms}>{"confirmation pop up"}</Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    marginTop: 20
  },
  IMIWOHms: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default ScreenComponent;