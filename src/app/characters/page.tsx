import { Suspense } from "react";
import RnMList from "../components/RnMList";

const characterPage = () => {
  return (
    <>
      <Suspense fallback={<p>Characters are loading</p>}>
        <RnMList />
      </Suspense>
    </>
  );
};

export default characterPage;
