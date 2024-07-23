import axios, { AxiosResponse } from 'axios'
import {
  RegisterUserI,
  RegisterUserRes,
  StatusResponse,
  TeamPk,
  UpdateUserI,
  UserPk,
} from './interfaces'

const URL = 'https://poke-api-backend.onrender.com'

export const getAllUsers = async (): Promise<AxiosResponse<UserPk[]>> => {
  const response = await axios.get<UserPk[]>(URL + '/user/get-all')
  return Promise.resolve(response)
}

export const getUser = async (id: number): Promise<AxiosResponse<UserPk[]>> => {
  const response = await axios.get<UserPk[]>(URL + '/user/get-user', {
    params: { id },
  })
  return Promise.resolve(response)
}

export const getUserLogin = async (
  username: string,
  senha: string,
): Promise<AxiosResponse<UserPk[]>> => {
  const response = await axios.get<UserPk[]>(URL + '/user/get-user-login', {
    params: { username, senha },
  })
  return Promise.resolve(response)
}

export const putRegisterUser = async (
  data: RegisterUserI,
): Promise<AxiosResponse<RegisterUserRes>> => {
  const response = await axios.put<RegisterUserRes>(
    URL + '/user/register-user',
    data,
  )
  return Promise.resolve(response)
}

export const deleteUser = async (
  id: number,
): Promise<AxiosResponse<StatusResponse>> => {
  const response = await axios.delete<StatusResponse>(
    URL + '/user/delete-user',
    {
      params: { id },
    },
  )
  return response
}

export const updateUser = async (
  data: UpdateUserI,
): Promise<AxiosResponse<StatusResponse>> => {
  const response = await axios.patch<StatusResponse>(
    URL + '/user/update-user',
    data,
  )
  return Promise.resolve(response)
}

// Teams
export const getTeam = async (
  idOwner: number,
): Promise<AxiosResponse<TeamPk[]>> => {
  const response = await axios.get<TeamPk[]>(URL + '/team/get-team', {
    params: { idOwner },
  })
  return Promise.resolve(response)
}

export const saveTeam = async (
  data: TeamPk[],
): Promise<AxiosResponse<StatusResponse>> => {
  const response = await axios.post<StatusResponse>(
    URL + '/team/save-team',
    data,
  )
  return Promise.resolve(response)
}

export const deleteTeam = async (
  idOwner: number,
): Promise<AxiosResponse<StatusResponse>> => {
  const response = await axios.delete<StatusResponse>(
    URL + '/team/delete-team',
    {
      params: { idOwner },
    },
  )
  return Promise.resolve(response)
}
