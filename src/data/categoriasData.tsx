type Video = {
  nombre: string;
  url: string;
};

type Objetivos = {
  [key: string]: {
    [key: string]: Video[];
  };
};

type Categoria = {
  cat: string;
  objetivos: Objetivos;
};

export const categorias: Categoria[] = [
  {
    cat: "Mosquito",
    objetivos: {
      Defensa: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Ataque: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Dribbling: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Tiro: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        En_movimiento: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Movimiento_de_pies: {
        Pivoteo: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Definiciones: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
    },
  },
  {
    cat: "Pre mini",
    objetivos: {
      Defensa: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Ataque: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Dribbling: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Tiro: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        En_movimiento: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Movimiento_de_pies: {
        Pivoteo: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Definiciones: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
    },
  },
  {
    cat: "Mini",
    objetivos: {
      Defensa: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Ataque: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Dribbling: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Tiro: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        En_movimiento: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Movimiento_de_pies: {
        Pivoteo: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Definiciones: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
    },
  },
  {
    cat: "Pre infantil",
    objetivos: {
      Defensa: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Ataque: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Dribbling: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Tiro: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        En_movimiento: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Movimiento_de_pies: {
        Pivoteo: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Definiciones: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
    },
  },
  {
    cat: "Infantil",
    objetivos: {
      Defensa: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Ataque: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Dribbling: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Tiro: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        En_movimiento: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Movimiento_de_pies: {
        Pivoteo: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Definiciones: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
    },
  },
  {
    cat: "Cadete",
    objetivos: {
      Defensa: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Ataque: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Dribbling: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Tiro: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        En_movimiento: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Movimiento_de_pies: {
        Pivoteo: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Definiciones: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
    },
  },
  {
    cat: "Juvenil",
    objetivos: {
      Defensa: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Dribbling: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Dinámico: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Táctico: {
        Ataque: [
          { nombre: "1 pelota", url: "https://www.youtube.com/watch?v=UTVUuXsvWT8" },
          {
            nombre: "2 pelotas",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          { nombre: "Adentro y afuera", url: "https://www.youtube.com/watch?v=UTVUuXsvWT8" },
          { nombre: "Atras y adelante", url: "https://www.youtube.com/watch?v=UTVUuXsvWT8" },
        ],
        Defensa: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Lanzamiento: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        En_movimiento: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      "Movimiento de pies": {
        Ataque: [
          { nombre: "Pie exterior + triple amenaza + jab + definición", url: "https://www.youtube.com/watch?v=lz52whGGuXk" },
          { nombre: "Triple amenaza + fintas + definición", url: "https://www.youtube.com/watch?v=IpPCXExLr9g" },
          { nombre: "Pivoteo + definición", url: "https://www.youtube.com/watch?v=Q2GpByDRDps" },
          { nombre: "Detención + pivoteo + fintas", url: "https://www.youtube.com/watch?v=gE28dH2kH14" },
          { nombre: "Detención + definición", url: "https://www.youtube.com/watch?v=jqL-6Pup8b0" },
          { nombre: "Pase + pivoteo + fintas", url: "https://www.youtube.com/watch?v=jqL-6Pup8b0" },
          { nombre: "Detención + giro + definición", url: "https://www.youtube.com/watch?v=aro7S4Y0bT4" },
          { nombre: "Coordinación + definición", url: "" },
          { nombre: "Desmarque + atacar el aro", url: "https://www.youtube.com/watch?v=LUQDWbiZZwQ" },
        ],
        Defensa: [
          { nombre: "Desplazamiento defensivo", url: "" },
          { nombre: "Desplazamiento defensivo en línea de pase", url: "" },
          { nombre: "Desplazamiento rebote defensivo", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Definiciones: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Pase: {
        "1 pelota": [
          { nombre: "1 pelota después del dribbling", url: "https://www.youtube.com/watch?v=cnuMxqqJDnY" },
          { nombre: "1 pelota, con dribbling, todos a la vez", url: "https://www.youtube.com/watch?v=zt_23bbyUDg" },
          { nombre: "1 pelota, con dribbling, todos a la vez", url: "https://www.youtube.com/watch?v=zt_23bbyUDg" },
          { nombre: "Rueda de pases", url: "https://www.youtube.com/watch?v=Rb-0MiCbe4g" },
          { nombre: "Rondo con un líbero", url: "https://www.youtube.com/watch?v=41VQciTBaMc" },
          { nombre: "Rondo + atrapes", url: "https://www.youtube.com/watch?v=HnNYftqiepg" },
          { nombre: "Pases a la carrera + definición", url: "https://www.youtube.com/watch?v=lcAZp-brnqM" },
          { nombre: "3x1 con 2 pelotas", url: "https://www.youtube.com/watch?v=1eIap3UzOMA" },
          { nombre: "Pase en transición + definición", url: "https://www.youtube.com/watch?v=uf9vE0LQnqQ" },
          { nombre: "Rondo 4x3", url: "https://www.youtube.com/watch?v=7eW8lztSKJc" },
          { nombre: "Rueda de lectura", url: "https://www.youtube.com/watch?v=kEYZ0Q4hybU" },
        ],
        "2 pelotas": [
          { nombre: "2 pelotas + dribbling estático", url: "https://www.youtube.com/watch?v=A8SU1lifkRk" },
          { nombre: "2 pelotas + dribbling dinámico", url: "https://www.youtube.com/watch?v=x9vDkR5O-6M" },
          { nombre: "Rutina de pases en pareja", url: "https://www.youtube.com/watch?v=yAaHRoWGxHQ" },
        ],
      },
      "1 vs 1": {
        "Media cancha": [
          { nombre: "Desde triple amenaza", url: "https://www.youtube.com/watch?v=wPWkYQlvFPE" },
          { nombre: "1/4 de cancha a la carrera", url: "https://www.youtube.com/watch?v=9rVGEt8A73Q" },
          { nombre: "Triple amenaza + lectura defensa", url: "https://www.youtube.com/watch?v=shcGJ3xeimg" },
          { nombre: "Tocar cono y salir a 45", url: "https://www.youtube.com/watch?v=lz01eiN0yIk" },
          { nombre: "A la carrera", url: "https://www.youtube.com/watch?v=aLyoaTn_UWk" },
          { nombre: "Con campo acotado", url: "https://www.youtube.com/watch?v=49k-M5bnBPU" },
          { nombre: "Con oposición física", url: "https://www.youtube.com/watch?v=gUJlxzn-_MY" },
          { nombre: "Desplazamiento + reacción", url: "https://www.youtube.com/watch?v=W-Q0qXliLbE" },
          { nombre: "Lectura y ataque desde el dribbling", url: "https://www.youtube.com/watch?v=qCuoYqsAMdw" },
          { nombre: "Mano en mano + definición", url: "https://www.youtube.com/watch?v=7wl97N2eBwI" },
          { nombre: "Definición con ayuda defensiva", url: "https://www.youtube.com/watch?v=9DjWr8SEOkc" },
        ],
        "Toda la cancha": [
          { nombre: "Toda la cancha", url: "https://www.youtube.com/watch?v=XXbPN2Lu9Zc" },
          { nombre: "Toda la cancha a la carrera", url: "https://www.youtube.com/watch?v=ARzODZqMDfI" },
          { nombre: "Con un pasador", url: "https://www.youtube.com/watch?v=lJGMnd99KVs" },
          { nombre: "Definición con persecución", url: "https://www.youtube.com/watch?v=kX3D28b3WuM" },
        ],
      },
    },
  },
  {
    cat: "Primera",
    objetivos: {
      Defensa: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Ataque: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Dribbling: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Tiro: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        En_movimiento: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Movimiento_de_pies: {
        Pivoteo: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
      Definiciones: {
        Estático: [
          { nombre: "1 pelota", url: "" },
          { nombre: "2 pelotas", url: "" },
          { nombre: "Adentro y afuera", url: "" },
          { nombre: "Atras y adelante", url: "" },
        ],
        Combinaciones: [
          { nombre: "Entrepiernas + faja", url: "" },
          { nombre: "Entrepiernas + por delante", url: "" },
          { nombre: "Adentro y afuera + por delante", url: "" },
          { nombre: "Crossover + entrepiernas", url: "" },
        ],
      },
    },
  },
];

export const videos_modelo = [
  {
    objetivos: {
      Dribbling: [
        { nombre: "Crossover + entrepiernas", url: "" },
        { nombre: "", url: "" },
        { nombre: "", url: "" },
      ],
      Tiro: [
        { nombre: "", url: "" },
        { nombre: "", url: "" },
        { nombre: "", url: "" },
      ],
      Ataque: [
        { nombre: "", url: "" },
        { nombre: "", url: "" },
        { nombre: "", url: "" },
      ],
    },
  },
];
