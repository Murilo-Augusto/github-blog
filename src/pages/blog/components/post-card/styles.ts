import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem;
  line-height: 160%;
  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    filter: brightness(0.9);
    transition: filter 0.2s;
  }
`

export const Top = styled.div`
  display: flex;
  gap: 1rem;
`

export const Title = styled.h2`
  flex: 1;
  font-size: 1.25rem;
  color: ${({ theme }) => theme['base-title']};
`

export const CreateAt = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-span']};
`

export const Description = styled.p`
  color: ${({ theme }) => theme['base-text']};
`
