const navLink = document.getElementById('nav-link')
const navLinkItem = document.getElementById('nav-link-items')
navLink.addEventListener('click', () => {
  navLinkItem.classList.toggle('hidden')
  document.getElementById('x-mark').classList.toggle('hidden')
  document.getElementById('menu-bar').classList.toggle('hidden')
  window.addEventListener('click', () => {
    if(!(navLinkItem.classList.contains('hidden')))
    navLinkItem.classList.add('hidden')
    document.getElementById('x-mark').classList.add('hidden')
    document.getElementById('menu-bar').classList.remove('hidden')
  })
  event.stopPropagation()
})