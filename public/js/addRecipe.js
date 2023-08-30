const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-name').value.trim();
  const ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const method = document.querySelector('#recipe-desc').value.trim();
  const catId = document.querySelector('#recipe-cat').selectedIndex;
  const prepTime = document.querySelector('input[name="prep-time"]:checked').value;
  const hasNuts = document.querySelector('#nuts:checked')!==null;
  const vegan = document.querySelector('#vegan:checked')!==null;
  if (name && ingredients && method && prepTime && catId ) {
    const response = await fetch(`/api/addRecipe`, {
      method: 'POST',
      body: JSON.stringify({ name, ingredients, method,catId,prepTime,hasNuts,vegan }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log(response);
      document.location.replace('/api/addRecipe');

    } else {
      alert('Failed to create recipe');
    }
  }
};
// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler);


