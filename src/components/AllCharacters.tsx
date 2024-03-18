"use client";
import { useQuery } from "@apollo/client";
import React from "react";
import { GETALLCHARACTERS } from "../graphql/queries";

type Props = {};

function AllCharacters({}: Props) {
  const { data, error } = useQuery(GETALLCHARACTERS, {
    variables: { page: 20 },
  });
  console.log("response", data, error);
  console.log("hello");
  return <div>AllCharacters</div>;
}

export default AllCharacters;
