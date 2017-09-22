export const FETCH_USERS = 'fetch_users';
import axios from 'axios';

export const fetchUsers = () => {
    const request = axios.get('http://jsonplaceholder.typicode.com/users')
    return {
        type: FETCH_USERS,
        payload: request
    }
}