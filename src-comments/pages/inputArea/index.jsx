import React from "react";
//用户输入区
class InputArea extends React.Component {
  state = {
      username:"",
      comment:"",
      id:0
  }
  onChangeFnInput = (e)=>{
    this.setState({
      username:e.target.value,
    })
  }
  onChangeFnArea = (e)=>{
    this.setState({
      comment:e.target.value,
    })
  
  }
  onClickFn = ()=>{
    if(!this.state.username || !this.state.comment) return
    this.setState({
      id:Date.now()
    })
    this.props.addContent(this.state)
    // console.log(this.state)
    this.setState({
      username:"",
      comment:""
    })
  }
  render() {
    let { onChangeFnArea, onChangeFnInput ,onClickFn } = this
    let {username,comment} = this.state
    return (
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" 
            placeholder="用户名" 
            onChange={onChangeFnInput}
            value={username}
            />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="评论内容"
              onChange={onChangeFnArea}
              value={comment}
              ></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={onClickFn}>
                提交
              </button>
            </div>
          </div>
        </form>
    );
  }
}
export default InputArea;
