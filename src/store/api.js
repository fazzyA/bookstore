import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{
      "Access-Control-Allow-Origin": "*"
    }
  });


export function getPosts(){
    return instance.get(`/posts`)
}