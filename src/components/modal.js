export function openModal(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscapeKey);
}

export function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

export function setupCloseButtons() {
  document.querySelectorAll('.popup__close').forEach(button => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closeModal(popup));
  });
}

export function setupCloseModalOnOverlayClick() {
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closeModal(evt.target);
    }
  });
}