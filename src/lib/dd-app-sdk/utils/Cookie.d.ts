/**
 * Cookie 类
 * @author liyang
 * @date 2021/04/08
 */
import { CookieParam } from '../declare/define';
export default class Cookie {
  /**
   * set 设置cookie
   * @param params { key, value, day, path, domain }
   * @author liyang
   * @date 2021/04/08
   */
  static readonly set: ({ key, value, day, path, domain }: CookieParam) => void;
  /**
   * get 读取cookie
   * @param key string
   * @returns string
   * @author liyang
   * @date 2021/04/08
   */
  static readonly get: (key: string) => string | undefined;
  /**
   * get 读取cookie
   * @param key string cookie-key
   * @param path string cookie-path
   * @description 默认情况下只能删除默认路径中保存的cookie, 如果想删除指定路径保存的cookie, 那么必须在删除的时候指定路径才可以
   * @returns string
   * @author liyang
   * @date 2021/04/08
   */
  static readonly remove: (key: string, path?: string | undefined) => void;
}
