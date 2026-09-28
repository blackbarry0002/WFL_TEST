const dialog = document.querySelector('#callback-dialog');
const form = document.querySelector('#callback-form');
const success = document.querySelector('.success-state');

function openCallback(event) {
  event.preventDefault();
  dialog.showModal();
  document.querySelector('#name').focus();
}

document.querySelectorAll('a[href="#callback"]').forEach((link) => {
  link.addEventListener('click', openCallback);
});

document.querySelector('.close-button').addEventListener('click', () => dialog.close());
document.querySelector('.done-button').addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

dialog.addEventListener('close', () => {
  form.reset();
  form.hidden = false;
  success.hidden = true;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  // This standalone demo intentionally does not transmit or persist personal data.
  form.hidden = true;
  success.hidden = false;
  success.focus();
});
