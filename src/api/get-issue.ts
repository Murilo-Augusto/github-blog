import { api } from '../lib/axios'

interface GetIssueProps {
  number: number
  username: string
  repo: string
}

interface GetIssueResponse {
  id: string
  title: string
  body: string
  comments: number
  html_url: string
  created_at: string
  user: {
    login: string
  }
}

export async function getIssue({ number, repo, username }: GetIssueProps) {
  const { data } = await api.get<GetIssueResponse>(
    `/repos/${username}/${repo}/issues/${number}`,
  )

  return data
}
