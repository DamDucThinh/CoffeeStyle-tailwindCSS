// AUthor: dev by DucThinh

const  topMenu = document.getElementById('dt-top-menu')
const  toggleTopMenuIcon = document.getElementById('dt-toggle-top-menu')

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        // Click to Toggle top menu icon
        topMenu.classList.toggle('dt-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        // Click outside from Toggle top menu icon
        if (topMenu.classList.contains('dt-topmenu-expanded')) {
            topMenu.classList.remove('dt-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})