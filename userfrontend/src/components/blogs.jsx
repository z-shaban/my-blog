import { useEffect, useState} from "react"
import { API_URL } from "../config"
import {Link} from 'react-router'



function Blogs(){
    const [blogs,setBlogs] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function blogs() {
            try{
                const response = await fetch(`${API_URL}/blogs`)
                const data = await response.json()
                if(!response.ok){ 
                    throw new Error(data.error || 'something went wrong')
                }
                setBlogs(data)
                
            }catch(error){
               setError(error)
               console.error(error)
            } finally{
                setLoading(false)
            }
        }
        blogs()
    },[])

   if(loading) return <p>Loading....</p>
   if(error) return <p>{error.message} </p>
    return(
        <> 
        <div className="text-slate-100 flex flex-1 flex-col items-center justify-center ">
             <h1 className="mt-8 mb-8">ALL POSTS</h1>
         
        {blogs && (
        <div>
            
                {blogs.map((blog)=>{
                    return <div key={blog.id} className="border border-slate-700 w-[80vw] p-4 mb-4 bg-slate-800">
                       <Link to={`/blogs/${blog.id}`}>
                        <p>{blog.title} </p> 
                         <p>{new Date(blog.publishedAt).toLocaleDateString()} </p>
                       </Link>
                      
                        </div>
                })}
            
        </div>
        )} 
      
        </div>
       
        </>
       
       
    )
}





export {Blogs}