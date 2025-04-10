import React from 'react'
export const metadata ={
    title:"articles page"
}
function layout({children}) {
  return (
    <div>
    <h1>artical</h1>  
    <h1 style={{backgroundColor:"blue",marginBottom:"50px",padding:"20px"}}>
        {children}
    </h1>
    </div>
  )
}

export default layout
