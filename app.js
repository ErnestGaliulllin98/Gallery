const sliders = document.querySelectorAll('.slide')

sliders.forEach(function(slide) {
  slide.addEventListener('click', function() {
    clearActiveClasses()
    slide.classList.add('active')
  })
})

function clearActiveClasses() {
  sliders.forEach(function(slide) {
    slide.classList.remove('active')
  })
}

