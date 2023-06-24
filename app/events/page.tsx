import { Metadata } from "next"
import {EventPage} from "./components"

export const metadata:Metadata={
title:"events"
}

export default async function events() {
    return <EventPage/>
    
}

