const https = require('https');

function SignIn(user, password)
{

    let data = {
        user: user,
        password: password
    };
    
    fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Request complete! response:", res);
    });
 
}