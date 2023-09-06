export function btnShowMore() {
  const btnMore = document.querySelectorAll('.btn-more')

  for (let i = 0; i < btnMore.length; i++) {
    btnMore[i].addEventListener('click', () => onClickBtnMore(btnMore[i]))
  }

  function onClickBtnMore(btn) {
    const content = btn.previousElementSibling
    content.classList.toggle('drop-down-grid--open')
    // в drop-down-grid--open задан max-heigth: 1000px; (все что кроме px не работает transition)
    // поэтому  быстро окрывается и долго закрывается.

    // если задавать настоящую высоту то будет плавно.
    const fullHeight = content.scrollHeight //закоментировать если так нельзя
    //

    if (content.classList.contains('drop-down-grid--open')) {
      content.style.maxHeight = fullHeight + 'px' //закоментировать если так нельзя
      btn.textContent = 'Скрыть'
      btn.classList.add('btn-more--showed')
    } else {
      // удаляем инлайн стили и применется высота изначальная в css
      content.removeAttribute('style') //закоментировать если так нельзя
      btn.textContent = 'Показать все'
      btn.classList.remove('btn-more--showed')
    }
  }
}
