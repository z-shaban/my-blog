import { useEffect, useState} from "react"
import { API_URL } from "../config"
import {Link} from 'react-router'


function Home(){
    const [posts,setPosts] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function homePage() {
            try{
                const response = await fetch(`${API_URL}`)
                const data = await response.json()
                if(!response.ok){ 
                    throw new Error(data.error || 'something went wrong')
                }
                setPosts(data)
                
            }catch(error){
               setError(error)
               console.error(error)
            } finally{
                setLoading(false)
            }
        }
        homePage()
    },[])

   if(loading) return <p>Loading....</p>
   if(error) return <p>{error.message} </p>
    return(
        <> 
        <div className="text-slate-100 flex flex-1 flex-col items-center justify-center ">
             <h1 className="mb-8">WELCOME TO MY CORNER!!!</h1>
         
        {posts && (
        <div>
            
                {posts.map((post)=>{
                    return <div key={post.id} className="border border-slate-700 w-[80vw] p-4 mb-4">
                       <p>{post.title} </p> 
                       <p>{new Date(post.publishedAt).toLocaleDateString()} </p>
                        </div>
                })}
            
        </div>
        )} 
       <button className="bg-slate-600 p-2 rounded-md hover:bg-slate-100"><Link to='posts' className="text-slate-100 hover:text-slate-600">VIEW ALL BLOG POSTS</Link></button> 
        </div>
       
        </>
       
       
    )
}

export {Home}