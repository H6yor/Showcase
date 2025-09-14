const dark_mode = document.getElementById('dark-mode')
const mode_icon = document.getElementById('mode-icon');



dark_mode.addEventListener('click', function () {
    document.body.classList.toggle('theme-color')

    // Toggle the icon
    if (document.body.classList.contains('theme-color')) {
        mode_icon.classList.remove('fa-moon');
        mode_icon.classList.add('fa-sun');
    } else {
        mode_icon.classList.remove('fa-sun');
        mode_icon.classList.add('fa-moon');
    }

})



