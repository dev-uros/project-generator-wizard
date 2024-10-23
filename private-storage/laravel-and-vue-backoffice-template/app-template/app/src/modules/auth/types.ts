import {User} from "src/modules/administration/users/types";
import {Contact, FileViewer, Gallery} from "src/modules/auth/types";

export interface AuthStoreState{
  user: User,
  token: string,
  contacts: Contact[],
  gallery: Gallery[],
  allFiles: FileViewer[],
  allFilesFiltered: FileViewer[],
}


export interface LoginRequest {
  email: string,
  password: string,
}

export interface LoginResponse {
  message: string,
  data: {
    user: User,
    token: string,
    sessionTimeout: number,
    userContacts: Contact[]
  }
}

export interface ForgotPasswordResponse {
  message: string,
  data: [],
}

export interface ResetPasswordRequest {
  email: string,
  password: string,
  password_confirmation: string,
  token: string,
}

export interface ResetPasswordResponse {
  message: string,
}

export interface AutoLoginResponse {
  message: string,
  data: {
    user: User,
    sessionTimeout: number,
    isUserSessionActive: boolean,
    userContacts: Contact[]
  },

}