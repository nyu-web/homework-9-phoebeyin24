document.getElementById('getData').addEventListener('click', getData);
document.getElementById('postData').addEventListener('submit', postData);
document.getElementById('reset').addEventListener('click', reset);
function reset(){
    document.getElementById('result').innerHTML = " ";
}
function getData(){
    console.log("in getData");
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => { return res.json() })
        .then((data) => {
            let result = `<h2> Jsonplaceholder API</h2>`;
            data.forEach((user) => {
                const { id, name, email, address: { city, street } } = user
                result +=
                    `<div>
                     <h5> User ID: ${id} </h5>
                         <ul>
                             <li> User Full Name : ${name}</li>
                             <li> User Email : ${email} </li>
                             <li> User Address : ${city}, ${street} </li>
                         </ul>
                      </div>`;
                document.getElementById('result').innerHTML = result;
            });
        });
}
function postData(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers : new Headers(),
        body:JSON.stringify({name:name, email:email})
    }).then((res) => res.json())
        .then((data) =>  alert("Sucess"))
        .catch((err)=> alert("Fail"))
}