import axios, { } from 'axios';

export class AxiosService {
  url: string;

  constructor(url: string) {
    this.url = url
  }

  post(options: Options) {
    return axios.post(`${this.url}${options.endPoint}`, options.body)
  }

  get(options: Options) {
    return axios.get(`${this.url}${options.endPoint}`)
  }
}

interface Options {
  body?: {},
  endPoint: string
}






