var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    document.querySelectorAll('.accordion').forEach(element => element.classList.remove("active"))
    this.classList.add("active");
    var panel = this.nextElementSibling;
    if (panel.classList.contains('closed')) {
      document.querySelector('.accordion_content_area').innerHTML = panel.innerHTML
    } 
  });
}

$('.MENU_TEXT').click(() => {
  console.log($('.headerNav').attr('style') === 'display: none')
  if ($('.headerNav').attr('style') === 'display: none;') {
    $('.headerNav').show(400)
    $('.header-input').show(400)
  } else {
    $('.headerNav').hide(400)
    $('.header-input').hide(400)
  }
})