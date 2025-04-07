const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');


function createCard(data) {
    const template = document.getElementById('card-template').content;
    const cardElement = template.cloneNode(true);
  
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
  
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;
  
    return cardElement;
  }
  
  const cardsContainer = document.querySelector('.places__list');
  
  initialCards.forEach(cardData => {
    const card = createCard(cardData);
    cardsContainer.appendChild(card);
  });


function openModal(popup) {
    popup.classList.add('popup_is-opened');
  }
  function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
  }
  
  const profileEditButton = document.querySelector('.profile__edit-button');
  const profileName = document.querySelector('.profile__title');
  const profileDescription = document.querySelector('.profile__description');
  const profileForm = profilePopup.querySelector('form');
  const nameInput = profileForm.querySelector('input[name="name"]');
  const descriptionInput = profileForm.querySelector('input[name="description"]');
  
  profileEditButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    openModal(profilePopup);
  });
  
  profilePopup.querySelector('.popup__close').addEventListener('click', () => closeModal(profilePopup));
  cardPopup.querySelector('.popup__close').addEventListener('click', () => closeModal(cardPopup));
  imagePopup.querySelector('.popup__close').addEventListener('click', () => closeModal(imagePopup));
  
  profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closeModal(profilePopup);
  });
  
  const addCardButton = document.querySelector('.profile__add-button');
  const cardForm = cardPopup.querySelector('form');
  const cardNameInput = cardForm.querySelector('input[name="place-name"]');
  const cardLinkInput = cardForm.querySelector('input[name="link"]');
  
  addCardButton.addEventListener('click', () => {
    cardForm.reset();
    openModal(cardPopup);
  });
  
  cardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newCard = createCard({ name: cardNameInput.value, link: cardLinkInput.value });
    document.querySelector('.places__list').prepend(newCard);
    closeModal(cardPopup);
  });
  
  function createCard(data) {
    const template = document.getElementById('card-template').content;
    const cardElement = template.cloneNode(true);
  
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');
  
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;
  
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_is-active');
  });
  
    deleteButton.addEventListener('click', () => {
      deleteButton.closest('.card').remove();
    });
  
    cardImage.addEventListener('click', () => {
      const popupImage = imagePopup.querySelector('.popup__image');
      const popupCaption = imagePopup.querySelector('.popup__caption');
  
      popupImage.src = data.link;
      popupImage.alt = data.name;
      popupCaption.textContent = data.name;

      openModal(imagePopup);
    });
  
    return cardElement;
  }
  