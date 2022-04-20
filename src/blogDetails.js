import React from "react";
import useFetch from "./useFetch";
import {useParams,useHistory} from 'react-router-dom';
const BlogDetails = ()=> {
    const {id} = useParams();
    const {data:blog, isPending, error }=useFetch("http://localhost:8000/blogs/"+id);
    const history = useHistory();
    const handleDelete = ()=>{
        console.log(id);
        fetch("http://localhost:8000/blogs/"+id,{
            method:"DELETE"
        }).then(()=>{
            history.push("/")
        })
    }
   return(
       <div className="blog-details">
           {isPending && <div> Loading....</div>}
           {error && <div> { error } </div>}
           {blog && (
               <article>
                   <h2> { blog.title}</h2>
                   <p> Written by { blog.author}</p>
                   <div>
                       {blog.body}
                   </div>
                   <button id="delete_btn" onClick={handleDelete}>Delete</button>
               </article>
           )}
       </div>
   );
}


export default BlogDetails;
