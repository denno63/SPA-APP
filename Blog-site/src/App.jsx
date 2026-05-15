import Header from './Header'
import About from './About'
import Hobbies from './Hobbies'
import ArticleList from './ArticleList'
import { blogData } from './blog'
import './App.css'

function App() {
  const { name, image, about, details, posts, hobbies } = blogData

  return (
    <>
      <Header name={name} />
      <About image={image} about={about} details={details} />
      <Hobbies hobbies={hobbies} />
      <ArticleList posts={posts} />
    </>
  )
}

export default App
