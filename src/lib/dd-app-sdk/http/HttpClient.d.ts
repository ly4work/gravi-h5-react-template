/**
 * HttpClient
 * @description Axios Http请求类
 * @author liyang
 * @date 2021/04/07
 */
import { AxiosInstance } from 'axios';
import { EnvType } from '../declare/define';
export default class HttpClient {
  constructor();
  /**
   * instance axios实例
   * @author liyang
   * @date 2021/04/07
   */
  instance: AxiosInstance | null;
  /**
   * timeout，请求超时常量
   * @author liyang
   * @date 2021/04/07
   */
  readonly TIME_OUT: number;
  /**
   * serviceDomain 网关域名配置
   * @author liyang
   * @date 2021/04/07
   */
  serviceDomain: string;
  /**
   * create 创建一个实例
   * @param params {env,timemout}
   * @returns axiosInstance
   * @author liyang
   * @date 2021/04/07
   */
  readonly create: (params: {
    env: EnvType;
    timeout?: number;
  }) => AxiosInstance;
  /**
   * init 初始化axios配置
   * @param params { baseURL, timeout }
   * @returns axiosInstance
   * @author liyang
   * @date 2021/04/07
   */
  private readonly init;
  /**
   * setInterceptor 初始化axios拦截器
   * @param axiosInstance AxiosInstance
   * @returns axiosInstance
   * @author liyang
   * @date 2021/04/07
   */
  private readonly setInterceptor;
}
