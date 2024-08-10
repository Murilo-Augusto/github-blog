import { ComponentProps, ReactNode } from 'react'
import { StyledLink } from './styles'

interface LinkProps extends ComponentProps<'a'> {
  children: ReactNode
}

export function Link({ children, ...props }: LinkProps) {
  return <StyledLink {...props}>{children}</StyledLink>
}
