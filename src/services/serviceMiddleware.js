import axios from 'axios';

const defaultHeaders = {};
let headers = { ...defaultHeaders };
const BASE_URL = 'http://localhost:3000/api';

const serviceMiddleWare = ({ dispatch }) => next => action => {
  next(action);
  
  const { path, method, data, onSuccess, headersOverride } = action.payload;
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";
  const url = BASE_URL + path;

  if (headersOverride) {
    headers = {
      ...headers,
      ...headersOverride
    };
  }
  axios.request({
    url,
    method,
    headers,
    [dataOrParams]: data
  }).then(({ data }) => {
    dispatch(onSuccess(data));
  }).catch((error) => {
    if(error.response){
      console.log(error);
    }
  });
};

export default serviceMiddleWare;