import{i as a,S as u}from"./assets/vendor-B07T6_gy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m=({webformatURL:s,largeImageURL:t,tags:o,likes:i,views:e,comments:r,downloads:n})=>`<li class="gallery-item">
        <a href="${t}">
          <img src="${s}" alt="${o}" loading="lazy" />
        </a>
        <div class="info">
          <p>Likes: ${i}</p>
          <p>Views: ${e}</p>
          <p>Comments: ${r}</p>
          <p>Downloads: ${n}</p>
        </div>
      </li>`,p=s=>fetch(`https://pixabay.com/api/?key=32552782-0d4c86680018457e820f20492&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}),c=document.querySelector(".search-form"),l=document.querySelector(".gallery-list"),f=document.querySelector(".loader"),d=s=>{s.preventDefault();const t=c.elements.user_query.value.trim();if(t===""){a.show({message:"Please enter a search term.",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight"}),l.innerHTML="";return}f.style.display="block",c.reset(),l.innerHTML="",p(t).then(o=>{if(o.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight"});return}const i=o.hits.map(e=>m(e)).join("");l.innerHTML=i,new u(".gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{a.error({message:`Something went wrong: ${o.message}`,backgroundColor:"#ef4040",messageColor:"#ffffff",position:"topRight"})}).finally(()=>{f.style.display="none"})};c.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
