const btn_container = document.getElementById('btn_container') as HTMLElement;

const randomColorGenerator = ():string =>{
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    return`(${r},${g},${b})`;

}

btn_container.addEventListener('click',(event:MouseEvent) =>{
    const target = event.target as HTMLElement
    if (target.tagName==='BUTTON') {
      let color =   target.textContent?.trim().toLowerCase();
        if (color === 'green') {
            document.body.style.backgroundColor = 'green'
        }
        else if (color === 'blue') {
            document.body.style.backgroundColor = 'blue'
        }
        else if (color === 'red') {
            document.body.style.backgroundColor = 'red'
        } else if (color === 'yellow') {
            document.body.style.backgroundColor = 'yellow'
        } else {
            document.body.style.backgroundColor = randomColorGenerator()

        }
    }
})