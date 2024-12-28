// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx'
import InterfaceComponents from './components/InterfaceComponents.jsx'
import Navbar from './components/Navbar.jsx'
import SearchableVideoList from './components/SearchableVideoList.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InterfaceComponents
        heading={
          <>
          Create user interfaces <br />
          from components
        </>}
        para={
          <>
            React lets you build user interfaces out of individual pieces called components.<br />
            Create your own React components like <code>Thumbnail</code>, <code>LikeButton</code>, and <code>Video</code>.<br />
            Then combine them into entire screens, pages, and apps.
          </>
        }
        lpara={
          <>
            Whether you work on your own or with thousands of other developers, using <br /> React feels the same. It is designed to let you seamlessly combine components <br /> written by independent people, teams, and organizations.
          </>
        }
      />

      <InterfaceComponents
        heading={<>
          Write components <br /> with code and markup
        </>}
        para={
          <>
            React components are JavaScript functions. Want to show some content <br /> conditionally? Use an if statement. Displaying a list? Try array <code>map()</code>. Learning <br /> React is learning programming.
          </>
        }
        lpara={
          <>
            This markup syntax is called JSX. It is a JavaScript syntax extension popularized <br /> by React. Putting JSX markup close to related rendering logic makes React <br />components easy to create, maintain, and delete.
          </>
        }
      />
      <SearchableVideoList />
    </>
  )
}

export default App