import { Outlet } from 'react-router-dom'

import { Header } from './header'
import { BlogLayoutContainer, Content } from './styles'

export function BlogLayout() {
  return (
    <BlogLayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </BlogLayoutContainer>
  )
}
