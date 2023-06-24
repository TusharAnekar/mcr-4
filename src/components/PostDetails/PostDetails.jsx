import { useParams } from "react-router-dom"

export function PostDetails (){
    const {postId} = useParams()
    return(
        <>{postId}</>
    )
}