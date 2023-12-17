'use client'
import {useRouter} from "next/navigation";


export default function Facebook(){
    const router = useRouter()

        const handleBack = () =>{
            router.push("/")
        }
        
    return(
        <>
            facebook
            <input type="button" onClick={handleBack} value={"back"}></input>
        </>
    )
}
