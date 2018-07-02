import { connect } from 'react-redux'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd';

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
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
      </div>);
  }
}

export default withRouter(connect(
  mapStateToProps
)(Home));
