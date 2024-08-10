/* eslint-disable camelcase */
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import {
  Calendar,
  ChevronLeft,
  ExternalLink,
  Github,
  MessageCircle,
} from 'lucide-react'

import { Link } from '../../../../components/link'
import { Bottom, Infos, PostInfosContainer, Title, Top } from './styles'

interface PostInfosProps {
  title: string
  username: string
  created_at: string
  comments: number
  html_url: string
}

export function PostInfos({
  title,
  username,
  comments,
  created_at,
  html_url,
}: PostInfosProps) {
  return (
    <PostInfosContainer>
      <Top>
        <Link href="/">
          <ChevronLeft
            size={14}
            absoluteStrokeWidth={true}
            strokeWidth={1.25}
          />
          VOLTAR
        </Link>
        <Link href={html_url} target="_blank">
          VER NO GITHUB
          <ExternalLink
            size={12}
            absoluteStrokeWidth={true}
            strokeWidth={1.25}
          />
        </Link>
      </Top>
      <Title>{title}</Title>
      <Bottom>
        <Infos>
          <Github size={18} />
          <span>{username}</span>
        </Infos>
        <Infos>
          <Calendar size={18} />
          <span>{dayjs(created_at).locale(ptBr).fromNow()}</span>
        </Infos>
        <Infos>
          <MessageCircle size={18} />
          <span>{comments} comentários</span>
        </Infos>
      </Bottom>
    </PostInfosContainer>
  )
}
