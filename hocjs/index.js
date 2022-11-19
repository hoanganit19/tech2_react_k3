const getUsers = async () => {
  const res = await fetch("http://localhost:3004/users?_sort=id&_order=desc");
  if (res.ok) {
    const users = await res.json();
    const tbody = document.querySelector("tbody");
    if (tbody !== null) {
      tbody.innerHTML = ''
      if (users.length) {
        users.forEach(({ name, email }, index) => {
          const tr = document.createElement("tr");
          const tdNo = document.createElement("td");
          tdNo.innerText = index + 1;
          tr.appendChild(tdNo);

          const tdName = document.createElement("td");
          tdName.innerText = name;
          tr.appendChild(tdName);

          const tdEmail = document.createElement("td");
          tdEmail.innerText = email;
          tr.appendChild(tdEmail);

          const tdEdit = document.createElement("td");
          tdEdit.innerHTML = `<a href="#" class="btn btn-warning">Sửa</a>`;
          tr.appendChild(tdEdit);

          const tdDelete = document.createElement("td");
          tdDelete.innerHTML = `<a href="#" class="btn btn-danger">Xóa</a>`;
          tr.appendChild(tdDelete);

          tbody.appendChild(tr);
        });
      }
    }
  }
};


const addUser = () => {
    const formAdd = document.querySelector('#addUser form');
    formAdd.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameObj = e.target.querySelector('[name="name"]');
        const emailObj = e.target.querySelector('[name="email"]');
        
        const name = nameObj.value;
        const email = emailObj.value;

        if (typeof name==='string' && name.trim()!=='' && typeof email==='string' && email.trim()!==''){
            
            const data = {
                name: name,
                email: email
            }

            postUser(data);

        }else{
            alert('Vui lòng nhập đủ thông tin')
        }
    })
}

const postUser = async (data) => {
    const res = await fetch('http://localhost:3004/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (res.ok){
      const addModal = document.querySelector('#addUser .btn-close');
      addModal.click()
      getUsers()
    }
} 

getUsers();
addUser();