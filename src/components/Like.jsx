import { useState } from "react";
import React from "react";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsLiked(!isLiked);
        }}
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px",
        }}
      >
        <span>
          <h2>{isLiked ? "💖" : "🤍"}</h2>
        </span>
      </button>
    </div>
  );
}

export default LikeButton;
