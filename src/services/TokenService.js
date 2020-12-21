const TOKEN = 'token';

class TokenService {

    async getToken(){
        const token = localStorage.getItem(TOKEN);
        return token;
    }

    async setToken(newToken){
        const token = localStorage.setItem(TOKEN, newToken);
        return token;
    }

    async removeToken(){
        localStorage.clear();
        return;
    }

}
export default new TokenService();
