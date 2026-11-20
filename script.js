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

// Efeito de digitação no topo
const frases=["Estudante de Engenharia de Software","Futuro desenvolvedor","Corinthiano de coração","Apaixonado por tecnologia e jogos"];
const dig=document.getElementById("digita");
if(dig){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){dig.textContent=frases[0]}
  else{
    let f=0,i=0,apaga=false;
    (function tick(){
      const t=frases[f];
      dig.textContent=t.slice(0,i);
      if(!apaga&&i===t.length){apaga=true;return setTimeout(tick,1600)}
      if(apaga&&i===0){apaga=false;f=(f+1)%frases.length}
      i+=apaga?-1:1;
      setTimeout(tick,apaga?35:70);
    })();
  }
}

// Botão voltar ao topo
const voltar=document.getElementById("voltar");
addEventListener("scroll",()=>voltar.classList.toggle("show",scrollY>400),{passive:true});
voltar.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

// Botões de copiar
document.querySelectorAll("[data-copiar]").forEach(b=>b.addEventListener("click",async()=>{
  const original=b.innerHTML;
  try{await navigator.clipboard.writeText(b.dataset.copiar);b.innerHTML='<i class="bi bi-check2 me-2"></i>Copiado!'}
  catch(e){b.textContent="Copie: "+b.dataset.copiar}
  setTimeout(()=>{b.innerHTML=original},2000);
}));

// Formulário: valida e abre o programa de e-mail já preenchido
const form=document.getElementById("form");
form.addEventListener("submit",e=>{
  e.preventDefault();
  if(!form.checkValidity()){form.classList.add("was-validated");return}
  const nome=form.nome.value.trim(),email=form.email.value.trim(),msg=form.msg.value.trim();
  const corpo=`Olá, Antony! Meu nome é ${nome} (${email}).\n\n${msg}`;
  location.href="mailto:antonydias425@gmail.com?subject="+encodeURIComponent("Contato pelo portfólio - "+nome)+"&body="+encodeURIComponent(corpo);
});
