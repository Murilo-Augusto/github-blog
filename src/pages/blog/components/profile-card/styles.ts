import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem 2.5rem;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProfileImg = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const InfosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`

export const Name = styled.h1`
  font-size: 1.5rem;
  line-height: 130%;
  color: ${({ theme }) => theme['base-title']};
`

export const Bio = styled.p`
  line-height: 160%;
  color: ${({ theme }) => theme['base-text']};
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
  color: ${({ theme }) => theme['base-subtitle']};

  svg {
    color: ${({ theme }) => theme['base-label']};
  }
`
