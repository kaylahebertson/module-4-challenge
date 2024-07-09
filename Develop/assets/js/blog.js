// TODO: Create a variable that selects the main element

const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const enterButton = document.querySelector('#enter');
// TODO: Create a function that builds an element and appends it to the DOM

enterButton.addEventListener('click', function (event) {
    event.preventDefault();

  const user = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  localStorage.setItem('user', JSON.stringify(user));
});


// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts
