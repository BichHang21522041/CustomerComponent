import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {IMG_RN} from './src/assets/images';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}></View>

      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.container2}>
            <Image source={IMG_RN} style={styles.imgRN}></Image>
            <View>
              <Text style={styles.text}>Tony Shark</Text>
              <Text style={styles.text1}>CEO</Text>
            </View>
          </View>

          <View style={styles.container3}>
            <Text style={styles.text2}>Phone: 322-1234-9999</Text>
            <Text style={styles.text3}>Email: tony@ironman.marvel</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#63b1d0',
    alignItems: 'center',
  },


  boxContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#1dab9c',
    width: 280,
    marginTop: 25,
    marginBottom: 25,
  },

  container2: {
    flex: 2.55,
    position: 'relative',
    flexDirection: 'row',
  },

  container3: {
    flex: 2,
    position: 'relative',
    flexDirection: 'column',
  },

  imgRN: {
    position: 'relative',
    resizeMode: 'cover',
    width: '30%',
    height: '70%',
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 50,
  },

  text: {
    color: 'white',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 30,
  },

  text1: {
    color: 'white',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5,
  },

  text2: {
    color: 'white',
    fontSize: 15,
    marginLeft: 30,
    marginTop: 20,
  },

  text3: {
    color: 'white',
    fontSize: 15,
    marginLeft: 30,
    marginTop: 5,
  },
});
