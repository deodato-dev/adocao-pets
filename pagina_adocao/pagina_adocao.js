function showModal(title, message) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    document.getElementById('custom-modal').classList.remove('d-none');
  }

  function hideModal() {
    document.getElementById('custom-modal').classList.add('d-none');
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      hideModal();
    }
  });