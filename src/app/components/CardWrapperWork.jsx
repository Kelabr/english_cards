import { ConsultWork } from "@/data/firebase/fireBaseConsult";
import Card from "../ui/Card";


export default async function CardWrapperWork(){
    
    const dataFirebase = await ConsultWork()

    return(
        dataFirebase.map((data) => {
            return(<Card data={data}/>)
        })
    )

}