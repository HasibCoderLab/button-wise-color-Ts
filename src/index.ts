const btn_container = document.getElementById('btn_container') as HTMLElement;

const randomColorGenerator = (): string => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

btn_container.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target.tagName !== 'BUTTON') return;

    let color = target.textContent?.trim().toLowerCase();
    if (!color) return;

    // fixedColors:String[]

    const fixedColors: string[] = ['green', 'blue', 'red', 'yellow'];

    if (fixedColors.indexOf(color) !== -1) {
        console.log((fixedColors.indexOf(color)));

        document.body.style.backgroundColor = color;
    } else {
        document.body.style.backgroundColor = randomColorGenerator();
    }
})

