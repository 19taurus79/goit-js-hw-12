import{a as m,S as d}from"./assets/vendor-DdMkFUeo.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="49602919-aeba24ff5374aa13ccf20c3b1",y="https://pixabay.com/api/",n={image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};async function c(i,r){return m.get(`${y}?key=${g}&q=${i}&image_type=${n.image_type}&orientation=${n.orientation}&safesearch=${n.safesearch}&page=${r}&per_page=${n.per_page}`).then(o=>(o.data.hits.length===0&&iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3}),o.data)).catch(o=>{console.error("Error fetching data from Pixabay:",o)}).finally(()=>{})}const h=document.querySelector(".gallery");document.querySelector(".loader");const b=document.querySelector(".load-more");async function $(i){const r=await i;console.log("createGallery",r);const o=r.hits.map(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:u,comments:f,downloads:p})=>`<li class="gallery-item"><a href="${e}">
            <img class="gallery-image" src="${s}" alt="${t}" />
            <div class='item-footer'>
            <p><b>likes</b> ${a}</p>
            <p><b>views</b> ${u}</p>
            <p><b>comments</b> ${f}</p>
            <p><b>downloads</b> ${p}</p>
            </div>
        </a>
       
        </li>`).join("");h.innerHTML=o,A.refresh()}function P(){b.classList.remove("load-more-hidden")}const A=new d(".gallery a",{});console.log(c("cat",5));let l=c("cat",10);console.log(l);$(l);P();
//# sourceMappingURL=index.js.map
