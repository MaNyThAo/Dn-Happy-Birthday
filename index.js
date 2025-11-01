// personalize quickly:
      const person = { name: "Hường", birthYear: 2004 };

      // tiles click to open modal
      document.querySelectorAll(".tile").forEach((t) => {
        t.addEventListener("click", () => {
          const src = t.dataset.full || t.querySelector("img").src;
          openModal(src);
        });
      });

      function openModal(src) {
        const modal = document.getElementById("modal");
        modal.innerHTML = "";
        modal.style.display = "flex";
        modal.style.position = "fixed";
        modal.style.inset = 0;
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.background = "rgba(0,0,0,.6)";
        modal.style.zIndex = 120;
        modal.addEventListener("click", closeModal);
        const img = document.createElement("img");
        img.src = src;
        img.style.maxWidth = "90vw";
        img.style.maxHeight = "90vh";
        img.style.borderRadius = "12px";
        img.style.boxShadow = "0 30px 80px rgba(0,0,0,.6)";
        modal.appendChild(img);
      }
      function closeModal() {
        const m = document.getElementById("modal");
        m.style.display = "none";
        m.innerHTML = "";
      }

      // small hover heart animation inside tile
      document.querySelectorAll(".tile").forEach((tile) => {
        tile.addEventListener("mouseenter", () => {
          const h = document.createElement("div");
          h.textContent = "❤️";
          h.style.position = "absolute";
          h.style.right = "12px";
          h.style.top = "10px";
          h.style.fontSize = "18px";
          h.style.transform = "translateY(0)";
          h.style.opacity = "1";
          h.style.transition = "all .9s ease";
          tile.appendChild(h);
          setTimeout(() => {
            h.style.transform = "translateY(-20px)";
            h.style.opacity = "0";
          }, 40);
          setTimeout(() => h.remove(), 900);
        });
      });

      // ESC to close modal
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
      });

      // Cake expand / cut interaction
      (function () {
        const cake = document.querySelector('.cake');
        const overlay = document.querySelector('.cake-overlay');
        const birthdayContent = document.querySelector('.birthday-content');
        const photo = birthdayContent && birthdayContent.querySelector('.birthday-photo');
        const messageContainer = birthdayContent && birthdayContent.querySelector('.message-container');
        let isExpanded = false;
        let isCut = false;

        function showBirthdayContent() {
          if (!overlay || !birthdayContent) return;
          overlay.classList.add('visible');
          birthdayContent.classList.add('visible');
          overlay.setAttribute('aria-hidden', 'false');
          birthdayContent.setAttribute('aria-hidden', 'false');
          setTimeout(() => {
            if (photo) photo.classList.add('visible');
            if (messageContainer) messageContainer.classList.add('visible');
          }, 260);
        }

        function hideBirthdayContent() {
          if (!overlay || !birthdayContent) return;
          if (photo) photo.classList.remove('visible');
          if (messageContainer) messageContainer.classList.remove('visible');
          setTimeout(() => {
            birthdayContent.classList.remove('visible');
            overlay.classList.remove('visible');
            overlay.setAttribute('aria-hidden', 'true');
            birthdayContent.setAttribute('aria-hidden', 'true');
          }, 260);
        }

        if (!cake) return;

        cake.addEventListener('click', () => {
          if (!isExpanded) {
            cake.classList.add('expanded');
            showBirthdayContent();
            isExpanded = true;
            return;
          }
          if (!isCut) {
            cake.classList.add('cut');
            isCut = true;
            return;
          }
          // reset
          cake.classList.remove('expanded', 'cut');
          hideBirthdayContent();
          isExpanded = false;
          isCut = false;
        });

        // clicking overlay closes
        if (overlay) overlay.addEventListener('click', () => {
          if (isExpanded) {
            cake.classList.remove('expanded', 'cut');
            hideBirthdayContent();
            isExpanded = false;
            isCut = false;
          }
        });

        // keyboard support
        cake.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            cake.click();
          }
        });
      })();
