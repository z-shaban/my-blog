import App from "./App"
import { Home } from "./components/home"
import { BlogById } from "./components/blogById"
import { Blogs } from "./components/blogs"
const routes = [
    {
        path: '/',
        element: <App/>,
        children : [
         {index: true, element: <Home/>},
         {path:'blogs',element:<Blogs/>},
         {path:'blogs/:id', element: <BlogById/>}
        ]
    }
]

export {routes}