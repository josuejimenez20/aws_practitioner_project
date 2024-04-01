export const setLoginCookie = async (cookieKey, cookie) => {

    try {
        await localStorage.setItem(cookieKey, cookie);
        return true;

    } catch (error) {
        return false;
    }
}

export const getLoginCookie = async (cookieKey) => {

    try {

        const result = await localStorage.getItem(cookieKey);
        if (result) {
            return true
        }

        return false;
    } catch (error) {
        return false;
    }
}

export const deletLoginCookie = async (cookieKey) => {
    try {
        await localStorage.removeItem(cookieKey);
        const resultCookie = await localStorage.getItem(cookieKey);

        if (resultCookie === null)

            return true

        return false;

    } catch (error) {
        return false;
    }
}
