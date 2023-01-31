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

  componentDidMount = () => {
    this.editorRef.current.dataset.id = Math.random().toString(16).slice(2);
  };

  handlePost = () => {
    const content = this.editorRef.current.innerHTML;
    console.log(content);
  };

  handleClick = (e) => {
    //console.log(e);

    const content = this.editorRef.current.innerHTML;
    if (document.getSelection) {
      var selection = document.getSelection(); //Nội dung đã chọn

      var container = document.createElement("div");

      const range = selection.getRangeAt(0);

      container.appendChild(range.cloneContents());

      selectText = container.innerHTML;
      selectionStart = content.indexOf(selectText);
      selectionEnd = selectionStart + selectText.length;

      let selectionStatus = false;

      if (selectionStart !== selectionEnd) {
        selectionStatus = true;
      }

      this.setState({ isSelection: selectionStatus });

      if (selectText !== "") {
        const styleObj = this.getParents(range.startContainer);
        if (styleObj) {
          const selectHtml = styleObj.outerHTML;
          console.log(selectHtml, selectText);
        }
      }
    }
  };

  getParents = (currentObj) => {
    currentObj = currentObj.parentElement;
    const containerId = this.editorRef.current.dataset.id;
    let id = null;
    if (
      currentObj.dataset !== undefined &&
      Object.keys(currentObj.dataset).length > 0
    ) {
      id = currentObj.dataset.id;
    }

    let result = null;

    while (id != containerId) {
      result = currentObj;
      currentObj = currentObj.parentElement;
      id = currentObj.dataset.id;
    }

    return result;
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

  handleItalicText = () => {
    const content = this.editorRef.current.innerHTML;
    const beforeContent = content.slice(0, selectionStart);
    const afterContent = content.slice(selectionEnd, content.length);

    this.editorRef.current.innerHTML = `${beforeContent}<i>${selectText}</i>${afterContent}`;

    this.setState({
      isSelection: false,
    });
  };

  handleUnderlineText = () => {
    const content = this.editorRef.current.innerHTML;
    const beforeContent = content.slice(0, selectionStart);
    const afterContent = content.slice(selectionEnd, content.length);

    this.editorRef.current.innerHTML = `${beforeContent}<u>${selectText}</u>${afterContent}`;

    this.setState({
      isSelection: false,
    });
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
              <button
                onClick={this.handleItalicText}
                style={{ fontStyle: "italic" }}
              >
                I
              </button>
              <button
                onClick={this.handleUnderlineText}
                style={{ textDecoration: "underline" }}
              >
                U
              </button>
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
