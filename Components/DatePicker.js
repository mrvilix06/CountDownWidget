import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    datePicker: {
      width: 250,
    },
    button: {
      marginTop: 20,
      backgroundColor: '#1a73e8',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
  });

export default function HomeDatePicker() {

  const [selectedDate, setSelectedDate] = useState(new Date());


  function saveDate() {
    alert(`Date sauvegardée : ${selectedDate}`);
  };

  function isToday(date) {
    const today = new Date();
    const d = new Date(date);
    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Date Sélectionné : {isToday(selectedDate) ? "Today" : selectedDate}</Text>
      <Text style={styles.title}>Sélectionnez une date :</Text>
      <DatePicker
        style={styles.datePicker}
        date={selectedDate}
        mode="date"
        placeholder="Sélectionnez une date"
        format="DD/MM/YYYY"
        confirmBtnText="Confirmer"
        cancelBtnText="Annuler"
        onDateChange={(date) => setSelectedDate(date)}
      />
      <TouchableOpacity style={styles.button} onPress={saveDate}>
        <Text style={styles.buttonText}>Sauvegarder la date</Text>
      </TouchableOpacity>
    </View>
  );
};
