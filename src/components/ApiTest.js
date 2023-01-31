import {useState,useEffect} from "react";
const ApiTest = () => {
const [ postId, setState ] = useState(1);
const [post, setPost] = useState(false);
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(res => setPost(res))
        .catch(err => console.warn(err))
},[postId])




  return(
      <div>
          <p>
              <h1 className="text-white bg-black ">{post.title}</h1>
              <hr/>
              {post.body}
          </p>
      <button
          className="btn  p-4 m-2 h-10 flex items-center rounded bg-yellow-300 text-yellow-800"
          onClick={()=> setState(() => postId+1)}
      >diger post {postId}</button>
      </div>
  )
}

export default ApiTest
