import axios from 'axios';
import { extend } from './ObjectUtils';

const defaults = {
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  methods: "post",
  url: "",
  async: true,
  data: {},
  onSuccess: function() {},
  onError: function() {}
};

export default function callApi(options) {
  let settings = extend(defaults, options);
  debugger;
  if (settings.async) {
    callAsyncApi(settings);
  } else {
    callSyncApi(settings);
  }
}

function callSyncApi(settings) {
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
        const response = await resolveAfter2Seconds();
        onSuccess(response, settings);
    }
    catch(error) {
        onError(error, settings);
    }
}

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

function onSuccess(response, settings) {
  settings.onSuccess(response);
}

function onError(error, settings) {
  settings.onError(error);
}
