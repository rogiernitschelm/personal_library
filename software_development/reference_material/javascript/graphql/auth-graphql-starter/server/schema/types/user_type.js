const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'Usertype',
  fields: {
    email: { type: GraphQLString },
    id: { type: GraphQLID }
  }
});

module.exports = UserType;
