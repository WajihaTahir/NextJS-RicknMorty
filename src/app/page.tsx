import { Suspense } from "react";
import RnMList from "./components/RnMList";

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<p>Characters are loading</p>}>
        <RnMList />
      </Suspense>
    </main>
  );
}
