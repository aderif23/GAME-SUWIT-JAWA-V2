// BUAT LOGIKA PEMILIHAN RANDOM KOMPUTER NYA
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}
// BUAT RULES NYA/LOGIKA NYA
function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "ANDA MENANG!" : " ANDA KALAH!";
  if (player == "orang") return comp == "gajah" ? "ANDA KALAH!" : "ANDA MENANG!";
  if (player == "semut") return comp == "orang" ? "ANDA KALAH!" : "ANDA MENANG!";
}

// MEMBERI EFEK PUTAR PADA PILIHAN KOMPUTER
function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// CARA YANG LEBIH EFEKTIF
const img = document.querySelectorAll("li img");
img.forEach(function (imgOption) {
  imgOption.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = imgOption.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
// CARA INI KURANG EFEKTIF KARENA AKAN MENGULANG KODE KODE NYA
// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.classList;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
