import { useMutation } from "@apollo/client"
import { useState } from "react"
import { ajoutuser, deleteuser, updituser } from "./graphql/mutataion"


export const Ajoutuser=()=>{
    const [nom,setNom]=useState("")
    const [prenom,setPrenom]=useState('')
    const [age,setAge]=useState('')
    const[createuser, loading, error,data]=useMutation(ajoutuser)
    const [upditeuser]=useMutation(updituser)
    const [deletuser]=useMutation(deleteuser)
    if(error) return `err ${error}`

    return(
        <>
        <label>nom</label><input type="text" value={nom}onChange={(e)=>{setNom(e.target.value)}}/>
       <label>prenom</label> <input type="text" value={prenom}onChange={(e)=>{setPrenom(e.target.value)}}/>
        <label>age</label><input type="text" value={age}onChange={(e)=>{setAge(e.target.value)}}/>
        <button onClick={()=>{createuser({variables:{nom:nom,prenom:prenom,age:age}
                              }) }}>cree</button>
        <button onClick={()=>{upditeuser({variables:{nom:nom,prenom:prenom,age:age}
                              })}}>mise a jour</button>
        <button onClick={()=>{deletuser({variables:{nom:nom}
                              })}}>supp user</button>


        </>
    )
}