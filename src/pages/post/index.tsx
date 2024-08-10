import { useParams } from 'react-router-dom'
import { PostInfos } from './components/post-infos'
import { Content, PostContainer, Text } from './styles'
import { getIssue } from '../../api/get-issue'
import { useCallback, useEffect, useState } from 'react'
import Markdown from 'react-markdown'

interface Post {
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

export function Post() {
  const [post, setPost] = useState({} as Post)
  const { postNumber, ownerLogin } = useParams()

  const getPost = useCallback(async () => {
    const data = await getIssue({
      number: Number(postNumber),
      repo: 'github-blog',
      username: String(ownerLogin),
    })
    setPost(data)
  }, [ownerLogin, postNumber])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <PostContainer>
      <PostInfos username={String(ownerLogin)} {...post} />

      <Content>
        <Text>
          <Markdown>{post.body}</Markdown>
        </Text>
      </Content>
    </PostContainer>
  )
}
