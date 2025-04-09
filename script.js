// Functia de detectare a scroll-ului si animarea progresului
window.addEventListener('scroll', function() {
    let skillsSection = document.getElementById('skills');
    let skillsOffset = skillsSection.getBoundingClientRect().top;
  
    // Daca secțiunea de abilități ajunge în vizibilitate
    if (skillsOffset < window.innerHeight - 150) {
      let progressCircles = document.querySelectorAll('.progress-circle');
      
      // Setăm valori de progres pentru fiecare cerc
      progressCircles.forEach((circle, index) => {
        let percentage = circle.getAttribute('stroke-dasharray');
        let offset = percentage - (percentage * (parseInt(circle.closest('.skill-card').querySelector('.skill-percent').textContent) / 100));
        circle.style.strokeDashoffset = offset;
      });
    }
  });
  