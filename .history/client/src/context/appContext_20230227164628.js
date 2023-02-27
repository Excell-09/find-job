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
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  propsEdit: null,
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
    } catch (error) {
      if (error.response.status === 401) return;
      logoutUser();
    }
    dispatch({ type: 'STOP_USER_LOADING' });
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
      displayAlertClear('User Updated!', 'success');
    } catch (error) {
      displayAlert(error.response.data.msg, 'error');
      if (error.response.data.msg === 'email field has to be unique') {
        displayAlertClear('Email Already Exits!', 'error');
      }
    }
    stopLoading();
  };

  const getJobs = async ({ page, search, searchStatus, searchType, sort, setPage }) => {
    startLoading();

    let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const { data } = await authFetch(url);
      const { jobs, totalJobs, numOfPages } = data;
      dispatch({
        type: 'SETUP_JOBS',
        payload: {
          jobs,
          totalJobs,
          numOfPages,
        },
      });
      if (numOfPages < page) {
        setPage(1);
      }
    } catch (error) {
      logoutUser();
    }
    stopLoading();
  };
  const getJobsHistory = async ({ page, search, searchStatus, searchType, sort, setPage }) => {
    startLoading();

    let url = `/jobs/history?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const { data } = await authFetch(url);
      const { jobs, totalJobs, numOfPages } = data;
      dispatch({
        type: 'SETUP_JOBS',
        payload: {
          jobs,
          totalJobs,
          numOfPages,
        },
      });
      if (numOfPages < page) {
        setPage(1);
      }
    } catch (error) {
      logoutUser();
    }
    stopLoading();
  };
  const createJob = async ({ position, company, jobLocation, status, jobType }) => {
    startLoading();

    try {
      await authFetch.post('/jobs', {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
    } catch (error) {
      if (error.response.status === 401) return;
      logoutUser();
    }
    stopLoading();
  };

  const setIdJob = ({ id, job }) => {
    dispatch({ type: 'SET_ID_JOB', id: id, propsEdit: job });
  };
  const clearEdit = () => {
    dispatch({ type: 'CLEAR_EDIT' });
  };

  const editJob = async ({ position, company, jobLocation, status, jobType }) => {
    try {
      await authFetch.patch(`/jobs/${state.editJobId}`, {
        company,
        position,
        jobLocation,
        jobType,
        status,
      });
    } catch (error) {
      if (error.response.status === 401) return;
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
  const handleChange = ({ name, value }) => {
    dispatch({ type: 'SET_CHANGE', payload: { name, value } });
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
    getJobs,
    handleChange,
    createJob,
    getJobsHistory,
    editJob,
    setIdJob,
    clearEdit,
  };

  return <appContext.Provider value={value}>{state.userLoading ? <BigLoadingPage /> : children}</appContext.Provider>;
};

export const useAppContext = () => useContext(appContext);

export default AppProvider;
