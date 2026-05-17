import{a as b,S as w,i}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const S="https://pixabay.com/api/",v="55785111-533dad6ce42ccce20a44aee23";async function u(r,t){return(await b.get(S,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const t=r.map(n=>`
        <li class="gallery-item">
          <a href="${n.largeImageURL}">
            <img
              src="${n.webformatURL}"
              alt="${n.tags}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${n.likes}</p>
            <p><b>Views</b> ${n.views}</p>
            <p><b>Comments</b> ${n.comments}</p>
            <p><b>Downloads</b> ${n.downloads}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){f.innerHTML=""}function p(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}function B(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}const P=document.querySelector(".form"),$=document.querySelector(".load-more");let s=1,a="",l=0;P.addEventListener("submit",O);$.addEventListener("click",x);async function O(r){if(r.preventDefault(),a=r.target.elements["search-text"].value.trim(),!!a){s=1,M(),L(),p();try{const t=await u(a,s);if(l=t.totalHits,t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(t.hits),l>15&&B()}catch{i.error({message:"Something went wrong!"})}finally{g()}}}async function x(){s+=1,p();try{const r=await u(a,s);y(r.hits);const t=Math.ceil(l/15);s>=t&&(L(),i.info({message:"We're sorry, but you've reached the end of search results."})),E()}catch{i.error({message:"Something went wrong!"})}finally{g()}}function E(){const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
