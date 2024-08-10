import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 160%;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['base-border']};
  background-color: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`
