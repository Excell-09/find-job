import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import axios from 'axios';
import BigLoadingPage from '../components/BigLoadingPage';

const appContext = createContext();

export const initialState = {
  userLoading: true,
  showAlert: false,
  textAlert: '',
  typeAlert: '',
  loading: false,
  user: null,
  userLocation: '',
  isEditing: false,
  editJobId: '',
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCurrentUser = async () => {
    try {
      const { data } = await authFetch('/auth/getCurrentUser');
      const { user, location } = data;

      dispatch({
        type: 'SETUP_USER',
        payload: { user, location },
      });
      dispatch({ type: 'STOP_USER_LOADING' });
    } catch (error) {
      if (error.response.status === 401) return;
      logoutUser();
    }
  };

  useEffect(() => {
    getCurrentUser();
    // eslint-disable-next-line
  }, []);

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
      if (error?.response?.status === 429) {
        displayAlert('Too many request, Plase wait!', 'error');
      }
      return Promise.reject(error);
    }
  );

  const setupUser = async (currentUser, endPoint, alertText, fn) => {
    try {
      const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser);
      const { user, location } = data;
      dispatch({
        type: 'SETUP_USER',
        payload: { user, location },
      });
      displayAlert(alertText, 'success');
      fn();
    } catch (error) {
      displayAlert(error.response.data.msg, 'error');
    }
    stopLoading();
  };

  const updateUser = async (currentUser, fn) => {
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser);
      const { user, location } = data;

      dispatch({
        type: 'SETUP_USER',
        payload: { user, location },
      });
      fn();
    } catch (error) {
      displayAlert(error.response.data.msg, 'error');
      if (error.response.data.msg === 'email field has to be unique') {
        displayAlert('Email Already Exits!', 'error');
      }
    }
    stopLoading();
  };

    const getJobs = async () => {
      const { page, search, searchStatus, searchType, sort } = state;

      let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
      if (search) {
        url = url + `&search=${search}`;
      }
      dispatch({ type: GET_JOBS_BEGIN });
      try {
        const { data } = await authFetch(url);
        const { jobs, totalJobs, numOfPages } = data;
        dispatch({
          type: '',
          payload: {
            jobs,
            totalJobs,
            numOfPages,
          },
        });
      } catch (error) {
        logoutUser();
      }
      clearAlert();
    };

  const startLoading = () => {
    dispatch({ type: 'START_LOADING' });
  };
  const stopLoading = () => {
    dispatch({ type: 'STOP_LOADING' });
  };

  const displayAlertClear = (label, status) => {
    dispatch({ type: 'DISPLAY_ALERT', payload: { label, status } });
    setTimeout(() => {
      clearAlert();
    }, [2000]);
  };

  const displayAlert = (label, status) => {
    dispatch({ type: 'DISPLAY_ALERT', payload: { label, status } });
  };

  const clearAlert = () => {
    dispatch({ type: 'CLEAR_ALERT' });
  };

  const value = {
    ...state,
    setupUser,
    displayAlert,
    clearAlert,
    displayAlertClear,
    startLoading,
    stopLoading,
    updateUser,
    logoutUser,
  };

  return <appContext.Provider value={value}>{state.userLoading ? <BigLoadingPage /> : children}</appContext.Provider>;
};

export const useAppContext = () => useContext(appContext);

export default AppProvider;
