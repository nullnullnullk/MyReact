import { Component } from 'react'
import PropTypes from "prop-types"
import axios from "axios"

export default class SearchUser extends Component {
  static propTypes = {
    setLoading:PropTypes.func.isRequired,
    setSearch:PropTypes.func.isRequired
  }
  state = {
    username:""
  }

  shouldComponentUpdate(props,state){
    //state是更新的数据
    //this.state是现在的数据
     return this.state.username !== state.username
  }
  handleChange = (e)=>{
    this.setState({
      username:e.target.value.trim()
    })
  }
  searchClick = async ()=>{
    let {username} = this.state
    if(!username){
      alert("请输入搜索内容")
      return
    }
    //走到这里就代表username不为空
    //调用App方法把username传给App
    this.props.setLoading(true)
    //点击完发送请求
    try {
    //接收axios传来的promise
    const response = await axios.get(`https://api.github.com/search/users?q=${username}`)
    //接收成功的话就代表数据拿到，可以把loading隐藏了
    this.props.setLoading(false)
    console.log(response)
    //拿需要的数据
    let userList = response.data.items.map(user=>({
      id:user.id,
      login:user.login,
      avatar_url:user.avatar_url,
      html_url:user.html_url
    }))
    //传球
    this.props.setSearch(userList)
    } catch (error) {
      alert(error)
      this.props.setLoading(false)
    }
  }
  render() {
    let {handleChange,searchClick} = this
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div><input type="text" placeholder="enter the name you search" onChange={handleChange}/><button onClick={searchClick}>Search</button></div>
      </section>
    )
  }
}
