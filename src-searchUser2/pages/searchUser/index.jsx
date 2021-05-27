import { Component } from 'react'
import PropTypes from "prop-types"
import axios from "axios"

export default class SearchUser extends Component {
  static propTypes = {
    setLoading : PropTypes.func.isRequired,
    setUserList : PropTypes.func.isRequired
  }
  //首先初始化一个username，记录输入框内容，要将username传递给父组件
  state={
    username : ""
  }
  //因为每次发送请求都要更新界面，但是搜索栏的数据实际使没有变化的，可以使搜索栏避免更新
  shouldComponentUpdate(props,state){
    return this.state.username !== state.username
  }
  handleChange = (e) => {
    this.setState({
      username : e.target.value.trim()
    })
  }
  searchClick = async () => {
    let { username } = this.state
    //判断输入内容是否为空
    if(!username) {
      alert("请输入搜索内容")
      return
    }
    //确认无误，要发送请求，传递信息给父组件
    this.props.setLoading(true)
    //
    await axios.get(`https://api.github.com/search/users?q=${username}`)
    .then((response)=>{
      //成功拿到数据
      // console.log(response)
      //将isLoading修改
      this.props.setLoading(false)
      let userList = response.data.items.map((user)=>({
       login : user.login,
       html_url : user.html_url,
       avatar_url : user.avatar_url,
       id:user.id
      }))
      //将userList传给父组件
      this.props.setUserList(userList)
    })
    .catch((reject)=>{
      alert(reject)
    })
  }
  render() {
    console.log("searchUser")
    return (
      
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" onChange = { this.handleChange }/>
          <button onClick = {this.searchClick}>Search</button>
        </div>
      </section>
    )
  }
}
