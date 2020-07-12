import React from "react";
import { useParams } from "react-router-dom";

export default function Album() {
  const { id } = useParams();

  return <span>Album page: {id}</span>;
}
