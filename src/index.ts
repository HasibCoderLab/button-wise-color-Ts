const btn_container = document.getElementById('btn_container') as HTMLElement;

const randomColorGenerator = () =>{
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    return`(${r},${g},${b})`;

}

btn_container.addEventListener('click',(event) =>{
    if (event.target.tagName==='BUTTON') {
        
    }
})