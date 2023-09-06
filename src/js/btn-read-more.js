export function btnReadMore() {
  const btn = document.querySelector('.btn-read-more')
  const content = document.querySelector('.about__text')

  btn.addEventListener('click', () => onClickBtn())

  function onClickBtn() {
    content.classList.toggle('about__text--open')

    if (content.classList.contains('about__text--open')) {
      btn.textContent = 'Скрыть'
      btn.classList.add('btn-read-more--showed')
    } else {
      btn.textContent = 'Читать далее'
      btn.classList.remove('btn-read-more--showed')
    }
  }
}
