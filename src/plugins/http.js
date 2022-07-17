import Vue from 'vue'
import axios from 'axios'

// axios请求地址

axios.defaults.baseURL = '/server'
Vue.prototype.$http = axios
