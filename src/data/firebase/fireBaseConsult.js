import { db } from "./fireBaseConfig";
import {collection, getDocs} from 'firebase/firestore'

const Consult = async () =>{


    let Data = []
    
    const docRef = collection(db, 'phrases');
    const getData = await getDocs(docRef)


    getData.forEach((value) => {
        Data.push(value.data())
    })


    return Data
}

export {Consult}