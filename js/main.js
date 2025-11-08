const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    // Toggle menu ao clicar no botão
    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('show');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar menu ao clicar em um link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', false);
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('show');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', false);
        }
    });
}

// ------------------- CARROSSEL DE PRODUTOS -------------------
const lista = document.querySelector('.carrossel-lista');
const btnPrev = document.querySelector('.carrossel-btn.prev');
const btnNext = document.querySelector('.carrossel-btn.next');

if (lista && btnPrev && btnNext) {
  const scrollAmount = 300;

  btnNext.addEventListener('click', () => {
    lista.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  btnPrev.addEventListener('click', () => {
    lista.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  // Auto scroll
  let autoScroll = setInterval(() => {
    lista.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    if (lista.scrollLeft + lista.clientWidth >= lista.scrollWidth) {
      lista.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 4000);

  lista.addEventListener('mouseenter', () => clearInterval(autoScroll));
  lista.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      lista.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      if (lista.scrollLeft + lista.clientWidth >= lista.scrollWidth) {
        lista.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 4000);
  });
}




  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
      
      // Fecha os outros quando um é aberto
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
  window.addEventListener('scroll', function() {
    const zap = document.querySelector('.zap');
    if (window.scrollY > 200) { // aparece após rolar 200px
      zap.classList.add('show');
    } else {
      zap.classList.remove('show');
    }
  });