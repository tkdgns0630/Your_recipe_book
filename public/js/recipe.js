const likeBtn = document.querySelector('#like-btn');
const addToFav = document.querySelectorAll('.add-but');
const whiteHeart = '\u2661';
const blackHeart = '\u2665';

//change like button text
var toggleButtonText = function (recipeId, action) {
  if (action === whiteHeart) {
    likeBtn.textContent = blackHeart;
    document.querySelector('#count-' + recipeId).textContent++;
  } else {
    likeBtn.textContent = whiteHeart;
    document.querySelector('#count-' + recipeId).textContent--;
  }
};

var newEventHandler = async function (event) {
  if (event.target.hasAttribute('data-id')) {
    // get recipe id through data attribute
    const recipeId = event.target.getAttribute('data-id');
    const action = event.target.textContent.trim();
    // for storing if recipe has been liked
    if (action === whiteHeart) {
      localStorage.setItem('btnTxt', action);
    }
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/recipes/${recipeId}`, {
      method: 'PUT',
      body: JSON.stringify({ recipeId, action }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, change button text
      toggleButtonText(recipeId, action);
    } else {
      alert('Failed to like');
    }
  }
};
//pass comment textarea data to /recipes/id
const commentFormHandler = async (event) => {
  event.preventDefault();
  const recId = document.querySelector('input[name="comment"]').value;
  // Collect values from the comment textarea
  const commentText = document.querySelector('.form-input').value;
  if (commentText) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/recipes/${recId}`, {
      method: 'POST',
      body: JSON.stringify({
        recId,
        commentText,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('unable to comment');
    }
  }
};
// add to favourites
const addToFab = async (event) => {
  if (event.target.hasAttribute('add-id')) {
    const addId = event.target.getAttribute('add-id');
    const userId = event.target.getAttribute('user-id');
    // Send a POST request to the API endpoint

    const response = await fetch(`/api/favourites/${addId}`, {
      method: 'POST',
      body: JSON.stringify({ addId, userId }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.getElementById('add-fav').innerHTML = 'Added to favourites';
      // If successful, redirect the browser to the profile page
      document.location.replace('/api/user-profile');
    } else {
      document.getElementById('add-fav').innerHTML =
        'Already in favourite list';
    }
  }
};

addToFav.forEach((add) => {
  add.addEventListener('click', addToFab);
});

likeBtn.addEventListener('click', newEventHandler);
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);

window.onload = () => {
  const a = localStorage.getItem('btnTxt');
  if (a === whiteHeart) {
    likeBtn.textContent = blackHeart;
    localStorage.setItem('btnTxt', blackHeart);
  } else {
    likeBtn.textContent = whiteHeart;
  }
};
