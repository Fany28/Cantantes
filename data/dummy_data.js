import Category from '../models/category';
import Artista from '../models/artista';

export const CATEGORIES = [
  new Category('c1', 'Regional Mexicano', '#A5D6A7'),
  new Category('c2', 'Rock', '#BDBDBD'),
  new Category('c3', 'Pop', '#D1C4E9'),
  new Category('c4', 'Hip Hop', '#64B5F6'),
 
];

export const ARTISTAS = [
  new Artista(
    'a1',
    ['c1',],
    'Alfredo Olivas',
    'https://www.kebuena.com.mx/wp-content/uploads/2022/12/Alfredo-Olivas-1.jpg',
    [
      'NACIMIENTO:',
      ' 1 de Octubre de 1993 (30 años), Ciudad de Obregón',
      'PADRE:',
      ' Alfredo Olivas Valenzuela',
      'NOMINACIONES:',
      ' Premio Lo Nuestro a la Canción del Año'
    ],
    [
      'José Alfredo Olivas Rojas, más conocido como Alfredo Olivas, es un cantante, compositor y acordeonista de música regional mexicana especializado en los estilos de banda sinaloense, norteño sinaloense, norteño con tuba, y mariachi. También es conocido como Alfredito o el Patroncito.​'
    ],

  ),

  new Artista(
    'a2',
    ['c1',],
    'Ariel Camacho',
    'https://claudiaperalta.com.mx/wp-content/uploads/2021/02/ARIEL-CAMACHO.png',
    [
      'NACIMIENTO:',
      '8 de julio de 1992, Guamúchil',
      'PADRES:',
      ' Benito Camacho Sánchez, Reynalda Armida Barraza',
      'ALBÚM',
      'El Karma'
    ],
    [
      'José Ariel Camacho Barraza, conocido como Ariel Camacho, fue un músico, compositor y multinstrumentista mexicano. Fue vocalista y fundador de Los Plebes del Rancho, con los que emprendió su carrera musical en 2013. Su último álbum en vida fue lanzado en el año 2014 titulado como El Karma.'
    ],

  ),

  new Artista(
    'a3',
    ['c1',],
    'Jenny Rivera',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFvAUuZzpOfksh7O-YFBsshKJoVLcVkoU8kbZvbaP-hE-3jYLPyqEVmPH4W5wLC__5Gw&usqp=CAU',
    [
      'NACIMIENTO',
      '2 de julio de 1969, Long Beach, California, Estados Unidos',
      'FALLECIMIENTO:',
      '9 de diciembre de 2012, Iturbide',
      'HIJOS:',
      'Chiquis Rivera, Jenicka Lopez, Johnny Lopez, Jacqie Rivera, Michael Marin',
      'HERMANOS:',
      'Lupillo Rivera, Rosie Rivera, Juan Rivera, Gustavo Rivera, Pedro Rivera Jr.',
      'CONYÚGE:',
      'Esteban Loaiza (m. 2010–2012), Juan López (m. 1997–2003), José Trinidad Marín (m. 1984–1992)',
      'PADRES:',
      'Pedro Rivera, Rosa Saavedra'
    ],
    [
      'Dolores Janney Rivera Saavedra, conocida como Jenni Rivera, fue una cantante estadounidense. En Estados Unidos y México se estima que vendió 25 millones de discos, ​ lo que la convierte en la intérprete de banda sinaloense más importante.'
    ],

  ),

  new Artista(
    'a4',
    ['c1',],
    'Espinoza Paz',
    'https://yucatan.quadratin.com.mx/www/wp-content/uploads/2024/04/Espinoza-Paz-concierto-1160x700.jpg',
    [
      'NACIMIENTO:',
      '29 de octubre de 1981 (edad 42 años), Angostura',
      'HIJOS:',
      'Claudia Chávez Kelly, Isidro Chávez Kelly',
      'PADRES:',
      ' María de la Paz Espinoza, Isidro Chávez',
      'ESTATURA:',
      '1,66 m'
    ],
    [
      'Isidro Chávez Espinoza, conocido artísticamente como Espinoza Paz.​Es un músico y cantautor mexicano de música regional mexicana; especializado en los estilos de banda sinaloense, norteño y mariachi. Su nombre artístico proviene de su abuela materna y su madre.'
    ],

  ),


  new Artista(
    'a11',
    ['c2'],
    'Kurt Cobain',
    'https://img2.rtve.es/v/16046575?w=1600&preview=01712311552267.jpg',
    [
      'NACIMIENTO:',
      '20 de febrero de 1967, Aberdeen, Washington, Estados Unidos',
      'FALLECIMIENTO:',
      '5 de abril de 1994, Seattle, Washington, Estados Unidos',
      'CONYÚGE:',
      'Courtney Love (m. 1992–1994)',
      'HIJAS:',
      'Frances Bean Cobain',
      'GRUPOS MUSICALES:',
      ' Nirvana (1987 – 1994), Fecal Matter (1985 – 1986)',

    ],
    [
      'Kurt Cobain fue un músico y compositor estadounidense, conocido por haber sido el vocalista, guitarrista y principal compositor de la banda Nirvana. Es considerado como un icono y voz de la generación X.'
    ],

  ),

  new Artista(
    'a22',
    ['c2'],
    'Axl Rose',
    'https://media.urgente24.com/p/f9cc74587c835c75c816c90556ec7a94/adjuntos/319/imagenes/002/981/0002981297/1200x0/smart/gettyimages-535921746jpg.jpg',
    [
      'NACIMIENTO:',
      '6 de febrero de 1962 (edad 62 años), Lafayette, Indiana, Estados Unidos',
      'CONYÚGE',
      ' Erin Everly (m. 1990–1991)',
      'GRUPOS MUSICALES:',
      ' Guns N Roses (Desde 1985), Hollywood Rose, L.A. Guns (1984 – 1984), Rapidfire',
      'PADRES:',
      'William Bruce Rose, Sharon E. Rose',
      'HERMANOS:',
      ' Amy Bailey, Stuart Bailey'
    ],
    [
      'William Bruce Rose Jr., originalmente William Bruce Bailey, conocido por su nombre artístico Axl Rose, es un cantante, compositor, guitarrista y pianista estadounidense, ​ conocido por ser el líder y vocalista de la banda de hard rock Guns N'
      
    ],

  ),


  new Artista(
    'a33',
    ['c2'],
    'Mago de Oz',
    'https://www.rafabasa.com/wp-content/uploads/2015/10/2012_1_5001.jpg',
    [
      'ORIGEN:',
      'Madrid, España',
      'GENERO:',
      'Rock en español',
      'EMPEZO EN:',
      '1968',
      'ARTISTAS RELACIONADOS:',
      'José Andrëa, Rata Blanca, Bürdel King, Warcry, Saurom, Héroes del Silencio, Ska-P, Stratovarius',
    ],
    [
      'Mägo de Oz es una banda española de Folk Metal fundada en Madrid el 7 de julio de 1988 por Txus di Fellatio. Consagrada como una de las bandas más reconocidas e importantes del Heavy Metal en español, a su vez siendo la más popular e influyente del Folk Metal hispano'
    ],

  ),

  new Artista(
    'a44',
    ['c2'],
    'Avril Lavigne',
    'https://1159025897.rsc.cdn77.org/data/images/full/81377/avril-lavigne.jpg',
    [
      'NACIMIENTO:',
      ' 27 de septiembre de 1984 (edad 39 años), Belleville, Canadá',
      'CONYÚGE:',
      'Chad Kroeger (m. 2013–2015), Deryck Whibley (m. 2006–2010)',
      'PADRES:',
      'Jean-Claude Lavigne, Judith-Rosanne Loshaw',
      'GRUPO MUSICAL:',
      'Young Artists for Haiti (2010 – 2010)'
    ],
    [
      'Avril Ramona Lavigne​ ​ es una cantante y compositora canadiense de pop punk.​ Críticos de revistas como Billboard la denominan «la Princesa del Pop Punk».​​ Comenzó su carrera musical en diciembre de 2000, cuando después de una presentación en una librería, despertó el interés del productor L. A'
    ],

  ),


  new Artista(
    'a111',
    ['c3'],
    'Paty Cantu',
    'https://cdn2.excelsior.com.mx/media/pictures/2023/10/12/3018133.jpg',
    [
      'NACIMIENTO:',
      '25 de noviembre de 1983 (edad 40 años), Houston, Texas, Estados Unidos',
      'GRUPO MUSICAL:',
      'Lu (2000 – 2007)',
      'PADRES:',
      'Luis Armando Cantú, Mercedes Velasco',
      'NOMINACIONES:',
      'World Music Award a la Mejor Actuación Mundial en Vivo',
      'PELICULAS:',
      'Un disfraz para Nicolás'
    ],
    [
      'Patricia Giovanna Cantú Velasco, conocida como Paty Cantú, es una cantante, compositora y actriz mexicana'
    ],

  ),

  new Artista(
    'a222',
    ['c3'],
    'Katty Perry',
    'https://www.billboard.com/wp-content/uploads/2023/11/Katy-Perry-may-2023-billboard-1548.jpg?w=1024',
    [
      'NACIMIENTO:',
      '25 de octubre de 1984 (edad 39 años), Santa Bárbara, California, Estados Unidos',
      'PAREJA:',
      'Orlando Bloom (2019–)',
      'CÓNYUGE:',
      'Russell Brand (m. 2010–2012)',
      'NOMINACIONES:',
      'Premio Grammy al Álbum del Año',
      'HERMANOS:',
      'Angela Hudson, David Hudson'
    ],
    [
      'Katheryn Elizabeth Hudson, más conocida como Katy Perry, es una cantante, compositora y personalidad de televisión estadounidense, que saltó a la fama en 2008 con «I kissed a girl» y «Hot n Cold» de su álbum debut One of the Boys.'
    ],

  ),

  new Artista(
    'a333',
    ['c3'],
    'Carla Morrison',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1AYw5sKWOUpgb1tFjVxa_kjzcQRjD7Pv8BA&s',
    [
      'NACIMIENTO:',
      '19 de julio de 1986 (edad 37 años), Tecate',
      'HERMANOS:',
      'Alex Hogan-Morrison',
      'PADRES:',
      'Hilario Morrison, Porfiria Flores',
      'AÑOS ACTIVA:',
      '2008- presente'
    ],
    [
      'Carla Patricia Morrison Flores, conocida como Carla Morrison, es una cantante, ​ compositora, ​ actriz, ​ activista​ y productora​ mexicana.'
    ],

  ),

  new Artista(
    'a444',
    ['c3'],
    'Adele',
    'https://imagenes.20minutos.es/files/image_640_360/files/fp/uploads/imagenes/2021/10/09/adele.r_d.617-312.jpeg',
    [
      'NACIMIENTO:',
      '5 de mayo de 1988 (edad 36 años), Tottenham, Londres, Reino Unido',
      'CÓNYUGE:',
      'Simon Konecki (m. 2018–2021)',
      'SOCIOS DE COMPOSICIÓN:',
      'Bruno Mars, Sia, Linda Perry',
      'PREMIOS:',
      'Premio Grammy a la Mejor Grabación del Año'
    ],
    [
      'Adele Laurie Blue Adkins, conocida simplemente como Adele, es una cantautora y multinstrumentista británica.​ Es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillos.​'
    ],

  ),

  new Artista(
    'a1111',
    ['c4'],
    'Paulo Londra',
    'https://www.losandes.com.ar/resizer/KwIzM-SiK4ixr64Eb3PtfDyHyJQ=/0x0:0x0/980x640/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/ORB76SBB6RE33LE33DCFP24OUE.jpg',
    [
      'NACIMIENTO:',
      '12 de abril de 1998 (edad 26 años), Ciudad de Córdoba, Argentina',
      'NOMINACIONES:',
      'Premio Grammy Latino al Mejor Nuevo Artista',
      'SOCIOS DE COMPOSICIÓN:',
      'Duki, Bizarrap, Lit Killah, Justin Quiles'
    ],
    [
      'Paulo Ezequiel Londra es un cantante y compositor argentino. Londra surgió de las competencias de freestyle de plaza que se celebraban de forma amateur, como El Quinto Escalón, en donde Londra empezó a ganar reconocimiento. En 2017 lanzó su primer sencillo, «Relax».'
    ],

  ),

  new Artista(
    'a2222',
    ['c4'],
    'Eminem',
    'https://generations.fr/media/news/thumb/1110x624_eminem-entre-dans-le-top-10-des-artistes-qui-ont-le-plus-vendu-dans-l-histoire_6515553e59621.webp',
    [
      'NACIMIENTO:',
      '17 de octubre de 1972 (edad 51 años), St. Joseph, Misuri, Estados Unidos',
      'HIJOS:',
      'Hailie Jade Scott Mathers, Stevie Laine, Alaina Mathers',
      'CÓNYUGE:',
      'Kim Scott (m. 2006–2006), Kim Scott (m. 1999–2001)',
      'HERMANOS:',
      'Nathan Samra-Mathers, Michael Mathers, Sarah Mathers'
    ],
    [
      'Marshall Bruce Mathers III, conocido como Eminem, es un rapero, productor y actor estadounidense. Se le atribuye la popularización del hip hop en las clases medias y altas de Estados Unidos y es aclamado por la crítica como uno de los mejores raperos de todos los tiempos.​'
    ],

  ),

  new Artista(
    'a3333',
    ['c4'],
    'Snoop Dogg',
    'https://themovimientourbano.net/wp-content/uploads/2023/07/snoop-dogg-jpg.webp',
    [
      'NACIMINETO:',
      '20 de octubre de 1971 (edad 52 años), Long Beach, California, Estados Unidos',
      'HIJOS:',
      'Cordell Broadus, Cori Broadus, Julian Corrie Broadus, Corde Broadus',
      'CÓNYUGE:',
      'Shante Broadus (m. 1997)',
      'SOCIOS DE COMPOSICION:',
      'Dr. Dre, Eminem, Tupac Shakur, Ice Cube'
    ],
    [
      'Calvin Cordozar Broadus Jr., conocido artísticamente como Snoop Dogg, anteriormente como Snoop Doggy Dogg y en raras ocasiones como Snoop Lion, es un rapero, empresario, productor y actor estadounidense.​ Es uno de los artistas de hip-hop con más éxito en el Gangsta rap.'
    ],

  ),

  new Artista(
    'a4444',
    ['c4'],
    'Canserbero',
    'https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/articulo_760x422/public/2024-05/Canserbero--644x362.jpg?itok=mCYqfj9M',
    [
      'NACIMIENTO:',
      '11 de marzo de 1988, Caracas, Venezuela',
      'FALLECIMIENTO:',
      '19 de enero de 2015, Maracay, Venezuela',
      'CAUSA DE MUERTE:',
      'Asesinato (apuñalamiento)',
      'PADRES:',
      'José Rafael González Ollarves, Leticia Coromoto Oramas',
      'AÑOS ACTIVO:',
      '1999-2015'
    ],
    [
      'Tirone José González Orama, conocido artísticamente como Canserbero, fue un rapero, compositor y activista venezolano. Es considerado como uno de los exponentes más significativos e influyentes en la historia del rap latino e independiente.​​ '
    ],

  )
];