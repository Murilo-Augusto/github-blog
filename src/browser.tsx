import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { BlogLayout } from './pages/_layouts/blog'
import { Blog } from './pages/blog'
import { Post } from './pages/post'

const router = createBrowserRouter([
  {
    path: '/github-blog',
    element: <BlogLayout />,
    children: [
      {
        path: '/github-blog',
        element: <Blog />,
      },
      {
        path: '/github-blog/post/:ownerLogin/:postNumber',
        element: <Post />,
      },
    ],
  },
])

export function Browser() {
  return <RouterProvider router={router} />
}
