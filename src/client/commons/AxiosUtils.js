import axios from "axios";
import { extend } from "./ObjectUtils";

const defaults = {
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  method: "post",
  url: "",
  async: false,
  data: {},
  onSuccess: function() {},
  onError: function() {}
};

export default function callApi(options) {
  let settings = extend(defaults, options);
  if (settings.async) {
    callAsyncApi(settings);
  } else {
    callSyncApi(settings);
  }
}

function callSyncApi(settings) {
  console.log(settings);
  axios(settings)
    .then(function(response) {
      onSuccess(response, settings);
    })
    .catch(function(error) {
      onError(error, settings);
    });
}

async function callAsyncApi(settings) {
  try {
    console.log(settings);
    let response = await axios(settings);
    onSuccess(response, settings);
  } catch (error) {
    onError(error, settings);
  }
}

function onSuccess(response, settings) {
  settings.onSuccess(response);
}

function onError(error, settings) {
  console.log("error: "+error);
  settings.onError(error);
}
