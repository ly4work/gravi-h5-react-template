/**
 * DB storage存储
 * @author liyang
 * @date 2021/04/09
 */
declare class DB {
  static Store: {
    local: Storage;
    session: Storage;
  };
  /**
   * 从缓存提取值
   *
   * @static
   * @param {string} key
   * @returns
   * @memberof DB
   */
  static readonly get: (key: string, type?: string) => any;
  /**
   *
   * 写入缓存
   * @static
   * @param {string} key 键
   * @param {string} value 值
   * @memberof DB
   */
  static readonly set: (key: string, value: any, type?: string) => void;
  /**
   *
   * 清除缓存
   * @static
   * @param {string} key 键
   * @param {string} value 值
   * @memberof DB
   */
  static readonly remove: (key: string, type?: string) => void;
  static readonly getRealStore: (type?: string) => Storage;
  static readonly has: (key: string, type?: string) => boolean;
}
export default DB;
