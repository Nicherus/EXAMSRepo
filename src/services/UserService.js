import api from '../config/api';
import TokenService from './TokenService';

class UserService {

  async login(body) {
    try {
      const { data } = await api.post('/users/sign-in', body);
      if (data) {
        TokenService.setToken(data.token);
        return data;
      }
    } catch (e) {
      return null;
    }
  }

  async logout() {
    const token = TokenService.getToken();
    try{
      const { data } = await api.delete('/users/sign-out', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (data) {
        return data;
      }
    } catch (e) {
      return null;
    }
  }

  async signUp(body) {
    try{
      const { data } = await api.post('/users/sign-up', body);
      if(data) {
        return data;
      }
    } catch(e){
      return null;
    }
  }

}
export default new UserService();
