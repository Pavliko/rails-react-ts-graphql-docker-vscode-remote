import * as React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TestQuery = gql`
  {
    testField
  }
`;

render(
  <Provider>
    <Query query={TestQuery}>
      {({ data, loading }) => (
        <div>
          <br />
          {loading ? 'loading...' : data.testField}
        </div>
      )}
    </Query>
  </Provider>,
  document.querySelector('#root')
);
