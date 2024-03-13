import React from "react";
import SearchCh from "./SearchCh";
import Link from "next/link";
import Image from "next/image";

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
        <SearchCh />
        {result.results.map((character: any) => {
          return (
            <>
              {" "}
              <li key={character.id}>
                <Link href={`characters/${character.id}`}>
                  {character.name}
                </Link>
              </li>
              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={400}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default RnMList;
