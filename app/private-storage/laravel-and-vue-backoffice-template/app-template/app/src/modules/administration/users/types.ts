export interface GetUsersFilters {
  accountState: number
}

export interface User {
  id: number,
  name: string,
  surname: string,
  email: string,
  is_active: boolean,
  is_admin: boolean,
  created_at: string,
  updated_at: string,
}


export interface UserStoreState{
  users: User[],
  userDetails: User | undefined
}

export interface User {
  id: number,
  name: string,
  surname: string,
  email: string,
  is_active: boolean,
  is_admin: boolean,
  created_at: string,
  updated_at: string,
}

export interface UsersResponse {
  message:string,
  data:{
    users: User[]
  }
}

export enum AccountState {
  ALL = -1,
  ACTIVE = 1,
  INACTIVE = 0,
}
export interface UserDetailsResponse{
  message:string,
  data: {
    user: User
  }
}
export interface StoreNewUserRequest {
  name: string,
  surname: string,
  email: string
}
export interface StoreNewUserResponse{
  message:string,
  data:{
    user: User
  }
}

export interface ResendActivationEmailResponse {
  message: string
}

