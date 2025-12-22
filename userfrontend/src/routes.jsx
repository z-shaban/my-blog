import App from "./App"
import { Home } from "./components/home"
import { Posts } from "./components/posts"
const routes = [
    {
        path: '/',
        element: <App/>,
        children : [
         {index: true, element: <Home/>},
         {path:'home', element:<Home/>},
         {path:'posts', element:<Posts/>}
        ]
    }
]

export {routes}