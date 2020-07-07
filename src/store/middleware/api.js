
import http from "../../services/httpService";
import {getJwt} from "../../services/authService";
import * as actions from "./apiActions";
import config from "../../services/config.json";
import {isLocalhost} from '../../serviceWorker';



http.setJwt(getJwt());

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const {
    url,
    method,
    data,
    onStart,
    onSuccess,
    onError,
    info,
  } = action.payload;

  if (onStart)
    dispatch({
      type: onStart,
      payload: {
        info: info,
      },
    });

  next(action);

  try {
    const response = await http.request({
      baseURL: isLocalhost? config.apiUrl : config.apiUrlFromSource,
      url,
      method,
      data,
    });

    
    // General
   dispatch(actions.apiCallSuccess(response.data));
//    // Specific
    if (onSuccess)
      dispatch({
        type: onSuccess,
        payload: {
          data: response.data,
          info: info,
        },
      });
  } catch (error) {
    // General
    // dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError)
      dispatch({
        type: onError,
        payload: {
          error: error.message,
          info: info,
        },
      });
  }
};

export default api;
