import { render, screen } from '@testing-library/react'
import App from './App'
import { blogData } from './blog'

test('renders blog header, about text, and articles from props', () => {
  render(<App />)

  const headerElement = screen.getByRole('heading', { level: 1, name: blogData.name })
  expect(headerElement).toBeInTheDocument()

  const aboutText = screen.getByText(blogData.about)
  expect(aboutText).toBeInTheDocument()

  blogData.posts.forEach((post) => {
    expect(screen.getByText(post.title)).toBeInTheDocument()
    expect(screen.getByText(post.date)).toBeInTheDocument()
    expect(screen.getByText(post.preview)).toBeInTheDocument()
  })
})
