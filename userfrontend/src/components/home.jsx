import { useEffect, useState} from "react"
import { API_URL } from "../config"

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
                console.log(response)
                
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
        posts && (
             <>
        <h1>Welcome to my corner!!!</h1>
        <div>
            <ul>
                {posts.map((post)=>{
                    return <li key={post.id}>{post.title} </li>
                })}
            </ul>
        </div>

        </>
        )
       
    )
}

export {Home}