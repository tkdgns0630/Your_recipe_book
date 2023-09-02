const likeBtn = document.querySelector('#like-btn');
const whiteHeart = '\u2661';
const blackHeart = '\u2665';
var toggleButtonText = function (action, recipeId) {
  switch (action) {
  case whiteHeart:
    likeBtn.textContent = blackHeart;
    document.querySelector('#count-' + recipeId).textContent++;
    break;

  default:
    likeBtn.textContent = whiteHeart;
    document.querySelector('#count-' + recipeId).textContent--;
    break;
  }
};

var newEventHandler = async function (event) {
  if (event.target.hasAttribute('data-id')) {
    var recipeId = event.target.getAttribute('data-id');
    var action = event.target.textContent.trim();
    const response = await fetch(`/api/recipes/${recipeId}`, {
      method: 'PUT',
      body: JSON.stringify({ recipeId, action }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      toggleButtonText(action, recipeId);
    } else {
      alert('Failed to like');
    }
  }
};
likeBtn.addEventListener('click', newEventHandler);

const commentFormHandler = async (event) => {
  event.preventDefault();
  const recId = document.querySelector('input[name="comment"]').value;

  console.log('test');
  console.log(recId);

  const commentText = document.querySelector(
    'textarea[name="recipe-comments"]'
  ).value;
  console.log(commentText);

  if (commentText) {
    const response = await fetch(`/api/recipes/${recId}`, {
      method: 'POST',
      body: JSON.stringify({
        recId,
        commentText
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('unable to comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
