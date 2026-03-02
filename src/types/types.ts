

type Chapter = {
    id: number;
    title: string;
    position: number;
}


export type Path = {
    id: number;
    title: string;
    slug: string;
    description: string;
    chapters: Chapter[]
}



/*

  {
    id: 8,
    title: 'Svelte',
    slug: 'svelte',
    description: 'Svelte es un framework de frontend que compila el código al construir la aplicación, a diferencia de otros frameworks que interpretan código en el navegador:contentReference[oaicite:5]{index=5}. Esto lo hace ligero y rápido, aprovechando conocimientos de HTML, CSS y JavaScript para crear interfaces reactivas.',
    chapters: [ [Object], [Object] ]
  }

 */
