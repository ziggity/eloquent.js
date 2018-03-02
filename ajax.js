const xhr = new XMLHttpRequest();
  xhr.open('GET', 'sidebar.html');
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4) {
      document.getElementById('ajax').innerHTML = xhr.responseText;
    }
  };
  
  function sendAJAX() {
    xhr.send();
    document.getElementById('load').style.display = 'none';
  }
