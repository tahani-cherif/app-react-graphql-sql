import { useQuery } from "@apollo/client"
import { useState } from "react"
import { get_user } from "./graphql/queries"


export const Qetuser=()=>{
    const [nom,setNom]=useState("")
    const {loading,error,data}=useQuery(get_user)
    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error}`;
    console.log(data)
       return(
        <>
        <input type="text" value={nom}onChange={(e)=>{setNom(e.target.value)}}></input>
        <button onClick={()=>{data({variables:{nom:nom}})}}>envoyer</button>

        </>
    )
}