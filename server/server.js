  const cors = require('cors')
const express =require("express")
const { graphqlHTTP } = require('express-graphql');
const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql
const db=require("./models")
const User=db.user
const app=express()
app.use(cors());
app.use(express.json());

const user=new GraphQLObjectType({
    name:"user",
    fields:()=>({
       nom:{type :graphql.GraphQLNonNull(graphql.GraphQLString)},
       prenom:{type :graphql.GraphQLNonNull(graphql.GraphQLString)},
       age:{type :graphql.GraphQLNonNull(graphql.GraphQLString)},
    })
})

const query=new GraphQLObjectType({
    name:"query",
    fields:()=>({
        users:{
            type:graphql.GraphQLList(user),
             resolve :async ()=>{ 
            return await User.findAll()
        }
        
    },
      user:{
        type:user,
        args:{
            nom:{type :graphql.GraphQLNonNull(GraphQLString)}
        },
        resolve:async(parent,args)=>{
            return await User.findOne({where:{nom:args.nom}})
        }
      } 

})
})
const mutation=new GraphQLObjectType({
    name:"mutation",
    fields:()=>({
        adduser:{
            type:user,
            args:{
                nom:{type :graphql.GraphQLNonNull(GraphQLString)},
                prenom:{type :graphql.GraphQLNonNull(GraphQLString)},
                age:{type :graphql.GraphQLNonNull(GraphQLString)}
            },
            resolve:async(parent,args)=>{
                const user={nom:args.nom,prenom:args.prenom,age:args.age}
                return await User.create(user)
            }
        },
        updateuser:{
            type:user,
            args:{
                nom:{type :graphql.GraphQLNonNull(GraphQLString)},
                prenom:{type :graphql.GraphQLNonNull(GraphQLString)},
                age:{type :graphql.GraphQLNonNull(GraphQLString)}
            },
            resolve:async(parent,args)=>{
                const user={nom:args.nom,prenom:args.prenom,age:args.age}
                return await User.update(user,{where:{nom:args.nom}})
                 user
            }
        },
        deleteuser:{
            type:user,
            args:{
                nom:{type :graphql.GraphQLNonNull(GraphQLString)},
            },
            resolve:async(parent,args)=>{
                return  await User.destroy({where:{nom:args.nom}})
            }
        }
    })
})     
const schema=new GraphQLSchema({
    query:query,
    mutation:mutation,
  })
 app.use('/graphql', graphqlHTTP({
   schema :schema,
   graphiql: true,
 }),);

app.listen(5000,()=>console.log("run serveur"))
