import { Suspense } from "react";
import RnMList from "../../components/RnMList";
import AllCharacters from "../../components/AllCharacters";

const characterPage = () => {
  console.log("hello hello ");
  return (
    <>
      {/* <Suspense fallback={<p>Characters are loading</p>}> */}
      {/* <RnMList /> */}
      {/* </Suspense> */}
      <AllCharacters />
    </>
  );
};

export default characterPage;
