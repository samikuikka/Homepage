import axios from 'axios';
import utils from '../utils/utils';

const baseURL = 'http://localhost:3001/api/projects';

let token = null;

const setToken = (newToken) => {
    token = `bearer ${newToken}`;
}

const initializeNotes = async () => {
    const config = utils.getConfig(token);
    const request = await axios.get(baseURL, config);
    return request.data;
}

const update = async (id, data) => {
    const config = utils.getConfig(token);

    const request = await axios.put(`${baseURL}/${id}`, data, config)
    return request.data;
}

const create = async (data) => {
    const config = utils.getConfig(token);
    
    const request = await axios.post(baseURL, data, config);
    return request.data;
}

const remove = async (id) => {
    const config = utils.getConfig(token);

    const request = await axios.delete(`${baseURL}/${id}`, config);
    return request.data;
}



const projectServices = {
    setToken,
    initializeNotes,
    update,
    create,
    remove,
}

export default projectServices;