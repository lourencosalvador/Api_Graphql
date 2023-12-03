const { ApolloServer, gql } = require("apollo-server");
const { timetableData } = require("./dataTimes");

const typeDefs = gql`
  enum SchedulerStatus {
    DISPATCHED
    PENDING
    CANCELED
    WAITING
  }

  type Status {
    primaryStatus: SchedulerStatus!
    secondaryStatus: SchedulerStatus!
  }

  type Time {
    timeString: String!
    status: Status!
  }

  type Times {
    _id: ID!
    date: String!
    time: [Time!]!
  }

  type Query {
    hello: String
    times: [Times!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello word",
    times: () => timetableData,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`😊 Servidor Rodando Lorrys Code👌 na ${url}`));
