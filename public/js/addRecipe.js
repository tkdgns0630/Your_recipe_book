const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-name').value.trim();
  const ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const description = document.querySelector('#recipe-desc').value.trim();
  const category = document.querySelector('#recipe-cat').value;
  

  if (name && ingredients && description && category ) {
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create recipe');
    }
  }
};


// document
//   .querySelector('.new-recipe-form')
//   .addEventListener('submit', newFormHandler);


