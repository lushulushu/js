import { connect } from 'react-redux'
import React from 'react'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tapCount: 0
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id='home'>
        <p>
          "hello there"
        </p>
      </div>);
  }
}

export default withRouter(connect(
  mapStateToProps
)(Home));
