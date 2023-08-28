import nomadAxios from "../utils/nomadAxios";

const getLogin = () => {
    nomadAxios.get('oauth2/authorization/42seoul');
}

export default getLogin;