import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //minify
import config from "../../Config.json";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { SERVER_API } = config;

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      showModal: false,
      form: {
        name: "",
        email: "",
        status: false,
      },
      errors: {
        name: "",
        email: "",
      },
      event: null,
    };
  }

  componentDidMount = () => {
    //call api
    this.getUsers();
  };

  componentDidUpdate = (prevProps, prevState) => {
    //console.log(prevProps, this.props);
    //console.log(prevState);
    if (prevState.event !== this.state.event) {
      this.getUsers();
      this.setState({
        event: null,
      });
    }

    /*
    - Chạy từ lần render thứ 2 trở đi
    */
    console.log(`componentDidUpdate`);
  };

  getUsers = async () => {
    const res = await fetch(`${SERVER_API}/users`);
    const users = await res.json();
    this.setState({
      users: users,
      isLoading: false,
    });
    //console.log(users);
  };

  setModalStatus = (status) => {
    this.setState({
      showModal: status,
    });
  };

  handleShowModal = () => {
    this.setModalStatus(true);
  };

  handleHideModal = () => {
    this.setModalStatus(false);
  };

  handleAdd = (e) => {
    e.preventDefault();
    const { name, email, status } = this.state.form;

    const errors = {};

    if (name.trim() === "") {
      errors.name = "Vui lòng nhập tên";
    }

    if (email.trim() === "") {
      errors.email = "Vui lòng nhập email";
    }

    this.setState({
      errors: errors,
    });

    //Kiểm tra xem có lỗi hay không?
    //Nếu không có lỗi => call api

    if (Object.keys(errors).length === 0) {
      //call api
      const data = {
        name: name,
        email: email,
        status: parseInt(status) === 1 ? true : false,
      };

      this.postUser(data);

      //Đóng modal
      this.handleHideModal();
    }
  };

  postUser = async (data) => {
    const res = await fetch(`${SERVER_API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //console.log(res);
    if (res.ok) {
      this.dispatchEvent("create");
      //this.getUsers();
      //this.getPagination()
      toast.success("Thêm thành công");
    } else {
      toast.error("Đã có lỗi xảy ra. Vui lòng thử lại sau");
    }
  };

  handleChangeValue = (e) => {
    const data = { ...this.state.form };
    data[e.target.name] = e.target.value;
    this.setState({
      form: data,
    });
  };

  dispatchEvent = (eventName) => {
    this.setState({
      event: eventName,
    });
  };

  render() {
    const { users, isLoading, showModal, errors, form } = this.state;

    const { name, email, status } = form;

    return (
      <div className="container">
        <h1>Quản lý người dùng</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleShowModal}
        >
          Thêm mới
        </button>
        <hr />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" width="5%">
                <input type="checkbox" />
              </th>
              <th scope="col">Tên</th>
              <th scope="col">Email</th>
              <th scope="col">Trạng thái</th>
              <th scope="col" width="5%">
                Sửa
              </th>
              <th scope="col" width="5%">
                Xóa
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              users.length > 0 &&
              users.map(({ id, name, email, status }) => {
                return (
                  <tr key={id}>
                    <td scope="row">
                      <input type="checkbox" />
                    </td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      {status ? (
                        <button type="button" className="btn btn-success">
                          Kích hoạt
                        </button>
                      ) : (
                        <button type="button" className="btn btn-danger">
                          Chưa kích hoạt
                        </button>
                      )}
                    </td>
                    <td>
                      <a href="#" className="btn btn-warning">
                        Sửa
                      </a>
                    </td>
                    <td>
                      <a href="#" className="btn btn-danger">
                        Xóa
                      </a>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-danger">
            Xóa đã chọn (0)
          </button>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Modal show={showModal} onHide={this.handleHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm người dùng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleAdd}>
              <div className="mb-3">
                <label>Tên</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Tên..."
                  name="name"
                  onChange={this.handleChangeValue}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email..."
                  name="email"
                  onChange={this.handleChangeValue}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label>Trạng thái</label>
                <select
                  className="form-select"
                  onChange={this.handleChangeValue}
                  name="status"
                  value={status}
                >
                  <option value={0}>Chưa kích hoạt</option>
                  <option value={1}>Kích hoạt</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Lưu
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.handleHideModal}
              >
                Đóng
              </button>
            </form>
          </Modal.Body>
        </Modal>
        <ToastContainer />
      </div>
    );
  }
}

export default Users;

/*
constructor
render
componentDidMount => call api => chờ => setState
render

Quy trình gửi email
- Soạn email
- Chọn danh sách khách hàng
- Đưa danh sách khách hàng vào hàng đợi
- Thiết lập chạy nền trong hàng đợi (Mỗi lần chạy 10 bản ghi => Xóa 10 bản ghi đã chạy)
*/

/*
- Kỹ thuật đặt lính canh
- Kỹ thuật đặt cờ hiệu
- Sắp xếp: nổi bọt, chèn, chọn,...
*/
