import axios from 'axios';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

/**
 * EnvType 环境枚举
 * @author liyang
 * @date 2021/04/07
 */
var EnvEnum;
(function (EnvEnum) {
  EnvEnum['Local'] = 'local';
  EnvEnum['Dev'] = 'dev';
  EnvEnum['Test'] = 'test';
  EnvEnum['Uat'] = 'uat';
  EnvEnum['Prod'] = 'prod';
})(EnvEnum || (EnvEnum = {}));

/**
 * SSOAccessTokenKeyDict 中台登录token cookie-key
 * @author liyang
 * @date 2021/04/07
 */
var SSOAccessTokenKeyDict = {
  local: 'local.sso.login.account.operation.auth',
  dev: 'dev.sso.login.account.operation.auth',
  test: 'test.sso.login.account.operation.auth',
  uat: 'uat.sso.login.account.operation.auth',
  prod: 'sso.login.account.operation.auth',
};
/**
 * ServiceDomainDict 网关调用域名
 * @author liyang
 * @date 2021/04/07
 */
var ServiceDomainDict = {
  local: '',
  dev: 'http://gateway-dev.gaojin.com.cn',
  test: 'http://gateway-test.gaojin.com.cn',
  uat: 'http://gateway-uat.gaojin.com.cn',
  prod: 'http://gateway.gaojin.com.cn',
};
/**
 * SSODomainDict 中台PC端单点登录域名
 * @author liyang
 * @date 2021/04/07
 */
var SSODomainDict = {
  local: '',
  dev: 'http://operations-dev.gaojin.com.cn',
  test: 'http://operations-test.gaojin.com.cn',
  uat: 'http://operations-uat.gaojin.com.cn',
  prod: 'http://operations.gaojin.com.cn',
};

/**
 * HttpClient
 * @description Axios Http请求类
 * @author liyang
 * @date 2021/04/07
 */
var HttpClient = /** @class */ (function () {
  function HttpClient() {
    var _this = this;
    /**
     * timeout，请求超时常量
     * @author liyang
     * @date 2021/04/07
     */
    this.TIME_OUT = 1000 * 10;
    /**
     * serviceDomain 网关域名配置
     * @author liyang
     * @date 2021/04/07
     */
    this.serviceDomain = ServiceDomainDict.dev;
    /**
     * create 创建一个实例
     * @param params {env,timemout}
     * @returns axiosInstance
     * @author liyang
     * @date 2021/04/07
     */
    this.create = function (params) {
      _this.serviceDomain = ServiceDomainDict[params.env];
      return _this.init({
        baseURL: _this.serviceDomain,
        timeout: params.timeout || _this.TIME_OUT,
      });
    };
    /**
     * init 初始化axios配置
     * @param params { baseURL, timeout }
     * @returns axiosInstance
     * @author liyang
     * @date 2021/04/07
     */
    this.init = function (params) {
      _this.instance = axios.create({
        baseURL: params.baseURL,
        timeout: params.timeout,
      });
      return _this.setInterceptor(_this.instance);
    };
    /**
     * setInterceptor 初始化axios拦截器
     * @param axiosInstance AxiosInstance
     * @returns axiosInstance
     * @author liyang
     * @date 2021/04/07
     */
    this.setInterceptor = function (axiosInstance) {
      axiosInstance.interceptors.request.use(
        function (config) {
          return config;
        },
        function (error) {
          return Promise.reject(error);
        },
      );
      axiosInstance.interceptors.response.use(
        function (response) {
          var res = response.data;
          switch (res.code) {
            // 200 成功
            case 200:
              return res;
            default:
              return Promise.reject(res.msg);
          }
        },
        function (err) {
          return Promise.reject(err.response);
        },
      );
      return axiosInstance;
    };
    this.instance = null;
  }
  return HttpClient;
})();

var Service = /** @class */ (function () {
  function Service(props) {
    var _this = this;
    /**
     * 获取钉钉签名参数
     * @author liyang
     * @date 2021/04/08
     */
    this.GET_DD_CONFIG_URL = '/api/daily-man/dd/config';
    this.postDDConfig = function (params) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [
            2 /*return*/,
            this.http.post(this.GET_DD_CONFIG_URL, {}, { params: params }),
          ];
        });
      });
    };
    /**
     * 获取中台登录token及钉钉用户信息
     * @author liyang
     * @date 2021/04/08
     */
    this.GET_TOKEN_URL = '/api/daily-man/dd/userInfoVoid';
    this.getToken = function (params) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [
            2 /*return*/,
            this.http.post(this.GET_TOKEN_URL, {}, { params: params }),
          ];
        });
      });
    };
    this.http = new HttpClient().create(props);
  }
  return Service;
})();

