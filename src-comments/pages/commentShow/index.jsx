import React from "react"
import CommentList from "./commentList"
//评论展示区
class CommentShow extends React.Component {

  render() {
    let {contents} =this.props
    let display = contents.length?"none":"block"
    return (
      <div className="col-md-8" >
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: display }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {contents.map((item)=>{
            return <CommentList key={item.id} contents={item} removeContent={this.props}/>
          })}
        </ul>
      </div>
    );
  }
}
export default CommentShow;
