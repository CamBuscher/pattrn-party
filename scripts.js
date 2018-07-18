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