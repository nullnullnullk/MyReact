import React from "react";

class CommentList extends React.Component {
  onClickeFn = ()=>{
    console.log(this.props)
    let {contents} = this.props
    if(window.confirm("确认删除？")){
      let {removeContent} = this.props.removeContent
      removeContent(contents.id)
    }
    
  }
  render() {
    let {username,comment} = this.props.contents
    
    return (
      <li className="list-group-item">
        <div className="handle">
          <button onClick={this.onClickeFn}>删除</button>
        </div>
        <p className="user">
          <span>{username}</span>
          <span>说:</span>
        </p>
        <p className="centence">{comment}</p>
      </li>
    );
  }
}
export default CommentList;
