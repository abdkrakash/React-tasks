import React from "react";

export default function task8() {
  const isSuccess = false;
  return (
    <div>
      {isSuccess ? (
        <h1>Success</h1>
      ) : (
        <h1>Error </h1>
      )}
    </div>
  );
}