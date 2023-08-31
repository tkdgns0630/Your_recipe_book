const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-name').value.trim();
  const ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const method = document.querySelector('#recipe-desc').value.trim();
  const catId = document.querySelector('#recipe-cat').selectedIndex;
  const prepTime = document.querySelector('input[name="prep-time"]:checked').value;
  const hasNuts = document.querySelector('#nuts:checked')!==null;
  const vegan = document.querySelector('#vegan:checked')!==null;
  const photo = document.querySelector('#input-files').files[0];

  const formData = new FormData();  
  formData.append("name",name);
  formData.append("ingredients",ingredients);
  formData.append("method",method);
  formData.append("prepTime",prepTime);
  formData.append("catId",catId);
  formData.append("vegan",vegan);
  formData.append("hasNuts",hasNuts);
  formData.append("file",photo)

  if (name && ingredients && method && prepTime && catId ) {
    const response = await fetch(`/api/add-recipe`, {
      method: 'POST',
      body: formData,
      // headers: {
      //   'Content-Type': 'multipart/form-data';
      //   boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW,
      // },
    });

    if (response.ok) {
      console.log(response);
      document.location.replace('/api/add-recipe');

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



