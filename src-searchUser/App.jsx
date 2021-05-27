import React, { Component } from "react";
import UserList from './pages/userList'
import SearchUser from "./pages/searchUser"

export default class App extends Component {
  state={
    //默认不加载，点击后加载
    isLoading:false,
    userList:[]
  }
  setLoading = (isLoading)=>{
    this.setState({
      isLoading
    })
  }
  setSearch = (userList)=>{
    this.setState({
      userList
    })
  }
  render() {
    let {isLoading,userList} = this.state
    return (
    <div data-reactroot="" className="container">
      <SearchUser setLoading={this.setLoading} setSearch={this.setSearch}/>
      
      <UserList isLoading={isLoading} userList={userList}/>
    </div>

    );
  }
}
