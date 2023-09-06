import Swiper, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export function initSwiper() {
  new Swiper('.swiper', {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    observer: true,
    slidesPerView: 'auto',
    speed: 400,
    spaceBetween: 16,
    loop: true,

    breakpoints: {
      768: {
        spaceBetween: 0,
        enabled: false,
      },
    },
  })
}
