import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const Top = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h2 {
      font-size: 1.125rem;
      line-height: 160%;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      line-height: 160%;
      color: ${({ theme }) => theme['base-span']};
    }
  }
`

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
`
