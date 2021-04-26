/**
 * DDLoginConfig
 * @author liyang
 * @date 2021/03/30
 */
export interface DDLoginConfig {
  env: EnvType;
  jsApiList: Array<string>;
}
/**
 * EnvType 环境枚举
 * @author liyang
 * @date 2021/04/07
 */
export declare enum EnvEnum {
  Local = 'local',
  Dev = 'dev',
  Test = 'test',
  Uat = 'uat',
  Prod = 'prod',
}
export declare type EnvType = 'local' | 'dev' | 'test' | 'uat' | 'prod';
/**
 * Cookie类 接口
 * @author liyang
 * @date 2021/04/08
 */
export interface CookieParam {
  key: string;
  value: string;
  day?: number;
  path?: string;
  domain?: string;
}
