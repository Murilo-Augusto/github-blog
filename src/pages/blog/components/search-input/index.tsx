import { ComponentProps } from 'react'
import { StyledInput } from './styles'

interface SearchInputProps extends ComponentProps<'input'> {}

export function SearchInput({ ...props }: SearchInputProps) {
  return <StyledInput {...props} />
}
