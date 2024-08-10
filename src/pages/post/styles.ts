import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
`

export const Text = styled.pre`
  font-family: Nino, sans-serif;
  color: ${({ theme }) => theme['base-text']};
  line-height: 160%;
  white-space: pre-wrap;
  word-break: break-word;

  a {
    color: ${({ theme }) => theme.blue};
  }

  img {
    width: 100%;
  }
`
