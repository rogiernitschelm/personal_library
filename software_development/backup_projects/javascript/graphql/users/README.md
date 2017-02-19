# GraphQL

## Schema

Types

    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    ...
    ...
    ...
    // imported from graphql package

Schema

Every query should have a schema or type. It is used to specify what kind of properties
we wish to grab.

'graphql'.

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
      }
    });

Root-query

At the basis of each graphQL-server is a root-query. There is only one root query
ever. We specify all queries within the fields object on the root-query.

    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        user: {
          type: UserType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            return axios.get(`http://localhost:3000/users/${args.id}`)
              .then(response => response.data);
          }
        }
      }
    });

Circular references in schemas

Solved by adding an arrow function to the fields object.

    name: 'SomeName',
    fields: () => ({
      
    })
