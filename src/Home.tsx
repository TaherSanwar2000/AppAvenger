import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

const Home = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState('Start Date');
  const [endDate, setEndDate] = useState('End Date');
  const [isCalendarVisibleStart, setCalendarVisibleStart] = useState(false);
  const [isCalendarVisibleEnd, setCalendarVisibleend] = useState(false);

  const handleStartDate = date => {
    const formattedDate = moment(date).format('ddd, DD MMM YYYY');

    setStartDate(formattedDate);
    setCalendarVisibleStart(false);
  };
  const handleEndDate = date => {
    const formattedDate = moment(date).format('ddd, DD MMM YYYY');

    setEndDate(formattedDate);
    setCalendarVisibleend(false);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Image
            source={require('../Icon/filter.png')}
            style={styles.IconStyle}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
          Home
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image
              source={require('../Icon/notification.png')}
              style={styles.IconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('History')}>
            <Image
              source={require('../Icon/history.png')}
              style={[styles.IconStyle, {marginLeft: 10}]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#f2f2f2', padding: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.UpcomingContainer}></View>
          <Text style={styles.UpcomingText}>Upcoming</Text>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 16, color: '#000'}}>Fri</Text>
            <View style={styles.FriContainer}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
                3
              </Text>
            </View>
          </View>

          <View style={styles.MeetingContainer}>
            <View>
              <Text style={{fontSize: 18, color: '#000'}}>
                Meeting For Business
              </Text>
              <Text style={{fontSize: 12, color: '#808080'}}>
                7:35-8:30 P.M.
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../Icon/userIn.png')}
                style={{width: 20, height: 20}}
              />
              <Text style={{fontSize: 18, color: 'skyblue'}}> 2</Text>
            </View>
          </View>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 16, color: '#000'}}>Sat</Text>
            <View style={styles.SatContainer}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                4
              </Text>
            </View>
          </View>

          <View style={styles.FamilyContainer}>
            <View>
              <Text style={{fontSize: 18, color: '#000'}}>
                Family Night Plan
              </Text>
              <Text style={{fontSize: 12, color: '#808080'}}>
                9:35-10:30 P.M.
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../Icon/userIn.png')}
                style={{width: 20, height: 20}}
              />
              <Text style={{fontSize: 18, color: 'skyblue'}}> 4</Text>
            </View>
          </View>
        </View>
        <View
          style={{alignItems: 'flex-end', justifyContent: 'flex-end', flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Create')}
            style={styles.FloatingButtonContainer}>
            <Text
              style={{
                fontSize: 40,
                color: '#fff',
                fontWeight: 'bold',
                bottom: 5,
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={showModal}>
        <View style={styles.ModalContainer}>
          <View style={styles.ModalInnerContainer}>
            <View style={styles.ApplyAndFilter}>
              <Text style={{fontSize: 18, color: '#000'}}>Filter</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text style={{fontSize: 18, color: 'blue', fontWeight: 'bold'}}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.StartAndEndAlign}>
              <Text style={styles.StartAndEndText}>Start Date</Text>
              <Text style={styles.StartAndEndText}>End Date</Text>
            </View>
            <View style={styles.StartAndEndButton}>
              <TouchableOpacity
                onPress={() => setCalendarVisibleStart(true)}
                style={styles.StartAndEndContainer}>
                <Text style={styles.StartAndEndText}>{startDate}</Text>
              </TouchableOpacity>
              <Text>---------</Text>
              <TouchableOpacity
                onPress={() => setCalendarVisibleend(true)}
                style={styles.StartAndEndContainer}>
                <Text style={styles.StartAndEndText}>{endDate}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {isCalendarVisibleStart ? (
            <View style={{width: '90%', marginTop: 10}}>
              <Calendar onDayPress={day => handleStartDate(day.dateString)} />
            </View>
          ) : isCalendarVisibleEnd ? (
            <View style={{width: '90%', marginTop: 10}}>
              <Calendar onDayPress={day => handleEndDate(day.dateString)} />
            </View>
          ) : null}
        </View>
      </Modal>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#808080',
  },
  IconStyle: {width: 25, height: 25},
  UpcomingContainer: {
    backgroundColor: 'blue',
    width: 3,
    height: 20,
    borderRadius: 10,
  },
  UpcomingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 10,
  },
  FriContainer: {
    backgroundColor: 'blue',
    height: 30,
    width: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MeetingContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
  },
  SatContainer: {
    height: 30,
    width: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FamilyContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
  },
  FloatingButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalInnerContainer: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  ApplyAndFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#808080',
    padding: 10,
  },
  StartAndEndAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '10%',
  },
  StartAndEndText: {
    fontSize: 16,
    color: '#000',
  },
  StartAndEndButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    alignItems: 'center',
  },
  StartAndEndContainer: {
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 10,
  },
});
