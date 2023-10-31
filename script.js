'use strict'



// Login
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const loginBtn = document.getElementById('loginButton')
// const adminUsername='admin'
// const adminPassword='1234'

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (usernameInput.value !== '' && passwordInput.value !== '') {
        if (usernameInput.value === 'admin' && passwordInput.value === '1234') {
            window.location.replace("profile.html")
        }
        else {
            alert("Wrong username or password")
            usernameInput.value = ''
            passwordInput.value = ''
        }
    }

})