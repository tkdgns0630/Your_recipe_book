

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


delButFav = document.querySelectorAll('.delBut');

delButFav.forEach((del) => {
  del.addEventListener('click', delButtonHandler);
});

delButUser = document.querySelectorAll('.del-per');

delButUser.forEach((del) => {
  del.addEventListener('click', delUserRep);
});
