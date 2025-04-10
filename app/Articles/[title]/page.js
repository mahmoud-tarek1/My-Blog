import React from 'react'

function show(props) {
  return (
    <div>
      <h1>show article</h1>
      <h1>{props.params.title}</h1>
    </div>
  )
}

export default show