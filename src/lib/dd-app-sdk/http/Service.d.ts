import { AxiosInstance } from 'axios';
import { EnvType } from '../declare/define';
export default class Service {
  constructor(props: { env: EnvType; timeout?: number });
  readonly http: AxiosInstance;
  /**
   * 获取钉钉签名参数
   * @author liyang
   * @date 2021/04/08
   */
  private readonly GET_DD_CONFIG_URL;
  readonly postDDConfig: (params: {
    url: string;
  }) => Promise<import('axios').AxiosResponse<any>>;
  /**
   * 获取中台登录token及钉钉用户信息
   * @author liyang
   * @date 2021/04/08
   */
  private readonly GET_TOKEN_URL;
  readonly getToken: (params: {
    authCode: string;
  }) => Promise<import('axios').AxiosResponse<any>>;
}
