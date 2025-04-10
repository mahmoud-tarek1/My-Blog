import React from "react";

async function PostDetailsPage({ params }) {
  // Simulate delay
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const postid = params.postid;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postid}`,
      {
        next: { revalidate: 60 }, // Ensure this is supported in your environment
      }
    );
    const post = await response.json();

    console.log(`====${params.postid}`);
    return (
      <div>
        <h1>Post Details</h1>
        <div
          style={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          {post.title}
          <hr />
          <p>{post.body}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error loading post details.</div>;
  }
}

export default PostDetailsPage;
