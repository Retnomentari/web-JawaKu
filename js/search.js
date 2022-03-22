$(document).ready(() => {
    $('#search-provinsi-form').submit(function (event) {
      event.preventDefault();
      searchCity();
    });
  
    function searchCity() {
      const input = document.getElementById('provinsiValue').value.toLowerCase();
  
      switch (input) {
        case 'jakarta':
          return (window.location.href = 'provinsi/DKI_Jakarta.html');
        default:
          return (window.location.href = '404.html');
      }
    }
  });