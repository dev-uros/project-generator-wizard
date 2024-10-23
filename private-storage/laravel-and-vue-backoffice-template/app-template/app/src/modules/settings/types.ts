export interface SetSessionTimeoutResponse {
  message: string,
  data: {
    sessionTimeout:SessionTimeout
  }
}

interface SessionTimeout {
  id:number,
  timeout_period: number,
  created_at: string,
  updated_at: string
}

export interface SettingsStore{
  sessionTimeout: number
}
