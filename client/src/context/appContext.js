import { createContext,useContext,useReducer } from "react";
import reducer from "./reducer";
import axios from 'axios'

const appContext = createContext()

export const initialState = {
  userLoading:false,
  showAlert:false,
  textAlert:'',
  typeAlert:'',
  loading:false,
  user:null,
  userLocation:'',
  jobLocation:''

}

const AppProvider = ({children})=>{
  const [state,dispatch] = useReducer(reducer,initialState)

  const logoutUser = async () => {
    await authFetch.get('/auth/logout');
    dispatch({ type: 'LOGOUT_USER' });
  };

  const authFetch = axios.create({
    baseURL: '/api/v1',
  });

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const setupUser = async (currentUser, endPoint, alertText,fn) => {
    try {
      const {data} = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );
      const { user, location } = data;
      dispatch({
        type: 'SETUP_USER',
        payload: { user, location },
      });
      displayAlert(alertText,'success')
      fn()
    } catch (error) {
      displayAlert(error.response.data.msg,'error')
      if(error?.response?.status === 429){
        displayAlert('Too many request, Plase wait!','error')

      }
    }
    stopLoading()
  };

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
    setupUser,
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