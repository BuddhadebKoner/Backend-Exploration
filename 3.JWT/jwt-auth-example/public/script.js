const login = async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
  } else {
    alert('Login failed');
  }
};

const getUserInfo = async () => {
  const response = await fetch('/user', {
    method: 'GET',
    credentials: 'include' // Important for sending cookies with the request
  });

  if (response.ok) {
    const data = await response.json();
    document.getElementById('user-data').innerText = `Username: ${data.username}`;
  } else if (response.status === 401) {
    alert('Session expired, logging out...');
    document.getElementById('login').style.display = 'block';
    document.getElementById('user-info').style.display = 'none';
  } else {
    alert('Failed to get user info');
  }
};
