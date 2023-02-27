import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === 'STOP_USER_LOADING') {
    return { ...state, userLoading: false };
  }
  if (action.type === 'DISPLAY_ALERT') {
    return { ...state, showAlert: true, textAlert: action.payload.label, typeAlert: action.payload.status };
  }
  if (action.type === 'CLEAR_ALERT') {
    return { ...state, showAlert: false, textAlert: '', typeAlert: '' };
  }
  if (action.type === 'START_LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'STOP_LOADING') {
    return { ...state, loading: false };
  }
  if (action.type === 'RE_RENDER') {
    return { ...state, rerender: !rerender };
  }
  if (action.type === 'SET_ID_JOB') {
    return { ...state, editJobId: action.id, propsEdit: action.propsEdit, isEditing: true };
  }
  if (action.type === 'CLEAR_EDIT') {
    return { ...state, editJobId: '', isEditing: false, propsEdit: null };
  }
  if (action.type === 'LOGOUT_USER') {
    return {
      ...initialState,
      userLoading: false,
    };
  }
  if (action.type === 'SET_CHANGE') {
    return {
      ...initialState,
      [action.payload.name]: action.payload.value,
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
  if (action.type === 'SETUP_JOBS') {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
};

export default reducer;
