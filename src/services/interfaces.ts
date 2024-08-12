export interface UserPk {
  id: number
  username: string
  senha: string
  dta_cadastro: string
  ind_inativo: number
  ind_admin: number
  idade: number
  ind_plano?: number
}

export interface RegisterUserI {
  username: string
  senha: string
  idade: number
  indPlano: number
  indInativo: number
  indAdmin: number
}

export interface StatusResponse {
  status: string;
}

export interface RegisterUserRes {
  id: number;
  username: string;
  idade: number;
  indAdmin: number;
}

export interface UpdateUserI {
  id: number
  username?: string
  senha?: string
  idade?: number
  indInativo?: number
  indAdmin?: number
  indPlano?: number
}

export interface TeamPk {
  pokemon_id: number
  id_owner: number
  pokemon_name: string
}

export interface LoginI {
  username: string
  senha: string
}

export interface LoginRes {
  accessToken: string
}