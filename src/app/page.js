import { Suspense } from "react";
import CardWrapper from "./components/CardWrapper";
import Skeleton from "./components/skeletons/Skeleton_Cards";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Skeleton/>}>
        <CardWrapper/>
      </Suspense>
    </>
  );
}
