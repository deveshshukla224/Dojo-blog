import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
const Create = ()=>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author , setAuthor] = useState("Mario");
    const [ isPending , setIsPending ] = useState(false);

    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsPending(true);
        const blog = { title , body , author};
        fetch("http://localhost:8000/blogs",{
            method:"POST",
            body: JSON.stringify(blog),
            headers:{ "Content-Type": "application/json"}
        })
            .then(()=>{
                console.log("new blog added");
                setIsPending(false);
                history.push("/");
            })
    }
    return(
     <div className="create">
         <h2>Add a New Blog</h2>
         <form onSubmit={handleSubmit}>
         <label> Blog Title : </label>
         <input
         type="text"
         required
         value={title}
         onChange={e=>{ setTitle(e.target.value)}}
         />
         <label>Blog Body :</label>
         <textarea
    required
    value={body}
    onChange={e => setBody(e.target.value)}
    />
         <label> Author : </label>
         <select
         value={author}
         onChange={e=>{
             setAuthor(e.target.value)
         }}
         >
             <option value="Mario">Mario</option>
             <option value="Yoshi">Yoshi</option>
         </select>

             { !isPending && <button>Add Blog</button>}
             { isPending && <button>Adding Blog....</button>}
         </form>
     </div>
    );
}


export default Create;
