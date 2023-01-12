import React, { Component, createRef } from "react";
import "./Editor.scss";

let selectText = "";
let selectionStart = 0;
let selectionEnd = 0;

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.editorRef = createRef();
    this.state = {
      offsetX: 0,
      offsetY: 0,
      isSelection: false,
    };
  }

  handlePost = () => {
    const content = this.editorRef.current.innerHTML;
    console.log(content);
  };

  handleClick = (e) => {
    //console.log(e);

    const content = this.editorRef.current.innerHTML;
    if (document.getSelection) {
      var selection = document.getSelection(); //Nội dung đã chọn
      selectionStart = selection.anchorOffset;
      selectionEnd = selection.focusOffset;
      selectText = content.slice(selectionStart, selectionEnd);
      //console.log(selectionStart, selectionEnd);

      //   const textFromStart = content.slice(0, selectionStart);
      //   console.log(textFromStart.split("\n"));

      let selectionStatus = false;
      //console.log(selectionStart, selectionEnd);
      if (selectionStart !== selectionEnd) {
        selectionStatus = true;
      }

      this.setState({ isSelection: selectionStatus });
    }
  };

  handleMouseDown = (e) => {
    //console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    //console.log(e);
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    this.setState({ isSelection: false });
    this.setState({
      offsetX: 0,
      offsetY,
    });
  };

  handleBoldText = () => {
    const content = this.editorRef.current.innerHTML;

    const beforeContent = content.slice(0, selectionStart);
    const afterContent = content.slice(selectionEnd, content.length);

    this.editorRef.current.innerHTML = `${beforeContent}<b>${selectText}</b>${afterContent}`;

    this.setState({
      isSelection: false,
    });

    //console.log(selectText, selectionStart, selectionEnd);
  };

  render() {
    const { isSelection, offsetX, offsetY } = this.state;
    //console.log(isSelection, offsetX, offsetY);
    return (
      <div className="container">
        <div className="editor-wrap">
          <div
            className="editor mb-3"
            ref={this.editorRef}
            contentEditable={true}
            onClick={this.handleClick}
            onMouseDown={this.handleMouseDown}
          ></div>
          {isSelection && (
            <div
              className="toolbar"
              style={{ left: offsetX + "px", top: offsetY + "px" }}
            >
              <button onClick={this.handleBoldText}>B</button>
              <button>I</button>
              <button>U</button>
            </div>
          )}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handlePost}
        >
          Đăng bài
        </button>
      </div>
    );
  }
}

export default Editor;
