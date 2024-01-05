const faqContent = document.querySelector(".faq-container");

faqContent.addEventListener("click", (e) => {
  let target = e.target;
  let faqHeader = target.closest(".faq-header");
  if (!faqHeader) {
    return;
  }
  const faqBody = faqHeader.nextElementSibling;
  const faqIcons = faqHeader.querySelector("img");

  // Toggling the faq body and also the icons 
  if (faqBody.classList.contains("hidden")) {
    faqBody.classList.remove("hidden");
    faqIcons.src = "./assets/images/icon-minus.svg";
  } else {
    faqBody.classList.add("hidden");
    faqIcons.src = "./assets/images/icon-plus.svg";
  }

  // Other Faq Headers 
  const faqHeaders = document.querySelectorAll(".faq-header");
  faqHeaders.forEach( header => {
    if (header !== faqHeader) {
        const otherBody = header.nextElementSibling;
        otherBody.classList.add('hidden')
        const otherIcon = header.querySelector('img')
        otherIcon.src = "./assets/images/icon-plus.svg"
    }
  })
});


