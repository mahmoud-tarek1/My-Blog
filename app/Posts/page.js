import React from 'react';
import Link from 'next/link';
async function page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  });
  const posts = await response.json();
  const postsjsx=posts.map((post)=>{
    return(
      <Link href={`Posts/${post.id}`}style={{width:"70%"}}>
      <div style={{width:"100%",backgroundColor:"black",color:"white",padding:"10px",borderRadius:"10px",marginTop:"20px"}}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      </div>
      </Link>
    )
  })
 console.log(posts)
  return (
    
    <div>
    
      <h1>Post Page</h1>
      <div
       style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>{postsjsx}</div>
    </div>
  );
}

export default page;
