import {EventCat} from "./components"
export default function CatPage({params}:{params:{cat:string}}){
    return <EventCat cat={params.cat}/>
}