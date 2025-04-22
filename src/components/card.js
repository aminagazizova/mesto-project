export function createCard(data, handleDelete, handleLike, handleImageClick) {
  const template = document.getElementById('card-template').content;
  const cardElement = template.cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const likeButton = cardElement.querySelector('.card__like-button');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  likeButton.addEventListener('click', handleLike);
  deleteButton.addEventListener('click', handleDelete);
  cardImage.addEventListener('click', () => handleImageClick(data));

  return cardElement;
}

export function handleLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

export function handleDelete(evt) {
  evt.target.closest('.card').remove();
}