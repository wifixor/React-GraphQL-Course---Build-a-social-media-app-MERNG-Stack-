// Apollo serverni sozlash uchun importlar
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

// Schema
const typeDefs = gql`
    type Query{
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Salom Barchaga GraphQl'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({ port: 5000 })
    .then(res => {
        console.log(`Serveringiz | ${res.url} | portida ishga tushurildi!`);
    });