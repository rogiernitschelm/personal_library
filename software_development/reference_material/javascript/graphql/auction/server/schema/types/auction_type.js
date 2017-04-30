import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import BidType from './bid_type';

export default new GraphQLObjectType({
  name: 'AuctionType',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: GraphQLID },
    highestBid: { type: GraphQLInt },
    startingPrice: { type: new GraphQLNonNull(GraphQLInt) },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    description: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    endDateTime: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLID) },
    bids: { type: new GraphQLList(BidType) }
  })
});
