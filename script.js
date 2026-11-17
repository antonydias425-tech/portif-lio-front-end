const fatos=[
  "Meu primeiro jogo no estádio foi Corinthians x Vasco, no Mané Garrincha. Foi inesquecível.",
  "Meu primeiro videogame foi um Xbox 360, e foi ali que minha paixão por jogos começou.",
  "Gosto muito de treinar e de ficar conversando com meus amigos.",
  "Se eu não estivesse na área de tecnologia, provavelmente estaria cursando Agronomia.",
  "Já visitei vários lugares, mas meu grande sonho é conhecer o Texas.",
  "Minha trilha sonora do dia a dia sempre vai ser Zezé Di Camargo e Luciano.",
  "Amo uma cervejinha gelada e um Campari trincando."
];
const el=document.getElementById("fato"),cnt=document.getElementById("cnt");
let atual=-1;
function sortear(){
  let i;do{i=Math.floor(Math.random()*fatos.length)}while(i===atual&&fatos.length>1);
  atual=i;el.classList.add("out");
  setTimeout(()=>{el.textContent=fatos[i];el.classList.remove("out");cnt.textContent=(i+1)+" de "+fatos.length},250);
}
document.getElementById("sorteia").addEventListener("click",sortear);
el.textContent="Clique no botão para descobrir algo sobre mim.";

const root=document.documentElement;
try{const t=localStorage.getItem("tema");if(t)root.dataset.theme=t}catch(e){}
root.dataset.bsTheme=getComputedStyle(root).getPropertyValue("--bg").trim()==="#000"?"dark":"light";
document.getElementById("tema").addEventListener("click",()=>{
  const escuro=getComputedStyle(root).getPropertyValue("--bg").trim()==="#000";
  const novo=escuro?"light":"dark";
  root.dataset.theme=novo;root.dataset.bsTheme=novo;
  try{localStorage.setItem("tema",novo)}catch(e){}
});
