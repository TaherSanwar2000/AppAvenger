import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Notification = () => {
  return (
    <View style={{flex: 1, padding: 15, backgroundColor: '#fff'}}>
      <View style={styles.Container}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.LetterTag}>
            <Text style={{fontSize: 24, color: '#fff'}}>A</Text>
          </View>
        </View>

        <View style={styles.CardContainer}>
          <View>
            <View style={styles.CardAling}>
              <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
                Abhishek Schedule a meeting
              </Text>
              <Text style={{fontSize: 12, color: '#808080', marginLeft: 15}}>
                6:30pm
              </Text>
            </View>
            <Text style={{fontSize: 12, color: '#000'}}>25 December, 2023</Text>
            <View style={styles.ButtonAlign}>
              <View style={styles.DeclineContainer}>
                <Text style={styles.ButtonText}>Decline</Text>
              </View>
              <View style={styles.AcceptContainer}>
                <Text style={styles.ButtonText}>Accept</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notification;
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  LetterTag: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#d7837f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
  },
  CardAling: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ButtonAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  DeclineContainer: {
    backgroundColor: 'red',
    borderRadius: 25,
    padding: 6,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  AcceptContainer: {
    backgroundColor: 'blue',
    borderRadius: 25,
    padding: 6,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginLeft: 5,
  },
});
