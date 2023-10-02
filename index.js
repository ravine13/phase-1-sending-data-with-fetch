function submitData(userName, userEmail) {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail
      })
    };
  
    return fetch('http://localhost:3000/users', configurationObject)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${id}`;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        const errorMessageElement = document.createElement('p');
        errorMessageElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessageElement);
      }
  )}
  
  const userName = 'Ravine Derrick';
  const userEmail = 'ravinederick13@gmail.com';
  
  submitData(userName, userEmail);
  