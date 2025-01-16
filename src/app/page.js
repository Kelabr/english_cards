import { Suspense } from "react";
import CardWrapper from "./components/CardWrapper";
import Skeleton from "./components/skeletons/Skeleton_Cards";
import Header from "./ui/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="px-5 pt-5 sm:flex sm:flex-col sm:justify-center sm:items-center">
        <Suspense fallback={<Skeleton/>}>
          <CardWrapper/>
        </Suspense>
      </div>
    </>

  );
}
