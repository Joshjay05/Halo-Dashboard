import { useEffect, useState } from 'react';
import {createContext, useContext} from 'react;'
import PropTypes from 'prop-types'
// export

const ThemeContext=createContext(
//     {
//     themeMode:'light',
//     darkTheme:()=>{},
//     lightTheme:()=>{}
// }
);


export const ThemeProvider =({children})=>{
    const [themeMode, setThemeMode]=useState('');
    const darkTheme=()=>{
        setThemeMode('dark')
    };
    const lightTheme=()=>{
      setThemeMode('light')  
    }
    const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
ThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
  
};

    useEffect(()=>{
        document.querySelector('html').classList.remove('dark','light')
        document.querySelector('html').classList.add(themeMode)
    },[themeMode])

    return(
       < ThemeContext.Provider value={{themeMode, darkTheme,lightTheme,toggleTheme}}>
       {children}
       </ThemeContext.Provider> 

    )};


export default function useTheme(){
    return useContext(ThemeContext);
}