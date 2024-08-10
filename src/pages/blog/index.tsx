import { useCallback, useEffect, useState } from 'react'

import { getGithubUser } from '../../api/get-github-user'

import { PostCard } from './components/post-card'
import { ProfileCard } from './components/profile-card'
import { SearchInput } from './components/search-input'
import { BlogContainer, Content, Posts, Top } from './styles'
import { fetchIssues } from '../../api/fetch-issues'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../../hooks/use-debounce'

interface GithubUser {
  name: string
  bio: string
  login: string
  company: string
  followers: number
  avatar_url: string
  html_url: string
}

interface Post {
  number: number
  title: string
  body: string
  created_at: string
}

export function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')

  const [githubUser, setGithubUser] = useState({} as GithubUser)
  const [posts, setPosts] = useState<Post[]>([])

  const getGithubUserInfos = useCallback(async () => {
    const data = await getGithubUser()
    setGithubUser(data)
  }, [])

  const fetchPosts = useCallback(async () => {
    const data = await fetchIssues({
      repo: 'github-blog',
      username: githubUser.login,
      query,
    })
    setPosts(data)
  }, [githubUser.login, query])

  useDebounce(
    () => {
      const q = searchParams.get('q') ?? ''

      const src = query.trim()

      if (q === src) {
        return
      }

      if (src) {
        setSearchParams((state) => {
          state.set('q', src)
          return state
        })
      } else {
        setSearchParams((state) => {
          state.delete('q')
          return state
        })
      }
    },
    1000,
    [query],
  )

  useEffect(() => {
    getGithubUserInfos()
  }, [fetchPosts, getGithubUserInfos])

  useEffect(() => {
    if (!githubUser.login) return
    fetchPosts()
  }, [fetchPosts, githubUser.login])

  return (
    <BlogContainer>
      <ProfileCard {...githubUser} />

      <Content>
        <Top>
          <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>
          <SearchInput
            placeholder="Buscar conteúdo"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Top>
        <Posts>
          {posts.length > 0 &&
            posts.map((post) => (
              <PostCard
                key={post.number}
                {...post}
                ownerLogin={githubUser.login}
              />
            ))}
        </Posts>
      </Content>
    </BlogContainer>
  )
}
