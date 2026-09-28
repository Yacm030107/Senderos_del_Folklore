fetch('datos.json').then(r=>r.json()).then(d=>{
  const gf=document.getElementById('gridFotos');
  d.fotos.forEach(f=>{
    const fig=document.createElement('figure');
    const img=document.createElement('img');
    img.src=f.file; img.alt=f.evento; img.loading='lazy'; img.decoding='async';
    const cap=document.createElement('figcaption');
    cap.textContent=f.evento;
    fig.appendChild(img); fig.appendChild(cap);
    fig.onclick=()=>{const lb=document.getElementById('lightbox');document.getElementById('lightboxImg').src=f.file;document.getElementById('lightboxCap').textContent=f.evento;lb.hidden=false;};
    gf.appendChild(fig);
  });
  const gv=document.getElementById('gridVideos');
  d.clips.forEach(c=>{
    const card=document.createElement('div');card.className='card-video';
    const v=document.createElement('video');v.src=c.file;v.controls=true;v.preload='metadata';v.poster=c.file.replace('clip-','poster-').replace('.mp4','.jpg');v.disablePictureInPicture=true;v.setAttribute('controlsList','nodownload noremoteplayback');v.setAttribute('playsinline','');
    v.addEventListener('play',()=>{document.querySelectorAll('#gridVideos video').forEach(o=>{if(o!==v)o.pause();});});
    const p=document.createElement('p');p.textContent=c.evento;
    card.appendChild(v);card.appendChild(p);gv.appendChild(card);
  });
}).catch(e=>{document.getElementById('gridFotos').textContent='No se pudo cargar datos.json: '+e;});
document.getElementById('lightbox').onclick=e=>{e.currentTarget.hidden=true;};
// Un video a la vez y solo dentro del sitio: pausa al cambiar de pestaña o al salir de pantalla
document.addEventListener('visibilitychange',()=>{if(document.hidden){document.querySelectorAll('video').forEach(v=>v.pause());};});
const obsOff=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting){e.target.pause();}});},{threshold:0.2});
new MutationObserver(()=>{document.querySelectorAll('#gridVideos video').forEach(v=>obsOff.observe(v));}).observe(document.getElementById('gridVideos'),{childList:true});
// Linea de tiempo interactiva estilo diapositiva
const PASO_FOTOS=[
  {img:'fotos/foto-03.jpg',cap:'Debut · UTH San Pedro · Jul 2025'},
  {img:'fotos/foto-08.png',cap:'FUNCAIN · 10 Sept 2025 + Bienvenida Villanueva'},
  {img:'fotos/foto-14.jpg',cap:'Municipalidad · Ago 2026'},
  {img:'fotos/foto-21.jpg',cap:'UTH San Pedro · 12 Sept 2026'},
];
function activaPaso(k){
  document.querySelectorAll('#riel .nodo').forEach(n=>n.classList.toggle('activo',+n.dataset.paso===k));
  document.querySelectorAll('#pasos .tarjeta').forEach(t=>t.classList.toggle('activa',+t.dataset.paso===k));
  document.getElementById('rielProg').style.width=(12.5+k*(75/3))+'%';
  document.getElementById('fotoPaso').src=PASO_FOTOS[k].img;
  document.getElementById('capPaso').textContent=PASO_FOTOS[k].cap;
}
document.querySelectorAll('#riel .nodo, #pasos .tarjeta').forEach(el=>{
  el.addEventListener('click',()=>activaPaso(+el.dataset.paso));
});
activaPaso(0);
