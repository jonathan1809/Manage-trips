import crypto from 'crypto-js';
const config = {
    secretEnc: '>tneQ=;2X}5sFyuCmbwjQ^(~NBE#7$W/Gv8ycQvsnhLFt:/7E{peCqq@26Kh$',
    sessionUser: '_exl01uuid',
    sessionToken: '_exl01uuto'
};
const UtilUserData = {
    setUser: (user) => {
        const userEnc = crypto.AES.encrypt(JSON.stringify(user), config.secretEnc);
        sessionStorage.setItem(config.sessionUser, userEnc.toString());
    },

    setToken: (token) => {
        const tokenEnc = crypto.AES.encrypt(token, config.secretEnc);
        sessionStorage.setItem(config.sessionToken, tokenEnc.toString());
    },

    getUser: () => {

        try {
            if (sessionStorage.getItem(config.sessionUser)) {
                const userData = crypto.AES.decrypt(sessionStorage.getItem(config.sessionUser), config.secretEnc);
                return JSON.parse(userData.toString(crypto.enc.Utf8))
            }
            else {
                return ''
            }

        } catch (error) {
            console.error(error)
            return '';
        }

    },

    getToken: () => {
        try {
            if (sessionStorage.getItem(config.sessionToken)) {
                const tokendata = crypto.AES.decrypt(sessionStorage.getItem(config.sessionToken), config.secretEnc);
                return tokendata.toString(crypto.enc.Utf8);
            }
            else {
                return ''
            }

        } catch (error) {
            console.error(error)
            return '';
        }

    }
}

export default UtilUserData;