import axios from 'axios';

const baseURL = 'http://localhost:3001/api/tasks';

let token = null;

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getTasks = async () => {
    const config = {
        headers: { Authorization: token }
    }
    const request = await axios.get(baseURL, config);
    return request.data
}


const tasksServices = {
    setToken,
    getTasks,
}

export default tasksServices;