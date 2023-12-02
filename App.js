import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Today's Task*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
      </View>
      <View style={styles.items}> 
         {/*this is where the tasks will go */}
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>
          
      </View>

      {/* WRITE A TASK */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios ? "padding" :}
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    frontweight: 'bold',
  },
  items:{
    marginTop:30,
  },
});
