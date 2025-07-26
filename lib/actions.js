'use server';

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'), // name the info from formData named input
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  console.log(meal);
}
