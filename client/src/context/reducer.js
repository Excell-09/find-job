const reducer = (state,action)=>{

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
}

export default reducer