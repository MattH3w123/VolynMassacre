window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 200) {
      header.style.backgroundColor = 'rgba(0, 0, 0, .4)';
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, .9)';
    }
  });

  var elements = document.querySelectorAll('poczotek');

elements.forEach(function(element) {
    element.id = 'main-content';
});