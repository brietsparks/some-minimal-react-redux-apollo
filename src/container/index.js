import React from 'react';
import { connect } from 'react-redux';
import { gql, graphql } from 'react-apollo';

import { defaultAction } from './actions';
import { selectProjects, selectEven, selectOdd } from './selectors';

// A simple data-aware smart-component
export class ProjectsContainer extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ () => { this.props.actions.defaultAction() }}>Default action
        </button>
      </div>
    );
  }
}


/*
 First, connect the smart-component to Apollo...
 */
// define the root query for the data required by the component
const ProjectsQuery = gql`
  query {
    projects {
      id
    }
  }
`;

// Wrap the component with the Apollo HOC via the "graphql" function,
export const ProjectsContainerWithData = graphql(ProjectsQuery, {
  props: ({ data }) => ({       // The wrapped component will be given an Apollo prop called "data".
    apolloDataProp: data        // Let's rename it to "apolloDataProp" for clarity
  }),
})(ProjectsContainer);
// The resulting component is aware of the Apollo state.


/*
 Now connect the Apollo-aware component to Redux...
 */
const mapStateToProps = state => {
  return {
    originalState: state,
    derivedState: {
      projectsDomain: state.projectsDomain,
      projects: selectProjects(state),
      evenIdProjects: selectEven(selectProjects(state)),
      oddIdProjects: selectOdd(selectProjects(state))
    }
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      defaultAction: () => dispatch(defaultAction())
    }
  }
}

// Wrap the Apollo-aware component with the Redux HOC via 'connect' function.
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainerWithData);
