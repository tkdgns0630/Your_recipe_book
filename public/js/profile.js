const newFormHandler = async (event) => {
  event.preventDefault();

  // const name = document.querySelector('#project-name').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  // const description = document.querySelector('#project-desc').value.trim();

  //   if (name && needed_funding && description) {
  //     const response = await fetch(`/api/projects`, {
  //       method: 'POST',
  //       body: JSON.stringify({ name, needed_funding, description }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to create project');
  //     }
  //   }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('user-id')) {
    const id = event.target.getAttribute('user-id');
    const response = await fetch(`/api/favourites/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/api/user-profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

const delUserRep = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/user-profile/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/api/user-profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);

delButFav = document.querySelectorAll('.delBut');

delButFav.forEach((del) => {
  del.addEventListener('click', delButtonHandler);
});

delButUser = document.querySelectorAll('.del-per');

delButUser.forEach((del) => {
  del.addEventListener('click', delUserRep);
});
