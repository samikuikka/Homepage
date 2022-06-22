
const getConfig = (token) => {
    return {
        headers: { Authorization: token}
    }
};

const utils = {
    getConfig
}

export default utils;