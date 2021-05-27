import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"

class Loding extends React.Component{
  state = {
    isLoding:true,
    repo:{}
  }

  componentDidMount(){
    axios.get("https://api.github.com/search/repositories?q=r&sort=stars")
    .then((response)=>{
      const { name, html_url } = response.data.items[0];
      console.log(response)
        this.setState({
          isLoding:false,
          repo:{
            name,
            html_url
          }
        })
      
    })
    .catch((reject)=>{
      alert("请求失败")
    })
  }

  render(){
    let {isLoding,repo} = this.state
    let {name,html_url} = repo
    return  <div>
              <h1 style={{display:isLoding?"block":"none"}}>Loding...</h1>
              <h1 style={{display:!isLoding?"block":"none"}}>most star repo is <a href={html_url}>{name}</a></h1>
            </div>
  }
}
ReactDOM.render(<Loding/>,document.getElementById("root"))