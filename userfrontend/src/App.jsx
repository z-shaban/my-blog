import { Link } from "react-router";
import { Outlet } from "react-router";


function App() {
  
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-900">
      <header className="h-[10vh] bg-slate-800 flex items-center pl-4" >
      <Link to='home'className="text-slate-100 pr-4">MY BLOG</Link>
      <Link to='posts' className="text-slate-100">BLOG POSTS</Link>
      </header>
      <main className="flex-1 flex">
       <Outlet />
      </main>
      <footer>
        <p className="h-[10vh] bg-slate-800 text-slate-100 flex justify-center items-center">@2025</p>
      </footer>
      </div>
      
    </>
  )
}

export default App
