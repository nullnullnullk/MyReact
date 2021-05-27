import { Component } from 'react'
import SearchUser from "./pages/searchUser"
import UserList from "./pages/userList"

export default class App extends Component {
  //父组件state收到点击请求要把loading显示，并且隐藏list
  state = {
    //loading默认隐藏
    isLoading : false,
    //我们收到的数据是一个数组
    userList : []
  }
  //将父组件的回调函数传给search，进行信息传递
  //父组件要将loading的信息传给userList，来控制loading和userlist的来回切换
  setLoading = (isLoading) => {
    this.setState({
      isLoading
    })
  }
  setUserList = (userList) => {
    this.setState({
      userList
    })
  }

  render() {
    console.log("App")
    let { isLoading , userList } = this.state
    return (
      <div id="app">
        <div data-reactroot="" className="container">
          <SearchUser setLoading = {this.setLoading} setUserList = {this.setUserList}/>
          <UserList isLoading = {isLoading} userList = {userList}/>
        </div>
      </div>
    )
  }
}
