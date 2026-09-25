fetch('datos.json').then(r=>r.json()).then(d=>{
  const gf=document.getElementById('gridFotos');
  d.fotos.forEach(f=>{
    const fig=document.createElement('figure');
    const img=document.createElement('img');
    img.src=f.file; img.alt=f.evento; img.loading='lazy';
    const cap=document.createElement('figcaption');
    cap.textContent=f.evento;
    fig.appendChild(img); fig.appendChild(cap);
    fig.onclick=()=>{const lb=document.getElementById('lightbox');document.getElementById('lightboxImg').src=f.file;document.getElementById('lightboxCap').textContent=f.evento+' · '+f.original;lb.hidden=false;};
    gf.appendChild(fig);
  });
  const gv=document.getElementById('gridVideos');
  d.clips.forEach(c=>{
    const card=document.createElement('div');card.className='card-video';
    const v=document.createElement('video');v.src=c.file;v.controls=true;v.preload='metadata';
    const p=document.createElement('p');p.textContent=c.evento+' · '+c.original;
    card.appendChild(v);card.appendChild(p);gv.appendChild(card);
  });
}).catch(e=>{document.getElementById('gridFotos').textContent='No se pudo cargar datos.json: '+e;});
document.getElementById('lightbox').onclick=e=>{e.currentTarget.hidden=true;};
