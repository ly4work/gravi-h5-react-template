import http from './../http';

export default class UserApi {
  static QUERY_USERS_URL = '/users';
  static queryUsers() {
    return http.get(UserApi.QUERY_USERS_URL);
  }

  static QUERY_CUR_USER_URL = '/currentUser';
  static queryCurrentUser() {
    return http.get(UserApi.QUERY_CUR_USER_URL);
  }

  static QUERY_NOTICES = '/notices';
  static queryNotices() {
    return http.get(UserApi.QUERY_NOTICES);
  }
}
