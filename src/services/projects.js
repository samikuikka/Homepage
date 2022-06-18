import axios from 'axios';

const baseURL = 'http://localhost:3001/api/projects';

let token = null;

const setToken = (newToken) => {
    token = `bearer ${newToken}`;
}

const initializeNotes = async () => {
    const config = {
        headers: { Authorization: token },
    }
    const request = await axios.get(baseURL, config);
    return request.data;
}

const update = async (id, data) => {
    const config = {
        headers: { Authorization: token}
    }

    const request = await axios.put(`${baseURL}/${id}`, data, config)
    return request.data;
}



const projectServices = {
    setToken,
    initializeNotes,
    update,
}

export default projectServices;