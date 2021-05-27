import React, { Component } from "react";
import PropTypes from "prop-types";
export default class UserList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    userList: PropTypes.array.isRequired,
  };
  render() {
    const { isLoading, userList } = this.props;
    if (isLoading) {
      return <h1>loading...</h1>;
    }
    if(userList.length){
      return (
        <div className="row">
          {userList.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank">
                  <img src={user.avatar_url} style={{ width: "100px" }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })}
        </div>
      );
    }
    return <h1>Enter Name To Search</h1>
  }
}
