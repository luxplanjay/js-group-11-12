// https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver

const nav = document.querySelector('.page-nav');

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');
      console.log(sectionId);

      const currentActiveLink = nav.querySelector('.page-nav__link--active');

      if (currentActiveLink) {
        currentActiveLink.classList.remove('page-nav__link--active');
      }

      const nextActiveLink = nav.querySelector(`a[href="#${sectionId}"]`);
      nextActiveLink.classList.add('page-nav__link--active');
    }
  });
};

const options = {
  threshold: 0.6
};

const observer = new IntersectionObserver(onEntry, options);
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  observer.observe(section);
});
