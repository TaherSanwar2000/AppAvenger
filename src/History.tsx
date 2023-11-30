import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const History = () => {
  return (
    <View style={{flex: 1, padding: 15}}>
      <View style={styles.Container}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 16, color: '#000'}}>Sat</Text>
          <View style={styles.DateContainer}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
              4
            </Text>
          </View>
        </View>

        <View style={styles.CardContainer}>
          <View>
            <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
              Abhishek Schedule a meeting on 4 Saturday,2023
            </Text>
            <View style={styles.ClickContainer}>
              <Text style={{fontSize: 16, color: '#000'}}>
                Click for detail
              </Text>
              <Text style={{fontSize: 12, color: '#808080'}}>6:30pm</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default History;
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  DateContainer: {
    height: 30,
    width: 30,
    borderRadius: 25,
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
  ClickContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
