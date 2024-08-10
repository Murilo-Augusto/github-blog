import styled from 'styled-components'

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: bold;
  line-height: 160%;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.blue};
    transition: all 0.2s;
  }
`

export const Underline = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.blue};
`
