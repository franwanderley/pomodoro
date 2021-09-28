import React, { useContext } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input';
import { ConfigContext } from '../context/ConfigContext';

interface SettingsProps{
   isOpenModal: boolean;
   changeOpenModal: () => void;
}

export function Settings ({isOpenModal, changeOpenModal} : SettingsProps){
   const {
      timePomodoro, timeShortBreak, timeLongBreak, font, color,changeTimePomodoro,
      changeTimeLongBreak, changeTimeShortBreak, changeColor, changeFont
   } = useContext(ConfigContext);
   return (
      <Modal
          visible={isOpenModal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => changeOpenModal()}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
               <View style={styles.header}>
                  <Text style={styles.title}>Settings</Text>
               <TouchableOpacity onPress={changeOpenModal}>
                  <Icon 
                     style={{color: '#000', fontSize: 30 }} 
                     name="x"
                  />
               </TouchableOpacity>  
               </View>
               <View style={styles.line}/>
               <Text style={[styles.subTitle, {alignSelf: 'flex-start', marginBottom: 10}]}>TIME (MINUTES)</Text>
               <View style={styles.time}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}} >
                     <Text style={styles.label}>pomodoro</Text>
                     <NumericInput 
                        value={timePomodoro}
                        type="up-down" 
                        onChange={changeTimePomodoro} 
                        totalWidth={70} 
                        totalHeight={40} 
                        step={5}
                        valueType='integer'
                        rounded 
                        textColor='#000'
                        containerStyle={{backgroundColor: '#f0f0fc'}}
                     />
                  </View>
                  <View style={{flexDirection: 'column', alignItems: 'center'}} >
                     <Text style={styles.label}>short break</Text>
                     <NumericInput 
                        value={timeShortBreak}
                        type="up-down" 
                        onChange={changeTimeShortBreak} 
                        totalWidth={70} 
                        totalHeight={40} 
                        step={5}
                        valueType='integer'
                        rounded 
                        textColor='#000'
                        containerStyle={{backgroundColor: '#f0f0fc'}}
                     />
                  </View>
                  <View style={{flexDirection: 'column', alignItems: 'center'}} >
                     <Text style={styles.label}>long break</Text>
                     <NumericInput 
                        value={timeLongBreak}
                        type="up-down" 
                        onChange={changeTimeLongBreak} 
                        totalWidth={70}
                        totalHeight={40} 
                        step={5}
                        valueType='integer'
                        rounded 
                        textColor='#000'
                        containerStyle={{backgroundColor: '#f0f0fc'}}
                     />
                  </View>
               </View>
               <View style={styles.line}/>
               <View style={styles.fonts}>
                  <Text style={styles.subTitle}>FONT</Text>
                  <View style={{flexDirection: 'row'}}>
                     <TouchableOpacity onPress={() => changeFont('sei lá')}>
                        <Text style={[styles.font, {backgroundColor: '#000', color: '#fff'}]}>Aa</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => changeFont('sei lá')}>
                        <Text style={styles.font}>Aa</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => changeFont('sei lá')}>
                        <Text style={styles.font}>Aa</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.line} />
               <View style={styles.fonts}>
                  <Text style={styles.subTitle}>COLOR</Text>
                  <View style={{flexDirection: 'row'}}>
                     <TouchableOpacity 
                        onPress={() => changeColor("#f87070")}
                        style={[styles.color, {backgroundColor: '#f87070'}]}
                     >
                        {color === '#f87070' && 
                           <Icon name="check" size={20} color="#000"/>
                        }
                     </TouchableOpacity>
                     <TouchableOpacity 
                        onPress={() => changeColor("#6ef4f6")}
                        style={[styles.color, {backgroundColor: '#6ef4f6'}]}
                     >
                        {color === '#6ef4f6' && 
                           <Icon name="check" size={20} color="#000"/>
                        }
                     </TouchableOpacity>
                     <TouchableOpacity 
                        onPress={() => changeColor("#d981f8")}
                        style={[styles.color, {backgroundColor: '#d981f8'}]}
                     >
                        {color === '#d981f8' && 
                           <Icon name="check" size={20} color="#000"/>
                        }
                     </TouchableOpacity>
                  </View>
               </View>
               <TouchableOpacity 
                  activeOpacity={.9} 
                  style={[styles.btnForm, {backgroundColor: color}]}
                  onPress={changeOpenModal}
                  >
                  <Text style={{fontSize:15, color: "#fff"}}>Apply</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   );
}

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },

   modalView: {
      width: '80%',
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    line: {
      width: '100%',
      marginVertical: 10,
      height: 1,
      backgroundColor: '#ccc',
    },
    title: {
      fontWeight: '700',
      fontSize: 25,
      color: '#4f2d43',
      textAlign: 'center',
    },
    subTitle: {
      fontWeight: '600',
      textAlign: 'left',
      fontSize: 15,
      color: '#4f2d43',
    },
    time: {
      width: '100%',
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      color: "#4f2d43",
      marginBottom: 10,
      fontWeight: '400',
      fontSize: 10,
    },
    fonts: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    font: {
      fontSize: 15,
      paddingVertical: 8,
      paddingHorizontal: 9,
      marginHorizontal: 5,
      borderRadius: 100,
      backgroundColor: '#f0f0fc',
    },
    color: {
       width: 35,
       height: 35,
       borderRadius: 20,
       marginHorizontal: 5,
       alignItems: 'center',
       justifyContent: 'center',
    },
    btnForm:{
      paddingHorizontal: 40,
      paddingVertical:15,
      borderRadius: 30,
      position: 'relative',
      bottom: -35,
    }
})