import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProgresssCircle from 'react-native-progress-circle';
import { Feather as Icon } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Settings } from '../components/Settings';
import { ConfigContext } from '../context/ConfigContext';

export function Home() {
   const { color, timePomodoro, timeShortBreak, timeLongBreak } = useContext(ConfigContext);
   const [typePomodoro, setTypePomodoro] = useState({
      name: "pomodoro", minutes: 1
   });
   console.log(color);
   const [time, setTime] = useState(typePomodoro.minutes * 60);
   const [isActive, setIsActive] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [countPomodoro, setCountPomodoro] = useState(0);
   let countdownTimeout: NodeJS.Timeout;

   useEffect(() => {
      if (isActive && time > 0) {
         countdownTimeout = setTimeout(() => {
            setTime(time - 1);
         }, 1000);
      } else if (isActive && time === 0) {
         setTime(typePomodoro.minutes * 60);
         setIsActive(false);
         setHasFinished(typePomodoro.name);
      } else{
         setTime(typePomodoro.minutes * 60);
         clearTimeout(countdownTimeout);
      }
   }, [time, isActive]);

   function FormatTime() {
      const minutes = String(Math.floor(time / 60)).padStart(2, '0');
      const seconds = String(time % 60).padStart(2, '0');
      return (`${minutes} : ${seconds}`);
   }

   function setHasFinished(tipo: string) {
      if (tipo === "pomodoro") {
         if (countPomodoro === 3) {
            setTypePomodoro({
               name: "long break",
               minutes: 10,
            });
            setCountPomodoro(0);
         }
         else {
            setTypePomodoro({
               name: "short break",
               minutes: 1,
            });
            setCountPomodoro(old => old+1);
            console.log("count: " + countPomodoro);
         }
      }
      else
         setTypePomodoro({
            name: "pomodoro",
            minutes: 2,
         });
   }

   return (
      <View style={styles.container}>
         <Settings 
            isOpenModal={isOpenModal} 
            changeOpenModal={() => setIsOpenModal(old => !old)}
         />
         <View style={styles.header}>
            <Text style={styles.title}>Pomodoro</Text>
            <View style={styles.viewType}>
               <Text style={[styles.type, typePomodoro.name === "pomodoro" && {
                  backgroundColor: color, color: '#4f2d43'
               }]}>pomodoro</Text>
               <Text style={[styles.type, typePomodoro.name === "short break" && {
                  backgroundColor: color, color: '#4f2d43'
               }]}>short break</Text>
               <Text style={[styles.type, typePomodoro.name === "long break" && {
                  backgroundColor: color, color: '#4f2d43'
               }]}>long break</Text>
            </View>
         </View>
         <View style={styles.viewTime}>
            <ProgresssCircle
               percent={time / (typePomodoro.minutes * 60) * 100}
               radius={150}
               borderWidth={5}
               color={color}
               shadowColor="#151932"
               bgColor="#151932"
            >
               <Text style={styles.time}>{FormatTime()}</Text>
               <TouchableOpacity onPress={() => setIsActive(old => !old)}>
                  <Text
                     onPress={() => setIsActive(old => !old)}
                     style={styles.timeOption}
                  >{isActive ? "PAUSE" : "PLAY"}</Text>

               </TouchableOpacity>
            </ProgresssCircle>
         </View>
         <TouchableOpacity onPress={() => setIsOpenModal(true)} style={styles.viewConfig}>
            <Icon 
               style={{ marginTop: 20, color: '#ced8f4', fontSize: 30 }} 
               name="settings" 
            />
         </TouchableOpacity>
         <StatusBar style="light" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#1e2140',
      alignItems: 'center',
      justifyContent: 'center',
   },
   title: {
      color: '#ced8f4',
      fontSize: 30,
      fontWeight: '600',
      marginBottom: 20,
   },
   time: {
      color: '#ced8f4',
      fontSize: 70,
      fontWeight: 'bold',
   },
   header: {
      flexDirection: 'column',
      alignItems: 'center',
   },
   viewType: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
      borderRadius: 100,
      backgroundColor: '#151932',
   },
   type: {
      borderRadius: 100,
      paddingHorizontal: 10,
      paddingVertical: 10,
      color: '#616580',
      fontSize: 15,
   },
   viewTime: {
      marginTop: 60,
   },
   timeOption: {
      fontSize: 15,
      marginTop: 20,
      letterSpacing: 8,
      color: '#ced8f4',
   },
   viewConfig: {
      marginTop: 20,
   }

});
