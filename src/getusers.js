import { get_users } from './graphql/queries';
import { useQuery } from '@apollo/client';

export const Query=()=>{
    const {loading, error, data}=useQuery(get_users)
    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error}`;
    //console.log(data)
    return( 
        <div> {data.users.map((x)=>(
            <div style={{display:"flex"}}>
            <p>{x.nom}</p>
            <p>{x.prenom}</p>
            <p>{x.age}</p>
            </div>
        ))} </div>)
}