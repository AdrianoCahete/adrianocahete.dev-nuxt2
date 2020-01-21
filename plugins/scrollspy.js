/* eslint-disable */
if (process.browser) {
  function onScroll (event) {
    const sections = document.querySelectorAll('#nav a')
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i]
      const val = currLink.getAttribute('href')
      const refElement = document.querySelector(val)

      if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
        document.querySelector('#nav a').classList.remove('is-active')
        currLink.classList.add('is-active')
      } else {
        currLink.classList.remove('is-active')
      }
    }
  };

  window.document.addEventListener('scroll', onScroll)
}
