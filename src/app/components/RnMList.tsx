import React from "react";

const RnMList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const result = await response.json();
  console.log(result);
  return (
    <div>
      <ul>
        <h2>
          <b>Characters</b>
        </h2>
        {result.results.map((character: any) => {
          return (
            <>
              {" "}
              <li key={character.id}>{character.name}</li>
              <img src={character.image}></img>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default RnMList;
