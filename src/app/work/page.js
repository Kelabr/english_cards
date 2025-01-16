import { Suspense } from "react"
import Skeleton from "../components/skeletons/Skeleton_Cards"
import CardWrapperWork from "../components/CardWrapperWork"

export default function Trip(){
    return(
        <>
              <div className="px-5 pt-5 sm:flex sm:flex-col sm:justify-center sm:items-center">
                <Suspense fallback={<Skeleton/>}>
                    <CardWrapperWork/>
                </Suspense>
              </div>
        </>
    )
} 