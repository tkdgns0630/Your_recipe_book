const likeBtn = document.querySelector('#like-btn');
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
    const recipeId = event.target.getAttribute('data-id');
    const action = event.target.textContent.trim();
    if (action === whiteHeart) {
      localStorage.setItem('btnTxt', action);
    }
    const response = await fetch(`/api/recipes/${recipeId}`, {
      method: 'PUT',
      body: JSON.stringify({ recipeId, action }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      toggleButtonText(recipeId, action);
    } else {
      alert('Failed to like');
    }
  }
};

const commentFormHandler = async (event) => {
  event.preventDefault();
  const recId = document.querySelector('input[name="comment"]').value;

  const commentText = document.querySelector(
    'textarea[name="recipe-comments"]'
  ).value;
  console.log(commentText);

  if (commentText) {
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
      console.log(response);
      document.location.reload();
    } else {
      alert('unable to comment');
    }
  }
};

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
