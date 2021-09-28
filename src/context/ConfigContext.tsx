import  React, { createContext, ReactNode, useState } from "react";


export interface Config {
   timePomodoro: number;
   changeTimePomodoro: (pomodoro: number) => void;
   timeShortBreak: number;
   changeTimeShortBreak: (shortBreak: number) => void;
   timeLongBreak: number;
   changeTimeLongBreak: (longBreak: number) => void;
   font: string;
   changeFont: (font: string) => void;
   color: string;
   changeColor: (color: string) => void;
}

export const ConfigContext = createContext({} as Config );
export function ConfigProvider({ children} : {children : ReactNode}) {
   const [timePomodoro, setTimePomodoro] = useState<number>(25);
   const [timeShortBreak, setTimeShortBreak] = useState<number>(5);
   const [timeLongBreak, setTimeLongBreak] = useState<number>(15);
   const [font, setFont] = useState<string>("");
   const [color, setColor] = useState<string>('#f87070');


   function changeTimePomodoro(pomodoro: number) {
      setTimePomodoro(pomodoro);
   }  
   function changeTimeShortBreak(shortBreak: number) {
      //Depois salvar em localstorage
      setTimeShortBreak(shortBreak);
   }  
   function changeTimeLongBreak(longBreak: number) {
      setTimeLongBreak(longBreak);
   }
   function changeFont(f : string) {
      setFont(f);
   }
   function changeColor(c : string) {
      setColor(c);
   }

   function saveConfig(){
      //salvar em localstorage
   }

   return (
      <ConfigContext.Provider value={{
         timePomodoro,
         timeShortBreak,
         timeLongBreak, 
         font, 
         color,
         changeTimePomodoro, 
         changeTimeShortBreak, 
         changeTimeLongBreak, 
         changeFont, 
         changeColor
      }}>
            {children}
        </ConfigContext.Provider>
    );

}
