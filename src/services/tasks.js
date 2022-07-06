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

const update = async (id, data) => {
    const config = {
        headers: { Authorization: token }
    }
    
    const request = await axios.put(`${baseURL}/${id}`, data, config);
    return request.data;
}

const create = async (id, data) => {
    const config = {
        headers: { Authorization: token }
    };
    console.log('data', data);
    const request = await axios.post(`${baseURL}/${id}`, data, config);
    return request.data;
}

const remove = async (id) => {
    const config = {
        headers: { Authorization: token}
    };

    const request = await axios.delete(`${baseURL}/${id}`, config);
    return request.data;
}


const tasksServices = {
    setToken,
    getTasks,
    update,
    create,
    remove,
}

export default tasksServices;