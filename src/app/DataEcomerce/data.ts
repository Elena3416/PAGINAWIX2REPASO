export const departments = [
    {
        id: 1,
        department:'Él',
    },
    {
        id:2,
        department:'Ella'
    },
    {
        id:3,
        department:'Bebé'
    },
    {
        id:4,
        department:'Niños'
    },
    {
        id:5,
        department:'Zapatería'
    }
]

export const brand = [
    {
        id:1,
        brand:'nike',
        img:'img/nike.PNG'
    },
    {
        id:2,
        brand:'aeropostale',
        img:'img/aeropostale.PNG'
    },
    {
        id:3,
        brand:'levi´s',
        img:'img/levis.PNG'
    },
    {
        id:4,
        brand:'gap',
        img:'img/gap.PNG'
    },
    {
        id:5,
        brand:'ralph lauren',
        img:'img/ralphlauren.PNG'
    },
]

export const products = [
  {
    id:1,
    brand:1,
    department:1,
    product:'Playera y Pantalon Casual',
    colors:['#ffffff', '#000000'],
    sizes:['s','m','l','xl'],
    img:'img/id1.JPG',
    description:['Algodón de primer nivel', 'El estampado de tinta fotocromática cambia de color cuando se expone a la luz solar.'],
    price:649,
    msi:true
  },
  {
    id:2,
    brand:2,
    department:1,
    product:'Traje Azul Marino',
    colors:['#0a1845', '#cfbd00'],
    sizes:['m','l','xl'],
    img:'img/id2.JPG',
    description:['estampado en vinil', 'maga corta', 'estilo joven','algodón super cómodo'],
    price:209.30,
    msi:false
  },
  {
    id:3,
    brand:3,
    department:1,
    product:'Conjunto Deportivo Sudadera y Pantalon',
    colors:['#ff0000', '#000000'],
    sizes:['xs','s','m','l','xl'],
    img:'img/id3.JPG',
    description:['Colección Super Mario Bros Nintendo','corte regular fit', 'cuello redondo', 'estampado en vinil'],
    price:499,
    msi:true
  },
  {
    id:4,
    brand:4,
    department:1,
    product:'Conjunto Deportivo Playera y Short',
    colors:['#00123d'],
    sizes:['s','m','l'],
    img:'img/id4.JPG',
    description:[, 'estilo clásico', 'manga corta', 'cuello V', 'algodón','Para vestir casual'],
    price:279.30,
    msi:false
  },
  {
    id:5,
    brand:5,
    department:1,
    product:'Conjunto Saco y Pantalon',
    colors:['#00123d','#00fff7'],
    sizes:['s','m','l','xl','xxl'],
    img:'img/id5.JPG',
    description:['algodón','corte slim fit', 'manga corta', 'casual', 'logo bordado a la altura del pecho en lado izquierdo'],
    price:1113,
    msi:true
  },
  {
    id:6,
    brand:1,
    department:2,
    product:'Blusa Sin Manga Color Rosa',
    colors:['#ff9999'],
    sizes:['xs','s','m','l'],
    img:'img/id8.JPG',
    description:['algodón','corte regular fit', 'cuello redondo', 'manga corta'],
    price:314,
    msi:true
  },
  {
    id:7,
    brand:2,
    department:2,
    product:'Blusa Estampada Jaguar',
    colors:['#000000', '#cc9200'],
    sizes:['xs','s','m','l'],
    img:'img/id9.JPG',
    description:['algodón y poliester','cuello redondo', 'estampado impreso con tonos metálicos'],
    price:209,
    msi:false
  },
  {
    id:8,
    brand:3,
    department:2,
    product:'Blusa de Tirantes Color Rosa',
    colors:['#ffffff'],
    sizes:['xs','s','m','l'],
    img:'img/id10.JPG',
    description:['corte slim fit', 'playera de algodón', 'cuello reodndo', 'manga corta', 'estampado multicolor'],
    price:109.40,
    msi:false
  },
  {
    id:9,
    brand:4,
    department:2,
    product:'Blusa Roja Con Cuadros',
    colors:['#00123d'],
    sizes:['xs','s','m'],
    img:'img/id11.JPG',
    description:['algodón spandexx', 'cueyo V', 'manga corta', 'no estampado'],
    price:379.30,
    msi:true
  },
  {
    id:10,
    brand:5,
    department:2,
    product:'Conjunto blusa y Flalda',
    colors:['#ff008c', '#f2ff00'],
    sizes:['xs','s','m'],
    img:'img/id12.JPG',
    description:['algodón' ,'con 5 botones', 'Colores vivos', 'corte recto', 'Manga corta'],
    price:699,
    msi:true
  },
  {
    id:11,
    brand:4,
    department:3,
    product:'Vestido  a cuadros',
    colors:['#eff757','#a5ff70','#fcbebd'],
    sizes:['1-2M','6-9M','9-12M','12-18M'],
    img:'img/id11.JPG',
    description:['algodón', 'corte semi-A', 'largo regular'],
    price:559.30,
    msi:true
  },
  {
    id:12,
    brand:4,
    department:3,
    product:'Playera bebé',
    colors:['#00123d','#ff0000'],
    sizes:['1-2M','6-9M','9-12M','12-18M'],
    img:'img/id12.JPG',
    description:['corte regular fit', 'casual', 'manga corta', 'algodón suave y amable con su piel'],
    price:279,
    msi:false
  },
  {
    id:13,
    brand:3,
    department:3,
    product:'Conjunto sudadera y pantalón',
    colors:['#fcbebd','#00123d'],
    sizes:['1-2M','6-9M','9-12M','12-18M'],
    img:'img/id13.JPG',
    description:['para bebé niña', '2 piezas', 'manga larga', 'calido y suave algodón'],
    price:524,
    msi:true
  },
  {
    id:14,
    brand:3,
    department:3,
    product:'Conjunto sudadera y pantalón',
    colors:['#b0b0b0','#00123d'],
    sizes:['1-2M','6-9M','9-12M','12-18M'],
    img:'img/id14.JPG',
    description:['conjunto algodón para bebé niño', '2 piezas', 'manga larga', 'calido y suave algodón'],
    price:524,
    msi:true
  },
  {
    id:15,
    brand:1,
    department:5,
    product:'Zapato Casual Color Negro',
    colors:['#000000'],
    sizes:['22','22.5','23','23.5','24','24.5','25','25.5','26','26.5','27'],
    img:'img/id15.JPG',
    description:['Tenis Nike Air Force 1 07', 'casual', 'Son de alta durabilidad, son muy modernos', 'combinan perfecto.', 'negro', 'dama'],
    price:1899,
    msi:true
  },
  {
    id:16,
    brand:1,
    department:5,
    product:'Tenis Revolution 5 Color Negro',
    colors:['#ffffff', '#000000'],
    sizes:['22','22.5','23','23.5','24','24.5','25','25.5','26','26.5','27'],
    img:'img/id16.JPG',
    description:['deportivo', 'Son de alta durabilidad, son muy ligeros', 'Perfectos para correr', 'negro', 'caballero'],
    price:999,
    msi:true
  },
  {
    id:17,
    brand:2,
    department:5,
    product:'Tenis Mezclilla Con Plataforma',
    colors:['#ffffff','#00123d'],
    sizes:['22','22.5','23','23.5','24','24.5','25','25.5','26','26.5','27'],
    img:'img/id17.JPG',
    description:['casual', 'suela sintetica', 'dama'],
    price:659,
    msi:false
  },
  {
    id:18,
    brand:2,
    department:5,
    product:'Tenis Sneaker Color Blanco',
    colors:['#ffffff','#b0b0b0'],
    sizes:['22','22.5','23','23.5','24','24.5','25','25.5','26','26.5','27'],
    img:'img/id18.JPG',
    description:['Caballero', ' Blancos', 'corte textil'],
    price:660,
    msi:false
  },
  {
    id:19,
    brand:3,
    department:5,
    product:'Botas Casual Color Café',
    colors:['#6e450c', '#382306'],
    sizes:['22','22.5','23','23.5','24','24.5','25','25.5','26','26.5','27'],
    img:'img/id19.JPG',
    description:['Piel color Café', 'caballero', 'comodas y duraderas', 'suela aislante'],
    price:1149,
    msi:true
  },
  {
    id:20,
    brand:3,
    department:5,
    product:'Sandalia casual con plataforma',
    colors:['#ffffff', '#b37a00'],
    sizes:['22','22.5','23','23.5','24','24.5','25','25.5','26','26.5','27'],
    img:'img/id20.JPG',
    description:['Dama', 'Mujer', 'textil/lona', 'producto mexicano'],
    price:549,
    msi:false
  },
]

