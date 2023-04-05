(function() {

  function documentReady() {
    @@include('partials/add-class.js');
    @@include('partials/objectFit.js');
    @@include('partials/closest.js');
  };

  document.addEventListener("DOMContentLoaded", documentReady);

})();