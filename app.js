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
    const v=document.createElement('video');v.src=c.file;v.controls=true;v.preload='none';v.poster=c.file.replace('clip-','poster-').replace('.mp4','.jpg');
    const p=document.createElement('p');p.textContent=c.evento;
    card.appendChild(v);card.appendChild(p);gv.appendChild(card);
  });
}).catch(e=>{document.getElementById('gridFotos').textContent='No se pudo cargar datos.json: '+e;});
document.getElementById('lightbox').onclick=e=>{e.currentTarget.hidden=true;};
// Linea de tiempo interactiva estilo diapositiva
const PASO_FOTOS=[
  {img:'fotos/foto-02.jpg',cap:'Debut · UTH San Pedro · Jul 2025'},
  {img:'fotos/foto-05.png',cap:'FUNCAIN · 10 Sept 2025 + Bienvenida Villanueva'},
  {img:'fotos/foto-09.jpg',cap:'Municipalidad · Ago 2026'},
  {img:'fotos/foto-11.jpg',cap:'UTH San Pedro · 12 Sept 2026'},
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
