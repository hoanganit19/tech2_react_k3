export class Url {
  getPost = (id) => {
    return `/chuyen-muc/chi-tiet/${id}`;
  };

  getCategory = (id) => {};

  getSearch = (keyword) => {
    return `/tim-kiem?keyword=${keyword}`;
  };
}
