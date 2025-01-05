//your JS code here. If required.
  const form = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');

    // Check if saved credentials exist
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      existingButton.style.display = 'block';
    }   

    // Submit form event
    form.addEventListener('submit', (event)=> {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;


    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      alert(`Logged in as ${username}`);
    });

    // Existi ng user button click event
    existingButton.addEventListener('click', function () {
      const savedUsername = localStorage.getItem('username');
      alert(`Logged in as ${savedUsername}`);
    });