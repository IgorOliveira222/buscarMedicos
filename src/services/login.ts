import { api } from './api'
import { setToken } from './authClient'

export interface LoginProps {
  email: string
  password: string
}

export async function login({ email, password }: LoginProps) {
  const response = await api.post(
    `public/register/login?email=${email}&password=${password}`
  )

  setToken(response.data.token)

  return null
}
