// Registration function
function register() {
  var username = document.getElementById('reg-username').value;
  var password = document.getElementById('reg-password').value;

  if (!username || !password) {
    alert('Please enter both username and password!');
    return;
  }

  if (localStorage.getItem(username) !== null) {
    alert('Username already exists!');
    return;
  }

  localStorage.setItem(username, password);
  alert('Registration successful! You can now log in.');
}

// Login function
function login() {
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;

  if (!username || !password) {
    alert('Please enter both username and password!');
    return;
  }

  var storedPassword = localStorage.getItem(username);
  if (storedPassword === null || storedPassword !== password) {
    alert('Invalid username or password!');
    return;
  }

  document.getElementById('registration').style.display = 'none';
  document.getElementById('login').style.display = 'none';
  document.getElementById('user-profile').style.display = 'block';
  document.getElementById('username').textContent = username;
}

// Logout function
function logout() {
  document.getElementById('registration').style.display = 'block';
  document.getElementById('login').style.display = 'block';
  document.getElementById('user-profile').style.display = 'none';
  document.getElementById('reg-username').value = '';
  document.getElementById('reg-password').value = '';
  document.getElementById('login-username').value = '';
  document.getElementById('login-password').value = '';
}
