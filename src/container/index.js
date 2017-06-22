import React from 'react';
import { connect } from 'react-redux';

import { defaultAction } from './actions';

export class ProjectsContainer extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ () => { this.props.actions.defaultAction() } }>Default action</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.projects
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      defaultAction: () => dispatch(defaultAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);