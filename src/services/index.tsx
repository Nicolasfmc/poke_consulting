import axios, { AxiosResponse } from 'axios'
import {
  LoginI,
  LoginRes,
  RegisterUserI,
  RegisterUserRes,
  StatusResponse,
  TeamPk,
  UpdateUserI,
  UserPk,
} from './interfaces'
import api from './interceptor'

export const getAllUsers = async (): Promise<AxiosResponse<UserPk[]>> => {
  const response = await api.get<UserPk[]>('/user/get-all')
  return Promise.resolve(response)
}

export const getUser = async (id: number): Promise<AxiosResponse<UserPk[]>> => {
  const response = await api.get<UserPk[]>('/user/get-user', {
    params: { id },
  })
  return Promise.resolve(response)
}

export const getUserLogin = async (
  username: string,
  senha: string,
): Promise<AxiosResponse<UserPk[]>> => {
  const response = await api.get<UserPk[]>('/user/get-user-login', {
    params: { username, senha },
  })
  return Promise.resolve(response)
}

export const putRegisterUser = async (
  data: RegisterUserI,
): Promise<AxiosResponse<RegisterUserRes>> => {
  const response = await api.put<RegisterUserRes>('/user/register-user', data)
  return Promise.resolve(response)
}

export const deleteUser = async (
  id: number,
): Promise<AxiosResponse<StatusResponse>> => {
  const response = await api.delete<StatusResponse>('/user/delete-user', {
    params: { id },
  })
  return response
}

export const updateUser = async (
  data: UpdateUserI,
): Promise<AxiosResponse<StatusResponse>> => {
  const response = await api.patch<StatusResponse>('/user/update-user', data)
  return Promise.resolve(response)
}

// Teams
export const getTeam = async (
  idOwner: number,
): Promise<AxiosResponse<TeamPk[]>> => {
  const response = await api.get<TeamPk[]>('/team/get-team', {
    params: { idOwner },
  })
  return Promise.resolve(response)
}

export const saveTeam = async (
  data: TeamPk[],
): Promise<AxiosResponse<StatusResponse>> => {
  const response = await api.post<StatusResponse>('/team/save-team', data)
  return Promise.resolve(response)
}

export const deleteTeam = async (
  idOwner: number,
): Promise<AxiosResponse<StatusResponse>> => {
  const response = await api.delete<StatusResponse>('/team/delete-team', {
    params: { idOwner },
  })
  return Promise.resolve(response)
}

export const login = async (data: LoginI): Promise<AxiosResponse<LoginRes>> => {
  const response = await api.post<LoginRes>('/auth/login', data)
  return Promise.resolve(response)
}
