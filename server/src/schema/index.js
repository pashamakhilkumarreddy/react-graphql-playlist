const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = graphql;

const dummyBooks = [{
  id: '1',
  name: 'Valkyrie',
  genre: 'Action',
},
{
  id: '2',
  name: 'Valkyrie',
  genre: 'Action',
},
{
  id: '3',
  name: 'Valkyrie',
  genre: 'Action',
},
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields() {
    return {
      id: {
        type: GraphQLString,
      },
      name: {
        type: GraphQLString,
      },
      genre: {
        type: GraphQLString,
      },
    };
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: {
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        console.log(parent);
        return _.find(dummyBooks, {
          id: args.id,
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