/**
 * Cookie 类
 * @author liyang
 * @date 2021/04/08
 */
var Cookie = /** @class */ (function () {
  function Cookie() {}
  /**
   * set 设置cookie
   * @param params { key, value, day, path, domain }
   * @author liyang
   * @date 2021/04/08
   */
  Cookie.set = function (_a) {
    var key = _a.key,
      value = _a.value,
      day = _a.day,
      path = _a.path,
      domain = _a.domain;
    // 1.处理默认保存的路径
    path = path || '/';
    // 2.处理默认保存的domain
    domain = domain || document.domain;
    // 3.处理默认的过期时间
    day = day || 3;
    var date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie =
      key +
      '=' +
      value +
      ';expires=' +
      date.toUTCString() +
      ';path=' +
      path +
      ';domain=' +
      domain +
      ';';
  };
  /**
   * get 读取cookie
   * @param key string
   * @returns string
   * @author liyang
   * @date 2021/04/08
   */
  Cookie.get = function (key) {
    var res = document.cookie.split(';');
    var len = res.length;
    for (var i = 0; i < len; i++) {
      var temp = res[i].split('=');
      if (temp[0].trim() === key) {
        return temp[1];
      }
    }
  };
  /**
   * get 读取cookie
   * @param key string cookie-key
   * @param path string cookie-path
   * @description 默认情况下只能删除默认路径中保存的cookie, 如果想删除指定路径保存的cookie, 那么必须在删除的时候指定路径才可以
   * @returns string
   * @author liyang
   * @date 2021/04/08
   */
  Cookie.remove = function (key, path) {
    Cookie.set({
      key: key,
      value: Cookie.get(key),
      day: -1,
      path: path,
    });
  };
  return Cookie;
})();

/**
 * DB storage存储
 * @author liyang
 * @date 2021/04/09
 */
var DB = /** @class */ (function () {
  function DB() {}
  DB.Store = {
    local: window.localStorage,
    session: window.sessionStorage,
  };
  /**
   * 从缓存提取值
   *
   * @static
   * @param {string} key
   * @returns
   * @memberof DB
   */
  DB.get = function (key, type) {
    if (type === void 0) {
      type = 'local';
    }
    var store = DB.getRealStore(type);
    var value = store.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  };
  /**
   *
   * 写入缓存
   * @static
   * @param {string} key 键
   * @param {string} value 值
   * @memberof DB
   */
  DB.set = function (key, value, type) {
    if (type === void 0) {
      type = 'local';
    }
    var store = DB.getRealStore(type);
    if (typeof value == 'object') {
      store.setItem(key, JSON.stringify(value));
    } else {
      store.setItem(key, value);
    }
    if (value == undefined || value == null) {
      store.removeItem(key);
    }
  };
  /**
   *
   * 清除缓存
   * @static
   * @param {string} key 键
   * @param {string} value 值
   * @memberof DB
   */
  DB.remove = function (key, type) {
    if (type === void 0) {
      type = 'local';
    }
    var store = DB.getRealStore(type);
    store.removeItem(key);
  };
  DB.getRealStore = function (type) {
    if (type === void 0) {
      type = 'local';
    }
    return type === 'local' ? DB.Store.local : DB.Store.session;
  };
  DB.has = function (key, type) {
    if (type === void 0) {
      type = 'local';
    }
    var store = DB.getRealStore(type);
    return !!store.getItem(key);
  };
  return DB;
})();

/**
 * DDLogin
 * @description 钉钉统一免密登录jssdk
 * @author liyang
 * @date 2021/03/30
 */
