import './style.css'
import Logo from '/logo-baconv.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div id="splash" class="flex flex-col items-center justify-center w-screen h-screen">
  <img src="${Logo}" class="size-16 mb-6" alt="Dayto" style={{ maxHeight: '15rem' }} />
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight">
    Coming Very Soon!
  </h1>
  <p>
    Baconv is a DevOps tool for baking environment
  </p
</div>
`