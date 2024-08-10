import styled from 'styled-components'

export const PostInfosContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 130%;
  color: ${({ theme }) => theme['base-title']};
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 160%;
  color: ${({ theme }) => theme['base-span']};

  svg {
    color: ${({ theme }) => theme['base-label']};
  }
`
