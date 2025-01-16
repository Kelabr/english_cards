import { ConsultTrip } from "@/data/firebase/fireBaseConsult";
import Card from "../ui/Card";


export default async function CardWrapperTrip(){
    
    const dataFirebase = await ConsultTrip()

    return(
        dataFirebase.map((data) => {
            return(<Card data={data}/>)
        })
    )

}