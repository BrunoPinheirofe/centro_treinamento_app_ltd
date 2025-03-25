import axios from "axios"

const url = 'localhost:8080/'

export const api = axios.create(url)


async function login(email, password){
    response = await api.post("")
}