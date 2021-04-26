/**
 * DDLogin
 * @description 钉钉统一免密登录jssdk
 * @author liyang
 * @date 2021/03/30
 */
import { DDLoginConfig } from './declare/define';
import Service from './http/Service';
/**
 * DDLoginInterface DDLogin接口
 * @author liyang
 * @date 2021/03/30
 */
interface DDLoginInterface {
  configuation: DDLoginConfig;
  accessTokenCookieKey: string;
}
declare class DDLogin implements DDLoginInterface {
  constructor();
  /**
   * configuation 配置信息
   */
  configuation: DDLoginConfig;
  /**
   * accessTokenCookieKey 中台登录cookieKey
   */
  accessTokenCookieKey: string;
  /**
   * api 接口请求实例
   */
  api: Service | null;
  /**
   * runtimeDeviceEnv 运行端环境
   */
  runtimeDeviceEnv: {
    isInDD: boolean;
    isInDDPc: any;
  };
  /**
   * config 钉钉免密登录配置，暴露给开发者的api
   * @param params DDLoginConfig
   * @author liyang
   * @date 2021/04/06
   */
  readonly config: (params: DDLoginConfig) => Promise<this>;
  /**
   * invokeEnv 反射钉钉的环境对象
   * @returns dd环境对象
   * @author liyang
   * @date 2021/04/12
   */
  readonly invokeEnv: () => {
    isInDD: boolean;
    isInDDPc: any;
  };
  /**
   * ddConfig 调用dd-js-sdk 鉴权
   * @description 已登录，只需要调用钉钉config；未登录，还需调用通用免密登录接口
   * @params params {jsticket,nonceStr,agentId,timeStamp,corpId,signature,type}
   * @params needLogin boolean 是否需要调用免密登录
   * @author liyang
   * @date 2021/04/07
   */
  readonly ddConfig: (
    params: {
      nonceStr: string;
      agentId: string;
      timeStamp: string;
      corpId: string;
      signature: string;
      type: number;
      jsApiList: Array<string>;
    },
    needLogin?: boolean,
  ) => void;
  /**
   * init 静态方法 构造DDLogin实例
   * @returns DDLogin 返回实例
   * @author liyang
   * @date 2021/04/06
   */
  static readonly init: () => DDLogin;
  /**
   * configSSO 钉钉扫码登录配置，暴露给开发者的api
   * @author liyang
   * @date 2021/04/07
   */
  readonly configSSO: (params: DDLoginConfig) => void;
  readonly configDDNoPwdLogin: (params: DDLoginConfig) => Promise<void>;
  readonly hasToken: () => boolean;
}
declare const _default: DDLogin;
export default _default;
