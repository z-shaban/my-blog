import { Link } from "react-router";
import { Outlet } from "react-router";

function App() {
  
  return (
    <>
      <header>
      <Link to='home'>MY BLOG</Link>
      <Link to='posts'>BLOG POSTS</Link>
      </header>
      <main>
       <Outlet />
      </main>
      <footer>
        <p>@2025</p>
      </footer>
    </>
  )
}

export default App
