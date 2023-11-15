export class TokenController {
  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  setAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  clear() {
    localStorage.removeItem('accessToken');
  }
}
