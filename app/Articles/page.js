import React from 'react'
import Link from 'next/link'
function articles() {
  return (
    <div style={{backgroundColor:"red" ,height:"100vh",display:'flex',textAlign:"center",justifyContent:"center",alignItems:'center'}}>
      <h1>articles</h1>
      <Link href="/Posts">
      <button>tack me to the posts</button>
      </Link>
    </div>
  )
}

export default articles
