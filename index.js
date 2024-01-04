const faqContent = document.querySelector(".faq-body");
  faqContent.addEventListener("click", (e) => {
    let target = e.target;
    const groupHeader = target.closest(".faq-header");
    if (!groupHeader) return;
    const group = document.querySelector('.faq-container')
    const groupBody = groupHeader.nextElementSibling;
    const groupIcon = groupHeader.querySelector("i");

    // Toggle Icon
    groupIcon.classList.toggle("fa-plus-circle");
    groupIcon.classList.toggle("fa-minus-circle");

    // Toggle Visibility
    groupBody.classList.toggle("open");

    // To toggle other groups
    let groupHeaders = document.querySelectorAll(".faq-header");
    groupHeaders.forEach((header) => {
      if (header !== groupHeader) {
        let body = header.nextElementSibling;
        body.classList.remove("open");
        let icon = header.querySelector("i");
        icon.classList.remove("fa-minus-circle");
        icon.classList.add("fa-plus-circle");
      }
    });
  });
