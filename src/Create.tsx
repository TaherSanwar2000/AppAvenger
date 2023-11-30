import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const Create = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [search, setSearch] = useState('');

  return (
    <View style={{flex: 1, padding: 15}}>
      <View style={styles.Container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../Icon/close.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.CreateButtonContainer}>
          <Text style={styles.CreateButtonText}>Create</Text>
        </TouchableOpacity>
      </View>

      <View style={{borderBottomWidth: 1, borderColor: '#fa8072'}}>
        <TextInput
          style={{fontSize: 18, color: 'black'}}
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder="Add Title"
          placeholderTextColor="#fa8072"
        />
      </View>

      <View>
        <View style={styles.AllDayContainer}>
          <Image
            source={require('../Icon/clock.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={styles.AllDayText}>All Day</Text>
        </View>

        <View style={styles.DateContainer}>
          <View>
            <View style={styles.InnerDateContainer}>
              <Text style={{fontSize: 16, color: 'black'}}>
                Sat, 25 Dec 2023
              </Text>
            </View>
            <View style={{alignItems: 'center', marginVertical: 5}}>
              <Image
                source={require('../Icon/dotted.png')}
                style={{height: 30, width: 30}}
              />
            </View>
            <View style={styles.InnerDateContainer}>
              <Text style={{fontSize: 16, color: 'black'}}>
                Sat, 29 Dec 2023
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.InnerDateContainer}>
              <Text style={{fontSize: 16, color: 'black'}}>12:30 pm</Text>
            </View>
            <View style={[styles.InnerDateContainer, {marginTop: '40%'}]}>
              <Text style={{fontSize: 16, color: 'black', textAlign: 'center'}}>
                11:30 pm
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{marginTop: '6%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../Icon/addNote.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={{fontSize: 18, color: 'black', marginLeft: '5%'}}>
            Add Note
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: '5%'}}>
          <View style={styles.NoteInput}>
            <TextInput
              value={note}
              onChangeText={text => setNote(text)}
              style={{fontSize: 15, color: '#000'}}
            />
          </View>
        </View>

        <View style={{marginTop: '6%'}}>
          <View style={styles.AddPeopleContainer}>
            <Image
              source={require('../Icon/group.png')}
              style={{width: 25, height: 25}}
            />
            <View style={{width: '90%'}}>
              <Text style={{fontSize: 18, color: 'black', marginLeft: '5%'}}>
                Add People
              </Text>
              <View style={styles.SearchInput}>
                <TextInput
                  value={search}
                  onChangeText={text => setSearch(text)}
                  placeholder="Search People"
                  placeholderTextColor="gray"
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
          <View style={styles.NameContainer}>
            <Text style={{fontSize: 16, color: '#000'}}>Abhishek</Text>
          </View>
          <View
            style={[
              styles.NameContainer,
              {
                marginHorizontal: 8,
              },
            ]}>
            <Text style={{fontSize: 16, color: '#000'}}>Vaibhav</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Create;
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CreateButtonContainer: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
    paddingHorizontal: 25,
  },
  CreateButtonText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
  AllDayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },
  AllDayText: {
    fontSize: 18,
    color: 'black',
    marginLeft: '5%',
  },
  DateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderColor: '#808080',
  },
  InnerDateContainer: {
    backgroundColor: '#fff',
    elevation: 5,
    padding: 10,
    borderRadius: 20,
  },
  NoteInput: {
    width: 300,
    height: 100,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 25,
  },
  AddPeopleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderColor: 'gray',
  },
  SearchInput: {
    backgroundColor: '#fff',
    elevation: 5,
    width: '100%',
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  NameContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 5,
    padding: 10,
    alignItems: 'center',
  },
});
