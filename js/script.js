trocaTema = () => {
  // alert("Mudei o tema e você não viu.")
  //const html = document.documentElement;

  //document.querySelector("body").style.background = "pink"

  document.documentElement.classList.toggle("light");

  const islight = document.documentElement.classList.contains("light");

  const imagem = islight ? "./img/perfil.jpeg" : "./img/transferir.png";

  document.querySelector("#perfil img").setAttribute("scr", imagem)
};
