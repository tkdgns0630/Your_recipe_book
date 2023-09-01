const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-name').value.trim();
  const ingredients = document
    .querySelector('#recipe-ingredients')
    .value.trim();
  const method = document.querySelector('#recipe-desc').value.trim();
  const cat_id = document.querySelector('#recipe-cat').selectedIndex;
  const prep_time = document.querySelector(
    'input[name="prep-time"]:checked'
  ).value;
  const has_nuts = document.querySelector('#nuts:checked') !== null;
  const vegan = document.querySelector('#vegan:checked') !== null;
  const photo = document.querySelector('#input-files').files[0];

  const formData = new FormData();
  formData.append('name', name);
  formData.append('ingredients', ingredients);
  formData.append('method', method);
  formData.append('prep_time', prep_time);
  formData.append('cat_id', cat_id);
  formData.append('vegan', vegan);
  formData.append('has_nuts', has_nuts);
  formData.append('file', photo);

  if (name && ingredients && method && prep_time && cat_id) {
    const response = await fetch('/api/add-recipe', {
      method: 'POST',
      body: formData,
      // headers: {
      //   'Content-Type': 'multipart/form-data';
      //   boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW,
      // },
    });

    if (response.ok) {
      console.log(response);
      document.location.replace('/api/user-profile');
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
