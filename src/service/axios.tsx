import React, { Component } from 'react';
import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios';

export class AxiosService {
  url: string;

  constructor(url: string) {
    this.url = url
  }

  post(options: Options) {
    return axios.post(`${this.url}${options.endPoint}`, options.body)
  }
}

interface Options {
  body: {},
  endPoint: string
}






