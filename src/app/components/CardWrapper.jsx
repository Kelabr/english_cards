import { Consult } from "@/data/firebase/fireBaseConsult";
import Card from "../ui/Card";


export default async function CardWrapper(){
    
    const dataFirebase = await Consult()

    return(
        dataFirebase.map((data) => {
            return(<Card data={data}/>)
        })
    )

}

