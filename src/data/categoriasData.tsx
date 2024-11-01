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
          { nombre: "1 pelota (nivel 1)", url: "https://www.youtube.com/watch?v=SJGlJRLVEso" },
          { nombre: "2 pelotas (nivel 1)", url: "https://www.youtube.com/watch?v=6IWX9UIox9Y" },
          { nombre: "1 pelota (nivel 2)", url: "https://www.youtube.com/watch?v=U-P3R9-XU2A" },
          { nombre: "2 pelotas (nivel 2)", url: "https://www.youtube.com/watch?v=XfUdDqG6kGc" },
          { nombre: "1 y 2 pelotas", url: "https://www.youtube.com/watch?v=I4sjI6wdUGM" },
          { nombre: "Pelota + cono + cambio de mano", url: "https://www.youtube.com/watch?v=CwP-T4Vr6YA" },
          { nombre: "Coordinar combinaciones en pareja", url: "https://www.youtube.com/watch?v=zOtqSQD2SKo" },
          { nombre: "2 pelotas + coordinacion de pies", url: "https://www.youtube.com/watch?v=TocpFRa8Kds" },
          { nombre: "2 pelotas + pase", url: "https://www.youtube.com/watch?v=BrVjan6uS-8" },
          { nombre: "2 pelotas (nivel 3)", url: "https://www.youtube.com/watch?v=QryCDoWHho0" },
        ],
        Dinámico: [
          { nombre: "2 pelotas (nivel 1)", url: "https://www.youtube.com/watch?v=xrhS2YE5YZk" },
          { nombre: "2 pelotas (nivel 2)", url: "https://www.youtube.com/watch?v=xrhS2YE5YZk" },
          { nombre: "Cambio de dirección a la carrera", url: "" },
          { nombre: "Detención en 2 tiempos + back space", url: "https://www.youtube.com/watch?v=KOu6NIFiRtw" },
          { nombre: "Diferentes superficies y alturas", url: "https://www.youtube.com/watch?v=Z2BTrE5wk-k" },
          { nombre: "Fútbol con dribbling", url: "https://www.youtube.com/watch?v=kRPwIwl6Tws" },
          { nombre: "Rutina de manejo dinámico", url: "https://www.youtube.com/watch?v=iAzQCsgaruM" },
          { nombre: "Hesitation + cross + definición", url: "https://www.youtube.com/watch?v=NpGfLK6UYuk" },
          { nombre: "cross + definición", url: "https://www.youtube.com/watch?v=TjxR7d7yIJ8" },
          { nombre: "Cambios de dirección con 2 pelotas", url: "https://www.youtube.com/watch?v=OqUFFPSMlPY" },
          { nombre: "Combinaciones varias a la carrera", url: "https://www.youtube.com/watch?v=3v1V51v696o" },
          { nombre: "Cambios de dirección con conos en hilera", url: "https://www.youtube.com/watch?v=inQVmZUGAbc" },
          { nombre: "Combinaciones varias a la carrera", url: "https://www.youtube.com/watch?v=3v1V51v696o" },
          { nombre: "2 pelotas en espejo", url: "https://www.youtube.com/watch?v=DeVO-7sasXw" },
          { nombre: "Dribbling + voley con globo", url: "https://www.youtube.com/watch?v=OylbEmGQtvE" },
          { nombre: "Atajar pelota de tenis con dribbling", url: "https://www.youtube.com/watch?v=4ep6S2axcfs" },
          { nombre: "Cross con la otra mano ocupada", url: "https://www.youtube.com/watch?v=nBtMx2Rc78Y" },
          { nombre: "2 pelotas + pase con repiqueteo", url: "https://www.youtube.com/watch?v=Lwp1W1Rn8dA" },
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
          { nombre: "Detención en dos tiempos sin lanzar", url: "https://www.youtube.com/watch?v=1U3zW2D9Yhk" },
          { nombre: "Lanzamiento en pareja", url: "https://www.youtube.com/watch?v=w75EJw8vWP0" },
          { nombre: "Terminación de tiro acostado", url: "https://www.youtube.com/watch?v=sAfI10jLPpo" },
          { nombre: "Terminación de tiro a pie firme", url: "https://www.youtube.com/watch?v=rKKf13C2unw" },
          { nombre: "Terminación de tiro sentado", url: "https://www.youtube.com/watch?v=cxnov6u00Es" },
          { nombre: "Equilibrio + tiro", url: "https://www.youtube.com/watch?v=gd_WP8LUmrE" },
          { nombre: "Terminación de tiro a pie firme", url: "https://www.youtube.com/watch?v=rKKf13C2unw" },
          { nombre: "5 consecutivos retrocediendo", url: "https://www.youtube.com/watch?v=SqCfDDmatVA" },
          { nombre: "5 posiciones durante 2 minutos", url: "https://www.youtube.com/watch?v=OIhn7H4pYi4" },
          { nombre: "5 consecutivos retrocediendo", url: "https://www.youtube.com/watch?v=SqCfDDmatVA" },
        ],
        En_movimiento: [
          { nombre: "Rueda de tiros varios", url: "https://www.youtube.com/watch?v=djNs9Ndv050" },
          { nombre: "Lanzamientos tras comportamientos", url: "https://www.youtube.com/watch?v=XmGUkvUo_go" },
          { nombre: "Lanzamientos en movimientos (serie de 3 diferentes)", url: "https://www.youtube.com/watch?v=_KqKvcCW1GU" },
          { nombre: "Detención en 2 tiempos + lanzamiento", url: "https://www.youtube.com/watch?v=BZiNg7_Kmb8" },
          { nombre: "Detención en 2 tiempos tras cortina indirecta", url: "https://www.youtube.com/watch?v=UaaGDuFUyDY" },
          { nombre: "Detención en 2 tiempos con persecución", url: "https://www.youtube.com/watch?v=Pg2j7CSGih8" },
          { nombre: "Recepción en movimiento", url: "https://www.youtube.com/watch?v=6MAkjLqc3Tg" },
          { nombre: "Atacar tras pase extra", url: "https://www.youtube.com/watch?v=ue9ZFNJE248" },
          { nombre: "Desplazamiento + tiro", url: "https://www.youtube.com/watch?v=OHulg3w3zR8" },
          { nombre: "Recibir y tirar en movimiento de 3pts", url: "https://www.youtube.com/watch?v=66ImO96SYWE" },
          { nombre: "A la carrera con sprint", url: "https://www.youtube.com/watch?v=l_QGe5qClMA" },
          { nombre: "Tiro tras descarga con comportamiento", url: "https://www.youtube.com/watch?v=3B7wTpaGh5k" },
          { nombre: "Tiros varios tras cortina indirecta", url: "https://www.youtube.com/watch?v=WPNhWJhrwF0" },
          { nombre: "Detenciones después del dribbling + tiro", url: "https://www.youtube.com/watch?v=DnaK8hvgQEI" },
          { nombre: "Recepciones + fintas + giros", url: "https://www.youtube.com/watch?v=7H79-eg-3hE" },
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
        ],
      },
      Definiciones: {
        "Con defensa": [
          { nombre: "Con persecución", url: "https://www.youtube.com/watch?v=kX3D28b3WuM" },
          { nombre: "Con pase en mano", url: "https://www.youtube.com/watch?v=7wl97N2eBwI" },
          { nombre: "Tras descarga", url: "https://www.youtube.com/watch?v=6RFYV_loPbM" },
          { nombre: "Tras descarga en el poste", url: "https://www.youtube.com/watch?v=HUDLaMOErqk" },
        ],
        "Sin defensa": [
          { nombre: "En ataque rápido", url: "https://www.youtube.com/watch?v=vBXewQ0SK9o" },
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
        { nombre: "Rutina Lillard", url: "https://www.youtube.com/watch?v=dCgZDiZiOuA" },
        { nombre: "Crossover detenido", url: "https://www.youtube.com/watch?v=ENh5EsCisX8" },
        { nombre: "Crossover en movimiento", url: "https://www.youtube.com/watch?v=AeVNioX2eIM" },
        { nombre: "Doble cross", url: "https://www.youtube.com/watch?v=HuqO02c5E_Q" },
        { nombre: "Adentro y afuera", url: "https://www.youtube.com/watch?v=BISRlGAx2Ho" },
        { nombre: "Adentro y afuera + cross", url: "https://www.youtube.com/watch?v=SsaFDvWQWIU" },
        { nombre: "Entrepiernas", url: "https://www.youtube.com/watch?v=Kshl-zoIRW8" },
        { nombre: "Entrepiernas + cross", url: "https://www.youtube.com/watch?v=0NR4-CnT8qA" },
        { nombre: "Entrepiernas + faja", url: "https://www.youtube.com/watch?v=35sf4oDjA8s" },
        { nombre: "Faja + giro", url: "https://www.youtube.com/watch?v=7jR9mrcQefk" },
        { nombre: "Giro", url: "https://www.youtube.com/watch?v=fiVm_m1tWPs" },
        { nombre: "Hesitation", url: "https://www.youtube.com/watch?v=_L32Mz0X5-Q" },
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
