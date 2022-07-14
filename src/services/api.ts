import axios, { AxiosInstance } from 'axios'

export function setupAPIClient() {
  return axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
  })
}

export const api: AxiosInstance = setupAPIClient()
