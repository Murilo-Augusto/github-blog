import { api } from '../lib/axios'

interface GetGithubUserResponse {
  name: string
  bio: string
  login: string
  company: string
  followers: number
  avatar_url: string
  html_url: string
}

export async function getGithubUser() {
  const { data } = await api.get<GetGithubUserResponse>('/users/Murilo-Augusto')

  return data
}
