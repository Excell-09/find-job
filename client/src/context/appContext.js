import { createContext,useContext,useReducer } from "react";
import reducer from "./reducer";

const appContext = createContext()

const initalState = {
  showAlert:false,
  textAlert:'',
  typeAlert:'',
  loading:false
}

const AppProvider = ({children})=>{
  const [state,dispatch] = useReducer(reducer,initalState)

  const login = async() =>{
    
  }

  const startLoading = ()=>{
    dispatch({type:'START_LOADING'})
  }
  const stopLoading = ()=>{
    dispatch({type:'STOP_LOADING'})
  }
  
  const displayAlertClear =(label,status)=>{
    dispatch({type:'DISPLAY_ALERT', payload:{label,status} })
    setTimeout(()=>{clearAlert()},[2000])
  }

  const displayAlert =(label,status)=>{
    dispatch({type:'DISPLAY_ALERT', payload:{label,status} })
  }

  const clearAlert = ()=>{
      dispatch({type:'CLEAR_ALERT'})
  }

  const value = {
    ...state,
    login,
    displayAlert,
    clearAlert,
    displayAlertClear,
    startLoading,
    stopLoading
  }

 
return <appContext.Provider value={value}>{children}</appContext.Provider>
}

export const useAppContext = () => useContext(appContext)

export default AppProvider