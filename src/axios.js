import axios from 'axios'

axios.defaults.baseURL = 'https://testfrontpl.herokuapp.com/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');