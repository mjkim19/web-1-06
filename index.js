function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
}

loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
loadComponent('header', './html/header.html');
