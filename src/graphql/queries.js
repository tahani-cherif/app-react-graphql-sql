import { gql } from "@apollo/client";
export const get_users=gql`
query users{
    users{
        nom 
        prenom
        age
    }
}
`;
export const get_user=gql`
query user($nom:String!){
    user{
        nom 
        prenom
        age
    }
}
`;