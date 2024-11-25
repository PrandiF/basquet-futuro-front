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
  bajada: string;
};

export const categorias: Categoria[] = [
  // {
  //   cat: "Mosquito",
  //   objetivos: {
  //     Defensa: {
  //       Estático: [
  //         { nombre: "1 pelota", url: "" },
  //         { nombre: "2 pelotas", url: "" },
  //         { nombre: "Adentro y afuera", url: "" },
  //         { nombre: "Atras y adelante", url: "" },
  //       ],
  //       Combinaciones: [
  //         { nombre: "Entrepiernas + faja", url: "" },
  //         { nombre: "Entrepiernas + por delante", url: "" },
  //         { nombre: "Adentro y afuera + por delante", url: "" },
  //         { nombre: "Crossover + entrepiernas", url: "" },
  //       ],
  //     },
  //     Dribbling: {
  //       Estático: [
  //         { nombre: "1 pelota (nivel 1)", url: "https://www.youtube.com/watch?v=SJGlJRLVEso" },
  //         { nombre: "2 pelotas (nivel 1)", url: "https://www.youtube.com/watch?v=6IWX9UIox9Y" },
  //         { nombre: "1 pelota (nivel 2)", url: "https://www.youtube.com/watch?v=U-P3R9-XU2A" },
  //         { nombre: "2 pelotas (nivel 2)", url: "https://www.youtube.com/watch?v=XfUdDqG6kGc" },
  //         { nombre: "1 y 2 pelotas", url: "https://www.youtube.com/watch?v=I4sjI6wdUGM" },
  //         { nombre: "Pelota + cono + cambio de mano", url: "https://www.youtube.com/watch?v=CwP-T4Vr6YA" },
  //         { nombre: "Coordinar combinaciones en pareja", url: "https://www.youtube.com/watch?v=zOtqSQD2SKo" },
  //         { nombre: "2 pelotas + coordinacion de pies", url: "https://www.youtube.com/watch?v=TocpFRa8Kds" },
  //         { nombre: "2 pelotas + pase", url: "https://www.youtube.com/watch?v=BrVjan6uS-8" },
  //         { nombre: "2 pelotas (nivel 3)", url: "https://www.youtube.com/watch?v=QryCDoWHho0" },
  //       ],
  //       Dinámico: [
  //         { nombre: "2 pelotas (nivel 1)", url: "https://www.youtube.com/watch?v=xrhS2YE5YZk" },
  //         { nombre: "2 pelotas (nivel 2)", url: "https://www.youtube.com/watch?v=xrhS2YE5YZk" },
  //         { nombre: "Cambio de dirección a la carrera", url: "" },
  //         { nombre: "Detención en 2 tiempos + back space", url: "https://www.youtube.com/watch?v=KOu6NIFiRtw" },
  //         { nombre: "Diferentes superficies y alturas", url: "https://www.youtube.com/watch?v=Z2BTrE5wk-k" },
  //         { nombre: "Fútbol con dribbling", url: "https://www.youtube.com/watch?v=kRPwIwl6Tws" },
  //         { nombre: "Rutina de manejo dinámico", url: "https://www.youtube.com/watch?v=iAzQCsgaruM" },
  //         { nombre: "Hesitation + cross + definición", url: "https://www.youtube.com/watch?v=NpGfLK6UYuk" },
  //         { nombre: "cross + definición", url: "https://www.youtube.com/watch?v=TjxR7d7yIJ8" },
  //         { nombre: "Cambios de dirección con 2 pelotas", url: "https://www.youtube.com/watch?v=OqUFFPSMlPY" },
  //         { nombre: "Combinaciones varias a la carrera", url: "https://www.youtube.com/watch?v=3v1V51v696o" },
  //         { nombre: "Cambios de dirección con conos en hilera", url: "https://www.youtube.com/watch?v=inQVmZUGAbc" },
  //         { nombre: "Combinaciones varias a la carrera", url: "https://www.youtube.com/watch?v=3v1V51v696o" },
  //         { nombre: "2 pelotas en espejo", url: "https://www.youtube.com/watch?v=DeVO-7sasXw" },
  //         { nombre: "Dribbling + voley con globo", url: "https://www.youtube.com/watch?v=OylbEmGQtvE" },
  //         { nombre: "Atajar pelota de tenis con dribbling", url: "https://www.youtube.com/watch?v=4ep6S2axcfs" },
  //         { nombre: "Cross con la otra mano ocupada", url: "https://www.youtube.com/watch?v=nBtMx2Rc78Y" },
  //         { nombre: "2 pelotas + pase con repiqueteo", url: "https://www.youtube.com/watch?v=Lwp1W1Rn8dA" },
  //       ],

  //       Combinaciones: [
  //         { nombre: "Entrepiernas + faja", url: "" },
  //         { nombre: "Entrepiernas + por delante", url: "" },
  //         { nombre: "Adentro y afuera + por delante", url: "" },
  //         { nombre: "Crossover + entrepiernas", url: "" },
  //       ],
  //     },
  //     Táctico: {
  //       Ataque: [
  //         { nombre: "1 pelota", url: "https://www.youtube.com/watch?v=UTVUuXsvWT8" },
  //         {
  //           nombre: "2 pelotas",
  //           url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
  //         },
  //         { nombre: "Adentro y afuera", url: "https://www.youtube.com/watch?v=UTVUuXsvWT8" },
  //         { nombre: "Atras y adelante", url: "https://www.youtube.com/watch?v=UTVUuXsvWT8" },
  //       ],
  //       Defensa: [
  //         { nombre: "Entrepiernas + faja", url: "" },
  //         { nombre: "Entrepiernas + por delante", url: "" },
  //         { nombre: "Adentro y afuera + por delante", url: "" },
  //         { nombre: "Crossover + entrepiernas", url: "" },
  //       ],
  //     },
  //     Lanzamiento: {
  //       Estático: [
  //         { nombre: "Detención en dos tiempos sin lanzar", url: "https://www.youtube.com/watch?v=1U3zW2D9Yhk" },
  //         { nombre: "Lanzamiento en pareja", url: "https://www.youtube.com/watch?v=w75EJw8vWP0" },
  //         { nombre: "Terminación de tiro acostado", url: "https://www.youtube.com/watch?v=sAfI10jLPpo" },
  //         { nombre: "Terminación de tiro a pie firme", url: "https://www.youtube.com/watch?v=rKKf13C2unw" },
  //         { nombre: "Terminación de tiro sentado", url: "https://www.youtube.com/watch?v=cxnov6u00Es" },
  //         { nombre: "Equilibrio + tiro", url: "https://www.youtube.com/watch?v=gd_WP8LUmrE" },
  //         { nombre: "Terminación de tiro a pie firme", url: "https://www.youtube.com/watch?v=rKKf13C2unw" },
  //         { nombre: "5 consecutivos retrocediendo", url: "https://www.youtube.com/watch?v=SqCfDDmatVA" },
  //         { nombre: "5 posiciones durante 2 minutos", url: "https://www.youtube.com/watch?v=OIhn7H4pYi4" },
  //         { nombre: "5 consecutivos retrocediendo", url: "https://www.youtube.com/watch?v=SqCfDDmatVA" },
  //       ],
  //       En_movimiento: [
  //         { nombre: "Rueda de tiros varios", url: "https://www.youtube.com/watch?v=djNs9Ndv050" },
  //         { nombre: "Lanzamientos tras comportamientos", url: "https://www.youtube.com/watch?v=XmGUkvUo_go" },
  //         { nombre: "Lanzamientos en movimientos (serie de 3 diferentes)", url: "https://www.youtube.com/watch?v=_KqKvcCW1GU" },
  //         { nombre: "Detención en 2 tiempos + lanzamiento", url: "https://www.youtube.com/watch?v=BZiNg7_Kmb8" },
  //         { nombre: "Detención en 2 tiempos tras cortina indirecta", url: "https://www.youtube.com/watch?v=UaaGDuFUyDY" },
  //         { nombre: "Detención en 2 tiempos con persecución", url: "https://www.youtube.com/watch?v=Pg2j7CSGih8" },
  //         { nombre: "Recepción en movimiento", url: "https://www.youtube.com/watch?v=6MAkjLqc3Tg" },
  //         { nombre: "Atacar tras pase extra", url: "https://www.youtube.com/watch?v=ue9ZFNJE248" },
  //         { nombre: "Desplazamiento + tiro", url: "https://www.youtube.com/watch?v=OHulg3w3zR8" },
  //         { nombre: "Recibir y tirar en movimiento de 3pts", url: "https://www.youtube.com/watch?v=66ImO96SYWE" },
  //         { nombre: "A la carrera con sprint", url: "https://www.youtube.com/watch?v=l_QGe5qClMA" },
  //         { nombre: "Tiro tras descarga con comportamiento", url: "https://www.youtube.com/watch?v=3B7wTpaGh5k" },
  //         { nombre: "Tiros varios tras cortina indirecta", url: "https://www.youtube.com/watch?v=WPNhWJhrwF0" },
  //         { nombre: "Detenciones después del dribbling + tiro", url: "https://www.youtube.com/watch?v=DnaK8hvgQEI" },
  //         { nombre: "Recepciones + fintas + giros", url: "https://www.youtube.com/watch?v=7H79-eg-3hE" },
  //       ],
  //     },
  //     "Movimiento de pies": {
  //       Ataque: [
  //         { nombre: "Pie exterior + triple amenaza + jab + definición", url: "https://www.youtube.com/watch?v=lz52whGGuXk" },
  //         { nombre: "Triple amenaza + fintas + definición", url: "https://www.youtube.com/watch?v=IpPCXExLr9g" },
  //         { nombre: "Pivoteo + definición", url: "https://www.youtube.com/watch?v=Q2GpByDRDps" },
  //         { nombre: "Detención + pivoteo + fintas", url: "https://www.youtube.com/watch?v=gE28dH2kH14" },
  //         { nombre: "Detención + definición", url: "https://www.youtube.com/watch?v=jqL-6Pup8b0" },
  //         { nombre: "Pase + pivoteo + fintas", url: "https://www.youtube.com/watch?v=jqL-6Pup8b0" },
  //         { nombre: "Detención + giro + definición", url: "https://www.youtube.com/watch?v=aro7S4Y0bT4" },
  //         { nombre: "Coordinación + definición", url: "" },
  //         { nombre: "Desmarque + atacar el aro", url: "https://www.youtube.com/watch?v=LUQDWbiZZwQ" },
  //       ],
  //       Defensa: [
  //         { nombre: "Desplazamiento defensivo", url: "" },
  //         { nombre: "Desplazamiento defensivo en línea de pase", url: "" },
  //         { nombre: "Desplazamiento rebote defensivo", url: "" },
  //       ],
  //     },
  //     Definiciones: {
  //       "Con defensa": [
  //         { nombre: "Con persecución", url: "https://www.youtube.com/watch?v=kX3D28b3WuM" },
  //         { nombre: "Con pase en mano", url: "https://www.youtube.com/watch?v=7wl97N2eBwI" },
  //         { nombre: "Tras descarga", url: "https://www.youtube.com/watch?v=6RFYV_loPbM" },
  //         { nombre: "Tras descarga en el poste", url: "https://www.youtube.com/watch?v=HUDLaMOErqk" },
  //       ],
  //       "Sin defensa": [
  //         { nombre: "En ataque rápido", url: "https://www.youtube.com/watch?v=vBXewQ0SK9o" },
  //         { nombre: "Entrepiernas + por delante", url: "" },
  //         { nombre: "Adentro y afuera + por delante", url: "" },
  //         { nombre: "Crossover + entrepiernas", url: "" },
  //       ],
  //     },
  //     Pase: {
  //       "1 pelota": [
  //         { nombre: "1 pelota después del dribbling", url: "https://www.youtube.com/watch?v=cnuMxqqJDnY" },
  //         { nombre: "1 pelota, con dribbling, todos a la vez", url: "https://www.youtube.com/watch?v=zt_23bbyUDg" },
  //         { nombre: "1 pelota, con dribbling, todos a la vez", url: "https://www.youtube.com/watch?v=zt_23bbyUDg" },
  //         { nombre: "Rueda de pases", url: "https://www.youtube.com/watch?v=Rb-0MiCbe4g" },
  //         { nombre: "Rondo con un líbero", url: "https://www.youtube.com/watch?v=41VQciTBaMc" },
  //         { nombre: "Rondo + atrapes", url: "https://www.youtube.com/watch?v=HnNYftqiepg" },
  //         { nombre: "Pases a la carrera + definición", url: "https://www.youtube.com/watch?v=lcAZp-brnqM" },
  //         { nombre: "3x1 con 2 pelotas", url: "https://www.youtube.com/watch?v=1eIap3UzOMA" },
  //         { nombre: "Pase en transición + definición", url: "https://www.youtube.com/watch?v=uf9vE0LQnqQ" },
  //         { nombre: "Rondo 4x3", url: "https://www.youtube.com/watch?v=7eW8lztSKJc" },
  //         { nombre: "Rueda de lectura", url: "https://www.youtube.com/watch?v=kEYZ0Q4hybU" },
  //       ],
  //       "2 pelotas": [
  //         { nombre: "2 pelotas + dribbling estático", url: "https://www.youtube.com/watch?v=A8SU1lifkRk" },
  //         { nombre: "2 pelotas + dribbling dinámico", url: "https://www.youtube.com/watch?v=x9vDkR5O-6M" },
  //         { nombre: "Rutina de pases en pareja", url: "https://www.youtube.com/watch?v=yAaHRoWGxHQ" },
  //       ],
  //     },
  //     "1 vs 1": {
  //       "Media cancha": [
  //         { nombre: "Desde triple amenaza", url: "https://www.youtube.com/watch?v=wPWkYQlvFPE" },
  //         { nombre: "1/4 de cancha a la carrera", url: "https://www.youtube.com/watch?v=9rVGEt8A73Q" },
  //         { nombre: "Triple amenaza + lectura defensa", url: "https://www.youtube.com/watch?v=shcGJ3xeimg" },
  //         { nombre: "Tocar cono y salir a 45", url: "https://www.youtube.com/watch?v=lz01eiN0yIk" },
  //         { nombre: "A la carrera", url: "https://www.youtube.com/watch?v=aLyoaTn_UWk" },
  //         { nombre: "Con campo acotado", url: "https://www.youtube.com/watch?v=49k-M5bnBPU" },
  //         { nombre: "Con oposición física", url: "https://www.youtube.com/watch?v=gUJlxzn-_MY" },
  //         { nombre: "Desplazamiento + reacción", url: "https://www.youtube.com/watch?v=W-Q0qXliLbE" },
  //         { nombre: "Lectura y ataque desde el dribbling", url: "https://www.youtube.com/watch?v=qCuoYqsAMdw" },
  //         { nombre: "Mano en mano + definición", url: "https://www.youtube.com/watch?v=7wl97N2eBwI" },
  //         { nombre: "Definición con ayuda defensiva", url: "https://www.youtube.com/watch?v=9DjWr8SEOkc" },
  //       ],
  //       "Toda la cancha": [
  //         { nombre: "Toda la cancha", url: "https://www.youtube.com/watch?v=XXbPN2Lu9Zc" },
  //         { nombre: "Toda la cancha a la carrera", url: "https://www.youtube.com/watch?v=ARzODZqMDfI" },
  //         { nombre: "Con un pasador", url: "https://www.youtube.com/watch?v=lJGMnd99KVs" },
  //         { nombre: "Definición con persecución", url: "https://www.youtube.com/watch?v=kX3D28b3WuM" },
  //       ],
  //     },
  //   },
  // },
  {
    cat: "U9",
    bajada:
      "La etapa de descubrir y enamorarse del básquet. Aquí sembramos la pasión por el juego mientras desarrollamos las bases fundamentales con diversión y trabajo en equipo.",
    objetivos: {
      Defensa: {
        Individual: [
          {
            nombre: "Desplazamiento defensivo en espejo",
            url: "https://www.youtube.com/watch?v=IBB9dsczLHc",
          },
          { nombre: "Desplazamiento defensivo toda la cancha", url: "" },
          { nombre: "Desplazamiento defensivo entre bancos", url: "" },
          { nombre: "Desplazamiento defensivo (1x1)", url: "" },
          {
            nombre: "Desplazamiento defensivo + recupero (competencia)",
            url: "",
          },
          {
            nombre: "Desplazamiento defensivo + salto lateral",
            url: "https://www.youtube.com/watch?v=Te89QbBwdBI",
          },
          {
            nombre: "Desplazamiento defensivo (1x1) con ayuda del atacante",
            url: "https://www.youtube.com/watch?v=1z6Tze7jDcM",
          },
        ],
      },
      Dribbling: {
        Estático: [
          {
            nombre: "1 pelota (nivel 1)",
            url: "https://www.youtube.com/watch?v=SJGlJRLVEso",
          },
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=6IWX9UIox9Y",
          },
          {
            nombre: "Pelota + cono + cambio de mano",
            url: "https://www.youtube.com/watch?v=CwP-T4Vr6YA",
          },
          {
            nombre: "Coordinar combinaciones en pareja",
            url: "https://www.youtube.com/watch?v=zOtqSQD2SKo",
          },
          { nombre: "Protección", url: "" },
          { nombre: "Protección con oposición (juego)", url: "" },
          { nombre: "Estático con dificultad", url: "" },
        ],
        Dinámico: [
          { nombre: "Cambio de dirección a la carrera", url: "" },
          {
            nombre: "Detención en 2 tiempos + back space",
            url: "https://www.youtube.com/watch?v=KOu6NIFiRtw",
          },
          {
            nombre: "Diferentes superficies y alturas",
            url: "https://www.youtube.com/watch?v=Z2BTrE5wk-k",
          },
          {
            nombre: "Fútbol con dribbling",
            url: "https://www.youtube.com/watch?v=kRPwIwl6Tws",
          },
          {
            nombre: "Rutina de manejo dinámico",
            url: "https://www.youtube.com/watch?v=iAzQCsgaruM",
          },
          {
            nombre: "cross + definición",
            url: "https://www.youtube.com/watch?v=TjxR7d7yIJ8",
          },
          {
            nombre: "Cambios de dirección con 2 pelotas",
            url: "https://www.youtube.com/watch?v=OqUFFPSMlPY",
          },
          {
            nombre: "2 pelotas en espejo",
            url: "https://www.youtube.com/watch?v=DeVO-7sasXw",
          },
          {
            nombre: "Dribbling + voley con globo",
            url: "https://www.youtube.com/watch?v=OylbEmGQtvE",
          },
          {
            nombre: "Atajar pelota de tenis con dribbling",
            url: "https://www.youtube.com/watch?v=4ep6S2axcfs",
          },
          { nombre: "A la carrera", url: "" },
          { nombre: "A la carrera + detención", url: "" },
          { nombre: "A la carrera + detención + pase", url: "" },
          { nombre: "Estático y a la carrera", url: "" },
          { nombre: "A la carrera con oposición", url: "" },
          { nombre: "Slalom", url: "" },
          { nombre: "Slalom + crossover", url: "" },
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
          {
            nombre: "1 pelota",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "2 pelotas",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Adentro y afuera",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Atras y adelante",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
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
          {
            nombre: "Lanzamiento en pareja",
            url: "https://www.youtube.com/watch?v=w75EJw8vWP0",
          },
          {
            nombre: "Terminación de tiro acostado",
            url: "https://www.youtube.com/watch?v=sAfI10jLPpo",
          },
          {
            nombre: "Terminación de tiro sentado",
            url: "https://www.youtube.com/watch?v=cxnov6u00Es",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          { nombre: "A media distancia", url: "" },
          { nombre: "Varios tipos de lanzamientos", url: "" },
          { nombre: "Varios tipos de lanzamientos (juego)", url: "" },
          { nombre: "Varios tipos de lanzamientos con oposición", url: "" },
          { nombre: "Rueda técnica a media distancia (juego)", url: "" },
        ],
        En_movimiento: [
          {
            nombre: "Lanzamientos tras comportamientos",
            url: "https://www.youtube.com/watch?v=XmGUkvUo_go",
          },
          {
            nombre: "Tiro tras descarga con comportamiento",
            url: "https://www.youtube.com/watch?v=3B7wTpaGh5k",
          },
        ],
      },
      "Movimiento de pies": {
        Ataque: [
          {
            nombre: "Pie exterior + triple amenaza + jab + definición",
            url: "https://www.youtube.com/watch?v=lz52whGGuXk",
          },
          {
            nombre: "Pivoteo + definición",
            url: "https://www.youtube.com/watch?v=Q2GpByDRDps",
          },
          {
            nombre: "Detención + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=gE28dH2kH14",
          },
          {
            nombre: "Detención + definición",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Detención + giro + definición",
            url: "https://www.youtube.com/watch?v=aro7S4Y0bT4",
          },
          { nombre: "Coordinación + definición", url: "" },
          { nombre: "Desplazamiento con obstáculos", url: "" },
          { nombre: "Cambios de dirección con y sin pelota", url: "" },
          { nombre: "Detención 1 y 2 tiempos sin elemento", url: "" },
          {
            nombre: "Detención 1 y 2 tiempos después de dribbling + pivoteo",
            url: "",
          },
          { nombre: "Detención 1 y 2 tiempos al recibir la pelota", url: "" },
        ],
        Defensa: [
          { nombre: "Desplazamiento defensivo", url: "" },
          { nombre: "Desplazamiento defensivo en línea de pase", url: "" },
          { nombre: "Desplazamiento rebote defensivo", url: "" },
        ],
      },
      Definiciones: {
        "Con defensa": [
          {
            nombre: "Tras descarga",
            url: "https://www.youtube.com/watch?v=6RFYV_loPbM",
          },
        ],
        "Sin defensa": [
          { nombre: "Bandeja", url: "" },
          { nombre: "Bandeja a velocidad (juego)", url: "" },
          { nombre: "Bandeja paso a paso", url: "" },
        ],
      },
      Pase: {
        "1 pelota": [
          {
            nombre: "1 pelota después del dribbling",
            url: "https://www.youtube.com/watch?v=cnuMxqqJDnY",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "Rueda de pases",
            url: "https://www.youtube.com/watch?v=Rb-0MiCbe4g",
          },
          {
            nombre: "Rondo con un líbero",
            url: "https://www.youtube.com/watch?v=41VQciTBaMc",
          },
          {
            nombre: "Rondo + atrapes",
            url: "https://www.youtube.com/watch?v=HnNYftqiepg",
          },
          {
            nombre: "Pases a la carrera + definición",
            url: "https://www.youtube.com/watch?v=lcAZp-brnqM",
          },
          {
            nombre: "3x1 con 2 pelotas",
            url: "https://www.youtube.com/watch?v=1eIap3UzOMA",
          },
          {
            nombre: "Pase en transición + definición",
            url: "https://www.youtube.com/watch?v=uf9vE0LQnqQ",
          },
          {
            nombre: "Rondo 4x3",
            url: "https://www.youtube.com/watch?v=7eW8lztSKJc",
          },
          {
            nombre: "Rueda de lectura",
            url: "https://www.youtube.com/watch?v=kEYZ0Q4hybU",
          },
          { nombre: "Pasar y correr", url: "" },
          { nombre: "Pase en desplazamiento", url: "" },
          { nombre: "Pases en posición fija", url: "" },
          { nombre: "Pase fijo con receptor en movimiento", url: "" },
          { nombre: "Pase en desplazamiento (2 calles)", url: "" },
          { nombre: "Pase con receptor + correr (juego)", url: "" },
          { nombre: "Pases estáticos", url: "" },
          { nombre: "Recepción", url: "" },
        ],
        "2 pelotas": [
          {
            nombre: "2 pelotas + dribbling estático",
            url: "https://www.youtube.com/watch?v=A8SU1lifkRk",
          },
          {
            nombre: "2 pelotas + dribbling dinámico",
            url: "https://www.youtube.com/watch?v=x9vDkR5O-6M",
          },
          {
            nombre: "Rutina de pases en pareja",
            url: "https://www.youtube.com/watch?v=yAaHRoWGxHQ",
          },
        ],
      },
      "1 vs 1": {
        "Media cancha": [
          {
            nombre: "Con campo acotado",
            url: "https://www.youtube.com/watch?v=49k-M5bnBPU",
          },
          {
            nombre: "Desplazamiento + reacción",
            url: "https://www.youtube.com/watch?v=W-Q0qXliLbE",
          },
          { nombre: "1/2 cancha - Definición", url: "" },
          { nombre: "1/2 cancha - Reacción", url: "" },
          {
            nombre: "Desde triple amenaza",
            url: "https://www.youtube.com/watch?v=wPWkYQlvFPE",
          },
        ],
        "Toda la cancha": [
          {
            nombre: "Con un pasador",
            url: "https://www.youtube.com/watch?v=lJGMnd99KVs",
          },
          { nombre: "Toda la cancha - Definición", url: "" },
          { nombre: "Toda la cancha - Reacción", url: "" },
          { nombre: "Desplazamiento defensivo", url: "" },
        ],
      },
    },
  },
  {
    cat: "U11",
    bajada:
      "El momento de aprender jugando. Esta categoría combina técnicas básicas con dinámicas entretenidas, fomentando el crecimiento personal y deportivo de cada pequeño atleta.",
    objetivos: {
      Defensa: {
        Individual: [
          {
            nombre: "Desplazamiento defensivo en espejo",
            url: "https://www.youtube.com/watch?v=IBB9dsczLHc",
          },
          { nombre: "Desplazamiento defensivo toda la cancha", url: "" },
          { nombre: "Desplazamiento defensivo entre bancos", url: "" },
          { nombre: "Desplazamiento defensivo (1x1)", url: "" },
          {
            nombre: "Desplazamiento defensivo + recupero (competencia)",
            url: "",
          },
          {
            nombre: "Desplazamiento defensivo + salto lateral",
            url: "https://www.youtube.com/watch?v=Te89QbBwdBI",
          },
          {
            nombre: "Desplazamiento defensivo (1x1) con ayuda del atacante",
            url: "https://www.youtube.com/watch?v=1z6Tze7jDcM",
          },
          {
            nombre: "Línea de pase a 45 (1x1)",
            url: "https://www.youtube.com/watch?v=eev9CfjnKeI",
          },
          { nombre: "1vs1 con ayuda (juego)", url: "" },
          { nombre: "Rebote - Box Out", url: "" },
          {
            nombre: "Reacción a la pelota de tenis",
            url: "https://www.youtube.com/watch?v=jApgipUdo40",
          },
          {
            nombre: "Desplazamiento + repiqueteo + ayuda",
            url: "https://www.youtube.com/watch?v=DMNXkdkqKnI",
          },
          {
            nombre: "Close out + desplazamiento + sprint",
            url: "https://www.youtube.com/watch?v=0zzqgAFb5Tg",
          },
          {
            nombre: "Desplazamiento + sprint + recupero",
            url: "https://www.youtube.com/watch?v=Fs9BDjc8-Zo",
          },
          {
            nombre: "4x4 'change!",
            url: "https://www.youtube.com/watch?v=QKX7TrtsyxM",
          },
        ],
      },
      Dribbling: {
        Estático: [
          {
            nombre: "1 pelota (nivel 1)",
            url: "https://www.youtube.com/watch?v=SJGlJRLVEso",
          },
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=6IWX9UIox9Y",
          },
          {
            nombre: "1 y 2 pelotas",
            url: "https://www.youtube.com/watch?v=I4sjI6wdUGM",
          },
          {
            nombre: "Pelota + cono + cambio de mano",
            url: "https://www.youtube.com/watch?v=CwP-T4Vr6YA",
          },
          {
            nombre: "Coordinar combinaciones en pareja",
            url: "https://www.youtube.com/watch?v=zOtqSQD2SKo",
          },
          {
            nombre: "2 pelotas + coordinacion de pies",
            url: "https://www.youtube.com/watch?v=TocpFRa8Kds",
          },
          {
            nombre: "2 pelotas + pase",
            url: "https://www.youtube.com/watch?v=BrVjan6uS-8",
          },
          { nombre: "Protección", url: "" },
          { nombre: "Protección con oposición (juego)", url: "" },
          { nombre: "Estático con dificultad", url: "" },
        ],
        Dinámico: [
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          { nombre: "Cambio de dirección a la carrera", url: "" },
          {
            nombre: "Detención en 2 tiempos + back space",
            url: "https://www.youtube.com/watch?v=KOu6NIFiRtw",
          },
          {
            nombre: "Diferentes superficies y alturas",
            url: "https://www.youtube.com/watch?v=Z2BTrE5wk-k",
          },
          {
            nombre: "Fútbol con dribbling",
            url: "https://www.youtube.com/watch?v=kRPwIwl6Tws",
          },
          {
            nombre: "Rutina de manejo dinámico",
            url: "https://www.youtube.com/watch?v=iAzQCsgaruM",
          },
          {
            nombre: "Hesitation + cross + definición",
            url: "https://www.youtube.com/watch?v=NpGfLK6UYuk",
          },
          {
            nombre: "cross + definición",
            url: "https://www.youtube.com/watch?v=TjxR7d7yIJ8",
          },
          {
            nombre: "Cambios de dirección con 2 pelotas",
            url: "https://www.youtube.com/watch?v=OqUFFPSMlPY",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "2 pelotas en espejo",
            url: "https://www.youtube.com/watch?v=DeVO-7sasXw",
          },
          {
            nombre: "Dribbling + voley con globo",
            url: "https://www.youtube.com/watch?v=OylbEmGQtvE",
          },
          {
            nombre: "Atajar pelota de tenis con dribbling",
            url: "https://www.youtube.com/watch?v=4ep6S2axcfs",
          },
          {
            nombre: "Cross con la otra mano ocupada",
            url: "https://www.youtube.com/watch?v=nBtMx2Rc78Y",
          },
          {
            nombre: "2 pelotas + pase con repiqueteo",
            url: "https://www.youtube.com/watch?v=Lwp1W1Rn8dA",
          },
          { nombre: "A la carrera", url: "" },
          { nombre: "A la carrera + detención", url: "" },
          { nombre: "A la carrera + detención + pase", url: "" },
          { nombre: "Estático y a la carrera", url: "" },
          { nombre: "A la carrera con oposición", url: "" },
          { nombre: "Slalom", url: "" },
          { nombre: "Slalom + crossover", url: "" },
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
          {
            nombre: "1 pelota",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "2 pelotas",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Adentro y afuera",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Atras y adelante",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
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
          {
            nombre: "Detención en dos tiempos sin lanzar",
            url: "https://www.youtube.com/watch?v=1U3zW2D9Yhk",
          },
          {
            nombre: "Lanzamiento en pareja",
            url: "https://www.youtube.com/watch?v=w75EJw8vWP0",
          },
          {
            nombre: "Terminación de tiro acostado",
            url: "https://www.youtube.com/watch?v=sAfI10jLPpo",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "Terminación de tiro sentado",
            url: "https://www.youtube.com/watch?v=cxnov6u00Es",
          },
          {
            nombre: "Equilibrio + tiro",
            url: "https://www.youtube.com/watch?v=gd_WP8LUmrE",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "5 posiciones durante 2 minutos",
            url: "https://www.youtube.com/watch?v=OIhn7H4pYi4",
          },
          { nombre: "A media distancia", url: "" },
          { nombre: "A media o corta distancia", url: "" },
          { nombre: "A media distancia + fintas", url: "" },
          { nombre: "Varios tipos de lanzamientos", url: "" },
          { nombre: "Varios tipos de lanzamientos (juego)", url: "" },
          { nombre: "Varios tipos de lanzamientos con oposición", url: "" },
          { nombre: "Rueda técnica a media distancia (juego)", url: "" },
          { nombre: "Tiro corto con oposición", url: "" },
          { nombre: "Media distancia con dificultad", url: "" },
        ],
        En_movimiento: [],
      },
      "Movimiento de pies": {
        Ataque: [
          {
            nombre: "Pie exterior + triple amenaza + jab + definición",
            url: "https://www.youtube.com/watch?v=lz52whGGuXk",
          },
          {
            nombre: "Triple amenaza + fintas + definición",
            url: "https://www.youtube.com/watch?v=IpPCXExLr9g",
          },
          {
            nombre: "Pivoteo + definición",
            url: "https://www.youtube.com/watch?v=Q2GpByDRDps",
          },
          {
            nombre: "Detención + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=gE28dH2kH14",
          },
          {
            nombre: "Detención + definición",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Pase + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Detención + giro + definición",
            url: "https://www.youtube.com/watch?v=aro7S4Y0bT4",
          },
          { nombre: "Coordinación + definición", url: "" },
          { nombre: "Desplazamiento con obstáculos", url: "" },
          { nombre: "Cambios de dirección con y sin pelota", url: "" },
          { nombre: "Detención 1 y 2 tiempos sin elemento", url: "" },
          {
            nombre: "Detención 1 y 2 tiempos después de dribbling + pivoteo",
            url: "",
          },
          { nombre: "Detención 1 y 2 tiempos al recibir la pelota", url: "" },
          { nombre: "Pivoteo", url: "" },
          { nombre: "Detención 1 tiempo + fintas", url: "" },
        ],
        Defensa: [
          { nombre: "Desplazamiento defensivo", url: "" },
          { nombre: "Desplazamiento defensivo en línea de pase", url: "" },
          { nombre: "Desplazamiento rebote defensivo", url: "" },
        ],
      },
      Definiciones: {
        "Con defensa": [
          {
            nombre: "Con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
          {
            nombre: "Con pase en mano",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Tras descarga",
            url: "https://www.youtube.com/watch?v=6RFYV_loPbM",
          },

          { nombre: "Bandeja con oposición", url: "" },
        ],
        "Sin defensa": [
          { nombre: "Bandeja", url: "" },
          { nombre: "Bandeja a velocidad (juego)", url: "" },
          { nombre: "Bandeja paso a paso", url: "" },
        ],
      },
      Pase: {
        "1 pelota": [
          {
            nombre: "1 pelota después del dribbling",
            url: "https://www.youtube.com/watch?v=cnuMxqqJDnY",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "Rondo con un líbero",
            url: "https://www.youtube.com/watch?v=41VQciTBaMc",
          },
          {
            nombre: "Rondo + atrapes",
            url: "https://www.youtube.com/watch?v=HnNYftqiepg",
          },
          {
            nombre: "Pases a la carrera + definición",
            url: "https://www.youtube.com/watch?v=lcAZp-brnqM",
          },
          {
            nombre: "3x1 con 2 pelotas",
            url: "https://www.youtube.com/watch?v=1eIap3UzOMA",
          },
          {
            nombre: "Pase en transición + definición",
            url: "https://www.youtube.com/watch?v=uf9vE0LQnqQ",
          },
          {
            nombre: "Rondo 4x3",
            url: "https://www.youtube.com/watch?v=7eW8lztSKJc",
          },
          {
            nombre: "Rueda de lectura",
            url: "https://www.youtube.com/watch?v=kEYZ0Q4hybU",
          },
          { nombre: "Pasar y correr", url: "" },
          { nombre: "Pase en desplazamiento", url: "" },
          { nombre: "Pases en posición fija", url: "" },
          { nombre: "Pase fijo con receptor en movimiento", url: "" },
          { nombre: "Pase en desplazamiento (3 calles)", url: "" },
          { nombre: "Pase en desplazamiento (2 calles)", url: "" },
          {
            nombre: "Pase en desplazamiento con oposición (2 calles)",
            url: "",
          },
          { nombre: "Pase con receptor + correr (juego)", url: "" },
          { nombre: "Pases estáticos", url: "" },
          { nombre: "Recepción", url: "" },
        ],
        "2 pelotas": [
          {
            nombre: "2 pelotas + dribbling estático",
            url: "https://www.youtube.com/watch?v=A8SU1lifkRk",
          },
          {
            nombre: "2 pelotas + dribbling dinámico",
            url: "https://www.youtube.com/watch?v=x9vDkR5O-6M",
          },
          {
            nombre: "Rutina de pases en pareja",
            url: "https://www.youtube.com/watch?v=yAaHRoWGxHQ",
          },
        ],
      },
      "1 vs 1": {
        "Media cancha": [
          {
            nombre: "Desde triple amenaza",
            url: "https://www.youtube.com/watch?v=wPWkYQlvFPE",
          },
          {
            nombre: "1/4 de cancha a la carrera",
            url: "https://www.youtube.com/watch?v=9rVGEt8A73Q",
          },
          {
            nombre: "Triple amenaza + lectura defensa",
            url: "https://www.youtube.com/watch?v=shcGJ3xeimg",
          },
          {
            nombre: "A la carrera",
            url: "https://www.youtube.com/watch?v=aLyoaTn_UWk",
          },
          {
            nombre: "Con campo acotado",
            url: "https://www.youtube.com/watch?v=49k-M5bnBPU",
          },
          {
            nombre: "Desplazamiento + reacción",
            url: "https://www.youtube.com/watch?v=W-Q0qXliLbE",
          },
          {
            nombre: "Lectura y ataque desde el dribbling",
            url: "https://www.youtube.com/watch?v=qCuoYqsAMdw",
          },
          {
            nombre: "Mano en mano + definición",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Definición con ayuda defensiva",
            url: "https://www.youtube.com/watch?v=9DjWr8SEOkc",
          },
        ],
        "Toda la cancha": [
          {
            nombre: "Toda la cancha",
            url: "https://www.youtube.com/watch?v=XXbPN2Lu9Zc",
          },
          {
            nombre: "Toda la cancha a la carrera",
            url: "https://www.youtube.com/watch?v=ARzODZqMDfI",
          },
          {
            nombre: "Con un pasador",
            url: "https://www.youtube.com/watch?v=lJGMnd99KVs",
          },
          {
            nombre: "Definición con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
        ],
      },
    },
  },
  {
    cat: "U13",
    bajada:
      "Un paso hacia el compromiso con el básquet. Los jugadores comienzan a perfeccionar movimientos y entender estrategias, fortaleciendo habilidades físicas y mentales.",
    objetivos: {
      Defensa: {
        Individual: [
          {
            nombre: "Desplazamiento defensivo en espejo",
            url: "https://www.youtube.com/watch?v=IBB9dsczLHc",
          },
          { nombre: "Desplazamiento defensivo toda la cancha", url: "" },
          { nombre: "Desplazamiento defensivo entre bancos", url: "" },
          { nombre: "Desplazamiento defensivo (1x1)", url: "" },
          {
            nombre: "Desplazamiento defensivo + recupero (competencia)",
            url: "",
          },
          {
            nombre: "Desplazamiento defensivo + salto lateral",
            url: "https://www.youtube.com/watch?v=Te89QbBwdBI",
          },
          {
            nombre: "Desplazamiento defensivo (1x1) con ayuda del atacante",
            url: "https://www.youtube.com/watch?v=1z6Tze7jDcM",
          },
          {
            nombre: "Línea de pase a 45 (1x1)",
            url: "https://www.youtube.com/watch?v=eev9CfjnKeI",
          },
          { nombre: "1vs1 con ayuda (juego)", url: "" },
          { nombre: "Rebote - Box Out", url: "" },
          {
            nombre: "Reacción a la pelota de tenis",
            url: "https://www.youtube.com/watch?v=jApgipUdo40",
          },
          {
            nombre: "Desplazamiento + repiqueteo + ayuda",
            url: "https://www.youtube.com/watch?v=DMNXkdkqKnI",
          },
          {
            nombre: "Close out + desplazamiento + sprint",
            url: "https://www.youtube.com/watch?v=0zzqgAFb5Tg",
          },
          {
            nombre: "Desplazamiento + sprint + recupero",
            url: "https://www.youtube.com/watch?v=Fs9BDjc8-Zo",
          },
          {
            nombre: "1x1 ayuda + recupero",
            url: "https://www.youtube.com/watch?v=YCeyF7kJj6w",
          },
          { nombre: "3x3 ayuda + recupero (media cancha)", url: "" },
          {
            nombre: "4x4 'change!",
            url: "https://www.youtube.com/watch?v=QKX7TrtsyxM",
          },
          {
            nombre: "Close out",
            url: "https://www.youtube.com/watch?v=Q1MtSBnWBpU",
          },
          {
            nombre: "Repiqueteo + close out",
            url: "https://www.youtube.com/watch?v=S2UWvLEVLo0",
          },
          {
            nombre: "Close out + línea de pase + 1x1",
            url: "https://www.youtube.com/watch?v=yHt935lRyoQ",
          },
          {
            nombre: "2x2 a 45 con coach driblando",
            url: "https://www.youtube.com/watch?v=M8zmrlSTo78",
          },
        ],
      },
      Dribbling: {
        Estático: [
          {
            nombre: "1 pelota (nivel 1)",
            url: "https://www.youtube.com/watch?v=SJGlJRLVEso",
          },
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=6IWX9UIox9Y",
          },
          {
            nombre: "1 pelota (nivel 2)",
            url: "https://www.youtube.com/watch?v=U-P3R9-XU2A",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=XfUdDqG6kGc",
          },
          {
            nombre: "1 y 2 pelotas",
            url: "https://www.youtube.com/watch?v=I4sjI6wdUGM",
          },
          {
            nombre: "Pelota + cono + cambio de mano",
            url: "https://www.youtube.com/watch?v=CwP-T4Vr6YA",
          },
          {
            nombre: "Coordinar combinaciones en pareja",
            url: "https://www.youtube.com/watch?v=zOtqSQD2SKo",
          },
          {
            nombre: "2 pelotas + coordinacion de pies",
            url: "https://www.youtube.com/watch?v=TocpFRa8Kds",
          },
          {
            nombre: "2 pelotas + pase",
            url: "https://www.youtube.com/watch?v=BrVjan6uS-8",
          },
          {
            nombre: "2 pelotas (nivel 3)",
            url: "https://www.youtube.com/watch?v=QryCDoWHho0",
          },
          { nombre: "Protección", url: "" },
          { nombre: "Protección con oposición (juego)", url: "" },
          { nombre: "Estático con dificultad", url: "" },
        ],
        Dinámico: [
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          { nombre: "Cambio de dirección a la carrera", url: "" },
          {
            nombre: "Detención en 2 tiempos + back space",
            url: "https://www.youtube.com/watch?v=KOu6NIFiRtw",
          },
          {
            nombre: "Diferentes superficies y alturas",
            url: "https://www.youtube.com/watch?v=Z2BTrE5wk-k",
          },
          {
            nombre: "Fútbol con dribbling",
            url: "https://www.youtube.com/watch?v=kRPwIwl6Tws",
          },
          {
            nombre: "Rutina de manejo dinámico",
            url: "https://www.youtube.com/watch?v=iAzQCsgaruM",
          },
          {
            nombre: "Hesitation + cross + definición",
            url: "https://www.youtube.com/watch?v=NpGfLK6UYuk",
          },
          {
            nombre: "cross + definición",
            url: "https://www.youtube.com/watch?v=TjxR7d7yIJ8",
          },
          {
            nombre: "Cambios de dirección con 2 pelotas",
            url: "https://www.youtube.com/watch?v=OqUFFPSMlPY",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "Cambios de dirección con conos en hilera",
            url: "https://www.youtube.com/watch?v=inQVmZUGAbc",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "2 pelotas en espejo",
            url: "https://www.youtube.com/watch?v=DeVO-7sasXw",
          },
          {
            nombre: "Dribbling + voley con globo",
            url: "https://www.youtube.com/watch?v=OylbEmGQtvE",
          },
          {
            nombre: "Atajar pelota de tenis con dribbling",
            url: "https://www.youtube.com/watch?v=4ep6S2axcfs",
          },
          {
            nombre: "Cross con la otra mano ocupada",
            url: "https://www.youtube.com/watch?v=nBtMx2Rc78Y",
          },
          {
            nombre: "2 pelotas + pase con repiqueteo",
            url: "https://www.youtube.com/watch?v=Lwp1W1Rn8dA",
          },
          { nombre: "A la carrera", url: "" },
          { nombre: "A la carrera + detención", url: "" },
          { nombre: "A la carrera + detención + pase", url: "" },
          { nombre: "Estático y a la carrera", url: "" },
          { nombre: "A la carrera con oposición", url: "" },
          { nombre: "Slalom", url: "" },
          { nombre: "Slalom + crossover", url: "" },
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
          {
            nombre: "1 pelota",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "2 pelotas",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Adentro y afuera",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Atras y adelante",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
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
          {
            nombre: "Detención en dos tiempos sin lanzar",
            url: "https://www.youtube.com/watch?v=1U3zW2D9Yhk",
          },
          {
            nombre: "Lanzamiento en pareja",
            url: "https://www.youtube.com/watch?v=w75EJw8vWP0",
          },
          {
            nombre: "Terminación de tiro acostado",
            url: "https://www.youtube.com/watch?v=sAfI10jLPpo",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "Terminación de tiro sentado",
            url: "https://www.youtube.com/watch?v=cxnov6u00Es",
          },
          {
            nombre: "Equilibrio + tiro",
            url: "https://www.youtube.com/watch?v=gd_WP8LUmrE",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "5 consecutivos retrocediendo",
            url: "https://www.youtube.com/watch?v=SqCfDDmatVA",
          },
          {
            nombre: "5 posiciones durante 2 minutos",
            url: "https://www.youtube.com/watch?v=OIhn7H4pYi4",
          },
          {
            nombre: "5 consecutivos retrocediendo",
            url: "https://www.youtube.com/watch?v=SqCfDDmatVA",
          },
          { nombre: "A media distancia", url: "" },
          { nombre: "A media o corta distancia", url: "" },
          { nombre: "A media distancia + fintas", url: "" },
          { nombre: "Varios tipos de lanzamientos", url: "" },
          { nombre: "Varios tipos de lanzamientos (juego)", url: "" },
          { nombre: "Varios tipos de lanzamientos con oposición", url: "" },
          { nombre: "Rueda técnica a media distancia (juego)", url: "" },
          { nombre: "Tiro corto con oposición", url: "" },
          { nombre: "Media distancia con dificultad", url: "" },
        ],
        En_movimiento: [
          {
            nombre: "Rueda de tiros varios",
            url: "https://www.youtube.com/watch?v=djNs9Ndv050",
          },
          {
            nombre: "Lanzamientos tras comportamientos",
            url: "https://www.youtube.com/watch?v=XmGUkvUo_go",
          },
          {
            nombre: "Lanzamientos en movimientos (serie de 3 diferentes)",
            url: "https://www.youtube.com/watch?v=_KqKvcCW1GU",
          },
          {
            nombre: "Detención en 2 tiempos + lanzamiento",
            url: "https://www.youtube.com/watch?v=BZiNg7_Kmb8",
          },
          {
            nombre: "Detención en 2 tiempos tras cortina indirecta",
            url: "https://www.youtube.com/watch?v=UaaGDuFUyDY",
          },
          {
            nombre: "Detención en 2 tiempos con persecución",
            url: "https://www.youtube.com/watch?v=Pg2j7CSGih8",
          },
          {
            nombre: "Recepción en movimiento",
            url: "https://www.youtube.com/watch?v=6MAkjLqc3Tg",
          },
          {
            nombre: "Atacar tras pase extra",
            url: "https://www.youtube.com/watch?v=ue9ZFNJE248",
          },
          {
            nombre: "Desplazamiento + tiro",
            url: "https://www.youtube.com/watch?v=OHulg3w3zR8",
          },
          {
            nombre: "Recibir y tirar en movimiento de 3pts",
            url: "https://www.youtube.com/watch?v=66ImO96SYWE",
          },
          {
            nombre: "A la carrera con sprint",
            url: "https://www.youtube.com/watch?v=l_QGe5qClMA",
          },
          {
            nombre: "Tiro tras descarga con comportamiento",
            url: "https://www.youtube.com/watch?v=3B7wTpaGh5k",
          },
          {
            nombre: "Tiros varios tras cortina indirecta",
            url: "https://www.youtube.com/watch?v=WPNhWJhrwF0",
          },
          {
            nombre: "Detenciones después del dribbling + tiro",
            url: "https://www.youtube.com/watch?v=DnaK8hvgQEI",
          },
          {
            nombre: "Recepciones + fintas + giros",
            url: "https://www.youtube.com/watch?v=7H79-eg-3hE",
          },
        ],
      },
      "Movimiento de pies": {
        Ataque: [
          {
            nombre: "Pie exterior + triple amenaza + jab + definición",
            url: "https://www.youtube.com/watch?v=lz52whGGuXk",
          },
          {
            nombre: "Triple amenaza + fintas + definición",
            url: "https://www.youtube.com/watch?v=IpPCXExLr9g",
          },
          {
            nombre: "Pivoteo + definición",
            url: "https://www.youtube.com/watch?v=Q2GpByDRDps",
          },
          {
            nombre: "Detención + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=gE28dH2kH14",
          },
          {
            nombre: "Detención + definición",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Pase + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Detención + giro + definición",
            url: "https://www.youtube.com/watch?v=aro7S4Y0bT4",
          },
          { nombre: "Coordinación + definición", url: "" },
          {
            nombre: "Desmarque + atacar el aro",
            url: "https://www.youtube.com/watch?v=LUQDWbiZZwQ",
          },
          { nombre: "Coordinación + definición", url: "" },
          { nombre: "Desplazamiento con obstáculos", url: "" },
          { nombre: "Cambios de dirección con y sin pelota", url: "" },
          { nombre: "Detención 1 y 2 tiempos sin elemento", url: "" },
          {
            nombre: "Detención 1 y 2 tiempos después de dribbling + pivoteo",
            url: "",
          },
          { nombre: "Detención 1 y 2 tiempos al recibir la pelota", url: "" },
          { nombre: "Pivoteo", url: "" },
          { nombre: "Detención 1 tiempo + fintas", url: "" },
          { nombre: "Finta penetración + giro + lanzamiento", url: "" },
        ],
        Defensa: [
          { nombre: "Desplazamiento defensivo", url: "" },
          { nombre: "Desplazamiento defensivo en línea de pase", url: "" },
          { nombre: "Desplazamiento rebote defensivo", url: "" },
        ],
      },
      Definiciones: {
        "Con defensa": [
          {
            nombre: "Con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
          {
            nombre: "Con pase en mano",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Tras descarga",
            url: "https://www.youtube.com/watch?v=6RFYV_loPbM",
          },
          {
            nombre: "Tras descarga en el poste",
            url: "https://www.youtube.com/watch?v=HUDLaMOErqk",
          },
        ],
        "Sin defensa": [
          {
            nombre: "En ataque rápido",
            url: "https://www.youtube.com/watch?v=vBXewQ0SK9o",
          },
          { nombre: "Bandeja", url: "" },
          { nombre: "Bandeja a velocidad (juego)", url: "" },
          { nombre: "Bandeja paso a paso", url: "" },
        ],
      },
      Pase: {
        "1 pelota": [
          {
            nombre: "1 pelota después del dribbling",
            url: "https://www.youtube.com/watch?v=cnuMxqqJDnY",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "Rueda de pases",
            url: "https://www.youtube.com/watch?v=Rb-0MiCbe4g",
          },
          {
            nombre: "Rondo con un líbero",
            url: "https://www.youtube.com/watch?v=41VQciTBaMc",
          },
          {
            nombre: "Rondo + atrapes",
            url: "https://www.youtube.com/watch?v=HnNYftqiepg",
          },
          {
            nombre: "Pases a la carrera + definición",
            url: "https://www.youtube.com/watch?v=lcAZp-brnqM",
          },
          {
            nombre: "3x1 con 2 pelotas",
            url: "https://www.youtube.com/watch?v=1eIap3UzOMA",
          },
          {
            nombre: "Pase en transición + definición",
            url: "https://www.youtube.com/watch?v=uf9vE0LQnqQ",
          },
          {
            nombre: "Rondo 4x3",
            url: "https://www.youtube.com/watch?v=7eW8lztSKJc",
          },
          {
            nombre: "Rueda de lectura",
            url: "https://www.youtube.com/watch?v=kEYZ0Q4hybU",
          },
          { nombre: "Pasar y correr", url: "" },
          { nombre: "Pase en desplazamiento", url: "" },
          { nombre: "Pases en posición fija", url: "" },
          { nombre: "Pase fijo con receptor en movimiento", url: "" },
          { nombre: "Pase en desplazamiento (3 calles)", url: "" },
          { nombre: "Pase en desplazamiento (2 calles)", url: "" },
          {
            nombre: "Pase en desplazamiento con oposición (2 calles)",
            url: "",
          },
          { nombre: "Pase en desplazamiento (trenza)", url: "" },
          { nombre: "Pase con receptor + correr (juego)", url: "" },
          { nombre: "Pases estáticos", url: "" },
          { nombre: "Recepción", url: "" },
        ],
        "2 pelotas": [
          {
            nombre: "2 pelotas + dribbling estático",
            url: "https://www.youtube.com/watch?v=A8SU1lifkRk",
          },
          {
            nombre: "2 pelotas + dribbling dinámico",
            url: "https://www.youtube.com/watch?v=x9vDkR5O-6M",
          },
          {
            nombre: "Rutina de pases en pareja",
            url: "https://www.youtube.com/watch?v=yAaHRoWGxHQ",
          },
        ],
      },
      "1 vs 1": {
        "Media cancha": [
          {
            nombre: "Desde triple amenaza",
            url: "https://www.youtube.com/watch?v=wPWkYQlvFPE",
          },
          {
            nombre: "1/4 de cancha a la carrera",
            url: "https://www.youtube.com/watch?v=9rVGEt8A73Q",
          },
          {
            nombre: "Triple amenaza + lectura defensa",
            url: "https://www.youtube.com/watch?v=shcGJ3xeimg",
          },
          {
            nombre: "Tocar cono y salir a 45",
            url: "https://www.youtube.com/watch?v=lz01eiN0yIk",
          },
          {
            nombre: "A la carrera",
            url: "https://www.youtube.com/watch?v=aLyoaTn_UWk",
          },
          {
            nombre: "Con campo acotado",
            url: "https://www.youtube.com/watch?v=49k-M5bnBPU",
          },
          {
            nombre: "Con oposición física",
            url: "https://www.youtube.com/watch?v=gUJlxzn-_MY",
          },
          {
            nombre: "Desplazamiento + reacción",
            url: "https://www.youtube.com/watch?v=W-Q0qXliLbE",
          },
          {
            nombre: "Lectura y ataque desde el dribbling",
            url: "https://www.youtube.com/watch?v=qCuoYqsAMdw",
          },
          {
            nombre: "Mano en mano + definición",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Definición con ayuda defensiva",
            url: "https://www.youtube.com/watch?v=9DjWr8SEOkc",
          },
        ],
        "Toda la cancha": [
          {
            nombre: "Toda la cancha",
            url: "https://www.youtube.com/watch?v=XXbPN2Lu9Zc",
          },
          {
            nombre: "Toda la cancha a la carrera",
            url: "https://www.youtube.com/watch?v=ARzODZqMDfI",
          },
          {
            nombre: "Con un pasador",
            url: "https://www.youtube.com/watch?v=lJGMnd99KVs",
          },
          {
            nombre: "Definición con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
        ],
      },
    },
  },
  {
    cat: "U15",
    bajada:
      "Aquí comienza la verdadera formación del atleta. Técnicas avanzadas, mayor intensidad y un enfoque en el desarrollo físico para enfrentar nuevos desafíos en la cancha.",
    objetivos: {
      Defensa: {
        Individual: [
          {
            nombre: "Desplazamiento defensivo en espejo",
            url: "https://www.youtube.com/watch?v=IBB9dsczLHc",
          },
          { nombre: "Desplazamiento defensivo toda la cancha", url: "" },
          { nombre: "Desplazamiento defensivo entre bancos", url: "" },
          { nombre: "Desplazamiento defensivo (1x1)", url: "" },
          {
            nombre: "Desplazamiento defensivo + recupero (competencia)",
            url: "",
          },
          { nombre: "Desplazamiento defensivo + ayuda", url: "" },
          {
            nombre: "Desplazamiento defensivo + salto lateral",
            url: "https://www.youtube.com/watch?v=Te89QbBwdBI",
          },
          {
            nombre: "Desplazamiento defensivo (1x1) con ayuda del atacante",
            url: "https://www.youtube.com/watch?v=1z6Tze7jDcM",
          },
          {
            nombre: "Línea de pase a 45 (1x1)",
            url: "https://www.youtube.com/watch?v=eev9CfjnKeI",
          },
          { nombre: "1vs1 con ayuda (juego)", url: "" },
          { nombre: "Rebote - Box Out", url: "" },
          {
            nombre: "Reacción a la pelota de tenis",
            url: "https://www.youtube.com/watch?v=jApgipUdo40",
          },
          {
            nombre: "Desplazamiento + repiqueteo + ayuda",
            url: "https://www.youtube.com/watch?v=DMNXkdkqKnI",
          },
          {
            nombre: "Close out + desplazamiento + sprint",
            url: "https://www.youtube.com/watch?v=0zzqgAFb5Tg",
          },
          {
            nombre: "Desplazamiento + sprint + recupero",
            url: "https://www.youtube.com/watch?v=Fs9BDjc8-Zo",
          },
          {
            nombre: "1x1 ayuda + recupero",
            url: "https://www.youtube.com/watch?v=YCeyF7kJj6w",
          },
          { nombre: "3x3 ayuda + recupero (media cancha)", url: "" },
          { nombre: "3x3 close out + rebote", url: "" },
          {
            nombre: "4x4 'change!",
            url: "https://www.youtube.com/watch?v=QKX7TrtsyxM",
          },
          {
            nombre: "Close out",
            url: "https://www.youtube.com/watch?v=Q1MtSBnWBpU",
          },
          {
            nombre: "Repiqueteo + close out",
            url: "https://www.youtube.com/watch?v=S2UWvLEVLo0",
          },
          {
            nombre: "Close out + línea de pase + 1x1",
            url: "https://www.youtube.com/watch?v=yHt935lRyoQ",
          },
          {
            nombre: "2x2 a 45 con coach driblando",
            url: "https://www.youtube.com/watch?v=M8zmrlSTo78",
          },
          {
            nombre: "4x4 saltar a la pelota - posicional",
            url: "https://www.youtube.com/watch?v=J7_vIDIoDOs",
          },
          {
            nombre: "4x4 ataque pasa a defensa",
            url: "https://www.youtube.com/watch?v=4_WG_heI1Xg",
          },
          {
            nombre: "Ayuda + recupero + close out",
            url: "https://www.youtube.com/watch?v=jSRdBtZwydM",
          },
          {
            nombre: "línea de pase + perder + recupero",
            url: "https://www.youtube.com/watch?v=AJLwJMnvffg",
          },
          {
            nombre: "3 calles, ayuda + linea de pase",
            url: "https://www.youtube.com/watch?v=mJFHWYTL9Ng",
          },
        ],
      },
      Dribbling: {
        Estático: [
          {
            nombre: "1 pelota (nivel 1)",
            url: "https://www.youtube.com/watch?v=SJGlJRLVEso",
          },
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=6IWX9UIox9Y",
          },
          {
            nombre: "1 pelota (nivel 2)",
            url: "https://www.youtube.com/watch?v=U-P3R9-XU2A",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=XfUdDqG6kGc",
          },
          {
            nombre: "1 y 2 pelotas",
            url: "https://www.youtube.com/watch?v=I4sjI6wdUGM",
          },
          {
            nombre: "Pelota + cono + cambio de mano",
            url: "https://www.youtube.com/watch?v=CwP-T4Vr6YA",
          },
          {
            nombre: "Coordinar combinaciones en pareja",
            url: "https://www.youtube.com/watch?v=zOtqSQD2SKo",
          },
          {
            nombre: "2 pelotas + coordinacion de pies",
            url: "https://www.youtube.com/watch?v=TocpFRa8Kds",
          },
          {
            nombre: "2 pelotas + pase",
            url: "https://www.youtube.com/watch?v=BrVjan6uS-8",
          },
          {
            nombre: "2 pelotas (nivel 3)",
            url: "https://www.youtube.com/watch?v=QryCDoWHho0",
          },
          { nombre: "Protección", url: "" },
          { nombre: "Protección con oposición (juego)", url: "" },
          { nombre: "Estático con dificultad", url: "" },
        ],
        Dinámico: [
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          { nombre: "Cambio de dirección a la carrera", url: "" },
          {
            nombre: "Detención en 2 tiempos + back space",
            url: "https://www.youtube.com/watch?v=KOu6NIFiRtw",
          },
          {
            nombre: "Diferentes superficies y alturas",
            url: "https://www.youtube.com/watch?v=Z2BTrE5wk-k",
          },
          {
            nombre: "Fútbol con dribbling",
            url: "https://www.youtube.com/watch?v=kRPwIwl6Tws",
          },
          {
            nombre: "Rutina de manejo dinámico",
            url: "https://www.youtube.com/watch?v=iAzQCsgaruM",
          },
          {
            nombre: "Hesitation + cross + definición",
            url: "https://www.youtube.com/watch?v=NpGfLK6UYuk",
          },
          {
            nombre: "cross + definición",
            url: "https://www.youtube.com/watch?v=TjxR7d7yIJ8",
          },
          {
            nombre: "Cambios de dirección con 2 pelotas",
            url: "https://www.youtube.com/watch?v=OqUFFPSMlPY",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "Cambios de dirección con conos en hilera",
            url: "https://www.youtube.com/watch?v=inQVmZUGAbc",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "2 pelotas en espejo",
            url: "https://www.youtube.com/watch?v=DeVO-7sasXw",
          },
          {
            nombre: "Dribbling + voley con globo",
            url: "https://www.youtube.com/watch?v=OylbEmGQtvE",
          },
          {
            nombre: "Atajar pelota de tenis con dribbling",
            url: "https://www.youtube.com/watch?v=4ep6S2axcfs",
          },
          {
            nombre: "Cross con la otra mano ocupada",
            url: "https://www.youtube.com/watch?v=nBtMx2Rc78Y",
          },
          {
            nombre: "2 pelotas + pase con repiqueteo",
            url: "https://www.youtube.com/watch?v=Lwp1W1Rn8dA",
          },
          { nombre: "A la carrera", url: "" },
          { nombre: "A la carrera + detención", url: "" },
          { nombre: "A la carrera + detención + pase", url: "" },
          { nombre: "Estático y a la carrera", url: "" },
          { nombre: "A la carrera con oposición", url: "" },
          { nombre: "Slalom", url: "" },
          { nombre: "Slalom + crossover", url: "" },
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
          {
            nombre: "1 pelota",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "2 pelotas",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Adentro y afuera",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Atras y adelante",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
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
          {
            nombre: "Detención en dos tiempos sin lanzar",
            url: "https://www.youtube.com/watch?v=1U3zW2D9Yhk",
          },
          {
            nombre: "Lanzamiento en pareja",
            url: "https://www.youtube.com/watch?v=w75EJw8vWP0",
          },
          {
            nombre: "Terminación de tiro acostado",
            url: "https://www.youtube.com/watch?v=sAfI10jLPpo",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "Terminación de tiro sentado",
            url: "https://www.youtube.com/watch?v=cxnov6u00Es",
          },
          {
            nombre: "Equilibrio + tiro",
            url: "https://www.youtube.com/watch?v=gd_WP8LUmrE",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "5 consecutivos retrocediendo",
            url: "https://www.youtube.com/watch?v=SqCfDDmatVA",
          },
          {
            nombre: "5 posiciones durante 2 minutos",
            url: "https://www.youtube.com/watch?v=OIhn7H4pYi4",
          },
          {
            nombre: "5 consecutivos retrocediendo",
            url: "https://www.youtube.com/watch?v=SqCfDDmatVA",
          },
          { nombre: "A media distancia", url: "" },
          { nombre: "A media o corta distancia", url: "" },
          { nombre: "A media distancia + fintas", url: "" },
          { nombre: "Varios tipos de lanzamientos", url: "" },
          { nombre: "Varios tipos de lanzamientos (juego)", url: "" },
          { nombre: "Varios tipos de lanzamientos con oposición", url: "" },
          { nombre: "Rueda técnica a media distancia (juego)", url: "" },
          { nombre: "Tiro corto con oposición", url: "" },
          { nombre: "Media distancia con dificultad", url: "" },
        ],
        En_movimiento: [
          {
            nombre: "Rueda de tiros varios",
            url: "https://www.youtube.com/watch?v=djNs9Ndv050",
          },
          {
            nombre: "Lanzamientos tras comportamientos",
            url: "https://www.youtube.com/watch?v=XmGUkvUo_go",
          },
          {
            nombre: "Lanzamientos en movimientos (serie de 3 diferentes)",
            url: "https://www.youtube.com/watch?v=_KqKvcCW1GU",
          },
          {
            nombre: "Detención en 2 tiempos + lanzamiento",
            url: "https://www.youtube.com/watch?v=BZiNg7_Kmb8",
          },
          {
            nombre: "Detención en 2 tiempos tras cortina indirecta",
            url: "https://www.youtube.com/watch?v=UaaGDuFUyDY",
          },
          {
            nombre: "Detención en 2 tiempos con persecución",
            url: "https://www.youtube.com/watch?v=Pg2j7CSGih8",
          },
          {
            nombre: "Recepción en movimiento",
            url: "https://www.youtube.com/watch?v=6MAkjLqc3Tg",
          },
          {
            nombre: "Atacar tras pase extra",
            url: "https://www.youtube.com/watch?v=ue9ZFNJE248",
          },
          {
            nombre: "Desplazamiento + tiro",
            url: "https://www.youtube.com/watch?v=OHulg3w3zR8",
          },
          {
            nombre: "Recibir y tirar en movimiento de 3pts",
            url: "https://www.youtube.com/watch?v=66ImO96SYWE",
          },
          {
            nombre: "A la carrera con sprint",
            url: "https://www.youtube.com/watch?v=l_QGe5qClMA",
          },
          {
            nombre: "Tiro tras descarga con comportamiento",
            url: "https://www.youtube.com/watch?v=3B7wTpaGh5k",
          },
          {
            nombre: "Tiros varios tras cortina indirecta",
            url: "https://www.youtube.com/watch?v=WPNhWJhrwF0",
          },
          {
            nombre: "Detenciones después del dribbling + tiro",
            url: "https://www.youtube.com/watch?v=DnaK8hvgQEI",
          },
          {
            nombre: "Recepciones + fintas + giros",
            url: "https://www.youtube.com/watch?v=7H79-eg-3hE",
          },
        ],
      },
      "Movimiento de pies": {
        Ataque: [
          {
            nombre: "Pie exterior + triple amenaza + jab + definición",
            url: "https://www.youtube.com/watch?v=lz52whGGuXk",
          },
          {
            nombre: "Triple amenaza + fintas + definición",
            url: "https://www.youtube.com/watch?v=IpPCXExLr9g",
          },
          {
            nombre: "Pivoteo + definición",
            url: "https://www.youtube.com/watch?v=Q2GpByDRDps",
          },
          {
            nombre: "Detención + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=gE28dH2kH14",
          },
          {
            nombre: "Detención + definición",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Pase + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Detención + giro + definición",
            url: "https://www.youtube.com/watch?v=aro7S4Y0bT4",
          },
          { nombre: "Coordinación + definición", url: "" },
          {
            nombre: "Desmarque + atacar el aro",
            url: "https://www.youtube.com/watch?v=LUQDWbiZZwQ",
          },
          { nombre: "Coordinación + definición", url: "" },
          { nombre: "Desplazamiento con obstáculos", url: "" },
          { nombre: "Cambios de dirección con y sin pelota", url: "" },
          { nombre: "Detención 1 y 2 tiempos sin elemento", url: "" },
          {
            nombre: "Detención 1 y 2 tiempos después de dribbling + pivoteo",
            url: "",
          },
          { nombre: "Detención 1 y 2 tiempos al recibir la pelota", url: "" },
          { nombre: "Pivoteo", url: "" },
          { nombre: "Detención 1 tiempo + fintas", url: "" },
          { nombre: "Finta penetración + giro + lanzamiento", url: "" },
        ],
        Defensa: [
          { nombre: "Desplazamiento defensivo", url: "" },
          { nombre: "Desplazamiento defensivo en línea de pase", url: "" },
          { nombre: "Desplazamiento rebote defensivo", url: "" },
        ],
      },
      Definiciones: {
        "Con defensa": [
          {
            nombre: "Con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
          {
            nombre: "Con pase en mano",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Tras descarga",
            url: "https://www.youtube.com/watch?v=6RFYV_loPbM",
          },
          {
            nombre: "Tras descarga en el poste",
            url: "https://www.youtube.com/watch?v=HUDLaMOErqk",
          },
        ],
        "Sin defensa": [
          {
            nombre: "En ataque rápido",
            url: "https://www.youtube.com/watch?v=vBXewQ0SK9o",
          },
          { nombre: "Bandeja", url: "" },
          { nombre: "Bandeja a velocidad (juego)", url: "" },
          { nombre: "Bandeja paso a paso", url: "" },
        ],
      },
      Pase: {
        "1 pelota": [
          {
            nombre: "1 pelota después del dribbling",
            url: "https://www.youtube.com/watch?v=cnuMxqqJDnY",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "Rueda de pases",
            url: "https://www.youtube.com/watch?v=Rb-0MiCbe4g",
          },
          {
            nombre: "Rondo con un líbero",
            url: "https://www.youtube.com/watch?v=41VQciTBaMc",
          },
          {
            nombre: "Rondo + atrapes",
            url: "https://www.youtube.com/watch?v=HnNYftqiepg",
          },
          {
            nombre: "Pases a la carrera + definición",
            url: "https://www.youtube.com/watch?v=lcAZp-brnqM",
          },
          {
            nombre: "3x1 con 2 pelotas",
            url: "https://www.youtube.com/watch?v=1eIap3UzOMA",
          },
          {
            nombre: "Pase en transición + definición",
            url: "https://www.youtube.com/watch?v=uf9vE0LQnqQ",
          },
          {
            nombre: "Rondo 4x3",
            url: "https://www.youtube.com/watch?v=7eW8lztSKJc",
          },
          {
            nombre: "Rueda de lectura",
            url: "https://www.youtube.com/watch?v=kEYZ0Q4hybU",
          },
          { nombre: "Pasar y correr", url: "" },
          { nombre: "Pase en desplazamiento", url: "" },
          { nombre: "Pases en posición fija", url: "" },
          { nombre: "Pase fijo con receptor en movimiento", url: "" },
          { nombre: "Pase en desplazamiento (3 calles)", url: "" },
          { nombre: "Pase en desplazamiento (2 calles)", url: "" },
          {
            nombre: "Pase en desplazamiento con oposición (2 calles)",
            url: "",
          },
          { nombre: "Pase en desplazamiento (trenza)", url: "" },
          { nombre: "Pase con receptor + correr (juego)", url: "" },
          { nombre: "Pases estáticos", url: "" },
          { nombre: "Recepción", url: "" },
        ],
        "2 pelotas": [
          {
            nombre: "2 pelotas + dribbling estático",
            url: "https://www.youtube.com/watch?v=A8SU1lifkRk",
          },
          {
            nombre: "2 pelotas + dribbling dinámico",
            url: "https://www.youtube.com/watch?v=x9vDkR5O-6M",
          },
          {
            nombre: "Rutina de pases en pareja",
            url: "https://www.youtube.com/watch?v=yAaHRoWGxHQ",
          },
        ],
      },
      "1 vs 1": {
        "Media cancha": [
          {
            nombre: "Desde triple amenaza",
            url: "https://www.youtube.com/watch?v=wPWkYQlvFPE",
          },
          {
            nombre: "1/4 de cancha a la carrera",
            url: "https://www.youtube.com/watch?v=9rVGEt8A73Q",
          },
          {
            nombre: "Triple amenaza + lectura defensa",
            url: "https://www.youtube.com/watch?v=shcGJ3xeimg",
          },
          {
            nombre: "Tocar cono y salir a 45",
            url: "https://www.youtube.com/watch?v=lz01eiN0yIk",
          },
          {
            nombre: "A la carrera",
            url: "https://www.youtube.com/watch?v=aLyoaTn_UWk",
          },
          {
            nombre: "Con campo acotado",
            url: "https://www.youtube.com/watch?v=49k-M5bnBPU",
          },
          {
            nombre: "Con oposición física",
            url: "https://www.youtube.com/watch?v=gUJlxzn-_MY",
          },
          {
            nombre: "Desplazamiento + reacción",
            url: "https://www.youtube.com/watch?v=W-Q0qXliLbE",
          },
          {
            nombre: "Lectura y ataque desde el dribbling",
            url: "https://www.youtube.com/watch?v=qCuoYqsAMdw",
          },
          {
            nombre: "Mano en mano + definición",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Definición con ayuda defensiva",
            url: "https://www.youtube.com/watch?v=9DjWr8SEOkc",
          },
          {
            nombre: "1x1 a 45 con ayuda",
            url: "https://www.youtube.com/watch?v=TbDvnwinwR8",
          },
          {
            nombre: "1x1 ayuda + recupración + close out",
            url: "https://www.youtube.com/watch?v=8qz8z1s-8o0",
          },
        ],
        "Toda la cancha": [
          {
            nombre: "Toda la cancha",
            url: "https://www.youtube.com/watch?v=XXbPN2Lu9Zc",
          },
          {
            nombre: "Toda la cancha a la carrera",
            url: "https://www.youtube.com/watch?v=ARzODZqMDfI",
          },
          {
            nombre: "Con un pasador",
            url: "https://www.youtube.com/watch?v=lJGMnd99KVs",
          },
          {
            nombre: "Definición con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
        ],
      },
    },
  },
  {
    cat: "U17",
    bajada:
      "El salto hacia la competitividad. Esta categoría afina el rendimiento técnico y táctico, preparando a los jugadores para destacar en niveles más altos del juego.",
    objetivos: {
      Defensa: {
        Individual: [
          {
            nombre: "Desplazamiento defensivo en espejo",
            url: "https://www.youtube.com/watch?v=IBB9dsczLHc",
          },
          { nombre: "Desplazamiento defensivo toda la cancha", url: "" },
          { nombre: "Desplazamiento defensivo entre bancos", url: "" },
          { nombre: "Desplazamiento defensivo (1x1)", url: "" },
          {
            nombre: "Desplazamiento defensivo + recupero (competencia)",
            url: "",
          },
          { nombre: "Desplazamiento defensivo + ayuda", url: "" },
          {
            nombre: "Desplazamiento defensivo + salto lateral",
            url: "https://www.youtube.com/watch?v=Te89QbBwdBI",
          },
          {
            nombre: "Desplazamiento defensivo (1x1) con ayuda del atacante",
            url: "https://www.youtube.com/watch?v=1z6Tze7jDcM",
          },
          {
            nombre: "Línea de pase a 45 (1x1)",
            url: "https://www.youtube.com/watch?v=eev9CfjnKeI",
          },
          { nombre: "1vs1 con ayuda (juego)", url: "" },
          { nombre: "Rebote - Box Out", url: "" },
          {
            nombre: "Reacción a la pelota de tenis",
            url: "https://www.youtube.com/watch?v=jApgipUdo40",
          },
          {
            nombre: "Desplazamiento + repiqueteo + ayuda",
            url: "https://www.youtube.com/watch?v=DMNXkdkqKnI",
          },
          {
            nombre: "Close out + desplazamiento + sprint",
            url: "https://www.youtube.com/watch?v=0zzqgAFb5Tg",
          },
          {
            nombre: "Desplazamiento + sprint + recupero",
            url: "https://www.youtube.com/watch?v=Fs9BDjc8-Zo",
          },
          {
            nombre: "1x1 ayuda + recupero",
            url: "https://www.youtube.com/watch?v=YCeyF7kJj6w",
          },
          { nombre: "3x3 ayuda + recupero (media cancha)", url: "" },
          { nombre: "3x3 close out + rebote", url: "" },
          {
            nombre: "4x4 'change!",
            url: "https://www.youtube.com/watch?v=QKX7TrtsyxM",
          },
          {
            nombre: "Close out",
            url: "https://www.youtube.com/watch?v=Q1MtSBnWBpU",
          },
          {
            nombre: "Repiqueteo + close out",
            url: "https://www.youtube.com/watch?v=S2UWvLEVLo0",
          },
          {
            nombre: "Close out + línea de pase + 1x1",
            url: "https://www.youtube.com/watch?v=yHt935lRyoQ",
          },
          {
            nombre: "2x2 a 45 con coach driblando",
            url: "https://www.youtube.com/watch?v=M8zmrlSTo78",
          },
          {
            nombre: "4x4 saltar a la pelota - posicional",
            url: "https://www.youtube.com/watch?v=J7_vIDIoDOs",
          },
          {
            nombre: "4x4 ataque pasa a defensa",
            url: "https://www.youtube.com/watch?v=4_WG_heI1Xg",
          },
          {
            nombre: "Ayuda + recupero + close out",
            url: "https://www.youtube.com/watch?v=jSRdBtZwydM",
          },
          {
            nombre: "línea de pase + perder + recupero",
            url: "https://www.youtube.com/watch?v=AJLwJMnvffg",
          },
          {
            nombre: "3 calles, ayuda + linea de pase",
            url: "https://www.youtube.com/watch?v=mJFHWYTL9Ng",
          },
        ],
      },
      Dribbling: {
        Estático: [
          {
            nombre: "1 pelota (nivel 1)",
            url: "https://www.youtube.com/watch?v=SJGlJRLVEso",
          },
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=6IWX9UIox9Y",
          },
          {
            nombre: "1 pelota (nivel 2)",
            url: "https://www.youtube.com/watch?v=U-P3R9-XU2A",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=XfUdDqG6kGc",
          },
          {
            nombre: "1 y 2 pelotas",
            url: "https://www.youtube.com/watch?v=I4sjI6wdUGM",
          },
          {
            nombre: "Pelota + cono + cambio de mano",
            url: "https://www.youtube.com/watch?v=CwP-T4Vr6YA",
          },
          {
            nombre: "Coordinar combinaciones en pareja",
            url: "https://www.youtube.com/watch?v=zOtqSQD2SKo",
          },
          {
            nombre: "2 pelotas + coordinacion de pies",
            url: "https://www.youtube.com/watch?v=TocpFRa8Kds",
          },
          {
            nombre: "2 pelotas + pase",
            url: "https://www.youtube.com/watch?v=BrVjan6uS-8",
          },
          {
            nombre: "2 pelotas (nivel 3)",
            url: "https://www.youtube.com/watch?v=QryCDoWHho0",
          },
          { nombre: "Protección", url: "" },
          { nombre: "Protección con oposición (juego)", url: "" },
          { nombre: "Estático con dificultad", url: "" },
        ],
        Dinámico: [
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          { nombre: "Cambio de dirección a la carrera", url: "" },
          {
            nombre: "Detención en 2 tiempos + back space",
            url: "https://www.youtube.com/watch?v=KOu6NIFiRtw",
          },
          {
            nombre: "Diferentes superficies y alturas",
            url: "https://www.youtube.com/watch?v=Z2BTrE5wk-k",
          },
          {
            nombre: "Fútbol con dribbling",
            url: "https://www.youtube.com/watch?v=kRPwIwl6Tws",
          },
          {
            nombre: "Rutina de manejo dinámico",
            url: "https://www.youtube.com/watch?v=iAzQCsgaruM",
          },
          {
            nombre: "Hesitation + cross + definición",
            url: "https://www.youtube.com/watch?v=NpGfLK6UYuk",
          },
          {
            nombre: "cross + definición",
            url: "https://www.youtube.com/watch?v=TjxR7d7yIJ8",
          },
          {
            nombre: "Cambios de dirección con 2 pelotas",
            url: "https://www.youtube.com/watch?v=OqUFFPSMlPY",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "Cambios de dirección con conos en hilera",
            url: "https://www.youtube.com/watch?v=inQVmZUGAbc",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "2 pelotas en espejo",
            url: "https://www.youtube.com/watch?v=DeVO-7sasXw",
          },
          {
            nombre: "Dribbling + voley con globo",
            url: "https://www.youtube.com/watch?v=OylbEmGQtvE",
          },
          {
            nombre: "Atajar pelota de tenis con dribbling",
            url: "https://www.youtube.com/watch?v=4ep6S2axcfs",
          },
          {
            nombre: "Cross con la otra mano ocupada",
            url: "https://www.youtube.com/watch?v=nBtMx2Rc78Y",
          },
          {
            nombre: "2 pelotas + pase con repiqueteo",
            url: "https://www.youtube.com/watch?v=Lwp1W1Rn8dA",
          },
          { nombre: "A la carrera", url: "" },
          { nombre: "A la carrera + detención", url: "" },
          { nombre: "A la carrera + detención + pase", url: "" },
          { nombre: "Estático y a la carrera", url: "" },
          { nombre: "A la carrera con oposición", url: "" },
          { nombre: "Slalom", url: "" },
          { nombre: "Slalom + crossover", url: "" },
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
          {
            nombre: "1 pelota",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "2 pelotas",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Adentro y afuera",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Atras y adelante",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
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
          {
            nombre: "Detención en dos tiempos sin lanzar",
            url: "https://www.youtube.com/watch?v=1U3zW2D9Yhk",
          },
          {
            nombre: "Lanzamiento en pareja",
            url: "https://www.youtube.com/watch?v=w75EJw8vWP0",
          },
          {
            nombre: "Terminación de tiro acostado",
            url: "https://www.youtube.com/watch?v=sAfI10jLPpo",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "Terminación de tiro sentado",
            url: "https://www.youtube.com/watch?v=cxnov6u00Es",
          },
          {
            nombre: "Equilibrio + tiro",
            url: "https://www.youtube.com/watch?v=gd_WP8LUmrE",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "5 consecutivos retrocediendo",
            url: "https://www.youtube.com/watch?v=SqCfDDmatVA",
          },
          {
            nombre: "5 posiciones durante 2 minutos",
            url: "https://www.youtube.com/watch?v=OIhn7H4pYi4",
          },
          {
            nombre: "5 consecutivos retrocediendo",
            url: "https://www.youtube.com/watch?v=SqCfDDmatVA",
          },
          { nombre: "A media distancia", url: "" },
          { nombre: "A media o corta distancia", url: "" },
          { nombre: "A media distancia + fintas", url: "" },
          { nombre: "Varios tipos de lanzamientos", url: "" },
          { nombre: "Varios tipos de lanzamientos (juego)", url: "" },
          { nombre: "Varios tipos de lanzamientos con oposición", url: "" },
          { nombre: "Rueda técnica a media distancia (juego)", url: "" },
          { nombre: "Tiro corto con oposición", url: "" },
          { nombre: "Media distancia con dificultad", url: "" },
        ],
        En_movimiento: [
          {
            nombre: "Rueda de tiros varios",
            url: "https://www.youtube.com/watch?v=djNs9Ndv050",
          },
          {
            nombre: "Lanzamientos tras comportamientos",
            url: "https://www.youtube.com/watch?v=XmGUkvUo_go",
          },
          {
            nombre: "Lanzamientos en movimientos (serie de 3 diferentes)",
            url: "https://www.youtube.com/watch?v=_KqKvcCW1GU",
          },
          {
            nombre: "Detención en 2 tiempos + lanzamiento",
            url: "https://www.youtube.com/watch?v=BZiNg7_Kmb8",
          },
          {
            nombre: "Detención en 2 tiempos tras cortina indirecta",
            url: "https://www.youtube.com/watch?v=UaaGDuFUyDY",
          },
          {
            nombre: "Detención en 2 tiempos con persecución",
            url: "https://www.youtube.com/watch?v=Pg2j7CSGih8",
          },
          {
            nombre: "Recepción en movimiento",
            url: "https://www.youtube.com/watch?v=6MAkjLqc3Tg",
          },
          {
            nombre: "Atacar tras pase extra",
            url: "https://www.youtube.com/watch?v=ue9ZFNJE248",
          },
          {
            nombre: "Desplazamiento + tiro",
            url: "https://www.youtube.com/watch?v=OHulg3w3zR8",
          },
          {
            nombre: "Recibir y tirar en movimiento de 3pts",
            url: "https://www.youtube.com/watch?v=66ImO96SYWE",
          },
          {
            nombre: "A la carrera con sprint",
            url: "https://www.youtube.com/watch?v=l_QGe5qClMA",
          },
          {
            nombre: "Tiro tras descarga con comportamiento",
            url: "https://www.youtube.com/watch?v=3B7wTpaGh5k",
          },
          {
            nombre: "Tiros varios tras cortina indirecta",
            url: "https://www.youtube.com/watch?v=WPNhWJhrwF0",
          },
          {
            nombre: "Detenciones después del dribbling + tiro",
            url: "https://www.youtube.com/watch?v=DnaK8hvgQEI",
          },
          {
            nombre: "Recepciones + fintas + giros",
            url: "https://www.youtube.com/watch?v=7H79-eg-3hE",
          },
        ],
      },
      "Movimiento de pies": {
        Ataque: [
          {
            nombre: "Pie exterior + triple amenaza + jab + definición",
            url: "https://www.youtube.com/watch?v=lz52whGGuXk",
          },
          {
            nombre: "Triple amenaza + fintas + definición",
            url: "https://www.youtube.com/watch?v=IpPCXExLr9g",
          },
          {
            nombre: "Pivoteo + definición",
            url: "https://www.youtube.com/watch?v=Q2GpByDRDps",
          },
          {
            nombre: "Detención + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=gE28dH2kH14",
          },
          {
            nombre: "Detención + definición",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Pase + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Detención + giro + definición",
            url: "https://www.youtube.com/watch?v=aro7S4Y0bT4",
          },
          { nombre: "Coordinación + definición", url: "" },
          {
            nombre: "Desmarque + atacar el aro",
            url: "https://www.youtube.com/watch?v=LUQDWbiZZwQ",
          },
          { nombre: "Coordinación + definición", url: "" },
          { nombre: "Desplazamiento con obstáculos", url: "" },
          { nombre: "Cambios de dirección con y sin pelota", url: "" },
          { nombre: "Detención 1 y 2 tiempos sin elemento", url: "" },
          {
            nombre: "Detención 1 y 2 tiempos después de dribbling + pivoteo",
            url: "",
          },
          { nombre: "Detención 1 y 2 tiempos al recibir la pelota", url: "" },
          { nombre: "Pivoteo", url: "" },
          { nombre: "Detención 1 tiempo + fintas", url: "" },
          { nombre: "Finta penetración + giro + lanzamiento", url: "" },
        ],
        Defensa: [
          { nombre: "Desplazamiento defensivo", url: "" },
          { nombre: "Desplazamiento defensivo en línea de pase", url: "" },
          { nombre: "Desplazamiento rebote defensivo", url: "" },
        ],
      },
      Definiciones: {
        "Con defensa": [
          {
            nombre: "Con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
          {
            nombre: "Con pase en mano",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Tras descarga",
            url: "https://www.youtube.com/watch?v=6RFYV_loPbM",
          },
          {
            nombre: "Tras descarga en el poste",
            url: "https://www.youtube.com/watch?v=HUDLaMOErqk",
          },
        ],
        "Sin defensa": [
          {
            nombre: "En ataque rápido",
            url: "https://www.youtube.com/watch?v=vBXewQ0SK9o",
          },
          { nombre: "Bandeja", url: "" },
          { nombre: "Bandeja a velocidad (juego)", url: "" },
          { nombre: "Bandeja paso a paso", url: "" },
        ],
      },
      Pase: {
        "1 pelota": [
          {
            nombre: "1 pelota después del dribbling",
            url: "https://www.youtube.com/watch?v=cnuMxqqJDnY",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "Rueda de pases",
            url: "https://www.youtube.com/watch?v=Rb-0MiCbe4g",
          },
          {
            nombre: "Rondo con un líbero",
            url: "https://www.youtube.com/watch?v=41VQciTBaMc",
          },
          {
            nombre: "Rondo + atrapes",
            url: "https://www.youtube.com/watch?v=HnNYftqiepg",
          },
          {
            nombre: "Pases a la carrera + definición",
            url: "https://www.youtube.com/watch?v=lcAZp-brnqM",
          },
          {
            nombre: "3x1 con 2 pelotas",
            url: "https://www.youtube.com/watch?v=1eIap3UzOMA",
          },
          {
            nombre: "Pase en transición + definición",
            url: "https://www.youtube.com/watch?v=uf9vE0LQnqQ",
          },
          {
            nombre: "Rondo 4x3",
            url: "https://www.youtube.com/watch?v=7eW8lztSKJc",
          },
          {
            nombre: "Rueda de lectura",
            url: "https://www.youtube.com/watch?v=kEYZ0Q4hybU",
          },
          { nombre: "Pasar y correr", url: "" },
          { nombre: "Pase en desplazamiento", url: "" },
          { nombre: "Pases en posición fija", url: "" },
          { nombre: "Pase fijo con receptor en movimiento", url: "" },
          { nombre: "Pase en desplazamiento (3 calles)", url: "" },
          { nombre: "Pase en desplazamiento (2 calles)", url: "" },
          {
            nombre: "Pase en desplazamiento con oposición (2 calles)",
            url: "",
          },
          { nombre: "Pase en desplazamiento (trenza)", url: "" },
          { nombre: "Pase con receptor + correr (juego)", url: "" },
          { nombre: "Pases estáticos", url: "" },
          { nombre: "Recepción", url: "" },
        ],
        "2 pelotas": [
          {
            nombre: "2 pelotas + dribbling estático",
            url: "https://www.youtube.com/watch?v=A8SU1lifkRk",
          },
          {
            nombre: "2 pelotas + dribbling dinámico",
            url: "https://www.youtube.com/watch?v=x9vDkR5O-6M",
          },
          {
            nombre: "Rutina de pases en pareja",
            url: "https://www.youtube.com/watch?v=yAaHRoWGxHQ",
          },
        ],
      },
      "1 vs 1": {
        "Media cancha": [
          {
            nombre: "Desde triple amenaza",
            url: "https://www.youtube.com/watch?v=wPWkYQlvFPE",
          },
          {
            nombre: "1/4 de cancha a la carrera",
            url: "https://www.youtube.com/watch?v=9rVGEt8A73Q",
          },
          {
            nombre: "Triple amenaza + lectura defensa",
            url: "https://www.youtube.com/watch?v=shcGJ3xeimg",
          },
          {
            nombre: "Tocar cono y salir a 45",
            url: "https://www.youtube.com/watch?v=lz01eiN0yIk",
          },
          {
            nombre: "A la carrera",
            url: "https://www.youtube.com/watch?v=aLyoaTn_UWk",
          },
          {
            nombre: "Con campo acotado",
            url: "https://www.youtube.com/watch?v=49k-M5bnBPU",
          },
          {
            nombre: "Con oposición física",
            url: "https://www.youtube.com/watch?v=gUJlxzn-_MY",
          },
          {
            nombre: "Desplazamiento + reacción",
            url: "https://www.youtube.com/watch?v=W-Q0qXliLbE",
          },
          {
            nombre: "Lectura y ataque desde el dribbling",
            url: "https://www.youtube.com/watch?v=qCuoYqsAMdw",
          },
          {
            nombre: "Mano en mano + definición",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Definición con ayuda defensiva",
            url: "https://www.youtube.com/watch?v=9DjWr8SEOkc",
          },
          {
            nombre: "1x1 a 45 con ayuda",
            url: "https://www.youtube.com/watch?v=TbDvnwinwR8",
          },
          {
            nombre: "1x1 ayuda + recupración + close out",
            url: "https://www.youtube.com/watch?v=8qz8z1s-8o0",
          },
        ],
        "Toda la cancha": [
          {
            nombre: "Toda la cancha",
            url: "https://www.youtube.com/watch?v=XXbPN2Lu9Zc",
          },
          {
            nombre: "Toda la cancha a la carrera",
            url: "https://www.youtube.com/watch?v=ARzODZqMDfI",
          },
          {
            nombre: "Con un pasador",
            url: "https://www.youtube.com/watch?v=lJGMnd99KVs",
          },
          {
            nombre: "Definición con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
        ],
      },
    },
  },
  {
    cat: "U19",
    bajada:
      "El inicio de una carrera profesional. Entrenamientos diseñados para consolidar habilidades, mejorar la toma de decisiones y desarrollar el liderazgo en el equipo.",
    objetivos: {
      Defensa: {
        Individual: [
          {
            nombre: "Desplazamiento defensivo en espejo",
            url: "https://www.youtube.com/watch?v=IBB9dsczLHc",
          },
          { nombre: "Desplazamiento defensivo toda la cancha", url: "" },
          { nombre: "Desplazamiento defensivo entre bancos", url: "" },
          { nombre: "Desplazamiento defensivo (1x1)", url: "" },
          {
            nombre: "Desplazamiento defensivo + recupero (competencia)",
            url: "",
          },
          { nombre: "Desplazamiento defensivo + ayuda", url: "" },
          {
            nombre: "Desplazamiento defensivo + salto lateral",
            url: "https://www.youtube.com/watch?v=Te89QbBwdBI",
          },
          {
            nombre: "Desplazamiento defensivo (1x1) con ayuda del atacante",
            url: "https://www.youtube.com/watch?v=1z6Tze7jDcM",
          },
          {
            nombre: "Línea de pase a 45 (1x1)",
            url: "https://www.youtube.com/watch?v=eev9CfjnKeI",
          },
          { nombre: "1vs1 con ayuda (juego)", url: "" },
          { nombre: "Rebote - Box Out", url: "" },
          {
            nombre: "Reacción a la pelota de tenis",
            url: "https://www.youtube.com/watch?v=jApgipUdo40",
          },
          {
            nombre: "Desplazamiento + repiqueteo + ayuda",
            url: "https://www.youtube.com/watch?v=DMNXkdkqKnI",
          },
          {
            nombre: "Close out + desplazamiento + sprint",
            url: "https://www.youtube.com/watch?v=0zzqgAFb5Tg",
          },
          {
            nombre: "Desplazamiento + sprint + recupero",
            url: "https://www.youtube.com/watch?v=Fs9BDjc8-Zo",
          },
          {
            nombre: "1x1 ayuda + recupero",
            url: "https://www.youtube.com/watch?v=YCeyF7kJj6w",
          },
          { nombre: "3x3 ayuda + recupero (media cancha)", url: "" },
          { nombre: "3x3 close out + rebote", url: "" },
          {
            nombre: "4x4 'change!",
            url: "https://www.youtube.com/watch?v=QKX7TrtsyxM",
          },
          {
            nombre: "Close out",
            url: "https://www.youtube.com/watch?v=Q1MtSBnWBpU",
          },
          {
            nombre: "Repiqueteo + close out",
            url: "https://www.youtube.com/watch?v=S2UWvLEVLo0",
          },
          {
            nombre: "Close out + línea de pase + 1x1",
            url: "https://www.youtube.com/watch?v=yHt935lRyoQ",
          },
          {
            nombre: "2x2 a 45 con coach driblando",
            url: "https://www.youtube.com/watch?v=M8zmrlSTo78",
          },
          {
            nombre: "4x4 saltar a la pelota - posicional",
            url: "https://www.youtube.com/watch?v=J7_vIDIoDOs",
          },
          {
            nombre: "4x4 ataque pasa a defensa",
            url: "https://www.youtube.com/watch?v=4_WG_heI1Xg",
          },
          {
            nombre: "Ayuda + recupero + close out",
            url: "https://www.youtube.com/watch?v=jSRdBtZwydM",
          },
          {
            nombre: "línea de pase + perder + recupero",
            url: "https://www.youtube.com/watch?v=AJLwJMnvffg",
          },
          {
            nombre: "3 calles, ayuda + linea de pase",
            url: "https://www.youtube.com/watch?v=mJFHWYTL9Ng",
          },
        ],
      },
      Dribbling: {
        Estático: [
          {
            nombre: "1 pelota (nivel 1)",
            url: "https://www.youtube.com/watch?v=SJGlJRLVEso",
          },
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=6IWX9UIox9Y",
          },
          {
            nombre: "1 pelota (nivel 2)",
            url: "https://www.youtube.com/watch?v=U-P3R9-XU2A",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=XfUdDqG6kGc",
          },
          {
            nombre: "1 y 2 pelotas",
            url: "https://www.youtube.com/watch?v=I4sjI6wdUGM",
          },
          {
            nombre: "Pelota + cono + cambio de mano",
            url: "https://www.youtube.com/watch?v=CwP-T4Vr6YA",
          },
          {
            nombre: "Coordinar combinaciones en pareja",
            url: "https://www.youtube.com/watch?v=zOtqSQD2SKo",
          },
          {
            nombre: "2 pelotas + coordinacion de pies",
            url: "https://www.youtube.com/watch?v=TocpFRa8Kds",
          },
          {
            nombre: "2 pelotas + pase",
            url: "https://www.youtube.com/watch?v=BrVjan6uS-8",
          },
          {
            nombre: "2 pelotas (nivel 3)",
            url: "https://www.youtube.com/watch?v=QryCDoWHho0",
          },
          { nombre: "Protección", url: "" },
          { nombre: "Protección con oposición (juego)", url: "" },
          { nombre: "Estático con dificultad", url: "" },
        ],
        Dinámico: [
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          { nombre: "Cambio de dirección a la carrera", url: "" },
          {
            nombre: "Detención en 2 tiempos + back space",
            url: "https://www.youtube.com/watch?v=KOu6NIFiRtw",
          },
          {
            nombre: "Diferentes superficies y alturas",
            url: "https://www.youtube.com/watch?v=Z2BTrE5wk-k",
          },
          {
            nombre: "Fútbol con dribbling",
            url: "https://www.youtube.com/watch?v=kRPwIwl6Tws",
          },
          {
            nombre: "Rutina de manejo dinámico",
            url: "https://www.youtube.com/watch?v=iAzQCsgaruM",
          },
          {
            nombre: "Hesitation + cross + definición",
            url: "https://www.youtube.com/watch?v=NpGfLK6UYuk",
          },
          {
            nombre: "cross + definición",
            url: "https://www.youtube.com/watch?v=TjxR7d7yIJ8",
          },
          {
            nombre: "Cambios de dirección con 2 pelotas",
            url: "https://www.youtube.com/watch?v=OqUFFPSMlPY",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "Cambios de dirección con conos en hilera",
            url: "https://www.youtube.com/watch?v=inQVmZUGAbc",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "2 pelotas en espejo",
            url: "https://www.youtube.com/watch?v=DeVO-7sasXw",
          },
          {
            nombre: "Dribbling + voley con globo",
            url: "https://www.youtube.com/watch?v=OylbEmGQtvE",
          },
          {
            nombre: "Atajar pelota de tenis con dribbling",
            url: "https://www.youtube.com/watch?v=4ep6S2axcfs",
          },
          {
            nombre: "Cross con la otra mano ocupada",
            url: "https://www.youtube.com/watch?v=nBtMx2Rc78Y",
          },
          {
            nombre: "2 pelotas + pase con repiqueteo",
            url: "https://www.youtube.com/watch?v=Lwp1W1Rn8dA",
          },
          { nombre: "A la carrera", url: "" },
          { nombre: "A la carrera + detención", url: "" },
          { nombre: "A la carrera + detención + pase", url: "" },
          { nombre: "Estático y a la carrera", url: "" },
          { nombre: "A la carrera con oposición", url: "" },
          { nombre: "Slalom", url: "" },
          { nombre: "Slalom + crossover", url: "" },
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
          {
            nombre: "1 pelota",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "2 pelotas",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Adentro y afuera",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Atras y adelante",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
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
          {
            nombre: "Detención en dos tiempos sin lanzar",
            url: "https://www.youtube.com/watch?v=1U3zW2D9Yhk",
          },
          {
            nombre: "Lanzamiento en pareja",
            url: "https://www.youtube.com/watch?v=w75EJw8vWP0",
          },
          {
            nombre: "Terminación de tiro acostado",
            url: "https://www.youtube.com/watch?v=sAfI10jLPpo",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "Terminación de tiro sentado",
            url: "https://www.youtube.com/watch?v=cxnov6u00Es",
          },
          {
            nombre: "Equilibrio + tiro",
            url: "https://www.youtube.com/watch?v=gd_WP8LUmrE",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "5 consecutivos retrocediendo",
            url: "https://www.youtube.com/watch?v=SqCfDDmatVA",
          },
          {
            nombre: "5 posiciones durante 2 minutos",
            url: "https://www.youtube.com/watch?v=OIhn7H4pYi4",
          },
          {
            nombre: "5 consecutivos retrocediendo",
            url: "https://www.youtube.com/watch?v=SqCfDDmatVA",
          },
          { nombre: "A media distancia", url: "" },
          { nombre: "A media o corta distancia", url: "" },
          { nombre: "A media distancia + fintas", url: "" },
          { nombre: "Varios tipos de lanzamientos", url: "" },
          { nombre: "Varios tipos de lanzamientos (juego)", url: "" },
          { nombre: "Varios tipos de lanzamientos con oposición", url: "" },
          { nombre: "Rueda técnica a media distancia (juego)", url: "" },
          { nombre: "Tiro corto con oposición", url: "" },
          { nombre: "Media distancia con dificultad", url: "" },
        ],
        En_movimiento: [
          {
            nombre: "Rueda de tiros varios",
            url: "https://www.youtube.com/watch?v=djNs9Ndv050",
          },
          {
            nombre: "Lanzamientos tras comportamientos",
            url: "https://www.youtube.com/watch?v=XmGUkvUo_go",
          },
          {
            nombre: "Lanzamientos en movimientos (serie de 3 diferentes)",
            url: "https://www.youtube.com/watch?v=_KqKvcCW1GU",
          },
          {
            nombre: "Detención en 2 tiempos + lanzamiento",
            url: "https://www.youtube.com/watch?v=BZiNg7_Kmb8",
          },
          {
            nombre: "Detención en 2 tiempos tras cortina indirecta",
            url: "https://www.youtube.com/watch?v=UaaGDuFUyDY",
          },
          {
            nombre: "Detención en 2 tiempos con persecución",
            url: "https://www.youtube.com/watch?v=Pg2j7CSGih8",
          },
          {
            nombre: "Recepción en movimiento",
            url: "https://www.youtube.com/watch?v=6MAkjLqc3Tg",
          },
          {
            nombre: "Atacar tras pase extra",
            url: "https://www.youtube.com/watch?v=ue9ZFNJE248",
          },
          {
            nombre: "Desplazamiento + tiro",
            url: "https://www.youtube.com/watch?v=OHulg3w3zR8",
          },
          {
            nombre: "Recibir y tirar en movimiento de 3pts",
            url: "https://www.youtube.com/watch?v=66ImO96SYWE",
          },
          {
            nombre: "A la carrera con sprint",
            url: "https://www.youtube.com/watch?v=l_QGe5qClMA",
          },
          {
            nombre: "Tiro tras descarga con comportamiento",
            url: "https://www.youtube.com/watch?v=3B7wTpaGh5k",
          },
          {
            nombre: "Tiros varios tras cortina indirecta",
            url: "https://www.youtube.com/watch?v=WPNhWJhrwF0",
          },
          {
            nombre: "Detenciones después del dribbling + tiro",
            url: "https://www.youtube.com/watch?v=DnaK8hvgQEI",
          },
          {
            nombre: "Recepciones + fintas + giros",
            url: "https://www.youtube.com/watch?v=7H79-eg-3hE",
          },
        ],
      },
      "Movimiento de pies": {
        Ataque: [
          {
            nombre: "Pie exterior + triple amenaza + jab + definición",
            url: "https://www.youtube.com/watch?v=lz52whGGuXk",
          },
          {
            nombre: "Triple amenaza + fintas + definición",
            url: "https://www.youtube.com/watch?v=IpPCXExLr9g",
          },
          {
            nombre: "Pivoteo + definición",
            url: "https://www.youtube.com/watch?v=Q2GpByDRDps",
          },
          {
            nombre: "Detención + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=gE28dH2kH14",
          },
          {
            nombre: "Detención + definición",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Pase + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Detención + giro + definición",
            url: "https://www.youtube.com/watch?v=aro7S4Y0bT4",
          },
          { nombre: "Coordinación + definición", url: "" },
          {
            nombre: "Desmarque + atacar el aro",
            url: "https://www.youtube.com/watch?v=LUQDWbiZZwQ",
          },
          { nombre: "Coordinación + definición", url: "" },
          { nombre: "Desplazamiento con obstáculos", url: "" },
          { nombre: "Cambios de dirección con y sin pelota", url: "" },
          { nombre: "Detención 1 y 2 tiempos sin elemento", url: "" },
          {
            nombre: "Detención 1 y 2 tiempos después de dribbling + pivoteo",
            url: "",
          },
          { nombre: "Detención 1 y 2 tiempos al recibir la pelota", url: "" },
          { nombre: "Pivoteo", url: "" },
          { nombre: "Detención 1 tiempo + fintas", url: "" },
          { nombre: "Finta penetración + giro + lanzamiento", url: "" },
        ],
        Defensa: [
          { nombre: "Desplazamiento defensivo", url: "" },
          { nombre: "Desplazamiento defensivo en línea de pase", url: "" },
          { nombre: "Desplazamiento rebote defensivo", url: "" },
        ],
      },
      Definiciones: {
        "Con defensa": [
          {
            nombre: "Con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
          {
            nombre: "Con pase en mano",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Tras descarga",
            url: "https://www.youtube.com/watch?v=6RFYV_loPbM",
          },
          {
            nombre: "Tras descarga en el poste",
            url: "https://www.youtube.com/watch?v=HUDLaMOErqk",
          },
        ],
        "Sin defensa": [
          {
            nombre: "En ataque rápido",
            url: "https://www.youtube.com/watch?v=vBXewQ0SK9o",
          },
          { nombre: "Bandeja", url: "" },
          { nombre: "Bandeja a velocidad (juego)", url: "" },
          { nombre: "Bandeja paso a paso", url: "" },
        ],
      },
      Pase: {
        "1 pelota": [
          {
            nombre: "1 pelota después del dribbling",
            url: "https://www.youtube.com/watch?v=cnuMxqqJDnY",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "Rueda de pases",
            url: "https://www.youtube.com/watch?v=Rb-0MiCbe4g",
          },
          {
            nombre: "Rondo con un líbero",
            url: "https://www.youtube.com/watch?v=41VQciTBaMc",
          },
          {
            nombre: "Rondo + atrapes",
            url: "https://www.youtube.com/watch?v=HnNYftqiepg",
          },
          {
            nombre: "Pases a la carrera + definición",
            url: "https://www.youtube.com/watch?v=lcAZp-brnqM",
          },
          {
            nombre: "3x1 con 2 pelotas",
            url: "https://www.youtube.com/watch?v=1eIap3UzOMA",
          },
          {
            nombre: "Pase en transición + definición",
            url: "https://www.youtube.com/watch?v=uf9vE0LQnqQ",
          },
          {
            nombre: "Rondo 4x3",
            url: "https://www.youtube.com/watch?v=7eW8lztSKJc",
          },
          {
            nombre: "Rueda de lectura",
            url: "https://www.youtube.com/watch?v=kEYZ0Q4hybU",
          },
          { nombre: "Pasar y correr", url: "" },
          { nombre: "Pase en desplazamiento", url: "" },
          { nombre: "Pases en posición fija", url: "" },
          { nombre: "Pase fijo con receptor en movimiento", url: "" },
          { nombre: "Pase en desplazamiento (3 calles)", url: "" },
          { nombre: "Pase en desplazamiento (2 calles)", url: "" },
          {
            nombre: "Pase en desplazamiento con oposición (2 calles)",
            url: "",
          },
          { nombre: "Pase en desplazamiento (trenza)", url: "" },
          { nombre: "Pase con receptor + correr (juego)", url: "" },
          { nombre: "Pases estáticos", url: "" },
          { nombre: "Recepción", url: "" },
        ],
        "2 pelotas": [
          {
            nombre: "2 pelotas + dribbling estático",
            url: "https://www.youtube.com/watch?v=A8SU1lifkRk",
          },
          {
            nombre: "2 pelotas + dribbling dinámico",
            url: "https://www.youtube.com/watch?v=x9vDkR5O-6M",
          },
          {
            nombre: "Rutina de pases en pareja",
            url: "https://www.youtube.com/watch?v=yAaHRoWGxHQ",
          },
        ],
      },
      "1 vs 1": {
        "Media cancha": [
          {
            nombre: "Desde triple amenaza",
            url: "https://www.youtube.com/watch?v=wPWkYQlvFPE",
          },
          {
            nombre: "1/4 de cancha a la carrera",
            url: "https://www.youtube.com/watch?v=9rVGEt8A73Q",
          },
          {
            nombre: "Triple amenaza + lectura defensa",
            url: "https://www.youtube.com/watch?v=shcGJ3xeimg",
          },
          {
            nombre: "Tocar cono y salir a 45",
            url: "https://www.youtube.com/watch?v=lz01eiN0yIk",
          },
          {
            nombre: "A la carrera",
            url: "https://www.youtube.com/watch?v=aLyoaTn_UWk",
          },
          {
            nombre: "Con campo acotado",
            url: "https://www.youtube.com/watch?v=49k-M5bnBPU",
          },
          {
            nombre: "Con oposición física",
            url: "https://www.youtube.com/watch?v=gUJlxzn-_MY",
          },
          {
            nombre: "Desplazamiento + reacción",
            url: "https://www.youtube.com/watch?v=W-Q0qXliLbE",
          },
          {
            nombre: "Lectura y ataque desde el dribbling",
            url: "https://www.youtube.com/watch?v=qCuoYqsAMdw",
          },
          {
            nombre: "Mano en mano + definición",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Definición con ayuda defensiva",
            url: "https://www.youtube.com/watch?v=9DjWr8SEOkc",
          },
          {
            nombre: "1x1 a 45 con ayuda",
            url: "https://www.youtube.com/watch?v=TbDvnwinwR8",
          },
          {
            nombre: "1x1 ayuda + recupración + close out",
            url: "https://www.youtube.com/watch?v=8qz8z1s-8o0",
          },
        ],
        "Toda la cancha": [
          {
            nombre: "Toda la cancha",
            url: "https://www.youtube.com/watch?v=XXbPN2Lu9Zc",
          },
          {
            nombre: "Toda la cancha a la carrera",
            url: "https://www.youtube.com/watch?v=ARzODZqMDfI",
          },
          {
            nombre: "Con un pasador",
            url: "https://www.youtube.com/watch?v=lJGMnd99KVs",
          },
          {
            nombre: "Definición con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
        ],
      },
    },
  },
  {
    cat: "Profesionales",
    bajada: "Donde la pasión se convierte en carrera. Entrenamientos de alto rendimiento para jugadores que buscan competir al máximo nivel, enfrentando nuevos retos y logrando la excelencia.",
    objetivos: {
      Defensa: {
        Individual: [
          {
            nombre: "Desplazamiento defensivo en espejo",
            url: "https://www.youtube.com/watch?v=IBB9dsczLHc",
          },
          { nombre: "Desplazamiento defensivo toda la cancha", url: "" },
          { nombre: "Desplazamiento defensivo entre bancos", url: "" },
          { nombre: "Desplazamiento defensivo (1x1)", url: "" },
          {
            nombre: "Desplazamiento defensivo + recupero (competencia)",
            url: "",
          },
          { nombre: "Desplazamiento defensivo + ayuda", url: "" },
          {
            nombre: "Desplazamiento defensivo + salto lateral",
            url: "https://www.youtube.com/watch?v=Te89QbBwdBI",
          },
          {
            nombre: "Desplazamiento defensivo (1x1) con ayuda del atacante",
            url: "https://www.youtube.com/watch?v=1z6Tze7jDcM",
          },
          {
            nombre: "Línea de pase a 45 (1x1)",
            url: "https://www.youtube.com/watch?v=eev9CfjnKeI",
          },
          { nombre: "1vs1 con ayuda (juego)", url: "" },
          { nombre: "Rebote - Box Out", url: "" },
          {
            nombre: "Reacción a la pelota de tenis",
            url: "https://www.youtube.com/watch?v=jApgipUdo40",
          },
          {
            nombre: "Desplazamiento + repiqueteo + ayuda",
            url: "https://www.youtube.com/watch?v=DMNXkdkqKnI",
          },
          {
            nombre: "Close out + desplazamiento + sprint",
            url: "https://www.youtube.com/watch?v=0zzqgAFb5Tg",
          },
          {
            nombre: "Desplazamiento + sprint + recupero",
            url: "https://www.youtube.com/watch?v=Fs9BDjc8-Zo",
          },
          {
            nombre: "1x1 ayuda + recupero",
            url: "https://www.youtube.com/watch?v=YCeyF7kJj6w",
          },
          { nombre: "3x3 ayuda + recupero (media cancha)", url: "" },
          { nombre: "3x3 close out + rebote", url: "" },
          {
            nombre: "4x4 'change!",
            url: "https://www.youtube.com/watch?v=QKX7TrtsyxM",
          },
          {
            nombre: "Close out",
            url: "https://www.youtube.com/watch?v=Q1MtSBnWBpU",
          },
          {
            nombre: "Repiqueteo + close out",
            url: "https://www.youtube.com/watch?v=S2UWvLEVLo0",
          },
          {
            nombre: "Close out + línea de pase + 1x1",
            url: "https://www.youtube.com/watch?v=yHt935lRyoQ",
          },
          {
            nombre: "2x2 a 45 con coach driblando",
            url: "https://www.youtube.com/watch?v=M8zmrlSTo78",
          },
          {
            nombre: "4x4 saltar a la pelota - posicional",
            url: "https://www.youtube.com/watch?v=J7_vIDIoDOs",
          },
          {
            nombre: "4x4 ataque pasa a defensa",
            url: "https://www.youtube.com/watch?v=4_WG_heI1Xg",
          },
          {
            nombre: "Ayuda + recupero + close out",
            url: "https://www.youtube.com/watch?v=jSRdBtZwydM",
          },
          {
            nombre: "línea de pase + perder + recupero",
            url: "https://www.youtube.com/watch?v=AJLwJMnvffg",
          },
          {
            nombre: "3 calles, ayuda + linea de pase",
            url: "https://www.youtube.com/watch?v=mJFHWYTL9Ng",
          },
        ],
      },
      Dribbling: {
        Estático: [
          {
            nombre: "1 pelota (nivel 1)",
            url: "https://www.youtube.com/watch?v=SJGlJRLVEso",
          },
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=6IWX9UIox9Y",
          },
          {
            nombre: "1 pelota (nivel 2)",
            url: "https://www.youtube.com/watch?v=U-P3R9-XU2A",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=XfUdDqG6kGc",
          },
          {
            nombre: "1 y 2 pelotas",
            url: "https://www.youtube.com/watch?v=I4sjI6wdUGM",
          },
          {
            nombre: "Pelota + cono + cambio de mano",
            url: "https://www.youtube.com/watch?v=CwP-T4Vr6YA",
          },
          {
            nombre: "Coordinar combinaciones en pareja",
            url: "https://www.youtube.com/watch?v=zOtqSQD2SKo",
          },
          {
            nombre: "2 pelotas + coordinacion de pies",
            url: "https://www.youtube.com/watch?v=TocpFRa8Kds",
          },
          {
            nombre: "2 pelotas + pase",
            url: "https://www.youtube.com/watch?v=BrVjan6uS-8",
          },
          {
            nombre: "2 pelotas (nivel 3)",
            url: "https://www.youtube.com/watch?v=QryCDoWHho0",
          },
          { nombre: "Protección", url: "" },
          { nombre: "Protección con oposición (juego)", url: "" },
          { nombre: "Estático con dificultad", url: "" },
        ],
        Dinámico: [
          {
            nombre: "2 pelotas (nivel 1)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          {
            nombre: "2 pelotas (nivel 2)",
            url: "https://www.youtube.com/watch?v=xrhS2YE5YZk",
          },
          { nombre: "Cambio de dirección a la carrera", url: "" },
          {
            nombre: "Detención en 2 tiempos + back space",
            url: "https://www.youtube.com/watch?v=KOu6NIFiRtw",
          },
          {
            nombre: "Diferentes superficies y alturas",
            url: "https://www.youtube.com/watch?v=Z2BTrE5wk-k",
          },
          {
            nombre: "Fútbol con dribbling",
            url: "https://www.youtube.com/watch?v=kRPwIwl6Tws",
          },
          {
            nombre: "Rutina de manejo dinámico",
            url: "https://www.youtube.com/watch?v=iAzQCsgaruM",
          },
          {
            nombre: "Hesitation + cross + definición",
            url: "https://www.youtube.com/watch?v=NpGfLK6UYuk",
          },
          {
            nombre: "cross + definición",
            url: "https://www.youtube.com/watch?v=TjxR7d7yIJ8",
          },
          {
            nombre: "Cambios de dirección con 2 pelotas",
            url: "https://www.youtube.com/watch?v=OqUFFPSMlPY",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "Cambios de dirección con conos en hilera",
            url: "https://www.youtube.com/watch?v=inQVmZUGAbc",
          },
          {
            nombre: "Combinaciones varias a la carrera",
            url: "https://www.youtube.com/watch?v=3v1V51v696o",
          },
          {
            nombre: "2 pelotas en espejo",
            url: "https://www.youtube.com/watch?v=DeVO-7sasXw",
          },
          {
            nombre: "Dribbling + voley con globo",
            url: "https://www.youtube.com/watch?v=OylbEmGQtvE",
          },
          {
            nombre: "Atajar pelota de tenis con dribbling",
            url: "https://www.youtube.com/watch?v=4ep6S2axcfs",
          },
          {
            nombre: "Cross con la otra mano ocupada",
            url: "https://www.youtube.com/watch?v=nBtMx2Rc78Y",
          },
          {
            nombre: "2 pelotas + pase con repiqueteo",
            url: "https://www.youtube.com/watch?v=Lwp1W1Rn8dA",
          },
          { nombre: "A la carrera", url: "" },
          { nombre: "A la carrera + detención", url: "" },
          { nombre: "A la carrera + detención + pase", url: "" },
          { nombre: "Estático y a la carrera", url: "" },
          { nombre: "A la carrera con oposición", url: "" },
          { nombre: "Slalom", url: "" },
          { nombre: "Slalom + crossover", url: "" },
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
          {
            nombre: "1 pelota",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "2 pelotas",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Adentro y afuera",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
          {
            nombre: "Atras y adelante",
            url: "https://www.youtube.com/watch?v=UTVUuXsvWT8",
          },
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
          {
            nombre: "Detención en dos tiempos sin lanzar",
            url: "https://www.youtube.com/watch?v=1U3zW2D9Yhk",
          },
          {
            nombre: "Lanzamiento en pareja",
            url: "https://www.youtube.com/watch?v=w75EJw8vWP0",
          },
          {
            nombre: "Terminación de tiro acostado",
            url: "https://www.youtube.com/watch?v=sAfI10jLPpo",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "Terminación de tiro sentado",
            url: "https://www.youtube.com/watch?v=cxnov6u00Es",
          },
          {
            nombre: "Equilibrio + tiro",
            url: "https://www.youtube.com/watch?v=gd_WP8LUmrE",
          },
          {
            nombre: "Terminación de tiro a pie firme",
            url: "https://www.youtube.com/watch?v=rKKf13C2unw",
          },
          {
            nombre: "5 consecutivos retrocediendo",
            url: "https://www.youtube.com/watch?v=SqCfDDmatVA",
          },
          {
            nombre: "5 posiciones durante 2 minutos",
            url: "https://www.youtube.com/watch?v=OIhn7H4pYi4",
          },
          {
            nombre: "5 consecutivos retrocediendo",
            url: "https://www.youtube.com/watch?v=SqCfDDmatVA",
          },
          { nombre: "A media distancia", url: "" },
          { nombre: "A media o corta distancia", url: "" },
          { nombre: "A media distancia + fintas", url: "" },
          { nombre: "Varios tipos de lanzamientos", url: "" },
          { nombre: "Varios tipos de lanzamientos (juego)", url: "" },
          { nombre: "Varios tipos de lanzamientos con oposición", url: "" },
          { nombre: "Rueda técnica a media distancia (juego)", url: "" },
          { nombre: "Tiro corto con oposición", url: "" },
          { nombre: "Media distancia con dificultad", url: "" },
        ],
        En_movimiento: [
          {
            nombre: "Rueda de tiros varios",
            url: "https://www.youtube.com/watch?v=djNs9Ndv050",
          },
          {
            nombre: "Lanzamientos tras comportamientos",
            url: "https://www.youtube.com/watch?v=XmGUkvUo_go",
          },
          {
            nombre: "Lanzamientos en movimientos (serie de 3 diferentes)",
            url: "https://www.youtube.com/watch?v=_KqKvcCW1GU",
          },
          {
            nombre: "Detención en 2 tiempos + lanzamiento",
            url: "https://www.youtube.com/watch?v=BZiNg7_Kmb8",
          },
          {
            nombre: "Detención en 2 tiempos tras cortina indirecta",
            url: "https://www.youtube.com/watch?v=UaaGDuFUyDY",
          },
          {
            nombre: "Detención en 2 tiempos con persecución",
            url: "https://www.youtube.com/watch?v=Pg2j7CSGih8",
          },
          {
            nombre: "Recepción en movimiento",
            url: "https://www.youtube.com/watch?v=6MAkjLqc3Tg",
          },
          {
            nombre: "Atacar tras pase extra",
            url: "https://www.youtube.com/watch?v=ue9ZFNJE248",
          },
          {
            nombre: "Desplazamiento + tiro",
            url: "https://www.youtube.com/watch?v=OHulg3w3zR8",
          },
          {
            nombre: "Recibir y tirar en movimiento de 3pts",
            url: "https://www.youtube.com/watch?v=66ImO96SYWE",
          },
          {
            nombre: "A la carrera con sprint",
            url: "https://www.youtube.com/watch?v=l_QGe5qClMA",
          },
          {
            nombre: "Tiro tras descarga con comportamiento",
            url: "https://www.youtube.com/watch?v=3B7wTpaGh5k",
          },
          {
            nombre: "Tiros varios tras cortina indirecta",
            url: "https://www.youtube.com/watch?v=WPNhWJhrwF0",
          },
          {
            nombre: "Detenciones después del dribbling + tiro",
            url: "https://www.youtube.com/watch?v=DnaK8hvgQEI",
          },
          {
            nombre: "Recepciones + fintas + giros",
            url: "https://www.youtube.com/watch?v=7H79-eg-3hE",
          },
        ],
      },
      "Movimiento de pies": {
        Ataque: [
          {
            nombre: "Pie exterior + triple amenaza + jab + definición",
            url: "https://www.youtube.com/watch?v=lz52whGGuXk",
          },
          {
            nombre: "Triple amenaza + fintas + definición",
            url: "https://www.youtube.com/watch?v=IpPCXExLr9g",
          },
          {
            nombre: "Pivoteo + definición",
            url: "https://www.youtube.com/watch?v=Q2GpByDRDps",
          },
          {
            nombre: "Detención + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=gE28dH2kH14",
          },
          {
            nombre: "Detención + definición",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Pase + pivoteo + fintas",
            url: "https://www.youtube.com/watch?v=jqL-6Pup8b0",
          },
          {
            nombre: "Detención + giro + definición",
            url: "https://www.youtube.com/watch?v=aro7S4Y0bT4",
          },
          { nombre: "Coordinación + definición", url: "" },
          {
            nombre: "Desmarque + atacar el aro",
            url: "https://www.youtube.com/watch?v=LUQDWbiZZwQ",
          },
          { nombre: "Coordinación + definición", url: "" },
          { nombre: "Desplazamiento con obstáculos", url: "" },
          { nombre: "Cambios de dirección con y sin pelota", url: "" },
          { nombre: "Detención 1 y 2 tiempos sin elemento", url: "" },
          {
            nombre: "Detención 1 y 2 tiempos después de dribbling + pivoteo",
            url: "",
          },
          { nombre: "Detención 1 y 2 tiempos al recibir la pelota", url: "" },
          { nombre: "Pivoteo", url: "" },
          { nombre: "Detención 1 tiempo + fintas", url: "" },
          { nombre: "Finta penetración + giro + lanzamiento", url: "" },
        ],
        Defensa: [
          { nombre: "Desplazamiento defensivo", url: "" },
          { nombre: "Desplazamiento defensivo en línea de pase", url: "" },
          { nombre: "Desplazamiento rebote defensivo", url: "" },
        ],
      },
      Definiciones: {
        "Con defensa": [
          {
            nombre: "Con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
          {
            nombre: "Con pase en mano",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Tras descarga",
            url: "https://www.youtube.com/watch?v=6RFYV_loPbM",
          },
          {
            nombre: "Tras descarga en el poste",
            url: "https://www.youtube.com/watch?v=HUDLaMOErqk",
          },
        ],
        "Sin defensa": [
          {
            nombre: "En ataque rápido",
            url: "https://www.youtube.com/watch?v=vBXewQ0SK9o",
          },
          { nombre: "Bandeja", url: "" },
          { nombre: "Bandeja a velocidad (juego)", url: "" },
          { nombre: "Bandeja paso a paso", url: "" },
        ],
      },
      Pase: {
        "1 pelota": [
          {
            nombre: "1 pelota después del dribbling",
            url: "https://www.youtube.com/watch?v=cnuMxqqJDnY",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "1 pelota, con dribbling, todos a la vez",
            url: "https://www.youtube.com/watch?v=zt_23bbyUDg",
          },
          {
            nombre: "Rueda de pases",
            url: "https://www.youtube.com/watch?v=Rb-0MiCbe4g",
          },
          {
            nombre: "Rondo con un líbero",
            url: "https://www.youtube.com/watch?v=41VQciTBaMc",
          },
          {
            nombre: "Rondo + atrapes",
            url: "https://www.youtube.com/watch?v=HnNYftqiepg",
          },
          {
            nombre: "Pases a la carrera + definición",
            url: "https://www.youtube.com/watch?v=lcAZp-brnqM",
          },
          {
            nombre: "3x1 con 2 pelotas",
            url: "https://www.youtube.com/watch?v=1eIap3UzOMA",
          },
          {
            nombre: "Pase en transición + definición",
            url: "https://www.youtube.com/watch?v=uf9vE0LQnqQ",
          },
          {
            nombre: "Rondo 4x3",
            url: "https://www.youtube.com/watch?v=7eW8lztSKJc",
          },
          {
            nombre: "Rueda de lectura",
            url: "https://www.youtube.com/watch?v=kEYZ0Q4hybU",
          },
          { nombre: "Pasar y correr", url: "" },
          { nombre: "Pase en desplazamiento", url: "" },
          { nombre: "Pases en posición fija", url: "" },
          { nombre: "Pase fijo con receptor en movimiento", url: "" },
          { nombre: "Pase en desplazamiento (3 calles)", url: "" },
          { nombre: "Pase en desplazamiento (2 calles)", url: "" },
          {
            nombre: "Pase en desplazamiento con oposición (2 calles)",
            url: "",
          },
          { nombre: "Pase en desplazamiento (trenza)", url: "" },
          { nombre: "Pase con receptor + correr (juego)", url: "" },
          { nombre: "Pases estáticos", url: "" },
          { nombre: "Recepción", url: "" },
        ],
        "2 pelotas": [
          {
            nombre: "2 pelotas + dribbling estático",
            url: "https://www.youtube.com/watch?v=A8SU1lifkRk",
          },
          {
            nombre: "2 pelotas + dribbling dinámico",
            url: "https://www.youtube.com/watch?v=x9vDkR5O-6M",
          },
          {
            nombre: "Rutina de pases en pareja",
            url: "https://www.youtube.com/watch?v=yAaHRoWGxHQ",
          },
        ],
      },
      "1 vs 1": {
        "Media cancha": [
          {
            nombre: "Desde triple amenaza",
            url: "https://www.youtube.com/watch?v=wPWkYQlvFPE",
          },
          {
            nombre: "1/4 de cancha a la carrera",
            url: "https://www.youtube.com/watch?v=9rVGEt8A73Q",
          },
          {
            nombre: "Triple amenaza + lectura defensa",
            url: "https://www.youtube.com/watch?v=shcGJ3xeimg",
          },
          {
            nombre: "Tocar cono y salir a 45",
            url: "https://www.youtube.com/watch?v=lz01eiN0yIk",
          },
          {
            nombre: "A la carrera",
            url: "https://www.youtube.com/watch?v=aLyoaTn_UWk",
          },
          {
            nombre: "Con campo acotado",
            url: "https://www.youtube.com/watch?v=49k-M5bnBPU",
          },
          {
            nombre: "Con oposición física",
            url: "https://www.youtube.com/watch?v=gUJlxzn-_MY",
          },
          {
            nombre: "Desplazamiento + reacción",
            url: "https://www.youtube.com/watch?v=W-Q0qXliLbE",
          },
          {
            nombre: "Lectura y ataque desde el dribbling",
            url: "https://www.youtube.com/watch?v=qCuoYqsAMdw",
          },
          {
            nombre: "Mano en mano + definición",
            url: "https://www.youtube.com/watch?v=7wl97N2eBwI",
          },
          {
            nombre: "Definición con ayuda defensiva",
            url: "https://www.youtube.com/watch?v=9DjWr8SEOkc",
          },
          {
            nombre: "1x1 a 45 con ayuda",
            url: "https://www.youtube.com/watch?v=TbDvnwinwR8",
          },
          {
            nombre: "1x1 ayuda + recupración + close out",
            url: "https://www.youtube.com/watch?v=8qz8z1s-8o0",
          },
        ],
        "Toda la cancha": [
          {
            nombre: "Toda la cancha",
            url: "https://www.youtube.com/watch?v=XXbPN2Lu9Zc",
          },
          {
            nombre: "Toda la cancha a la carrera",
            url: "https://www.youtube.com/watch?v=ARzODZqMDfI",
          },
          {
            nombre: "Con un pasador",
            url: "https://www.youtube.com/watch?v=lJGMnd99KVs",
          },
          {
            nombre: "Definición con persecución",
            url: "https://www.youtube.com/watch?v=kX3D28b3WuM",
          },
        ],
      },
    },
  },
];

export const videos_modelo = [
  {
    objetivos: {
      Dribbling: [
        {
          nombre: "Rutina Lillard",
          url: "https://www.youtube.com/watch?v=dCgZDiZiOuA",
        },
        {
          nombre: "Crossover detenido",
          url: "https://www.youtube.com/watch?v=ENh5EsCisX8",
        },
        {
          nombre: "Crossover en movimiento",
          url: "https://www.youtube.com/watch?v=AeVNioX2eIM",
        },
        {
          nombre: "Doble cross",
          url: "https://www.youtube.com/watch?v=HuqO02c5E_Q",
        },
        {
          nombre: "Adentro y afuera",
          url: "https://www.youtube.com/watch?v=BISRlGAx2Ho",
        },
        {
          nombre: "Adentro y afuera + cross",
          url: "https://www.youtube.com/watch?v=SsaFDvWQWIU",
        },
        {
          nombre: "Entrepiernas",
          url: "https://www.youtube.com/watch?v=Kshl-zoIRW8",
        },
        {
          nombre: "Entrepiernas + cross",
          url: "https://www.youtube.com/watch?v=0NR4-CnT8qA",
        },
        {
          nombre: "Entrepiernas + faja",
          url: "https://www.youtube.com/watch?v=35sf4oDjA8s",
        },
        {
          nombre: "Faja + giro",
          url: "https://www.youtube.com/watch?v=7jR9mrcQefk",
        },
        { nombre: "Giro", url: "https://www.youtube.com/watch?v=fiVm_m1tWPs" },
        {
          nombre: "Hesitation",
          url: "https://www.youtube.com/watch?v=_L32Mz0X5-Q",
        },
      ],
      Lanzamiento: [
        {
          nombre: "A pie firme",
          url: "https://www.youtube.com/watch?v=U27TmzoXlCs",
        },
        {
          nombre: "Terminación de tiro",
          url: "https://www.youtube.com/watch?v=s4bSJATNEIs",
        },
        {
          nombre: "Detención en 2 tiempos",
          url: "https://www.youtube.com/watch?v=P2Gi90G8rt4",
        },
        {
          nombre: "Detención en 1 tiempo",
          url: "https://www.youtube.com/watch?v=prHJdbjRXIw",
        },
        {
          nombre: "Step back",
          url: "https://www.youtube.com/watch?v=bgZQcLpKMcM",
        },
        {
          nombre: "Step back con crossover",
          url: "https://www.youtube.com/watch?v=8seDm7SqT9I",
        },
        {
          nombre: "Recibir y tirar (catch & shoot)",
          url: "https://www.youtube.com/watch?v=8seDm7SqT9I",
        },
        {
          nombre: "Step back con crossover",
          url: "https://www.youtube.com/watch?v=8seDm7SqT9I",
        },
      ],
      Definiciones: [
        {
          nombre: "Giro + tiro en potencia",
          url: "https://www.youtube.com/watch?v=gCuIdCK0MRE",
        },
        {
          nombre: "Bandeja",
          url: "https://www.youtube.com/watch?v=gCuIdCK0MRE",
        },
        {
          nombre: "Bandeja a un paso",
          url: "https://www.youtube.com/watch?v=ERMgg4J8LQs",
        },
        {
          nombre: "Flotadora",
          url: "https://www.youtube.com/watch?v=2OTP0ckodA8",
        },
        {
          nombre: "Bandeja pasada por abajo del aro",
          url: "https://www.youtube.com/watch?v=2St9-ma2CbM",
        },
        { nombre: "Bandeja a paso cambiado", url: "" },
        {
          nombre: "Eurostep",
          url: "https://www.youtube.com/watch?v=dOrnJJnhzO4",
        },
      ],
      Pase: [
        {
          nombre: "Con una mano",
          url: "https://www.youtube.com/watch?v=ToKZEHrpUvc",
        },
        {
          nombre: "Con una mano después de dribbling",
          url: "https://www.youtube.com/watch?v=PbAiF0zbrTg",
        },
        {
          nombre: "De revés",
          url: "https://www.youtube.com/watch?v=CGouIAHFBjg",
        },
      ],
      Defensa: [
        {
          nombre: "Desplazamiento defensivo",
          url: "https://www.youtube.com/watch?v=oI4MFU0oqJE",
        },
      ],
      "Movimiento de pies": [
        {
          nombre: "Pivoteo",
          url: "https://www.youtube.com/watch?v=4e4_4wdh-J4",
        },
        {
          nombre: "Triple amenaza",
          url: "https://www.youtube.com/watch?v=cBw34fdycD8",
        },
        {
          nombre: "Finta de penetración",
          url: "https://www.youtube.com/watch?v=BO2AonrV6MA",
        },
        {
          nombre: "Finta de tiro",
          url: "https://www.youtube.com/watch?v=7UvFgnJr5eI",
        },
      ],
    },
  },
];
