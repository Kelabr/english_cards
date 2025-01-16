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

const ConsultTrip = async () =>{
    
    let Data = []

    const docRef = collection(db, 'phrases/1/trip')
    const getData = await getDocs(docRef)

    getData.forEach((value)=>{
        Data.push(value.data())
    })

    return Data
}

const ConsultWork = async () => {
    let Data = []

    const docRef = collection(db, 'phrases/1/work')
    const getData = await getDocs(docRef)

    getData.forEach((value)=>{
        Data.push(value.data())
    })

    return Data
}

export {Consult, ConsultTrip, ConsultWork}