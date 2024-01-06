//Coded By Ali JEBBOURI.
const plusIcons = document.querySelectorAll('.icon-plus');
const paragraphs = document.querySelectorAll('.paragraph');
plusIcons.forEach((plusIcon, index) => {
  plusIcon.addEventListener('click', (event) => {
    const icon = event.currentTarget;
    const currentSrc = icon.getAttribute('src');
    const newSrc = currentSrc.includes('icon-plus') ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
    // Toggle icon source
    icon.setAttribute('src', newSrc);
    // Toggle paragraph visibility based on the icon state
    if (newSrc === './assets/images/icon-minus.svg') {
      paragraphs[index].style.display = 'block';
    } else {
      paragraphs[index].style.display = 'none';
    }
  });
});
