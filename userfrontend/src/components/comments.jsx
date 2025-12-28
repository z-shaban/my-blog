import { useState,useEffect } from "react"
import { API_URL } from "../config"

function Comments({blogId}){
    const [comments,setComments] = useState(null)
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function comments(){
            try{
                const response = await fetch(`${API_URL}/blogs/${blogId}/comments`)
                const data = await response.json()
                if(!response.ok){
                   throw new Error(data.error || "something went wrong")
                }
                 setComments(data)
                 console.log(data)
                
            }catch(error){
                setError(error)
            }finally{
                setLoading(false)
            }
        } comments()
    },[blogId])
    
    if(loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    return(
        <>
        <div className="border border-slate-700 w-[80vw] min-h-[30vh] p-4 mb-4 bg-slate-800">
            <p>Comments</p>
            {comments.length === 0 && <p>No comments yet. Be the first to share your thoughts</p>}
            <div>
               {comments.map((comment)=>{
                return <div key={comment.id}  className="border-l-2 border-slate-700 m-4 pl-4">
                    <p>{`User ${comment.userId}` + '  .  ' + new Date(comment.commentedAt).toLocaleDateString()}</p>
                    <p>{comment.comment}</p>
                </div>
               })}
            </div>
            <div className="border border-slate-700 max-w-[80vw] max-h-[30vh] p-4 mb-4 bg-slate-900">
                <p>Login to leave a comment</p>
                <button className="bg-slate-600 p-1 rounded-sm mt-4">Login</button>
            </div>
        </div>
       
       </>
    )
}

export {Comments}