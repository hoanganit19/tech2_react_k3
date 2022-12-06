import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todos.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Todos extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      todosList: [
        // {
        //   id: 1,
        //   name: "Công việc 1",
        //   isCompleted: false,
        // },
        // {
        //   id: 2,
        //   name: "Công việc 2",
        //   isCompleted: false,
        // },
        // {
        //   id: 3,
        //   name: "Công việc 3",
        //   isCompleted: false,
        // },
      ],
    };
  }

  handleChangeValue = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleAddTodo = (e) => {
    e.preventDefault();
    const { name } = this.state;

    if (name.trim() !== "") {
      const todo = {
        id: this.state.todosList.length + 1,
        name: name,
        isCompleted: false,
      };

      this.setState({
        todosList: this.state.todosList.concat(todo),
        name: "",
      });

      toast.success("Thêm thành công");
    } else {
      toast.error("Vui lòng nhập tên");
    }
  };

  handleRemoveTodo = (id) => {
    if (window.confirm("Bạn có chắc chắn")) {
      const index = this.state.todosList.findIndex((todo) => todo.id == id);
      const data = [...this.state.todosList];
      data.splice(index, 1);
      this.setState({
        todosList: data,
      });
      toast.success("Xóa thành công");
    }
  };

  render() {
    const { todosList, name } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7">
            <h2>Todos List App</h2>
            <div className="todo-list">
              {todosList.map(({ id, name, isCompleted }) => {
                return (
                  <div
                    className={`todo-item d-flex mb-3 ${
                      isCompleted ? "completed" : ""
                    }`}
                    key={id}
                  >
                    <input type="checkbox" />
                    <span className="mx-3">{name}</span>
                    <span
                      onClick={() => {
                        this.handleRemoveTodo(id);
                      }}
                    >
                      Xóa
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="todo-form">
              <form onSubmit={this.handleAddTodo}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên công việc..."
                    onChange={this.handleChangeValue}
                    value={name}
                  />
                  <button type="submit" className="btn btn-primary">
                    Thêm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Todos;
