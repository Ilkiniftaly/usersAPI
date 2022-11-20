start_users();
function start_users() {
  fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    response.json().then((users) => {
      data = "";
      for (let i = 0; i < users.length; i++) {
        data += `
                <div  class="card-body">
                <p>${users[i].id} </p>
                <h5 class="card-title">${users[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${users[i].username}</h6>
                <p class="card-text">${users[i].email}</p>
                <button onclick="data_getir(${users[i].id})" ><a id="adress_base" href="#" class="card-link">click   </a></button>
                <a href="#" class="card-link"><button>Another link </button></a>
              </div>
                `;
      }

      document.querySelector("#card").innerHTML = data;
      console.log(users);
    });
  });
}

function data_getir(id) {
  adress_base.addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      (response) => {
        response.json().then((test) => {
          let data_al = ``;
          for (let i = 0; i < test.length; i++) {
            data_al += `
                     <p class="card-text">${test[i].adress.street}</p>
                     <p class="card-text">${test[i].adress.suite}</p>
                     <p class="card-text">${test[i].adress.city}</p>
                     <p class="card-text">${test[i].adress.zipcode}</p>
                     `;
            document.querySelector("#adress_base").innerHTML = data_al;
            console.log(data_al);
          }
        }) 
      }
    );
  });
}

// let adress = ``;
// for (let i = 0; i < adress.length; i++) {
//     adress += `
//     <a id="Adress" href="#" class="card-link">${adress[i].adress.street}</a>
//     <a id="Adress" href="#" class="card-link">${adress[i].adress.suite}</a>
//     <a id="Adress" href="#" class="card-link">${adress[i].adress.city}</a>
//     <a id="Adress" href="#" class="card-link">${adress[i].adress.zipcode}</a>
//     `;
// }
// document.querySelector('#adress_base').innerHTML = adress;
// console.log(adress);
