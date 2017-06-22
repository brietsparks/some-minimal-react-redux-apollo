import { ApolloClient, createNetworkInterface } from 'react-apollo';

const uri = 'http://localhost:8000/graphql'; // todo: make in backend

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface: createNetworkInterface({ uri }),
  connectToDevTools: true,
});

export default client;
