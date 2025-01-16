export default function Card({data}){
    return(
        <div className="bg-orange-500 mt-3 p-3 rounded-lg sm:flex sm:flex-col sm:items-center sm:w-2/6 sm:max-h-24">
            <p className="font-medium text-xl ">{data.english}</p>
            <p className="italic">{data.portugues}</p>
        </div>
    )
}