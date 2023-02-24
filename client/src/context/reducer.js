import { initialState } from "./appContext"

const reducer = (state,action)=>{

  if(action.type === 'STOP_USER_LOADING'){
    return{...state, userLoading:false}
  }
  if(action.type === 'DISPLAY_ALERT'){
    return{...state, showAlert:true, textAlert:action.payload.label,typeAlert:action.payload.status}
  }
  if(action.type === 'CLEAR_ALERT'){
    return{...state, showAlert:false, textAlert:'',typeAlert:''}
  }
  if(action.type === 'START_LOADING'){
    return{...state, loading:true}
  }
  if(action.type === 'STOP_LOADING'){
    return{...state, loading:false}
  }
  if (action.type === 'LOGOUT_USER') {
    return {
      ...initialState,
      userLoading: false,
    };
  }
  if (action.type === 'SETUP_USER') {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
    };
  }
}

export default reducer