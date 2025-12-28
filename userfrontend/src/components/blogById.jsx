import { useState,useEffect } from "react"
import { API_URL } from "../config"
import { Link } from "react-router"
import { useParams } from "react-router"
import { Comments } from "./comments"

function BlogById(){
   const [blogById, setBlogById] = useState(null)
   const [error, setError] = useState(null)
   const [loading,setLoading] = useState(true)
   const {blogId} = useParams()

   useEffect(()=>{
      async function blogById() {
         try{
            const response = await fetch(`${API_URL}/blogs/${blogId}`)
            const data = await response.json()
            if (!response.ok){
             throw new Error(data.error || "something went wrong")
            }
            setBlogById(data)
           
         }catch(error){
            setError(error)
         }finally{
            setLoading(false)
         }
      } blogById()
   },[blogId])

   if(loading) return <p>Loading</p>
   if(error) return <p>{error.message}</p>

   return (
    <>
    <div className="text-slate-100 flex flex-1 flex-col items-center justify-center ">
       <button className="bg-slate-600 p-2 rounded-md hover:bg-slate-100 mt-4 mb-4"><Link to='/blogs' className="text-slate-100 hover:text-slate-600">ALL BLOG POSTS</Link></button>
       <div className="border border-slate-700 w-[80vw] min-h-[80vh] p-4 mb-4 bg-slate-800">
         <div className="border-b-2 border-slate-700 p-4">
           <p>{blogById.title} </p>
           <p>{new Date(blogById.publishedAt).toLocaleDateString()} </p>
         </div>
         <div>{blogById.content}</div>
       </div>
       <div className="text-slate-100"><Comments blogId={blogId}/> </div>
    </div>
    
    </>
   )
}

export{BlogById}