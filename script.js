function toggleDarkMode() {
    const body = document.body;
    const elementsToChange = document.querySelectorAll('h1, p, button');
  
    body.classList.toggle('dark-mode');
    elementsToChange.forEach(element => {
      element.classList.toggle('dark-mode');
    });
  }
  