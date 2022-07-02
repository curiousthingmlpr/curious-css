(() => {

  window.curious = {};

  // some settings and accessibility
  document.addEventListener("DOMContentLoaded", () => {

    // add fontawesome icon script
    const fontAwesomeScript = document.createElement("script");
    fontAwesomeScript.src = "https://kit.fontawesome.com/302a9d014d.js";
    fontAwesomeScript.crossOrigin = "anonymous";
    fontAwesomeScript.defer = true;
    document.head.append(fontAwesomeScript);

  });

  // component --->


  // alert --->
  function opAlert() {
    document.querySelectorAll(".alert").forEach((alert, index) => {
      alert.classList.add(`alert-${index + 1}`);
      alert.querySelector(".alert-close-button").addEventListener("click", () => {
        alert.style = "opacity: 0; pointer-events: none; transition: all .25s ease;";
        setTimeout(() => {
          alert.classList.add("unactive");
          alert.style = "";
        }, 250);
      });
    });
  }
  opAlert();
  // alert --->

  // hidden work container --->
  document.querySelectorAll(".hidden-work-container").forEach((element, index) => {
    element.classList.add(`hidden-work-container-${index+1}`);
  });

  document.querySelectorAll(".hidden-work-container-operate").forEach((element, index) => {

    element.classList.add(`hidden-work-container-operate-${index + 1}`);

    if (element.querySelector(".hidden-work-container")) {
      element.querySelector(".hidden-work-container").classList.add(`hidden-work-container-init-${index + 1}`);
    }
    if (element.querySelector(".tgl-hidden-work-container")) {

      element.querySelector(".tgl-hidden-work-container").classList.add(`tgl-hidden-work-container-${index+1}`);

      element.querySelector(".tgl-hidden-work-container").addEventListener("click", () => {
        if (element.querySelector(".hidden-work-container")) {
          element.querySelector(".hidden-work-container").classList.toggle("active");
        }
      });

    }
    if (element.querySelector(".open-hidden-work-container")) {

      element.querySelector(".open-hidden-work-container").classList.add(`open-hidden-work-container-${index+1}`);

      element.querySelector(".open-hidden-work-container").addEventListener("click", () => {
        if (element.querySelector(".hidden-work-container")) {
          element.querySelector(".hidden-work-container").classList.add("active");
        }
      });

    }
    if (element.querySelector(".close-hidden-work-container")) {

      element.querySelector(".close-hidden-work-container").classList.add(`close-hidden-work-container-${index+1}`);

      element.querySelector(".close-hidden-work-container").addEventListener("click", () => {
        if (element.querySelector(".hidden-work-container")) {
          element.querySelector(".hidden-work-container").classList.remove("active");
        }
      });

    }


  });
  // hidden work container --->

  // toggle button --->
  document.querySelectorAll(".tgl-btn").forEach((toggleButton, index) => {
    toggleButton.classList.add(`tgl-btn-${index + 1}`);
    toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("active")
    });
  });
  // toggle button --->

  // dropdown --->
  document.querySelectorAll(".dropdown").forEach((dropdown, index) => {
    dropdown.classList.add(`dropdown-${index + 1}`);
    dropdown.addEventListener("click", () => {
      dropdown.querySelector(".dropdown-wrapper").classList.toggle("active");
      dropdown.querySelector(".dropdown-list").classList.toggle("active");
      if (dropdown.querySelector(".dropdown-wrapper").classList.contains("active")) {
        dropdown.querySelector(".dropdown-icon-area i").classList.replace("fa-caret-right", "fa-caret-down");
      } else {
        dropdown.querySelector(".dropdown-icon-area i").classList.replace("fa-caret-down", "fa-caret-right");
      }
    });
  });
  // dropdown --->

  // overlay --->
  function opOverlay() {
    document.querySelectorAll(".overlay").forEach((overlay, index) => {
      overlay.classList.add(`overlay-${index + 1}`);
      if (overlay.classList.contains("click-to-close")) {
        overlay.addEventListener("click", () => overlay.remove());
      }
    });
  }
  opOverlay();

  document.querySelectorAll(".create-overlay").forEach((element, index) => {
    element.classList.add(`create-overlay-${index+1}`);
    element.addEventListener("click", () => {
      createOverlay(1, null, element.classList.contains("click-to-close"));
    });
  });
  // overlay --->


  // component --->
  

  // function --->

  function showAlert(value, showArea = "all") {

    if (Object.prototype.toString.call(value) != "[object Object]") {
      console.error("The first parameter of the function showAlert() has the wrong type.");
    } else {

      const alertThemeValue = String(value.theme).toLocaleLowerCase();
      let alertTheme = null;
      let alertIcon = null;

      switch (alertThemeValue) {
        case "like":
          alertTheme = "like";
          alertIcon = "fa-solid fa-heart";
          break;
        case "info":
          alertTheme = "info";
          alertIcon = "fa-solid fa-circle-info";
          break;
        case "warning":
          alertTheme = "warning";
          alertIcon = "fa-solid fa-bomb";
          break;
        case "danger":
          alertTheme = "danger";
          alertIcon = "fa-solid fa-circle-exclamation";
          break;
        case "success":
          alertTheme = "success";
          alertIcon = "fa-solid fa-circle-check";
          break;
        default:
          alertTheme = "";
          alertIcon = "fa-solid fa-thumbs-up";
          break;
      }

      const alertHTML = `<div class="alert alert-${alertTheme}">
        <div class="alert-icon-area">
          <i class="${value.icon != undefined && value.icon != "" ? value.icon : alertIcon}"></i>
        </div>
        <div class="alert-content-area">
          <div class="alert-title">${value.title ? value.title : "Title"}</div>
          <p class="alert-content">${value.content ? value.content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur soluta aspernatur eligendi dicta odio explicabo? Excepturi, nihil, cum possimus velit alias eaque veniam doloremque suscipit nisi repellendus tempore libero."}</p>
        </div>
        <div class="alert-close-button">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>`;

      // show operation
      if (Object.prototype.toString.call(showArea) != "[object String]") {
        console.error("The second parameter of the function showAlert() is of the wrong type.");
      } else {

        if (showArea.toLocaleLowerCase() == "all") {
          document.querySelectorAll(".show-alert-area").forEach((element, index) => {
            element.classList.add(`show-alert-area-${index + 1}`);
            element.innerHTML = alertHTML;
          });
        } else {
          document.querySelector(`${showArea}`).innerHTML = alertHTML;
        }
  
        opAlert();

      }


    }

  }

  function handleImageError(alt = "Failed to load this image") {
    document.querySelectorAll("img").forEach(img => {
      img.addEventListener("error", () => {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg";
        img.alt = alt;
      });
    });
  }

  function removeFocus() {
    document.querySelectorAll("input").forEach(input => input.blur());
    document.querySelectorAll("textarea").forEach(textarea => textarea.blur());
  }

  function showPassword(value) {

    document.querySelectorAll(".need-show-password").forEach((password, index) => {

      password.classList.add(`need-show-password-${index+1}`);
      password.setAttribute("autocomplete", "off");

      document.querySelectorAll(".show-password-btn").forEach((button, index) => {

        button.classList.add(`show-password-btn-${index+1}`);
        button.style.cursor = "pointer";
        button.title = "Click to show password.";

        let autoIcon = false;
        let unShowPasswordIcon = null;
        let isShowPasswordIcon = null;

        if (value !== undefined) {

          if (Object.prototype.toString.call(value) != "[object Object]") {
            console.error("The first parameter of the function showPassword() has the wrong type.");
          } else {

            if (value.autoIcon != undefined) {
              if (Object.prototype.toString.call(value.autoIcon) != "[object Boolean]") {
                console.error("autoIcon should be a boolean");
              } else {
                if (value.autoIcon) {
                  autoIcon = true;
                }
              }
            }

            if (value.unShowPasswordIcon != undefined) {
              unShowPasswordIcon = value.unShowPasswordIcon;
            }

            if (value.isShowPasswordIcon != undefined) {
              isShowPasswordIcon = value.isShowPasswordIcon;
            }


          }

        }

        if (autoIcon) {
          button.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
        }

        if (unShowPasswordIcon != null) {
          button.innerHTML = `<i class="${unShowPasswordIcon}"></i>`;
        }

        button.addEventListener("click", () => {
          if (password.type == "password") {
            password.type = "text";
            button.title = "Click to hide password.";
            if (autoIcon) {
              button.innerHTML = `<i class="fa-solid fa-eye"></i>`;
            }
            if (isShowPasswordIcon != null) {
              button.innerHTML = `<i class="${isShowPasswordIcon}"></i>`;
            }
          } else {
            password.type = "password";
            button.title = "Click to show password.";
            if (autoIcon) {
              button.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
            }
            if (unShowPasswordIcon != null) {
              button.innerHTML = `<i class="${unShowPasswordIcon}"></i>`;
            }
          }
        });

      });

    });
  }

  function createOverlay(count = 1, area = null, clickToClose = false) {
    for (let i = 0; i < count; i++) {
      const overlay = document.createElement("div");
      overlay.classList.add("overlay", clickToClose ? "click-to-close" : `overlay-normal-${i+1}`);
      if (area == null) {
        document.body.append(overlay);
      } else {
        if (document.querySelector(`${area}`)) {
          document.querySelector(`${area}`).append(overlay);
        }
      }
    }
    opOverlay();
  }

  window.curious.showAlert = showAlert;
  window.curious.handleImageError = handleImageError;
  window.curious.removeFocus = removeFocus;
  window.curious.showPassword = showPassword;
  window.curious.createOverlay = createOverlay;

  // function --->

})();