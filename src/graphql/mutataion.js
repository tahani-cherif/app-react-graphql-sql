import { gql } from "@apollo/client";


export const ajoutuser=gql`
mutation  adduser($nom:String!,$prenom:String!,$age:String!){
    adduser(nom:$nom,prenom:$prenom,age:$age){
        nom,
        prenom,
        age
    }
}
`;
export const updituser=gql`
mutation  updateuser($nom:String!,$prenom:String!,$age:String!){
    updateuser(nom:$nom,prenom:$prenom,age:$age){
        nom,
        prenom,
        age
    }
}
`;
export const deleteuser=gql`
mutation  deleteuser($nom:String!){
    deleteuser(nom:$nom){
        nom,
        prenom,
        age
    }
}
`;