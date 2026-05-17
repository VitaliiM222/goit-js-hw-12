import{a as S,S as v,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const P="https://pixabay.com/api/",M="55785111-533dad6ce42ccce20a44aee23";async function u(o,e){return(await S.get(P,{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".load-more"),R=new v(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){const e=o.map(r=>`
        <li class="gallery-item">
          <a href="${r.largeImageURL}">
            <img
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${r.likes}</p>
            <p><b>Views</b> ${r.views}</p>
            <p><b>Comments</b> ${r.comments}</p>
            <p><b>Downloads</b> ${r.downloads}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",e),R.refresh()}function q(){f.innerHTML=""}function y(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}function L(){p.classList.remove("hidden")}function b(){p.classList.add("hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");let a=1,i="",l=0;const w=15;B.addEventListener("submit",E);$.addEventListener("click",O);async function E(o){if(o.preventDefault(),i=o.target.elements["search-text"].value.trim(),!!i){a=1,q(),b(),y();try{const e=await u(i,a);if(l=e.totalHits,e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(e.hits),Math.ceil(l/w)>1?L():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{g()}}}async function O(){a+=1,b(),y();try{const o=await u(i,a);m(o.hits);const e=Math.ceil(l/w);a>=e?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):L(),x()}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{g()}}function x(){const o=document.querySelector(".gallery-item");if(!o)return;const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
