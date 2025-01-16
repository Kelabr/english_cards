import { Suspense } from "react"
import Skeleton from "../components/skeletons/Skeleton_Cards"
import CardWrapperTrip from "../components/CardWrapperTrip"

export default function Trip(){
    return(
        <>
              <div className="px-5 pt-5 sm:flex sm:flex-col sm:justify-center sm:items-center">
                <Suspense fallback={<Skeleton/>}>
                    <CardWrapperTrip/>
                </Suspense>
              </div>
        </>
    )
} 