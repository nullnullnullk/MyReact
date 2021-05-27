import React from "react";
import CommentShow from "./pages/commentShow";
import InputArea from "./pages/inputArea";
class App extends React.Component {
  state = {
    contents: [
      {
        id: 1,
        username: "李懂哥",
        comment: "我觉得不行，挺垃圾的",
      },
      {
        id: 2,
        username: "张某人",
        comment: "玩不来玩不来",
      },
    ],
  };
  //添加
  addContent = (newContent) => {
    let { contents } = this.state;
    if (newContent) {
      this.setState({
        contents: [...contents, newContent],
      });
    }
  };
  //删除选中项
  removeContent = (id) => {
    let { contents } = this.state;
    let newContents = contents.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      contents: newContents,
    });
  };
  render() {
    let { contents } = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="col-md-4">
            <InputArea
              contents={contents}
              addContent={this.addContent}
            />
          </div>
          <div className="col-md-8">
            <CommentShow
              contents={contents}
              removeContent={this.removeContent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
