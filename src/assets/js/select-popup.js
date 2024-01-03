const $selectPopups = document.querySelectorAll('.select-popup');
$selectPopups.forEach($selectPopup => {
  const $button = $selectPopup.querySelector('.select-popup__btn');
  const $body = $selectPopup.querySelector('.select-popup__body');

  $button.addEventListener('click', () => {
    $selectPopup.classList.toggle('select-popup--active');
    $body.classList.toggle('select-popup__body--active');
  });

  const $submit = $selectPopup.querySelector('.select-popup__submit');
  $submit.addEventListener('click', () => {
    $selectPopup.classList.remove('select-popup--active');
    $body.classList.remove('select-popup__body--active');
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if ($selectPopup.classList.contains("select-popup--active") && !target.closest(".select-popup")) {
      $selectPopup.classList.remove('select-popup--active');
      $body.classList.remove('select-popup__body--active');
    }
  });
});
