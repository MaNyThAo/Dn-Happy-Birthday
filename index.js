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

// Cake expand / minimize interaction
(function () {
  const cake = document.querySelector(".cake");
  const overlay = document.querySelector(".cake-overlay");
  const birthdayContent = document.querySelector(".birthday-content");
  const photo = birthdayContent?.querySelector(".birthday-photo");
  const messageContainer = birthdayContent?.querySelector(".message-container");
  let isExpanded = false;

  function showBirthdayContent() {
    overlay?.classList.add("visible");
    birthdayContent?.classList.add("visible");
    overlay?.setAttribute("aria-hidden", "false");
    birthdayContent?.setAttribute("aria-hidden", "false");
    setTimeout(() => {
      photo?.classList.add("visible");
      messageContainer?.classList.add("visible");
    }, 260);
  }

  function hideBirthdayContent() {
    photo?.classList.remove("visible");
    messageContainer?.classList.remove("visible");
    setTimeout(() => {
      birthdayContent?.classList.remove("visible");
      overlay?.classList.remove("visible");
      overlay?.setAttribute("aria-hidden", "true");
      birthdayContent?.setAttribute("aria-hidden", "true");
    }, 260);
  }

  if (!cake) return;

  cake.addEventListener("click", () => {
    if (!isExpanded) {
      cake.classList.add("mini"); // chuyển sang góc trên
      showBirthdayContent();
      isExpanded = true;
    } else {
      cake.classList.remove("mini");
      hideBirthdayContent();
      isExpanded = false;
    }
  });

  overlay?.addEventListener("click", () => {
    cake.classList.remove("mini");
    hideBirthdayContent();
    isExpanded = false;
  });
})();
const playBtn = document.getElementById("playMusicBtn");
const music = document.getElementById("birthdayMusic");

playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.display = "none"; // Ẩn nút sau khi bật nhạc
});
playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.transition = "opacity 0.6s ease";
  playBtn.style.opacity = "0";
  setTimeout(() => playBtn.style.display = "none", 600);
});
// 🎉 Hiệu ứng biểu tượng sinh nhật (có cả khỉ)
function createBirthdayIcon() {
  const icons = ["💖", "🎂", "🎉", "🎈", "🌸", "🐵", "✨", "💫", "🎁"];
  const icon = document.createElement("div");
  icon.classList.add("floating-icon");
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];

  // Vị trí, kích cỡ, tốc độ ngẫu nhiên
  icon.style.left = Math.random() * 100 + "vw";
  icon.style.fontSize = 16 + Math.random() * 24 + "px";
  icon.style.animationDuration = 4 + Math.random() * 3 + "s";

  // Màu sắc khác nhau (nếu emoji hỗ trợ)
  icon.style.filter = `hue-rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(icon);

  // Xóa khi bay xong
  setTimeout(() => icon.remove(), 7000);
}

// Gọi hiệu ứng liên tục
setInterval(createBirthdayIcon, 300);

