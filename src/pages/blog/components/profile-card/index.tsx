/* eslint-disable camelcase */
import { Building, ExternalLink, Github, Users } from 'lucide-react'

import { Link } from '../../../../components/link'
import {
  Bio,
  Bottom,
  ProfileCardContainer,
  Infos,
  InfosContainer,
  Name,
  ProfileImg,
  Top,
} from './styles'

interface ProfileCardProps {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

export function ProfileCard({
  name,
  bio,
  company,
  login,
  followers,
  avatar_url,
  html_url,
}: ProfileCardProps) {
  return (
    <ProfileCardContainer>
      <ProfileImg src={avatar_url} alt="" />
      <InfosContainer>
        <Top>
          <Name>{name}</Name>
          <Link href={html_url} target="_blank">
            GITHUB
            <ExternalLink
              size={12}
              absoluteStrokeWidth={true}
              strokeWidth={1.25}
            />
          </Link>
        </Top>
        <Bio>{bio}</Bio>
        <Bottom>
          <Infos>
            <Github size={18} />
            <span>{login}</span>
          </Infos>
          <Infos>
            <Building size={18} />
            <span>{company}</span>
          </Infos>
          <Infos>
            <Users size={18} />
            <span>{followers} seguidores</span>
          </Infos>
        </Bottom>
      </InfosContainer>
    </ProfileCardContainer>
  )
}
