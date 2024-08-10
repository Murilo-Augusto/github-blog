/* eslint-disable camelcase */
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { CreateAt, Description, PostCardContainer, Title, Top } from './styles'

interface PostCardProps {
  ownerLogin: string
  number: number
  title: string
  body: string
  created_at: string
}

dayjs.extend(relativeTime)

export function PostCard({
  ownerLogin,
  number,
  title,
  body,
  created_at,
}: PostCardProps) {
  const indexOf = body.indexOf('.', 0) + 1
  const description = body.substring(0, indexOf)

  return (
    <PostCardContainer to={`/github-blog/post/${ownerLogin}/${number}`}>
      <Top>
        <Title>{title}</Title>
        <CreateAt>{dayjs(created_at).locale(ptBr).fromNow()}</CreateAt>
      </Top>
      <Description>{description}</Description>
    </PostCardContainer>
  )
}
