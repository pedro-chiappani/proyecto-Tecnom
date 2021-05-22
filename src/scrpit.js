function signup(){
    let name = document.getElementById('name').value
    let lastname = document.getElementById('lastname').value
    let birthdate = document.getElementById('birthdate').value
    let email = document.getElementById('email').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value

    axios.post('https://0f9gjx5sca.execute-api.us-east-2.amazonaws.com/dev/signup', {
        data: {
            name,
            lastname,
            birthdate,
            email,
            username,
            password,
            confirmPassword
        }
    })
    .then((data) => {
        console.log("todo bien")
    })
    .catch((error) => {
        console.log(error)
    });
}

// var boton = document.getElementById('json_get');
// boton.addEventListener('click', function() {
//   loading.style.display = 'block';
//   axios.get('https://jsonplaceholder.typicode.com/todos/1', {
//     responseType: 'json'
//   })
//     .then(function(res) {
//       if(res.status==200) {
//         console.log(res.data);
//         mensaje.innerHTML = res.data.title;
//       }
//       console.log(res);
//     })
//     .catch(function(err) {
//       console.log(err);
//     })
//     .then(function() {
//       loading.style.display = 'none';
//     });
// });