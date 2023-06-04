import React from "react";

export default function SolutionAuthor({ name, link }) {
  return (
    <div className="solution-author-wrapper">
      <span>
        Written by<a href={link}> {name}</a>
      </span>
    </div>
  );
}
