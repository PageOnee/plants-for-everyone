// Todo > Interfaz : Informacion de las plantas
export interface Plant {
    name: string;
    scientificName: string;
    imageUrl: string;
    description: string;
    habitat: string;
    uses: string;
}

export const plants: Plant[] = [
    {
        name: "Rosa",
        scientificName: "Rosa spp.",
        imageUrl: "https://plants-for-everyone.onrender.com/images/rosa.jpg",
        description: "La rosa es una planta ornamental conocida por sus hermosas y fragantes flores. Sus pétalos pueden encontrarse en una amplia variedad de colores, incluyendo rojo, rosa, blanco y amarillo. Es una de las flores más populares en el mundo y a menudo se asocia con el amor y la belleza.",
        habitat: "Jardines y parques",
        uses: "Ornamental, medicinal",
    },
    {
        name: "Geranio",
        scientificName: "Pelargonium spp.",
        imageUrl: "https://plants-for-everyone.onrender.com/images/geranio.jpg",
        description: "El geranio es una planta perenne con flores vibrantes que pueden ser rojas, rosadas, blancas o moradas. Es muy apreciada en jardines y balcones por su facilidad de cultivo y su resistencia. Además de su uso ornamental, algunas especies de geranios tienen propiedades repelentes de insectos.",
        habitat: "Jardines, balcones",
        uses: "Ornamental, repelente de insectos",
    },
    {
        name: "Hortensia",
        scientificName: "Hydrangea macrophylla",
        imageUrl: "https://plants-for-everyone.onrender.com/images/hortensia.jpg",
        description: "La hortensia es un arbusto con grandes flores esféricas que varían en color desde el azul hasta el rosa, dependiendo del pH del suelo. Es una planta que prefiere zonas con sombra parcial y suelos bien drenados. Sus flores son muy populares en arreglos florales y decoración de jardines.",
        habitat: "Jardines con sombra parcial",
        uses: "Ornamental",
    },
    {
        name: "Jazmín",
        scientificName: "Jasminum officinale",
        imageUrl: "https://plants-for-everyone.onrender.com/images/jazmin.jpg",
        description: "El jazmín es una planta trepadora conocida por sus pequeñas flores blancas que emiten una fragancia intensa y dulce. Es ampliamente utilizado en jardines para cubrir pérgolas y muros, y también en la industria del perfume. Además, el té de jazmín es muy apreciado en la cultura asiática.",
        habitat: "Jardines, pérgolas",
        uses: "Ornamental, aromaterapia",
    },
    {
        name: "Bougainvillea",
        scientificName: "Bougainvillea glabra",
        imageUrl: "https://plants-for-everyone.onrender.com/images/bougainvillea.jpg",
        description: "La bougainvillea es una planta trepadora conocida por sus brácteas coloridas que rodean pequeñas flores blancas. Las brácteas pueden ser de colores como púrpura, rosa, naranja o rojo. Es ideal para cubrir cercas y muros, y se adapta bien a climas cálidos y soleados.",
        habitat: "Jardines, cercas",
        uses: "Ornamental",
    },
    {
        name: "Lirio",
        scientificName: "Lilium spp.",
        imageUrl: "https://plants-for-everyone.onrender.com/images/lirio.jpg",
        description: "El lirio es una planta bulbosa que produce flores grandes y vistosas, disponibles en una amplia gama de colores. Es una planta popular en jardines y arreglos florales debido a su elegancia y fragancia. Los lirios también tienen un significado simbólico en varias culturas, representando pureza y renovación.",
        habitat: "Jardines, macetas",
        uses: "Ornamental, floristería",
    },
    {
        name: "Helecho",
        scientificName: "Nephrolepis exaltata",
        imageUrl: "https://plants-for-everyone.onrender.com/images/helecho.jpg",
        description: "El helecho es una planta que se caracteriza por sus frondes verdes y exuberantes. Prefiere ambientes húmedos y sombreados, lo que lo hace ideal para interiores y jardines con poca luz. Además de su uso ornamental, los helechos son conocidos por su capacidad para purificar el aire.",
        habitat: "Zonas húmedas y sombreadas",
        uses: "Ornamental, purificación del aire",
    },
    {
        name: "Margarita",
        scientificName: "Bellis perennis",
        imageUrl: "https://plants-for-everyone.onrender.com/images/margarita.jpg",
        description: "La margarita es una planta herbácea con flores compuestas de pétalos blancos y un centro amarillo. Es una planta resistente que florece en primavera y verano. Las margaritas son populares en jardines y praderas, y también tienen usos medicinales, como en infusiones para aliviar problemas digestivos.",
        habitat: "Jardines, praderas",
        uses: "Ornamental, medicinal",
    },
    {
        name: "Lavanda",
        scientificName: "Lavandula angustifolia",
        imageUrl: "https://plants-for-everyone.onrender.com/images/lavanda.jpg",
        description: "La lavanda es una planta aromática conocida por sus flores de color púrpura y su fragancia relajante. Es ampliamente utilizada en jardines, bordes de caminos y como planta ornamental. Además, la lavanda tiene aplicaciones en la aromaterapia, la cosmética y la medicina, gracias a sus propiedades calmantes y antisépticas.",
        habitat: "Jardines, bordes de caminos",
        uses: "Ornamental, aromaterapia, medicinal",
    },
    {
        name: "Aloe Vera",
        scientificName: "Aloe vera",
        imageUrl: "https://plants-for-everyone.onrender.com/images/aloe_vera.jpg",
        description: "El Aloe Vera es una planta suculenta conocida por sus hojas carnosas que contienen un gel con múltiples propiedades medicinales. Es fácil de cultivar y se adapta bien a condiciones secas. El gel de Aloe Vera se utiliza para tratar quemaduras, heridas y problemas de la piel, así como en productos cosméticos.",
        habitat: "Zonas áridas y semidesérticas",
        uses: "Medicinal, cosmética",
    },
    {
        name: "Crisantemo",
        scientificName: "Chrysanthemum spp.",
        imageUrl: "https://plants-for-everyone.onrender.com/images/crisantemo.jpg",
        description: "El crisantemo es una planta con flores variadas y coloridas que florecen en otoño. Es una de las plantas de jardín más populares debido a su belleza y la diversidad de formas y colores de sus flores. Los crisantemos también se utilizan en la medicina tradicional china y en arreglos florales.",
        habitat: "Jardines, macetas",
        uses: "Ornamental, floristería",
    },
    {
        name: "Begonia",
        scientificName: "Begonia spp.",
        imageUrl: "https://plants-for-everyone.onrender.com/images/begonia.jpg",
        description: "La begonia es una planta conocida por sus hojas y flores decorativas. Existen muchas variedades, algunas con hojas de colores vibrantes y otras con flores llamativas. Las begonias son ideales para jardines sombreados y también son populares como plantas de interior.",
        habitat: "Jardines sombreados, interiores",
        uses: "Ornamental",
    },
    {
        name: "Hibisco",
        scientificName: "Hibiscus rosa-sinensis",
        imageUrl: "https://plants-for-everyone.onrender.com/images/hibisco.jpg",
        description: "El hibisco es un arbusto que produce grandes flores de colores brillantes, como rojo, rosa, amarillo y blanco. Es una planta que crece bien en climas tropicales y se utiliza ampliamente en jardines y parques. Además de su valor ornamental, las flores de hibisco se utilizan en tés y tienen propiedades medicinales.",
        habitat: "Jardines, parques",
        uses: "Ornamental, medicinal",
    },
    {
        name: "Orquídea",
        scientificName: "Orchidaceae",
        imageUrl: "https://plants-for-everyone.onrender.com/images/orquidea.jpg",
        description: "Las orquídeas son plantas epífitas conocidas por sus flores exóticas y variadas. Existen miles de especies de orquídeas, cada una con formas y colores únicos. Son muy apreciadas en jardinería y coleccionismo debido a su belleza y diversidad. Requieren cuidados específicos, especialmente en términos de humedad y luz.",
        habitat: "Bosques húmedos, jardines",
        uses: "Ornamental",
    },
    {
        name: "Clavel",
        scientificName: "Dianthus caryophyllus",
        imageUrl: "https://plants-for-everyone.onrender.com/images/clavel.jpg",
        description: "El clavel es una planta herbácea que produce flores de diversos colores, incluyendo rojo, rosa, blanco y amarillo. Es una flor muy popular en la industria de la floristería y se utiliza en arreglos florales y decoraciones. Los claveles también tienen un significado simbólico en diferentes culturas, a menudo representando amor y admiración.",
        habitat: "Jardines, macetas",
        uses: "Ornamental, floristería",
    },
    {
        name: "Petunia",
        scientificName: "Petunia spp.",
        imageUrl: "https://plants-for-everyone.onrender.com/images/petunia.jpg",
        description: "La petunia es una planta anual con flores de colores brillantes, como rosa, morado, rojo, blanco y azul. Es una planta muy popular en jardines y balcones debido a su larga temporada de floración y su resistencia. Además de su uso ornamental en macetas y parterres, las petunias también se utilizan en la mejora del suelo y la retención de agua.",
        habitat: "Jardines, balcones",
        uses: "Ornamental",
    },
    {
        name: "Agapanto",
        scientificName: "Agapanthus africanus",
        imageUrl: "https://plants-for-everyone.onrender.com/images/agapanto.jpg",
        description: "El agapanto es una planta perenne con flores azules o blancas que forman racimos en forma de umbelas. Es una planta resistente que crece bien en climas cálidos y se utiliza comúnmente en jardines y bordes de caminos. Sus flores atraen a las abejas y mariposas, lo que lo convierte en una excelente opción para jardines de polinizadores.",
        habitat: "Jardines, bordes de caminos",
        uses: "Ornamental",
    },
    {
        name: "Ave del Paraíso",
        scientificName: "Strelitzia reginae",
        imageUrl: "https://plants-for-everyone.onrender.com/images/ave_del_paraiso.jpg",
        description: "El ave del paraíso es una planta exótica conocida por sus flores que se asemejan al pico de un ave y sus hojas en forma de abanico. Es nativa de climas tropicales y se utiliza ampliamente en jardines tropicales y parques. Las flores brillantes y llamativas del ave del paraíso son un punto focal en cualquier paisaje.",
        habitat: "Jardines tropicales, parques",
        uses: "Ornamental",
    },
    {
        name: "Cala",
        scientificName: "Zantedeschia aethiopica",
        imageUrl: "https://plants-for-everyone.onrender.com/images/begonia.jpg",
        description: "La cala es una planta con flores blancas y elegantes que se destacan por su forma de trompeta. Es una planta perenne que prefiere suelos húmedos y se encuentra comúnmente en jardines húmedos y bordes de estanques. Las calas son muy apreciadas en arreglos florales y como plantas ornamentales en jardines acuáticos.",
        habitat: "Jardines húmedos, bordes de estanques",
        uses: "Ornamental, floristería",
    },
    {
        name: "Crotón",
        scientificName: "Codiaeum variegatum",
        imageUrl: "https://plants-for-everyone.onrender.com/images/croton.jpg",
        description: "El crotón es una planta con hojas variegadas de colores vibrantes, como rojo, amarillo, naranja y verde. Es una planta tropical que se utiliza comúnmente en jardines tropicales y como planta de interior en climas más fríos. El crotón agrega un toque de color y exotismo a cualquier paisaje.",
        habitat: "Jardines tropicales, interiores",
        uses: "Ornamental",
    }
];