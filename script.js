let bgm = new Audio(`./Asset/bgm.mp3`);
bgm.play();
function pilihancomp() {
  const comp = Math.floor(Math.random() * 5) + 1;
    if (comp === 1) return "Api";
  if (comp === 2) return "air";
  if (comp === 3) return "tanah";
  if (comp === 4) return "angin";
  return "petir";
}

function hasilakhir(player, comp) {
    if (player === comp) {
        return "Seri";
    } else if (
        (player === "Api" && comp === "angin") ||
        (player === "air" && comp === "Api") ||
        (player === "tanah" && comp === "air") ||
        (player === "angin" && comp === "tanah") ||
        (player === "petir" && comp === "angin")
    ) {
        return "Menang";
    } else {
        return "Kalah";
    }
}



const api = document.querySelector(".Api");
const air = document.querySelector(".air");
const tanah = document.querySelector(".tanah");
const angin = document.querySelector(".angin");
const petir = document.querySelector(".petir");
const tampung = [api, air, tanah, angin, petir];

function putar(){
    const gambarcomp = document.querySelector('.img-komputer')
    const gambar =['Api',`air`,`tanah`,`angin`,`petir`]
    let i = 0
    const waktumulai = new Date().getTime()
    setInterval(function(){
         if(new Date().getTime() - waktumulai > 1000){
            clearInterval();
            return;
        }
        gambarcomp.setAttribute("src", `./Asset/${gambar[i]}.jpeg`);
        i++;
        if(i === gambar.length){
            i = 0;
        }

    },150)
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pilih) {
    pilih.addEventListener("click", function () {
        let suara = new Audio(`./Asset/click_sfx.mp3`);
        suara.play();
        const infohasil = document.querySelector(".info");
         infohasil.innerHTML = "";
         infohasil.style.color = "";

        const pilihanplayer = pilih.className;
        const pilihancomputer = pilihancomp();
        const hasil = hasilakhir(pilihanplayer, pilihancomputer);

       putar();

       setTimeout(function(){
        const imgcomp=document.querySelector(".img-komputer");
        imgcomp.setAttribute("src", `./Asset/${pilihancomputer}.jpeg`);

        const infohasil = document.querySelector(".info")
        infohasil.innerHTML=hasil
        infohasil.style.color="black"
       },1010)
   });
});
