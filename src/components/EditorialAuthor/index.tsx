import React from "react";

export default function EditorialAuthor({ name }) {
  return (
    <div className="editorial-tag-wrapper">
      {"Author: "}
      <span className="editorial-tag tag">{name}</span>
      <br />
      <br />
    </div>
  );
}
