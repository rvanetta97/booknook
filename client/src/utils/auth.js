import {jwtDecode} from 'jwt-decode';

class AuthService {
  // Get user data
  getProfile = () => jwtDecode(this.getToken());

  // Check if user is logged in
  loggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check if token is expired
  isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  // Retrieve the user token from localStorage
  getToken = () => localStorage.getItem('id_token');

  // Save user token to localStorage and redirect to home page
  login = (idToken) => {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Clear user token and profile data from localStorage and reload the page
  logout = () => {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
