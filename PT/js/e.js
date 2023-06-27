 var questions = document.querySelectorAll('.qna-item .question');

  questions.forEach(function(question) {
    question.addEventListener('click', function() {
      var answer = this.nextElementSibling;

      if (answer.style.display === 'none') {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });

  function scrollToSection() {
    var section = document.querySelector(".section9-inner");
    section.scrollIntoView({ behavior: "smooth" });
  }