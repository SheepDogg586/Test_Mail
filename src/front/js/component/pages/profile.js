import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../post/Post";
import { LoginButton } from "../logBtn";

export const Profile = () => {
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    // Fetch posts for the user with the given username
    fetch(`/api/posts?username=${username}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, [username]);

  return (
    <div
      className="container-profile"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div className="profileSheet">
        <h1>{username}'s Profile</h1>
        {posts.length > 0 ? (
          posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>No posts yet!</p>
        )}
      </div>
      <div className="logout" style = {{display: ''}}>
        <LoginButton />
      </div>
    </div>
  );
};
