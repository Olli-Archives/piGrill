import React, { Component } from 'react';
import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios';

export class AxiosService {
  url: string;

  constructor(url: string) {
    this.url = url
  }

  post(options: Options) {
    console.log('posting')
    axios.post(`${this.url}${options.endPoint}`, options.body)
      .then(res => { console.log(res) })
      .catch(e => console.log(e))

  }
}

interface Options {
  body: {},
  endPoint: string
}






