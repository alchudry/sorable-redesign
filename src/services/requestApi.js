export const requestApi = ({path = "", method = "GET", data = null, onSuccess = () => {}, label = "", headersOverride = ""}) => {
  return {
    type: label, payload: { path, method, data, onSuccess, headersOverride }
  };
}