var DDLogin = /** @class */ (function () {
  function DDLogin() {
    var _this = this;
    /**
     * config 钉钉免密登录配置，暴露给开发者的api
     * @param params DDLoginConfig
     * @author liyang
     * @date 2021/04/06
     */
    this.config = function (params) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (!params.env) {
            throw new Error('config函数调用缺少有效参数');
          }
          this.configuation = params;
          this.accessTokenCookieKey = SSOAccessTokenKeyDict[params.env];
          // 1. 非钉钉打开，跳转中台单点扫码登录
          if (!this.runtimeDeviceEnv.isInDD) {
            if (!this.hasToken()) {
              this.configSSO(params);
            }
          } else {
            // 2. 钉钉内打开，调用钉钉免密登录
            this.configDDNoPwdLogin(params);
          }
          return [2 /*return*/, this];
        });
      });
    };
    /**
     * invokeEnv 反射钉钉的环境对象
     * @returns dd环境对象
     * @author liyang
     * @date 2021/04/12
     */
    this.invokeEnv = function () {
      return {
        // @ts-ignore: Unreachable code error
        isInDD: !!dd.version,
        // @ts-ignore: Unreachable code error
        isInDDPc: dd.pc,
      };
    };
    /**
     * ddConfig 调用dd-js-sdk 鉴权
     * @description 已登录，只需要调用钉钉config；未登录，还需调用通用免密登录接口
     * @params params {jsticket,nonceStr,agentId,timeStamp,corpId,signature,type}
     * @params needLogin boolean 是否需要调用免密登录
     * @author liyang
     * @date 2021/04/07
     */
    this.ddConfig = function (params, needLogin) {
      if (needLogin === void 0) {
        needLogin = true;
      }
      // @ts-ignore: Unreachable code error
      dd.ready(function () {
        // @ts-ignore: Unreachable code error
        dd.error(function (error) {
          throw new Error('\u9274\u6743\u5931\u8D25: ' + error);
        });
        // @ts-ignore: Unreachable code error
        dd.config(params);
        if (needLogin) {
          // @ts-ignore: Unreachable code error
          dd.runtime.permission.requestAuthCode({
            corpId: params.corpId,
            onSuccess: function (info) {
              return __awaiter(_this, void 0, void 0, function () {
                var authCode, res, data, error_1;
                var _a;
                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      authCode = info.code; // 通过该免登授权码可以获取用户身份
                      console.log(authCode);
                      _b.label = 1;
                    case 1:
                      _b.trys.push([1, 3, , 4]);
                      return [
                        4 /*yield*/,
                        (_a = this.api) === null || _a === void 0
                          ? void 0
                          : _a.getToken({ authCode: authCode }),
                      ];
                    case 2:
                      res = _b.sent();
                      data = res.data;
                      //  1. 登录token信息写入cookie
                      Cookie.set({
                        key: this.accessTokenCookieKey,
                        value: data.token,
                        // domain: '',
                        path: '/',
                      });
                      //  2. 用户信息写入DB
                      DB.set(
                        'userInfo',
                        {
                          userName: data.userName,
                          phone: data.phone,
                          unionid: data.unionid,
                        },
                        'local',
                      );
                      return [3 /*break*/, 4];
                    case 3:
                      error_1 = _b.sent();
                      console.error(
                        '\u514D\u5BC6\u767B\u5F55\u5931\u8D25: ' + error_1,
                      );
                      return [3 /*break*/, 4];
                    case 4:
                      return [2 /*return*/];
                  }
                });
              });
            },
          });
        }
      });
    };
    /**
     * configSSO 钉钉扫码登录配置，暴露给开发者的api
     * @author liyang
     * @date 2021/04/07
     */
    this.configSSO = function (params) {
      var redirectUrl = encodeURIComponent(window.location.href);
      var ssoUrl = SSODomainDict[params.env] + '/#/?redirectUrl=' + redirectUrl;
      window.location.href = ssoUrl;
    };
    this.configDDNoPwdLogin = function (params) {
      return __awaiter(_this, void 0, void 0, function () {
        var needLogin, res, error_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              needLogin = !this.hasToken();
              //  1. 注册服务
              this.api = new Service({
                env: params.env,
              });
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [
                4 /*yield*/,
                this.api.postDDConfig({
                  url: encodeURIComponent(window.location.href),
                }),
              ];
            case 2:
              res = _a.sent();
              if (res.data) {
                // 3. 调用钉钉jssdk config获取authcode
                this.ddConfig(
                  __assign(__assign({}, res.data), {
                    jsApiList: params.jsApiList,
                  }),
                  needLogin,
                );
              }
              return [3 /*break*/, 4];
            case 3:
              error_2 = _a.sent();
              console.error('DD Config Error: ' + error_2);
              return [3 /*break*/, 4];
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };
    this.hasToken = function () {
      return !!Cookie.get(_this.accessTokenCookieKey);
    };
    this.configuation = {
      env: EnvEnum.Dev,
      jsApiList: [],
    };
    this.accessTokenCookieKey = SSOAccessTokenKeyDict.dev;
    this.api = null;
    this.runtimeDeviceEnv = this.invokeEnv();
  }
  /**
   * init 静态方法 构造DDLogin实例
   * @returns DDLogin 返回实例
   * @author liyang
   * @date 2021/04/06
   */
  DDLogin.init = function () {
    return new DDLogin();
  };
  return DDLogin;
})();
var index = DDLogin.init();

export default index;
