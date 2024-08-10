import { api } from '../lib/axios'

interface FetchIssuesProps {
  query?: string
  username: string
  repo: string
}

interface FetchIssuesResponse {
  items: {
    number: number
    title: string
    body: string
    created_at: string
  }[]
}

export async function fetchIssues({ query, repo, username }: FetchIssuesProps) {
  const { data } = await api.get<FetchIssuesResponse>(
    `/search/issues?q=${query}%20repo:${username}/${repo}`,
  )

  return data.items
}
