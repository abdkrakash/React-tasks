import React from "react";

export default function task7() {
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome to this page</h1>
      ) : (
        <h1>How are you? </h1>
      )}
    </div>
  );
}