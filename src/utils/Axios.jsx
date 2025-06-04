import axios from 'axios'
import { createElement } from 'react'

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default instance;