import React from 'react';

class Profile extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.state.count, 'setTimeout1');

      this.setState({
        count: this.state.count + 1
      });

      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count, 'setTimeout2');
    }, 1000);
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    console.log(this.state.count, 'render');
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}

export default Profile;
