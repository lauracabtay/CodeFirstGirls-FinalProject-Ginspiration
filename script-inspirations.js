
document.addEventListener("DOMContentLoaded", function () {
        var modal = document.getElementsByClassName("modal");
        var image = document.getElementsByClassName("myImg");
        var span= document.getElementsByClassName("close");

        image[0].onclick = function () {
        modal[0].style.display = "block";
        };

           image[1].onclick = function () {
          modal[1].style.display = "block";
        };

          image[2].onclick = function () {
          modal[2].style.display = "block";
        };

          image[3].onclick = function () {
          modal[3].style.display = "block";
        };

          image[4].onclick = function () {
          modal[4].style.display = "block";
        };

          image[5].onclick = function () {
          modal[5].style.display = "block";
        };

        span[0].onclick = function () {
        modal[0].style.display = "none";
        };

      span[1].onclick = function () {
      modal[1].style.display = "none";
        };

     span[2].onclick = function () {
     modal[2].style.display = "none";
        };

     span[3].onclick = function () {
     modal[3].style.display = "none";
        };
        
     span[4].onclick = function () {
     modal[4].style.display = "none";
        };

     span[5].onclick = function () {
     modal[5].style.display = "none";
      };
        
     var buttons = document.getElementsByClassName("myImg");

  for(let i = 0, modal, close; i < buttons.length; i++)
  {
    //modal ID is stored as data-modal attribute
    modal = document.getElementById(buttons[i].dataset.modal);
    if (!modal)
      continue;

    buttons[i].onclick = function (e)
    {
      e.preventDefault();
      e.stopPropagation();
      modal.style.display = "block";
      modal.querySelector(".modal-content").scrollTop = 0;
    };

    close = modal.querySelector(".close");
    close.onclick = function()
    {
      modal.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target.classList.contains("modal"))
    {
      event.target.style.display = "none";
    }
  };
});