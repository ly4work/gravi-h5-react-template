import axios from 'axios';
import config, { tokenHeaderMap, whiteList, ssoList } from './config';
import { entryUnique } from '@/utils/utils';
import _ from 'lodash';
import { logout } from '@/utils/logout';
import { Toast } from 'zarm';
import SsoSDK from 'gj-sso-sdk';
const axiosInstance = axios.create({
  baseURL: config.baseURL,
  timeout: 1000 * 10,
});

const CancelToken = axios.CancelToken;

const showError = (text) => {
  debounce(() => {
    Toast.show(text);
    // Message.error(text);
  }, 1000)();
};

// 拦截器，同样信息只弹出一次
function debounce(fn, wait) {
  let timerId = null;
  let flag = true;
  return function () {
    clearTimeout(timerId);
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
    }
    timerId = setTimeout(() => {
      flag = true;
    }, wait);
  };
}

//  request拦截器
axiosInstance.interceptors.request.use(
  function (config) {
    const token = SsoSDK.getToken();
    const newConfig = _.cloneDeep(config);
    if (NO_AUTH) {
      return newConfig;
    }
    //  没有token时，登录页不进行重定向
    if (token) {
      newConfig.headers[tokenHeaderMap.DDingAuthHeader] = token;
      newConfig.cancelToken = new CancelToken((c) => {
        entryUnique(config, c);
      });
    } else {
      //  否则重定向
      newConfig.cancelToken = new CancelToken((c) => {
        c();
        Toast.show('登录超时，请重新登录');
        logout();
      });
    }

    return newConfig;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// response 拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    const res = response.data;
    console.log(res);
    // TODO这里mock
    return res;
    switch (res.code) {
      // 200 成功
      case 200:
        return res;
      // 215 未登录或登录已过期
      case 215:
        if (!NO_AUTH) {
          logout();
        }
        return res;
      default:
        showError(`${res.msg}`);
        return Promise.reject(res.msg);
    }
  },
  (err) => {
    console.log(err);
    showError(err.message || '');
    return Promise.reject(err.response);
  },
);

export default axiosInstance;
