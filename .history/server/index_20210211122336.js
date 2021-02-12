const { ApolloServer } = require('apollo-server')
const connectDb = require('./connection');
const port = 4000;


connectDb();
const port = process.env.Port || 3000;

app.use('/graphql', graphqlHTTP({
    graphiql: true
}))

app.listen(port, () => {
    console.log('server started on port : ' + port)
})