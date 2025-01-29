const vm = new Vue({
    el: "#app",
    data: {
        menumob: false,
        ingredientes: false,
        ingredienteAtivo: 'Açúcar Cristal',
        medidas: false,
        medidaAtiva: 'Colher(es) de Sopa',
        medidaF: true,
        quantidadeSelect: false,
        quantidadeAtiva: 1,
        unidadeMed: false,
        xicaraCha: 0,
        colherSopa: 0,
        colherCha: 0,
        colherSobremesa: 0,
        colherCafe: 0,
        copoAmericano: 0,
        Ugramas: 0,
        Uquilos: 0,
        Umililitros: 0,
        Ulitros: 0,
        Unidades: 0,
        multiplicador: 1,
        inputvalue: 1,
        // ingredientes & medidas
        valoresConversao: {
            "Líquidos": {
                "Xícara(s) de Chá":
                    { xicaraCha: 0, colherSopa: 16, colherCha: 48, colherSobremesa: 24, colherCafe: 96, copoAmericano: 1.25, Ugramas: 240, Uquilos: 0.24, Umililitros: 240, Ulitros: 0.24 },
                "Copo(s) Americano(s)":
                    { xicaraCha: 0.8, colherSopa: 12.66, colherCha: 38, colherSobremesa: 19, colherCafe: 76, copoAmericano: 0, Ugramas: 190, Uquilos: 0.19, Umililitros: 190, Ulitros: 0.19 },
                "Colher(es) de Sopa":
                    { xicaraCha: 0.064, colherSopa: 0, colherCha: 1.5, colherSobremesa: 3, colherCafe: 6, copoAmericano: 0.08, Ugramas: 15, Uquilos: 0, Umililitros: 15, Ulitros: 0 },
                "Colher(es) de Sobremesa":
                    { xicaraCha: 0.042, colherSopa: 0.66, colherCha: 2, colherSobremesa: 0, colherCafe: 4, copoAmericano: 0.05, Ugramas: 10, Uquilos: 0, Umililitros: 10, Ulitros: 0 },
                "Colher(es) de Chá":
                    { xicaraCha: 0, colherSopa: 0, colherCha: 2, colherSobremesa: 0.5, colherCafe: 2, copoAmericano: 0, Ugramas: 5, Uquilos: 0, Umililitros: 5, Ulitros: 0 },
                "Colher(es) de Café":
                    { xicaraCha: 0, colherSopa: 0.165, colherCha: 2, colherSobremesa: 0.25, colherCafe: 0, copoAmericano: 0, Ugramas: 2.5, Uquilos: 0, Umililitros: 2.5, Ulitros: 0 },
                "Mililitros (ML)":
                    { xicaraCha: 0.00417, colherSopa: 0.0667, colherCha: 0.2 , colherSobremesa: 0.1, colherCafe: 0.4 , copoAmericano: 0.0053, Ugramas: 1, Uquilos: 0.001, Umililitros: 1, Ulitros: 0.001 },
                "Litro(s)": 
                    { xicaraCha: 4.16667, colherSopa: 66.6667, colherCha: 200, colherSobremesa: 100, colherCafe: 400, copoAmericano: 5.263, Ugramas: 1000, Uquilos: 1, Umililitros: 1000, Ulitros: 0 }
            },
            "Açúcar Cristal": {
                "Xícara(s) de Chá": { xicaraCha: 0, colherSopa: 10, colherCha: 29.16, colherSobremesa: 14.58, colherCafe: 58.32, copoAmericano: 1.25, Ugramas: 175, Uquilos: 0.175, Umililitros: 0, Ulitros: 0 },
                "Copo(s) Americano(s)": { xicaraCha: 0.8, colherSopa: 8, colherCha: 24.01, colherSobremesa: 12, colherCafe: 48.03, copoAmericano: 0, Ugramas: 140, Uquilos: 0.14, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sopa": { xicaraCha: 0.1, colherSopa: 0, colherCha: 3, colherSobremesa: 1.5, colherCafe: 6, copoAmericano: 0.12, Ugramas: 17.5, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sobremesa": { xicaraCha: 0.066, colherSopa: 0.66, colherCha: 2, colherSobremesa: 0, colherCafe: 4, copoAmericano: 0.069, Ugramas: 11.66, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Chá": { xicaraCha: 0, colherSopa: 0.33, colherCha: 0, colherSobremesa: 0.5, colherCafe: 2, copoAmericano: 0, Ugramas: 5.83, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Café": { xicaraCha: 0, colherSopa: 0.165, colherCha: 0.5, colherSobremesa: 0.25, colherCafe: 0, copoAmericano: 0, Ugramas: 2.92, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Gramas": { xicaraCha: 0.0057, colherSopa: 0.0571, colherCha: 0.1715, colherSobremesa: 0.0858, colherCafe: 0.3431, copoAmericano: 0.0071, Ugramas: 0, Uquilos: 0.001, Umililitros: 0, Ulitros: 0 },
                "Quilo(s)": { xicaraCha: 5.71, colherSopa: 57.14, colherCha: 171.53, colherSobremesa: 85.76, colherCafe: 343.05, copoAmericano: 7.14, Ugramas: 1000, Uquilos: 0, Umililitros: 0, Ulitros: 0 }
            },
            "Arroz Cru": {
                "Xícara(s) de Chá": { xicaraCha: 0, colherSopa: 16.15, colherCha: 48.46, colherSobremesa: 24.23, colherCafe: 96.92, copoAmericano: 1.25, Ugramas: 210, Uquilos: 0.21, Umililitros: 0, Ulitros: 0 },
                "Copo(s) Americano(s)": { xicaraCha: 0.8, colherSopa: 12.92, colherCha: 38.46, colherSobremesa: 19.23, colherCafe: 76.92, copoAmericano: 0, Ugramas: 168, Uquilos: 0.168, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sopa": { xicaraCha: 0.062, colherSopa: 0, colherCha: 3, colherSobremesa: 1.5, colherCafe: 6, copoAmericano: 0.077, Ugramas: 13, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sobremesa": { xicaraCha: 0.041, colherSopa: 0.666, colherCha: 2, colherSobremesa: 0, colherCafe: 4, copoAmericano: 0.051, Ugramas: 8.67, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Chá": { xicaraCha: 0.020, colherSopa: 0.333, colherCha: 0, colherSobremesa: 0.5, colherCafe: 2, copoAmericano: 0.026, Ugramas: 4.33, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Café": { xicaraCha: 0.010, colherSopa: 0.166, colherCha: 0.5, colherSobremesa: 0.25, colherCafe: 0, copoAmericano: 0.013, Ugramas: 2.17, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Gramas": { xicaraCha: 0.0048, colherSopa: 0.0769, colherCha: 0.2308, colherSobremesa: 0.1154, colherCafe: 0.4615, copoAmericano: 0.00595, Ugramas: 0, Uquilos: 0.001, Umililitros: 0, Ulitros: 0 },
                "Quilo(s)": { xicaraCha: 4.76, colherSopa: 76.92, colherCha: 230.77, colherSobremesa: 115.38, colherCafe: 461.54, copoAmericano: 5.95, Ugramas: 1000, Uquilos: 0, Umililitros: 0, Ulitros: 0 }
            },
            "Sal": {
                "Xícara(s) de Chá": { xicaraCha: 0, colherSopa: 18.35, colherCha: 55.05, colherSobremesa: 27.52, colherCafe: 110.1, copoAmericano: 1.25, Ugramas: 180, Uquilos: 0.18, Umililitros: 0, Ulitros: 0 },
                "Copo(s) Americano(s)": { xicaraCha: 0.8, colherSopa: 14.68, colherCha: 44.04, colherSobremesa: 22.02, colherCafe: 88.08, copoAmericano: 0, Ugramas: 144, Uquilos: 0.144, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sopa": { xicaraCha: 0.0545, colherSopa: 0, colherCha: 3, colherSobremesa: 1.5, colherCafe: 6, copoAmericano: 0, Ugramas: 18, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sobremesa": { xicaraCha: 0.0364, colherSopa: 0.666, colherCha: 2, colherSobremesa: 0, colherCafe: 4, copoAmericano: 0, Ugramas: 12, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Chá": { xicaraCha: 0, colherSopa: 0.3333, colherCha: 0, colherSobremesa: 0.5, colherCafe: 2, copoAmericano: 0, Ugramas: 6, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Café": { xicaraCha: 0, colherSopa: 0.165, colherCha: 0.5, colherSobremesa: 0.25, colherCafe: 0, copoAmericano: 0, Ugramas: 3, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Gramas": { xicaraCha: 0.00303, colherSopa: 0.0556, colherCha: 0.1667, colherSobremesa: 0.0833, colherCafe: 0.3333, copoAmericano: 0.0037, Ugramas: 0, Uquilos: 0.001, Umililitros: 0, Ulitros: 0 },
                "Quilo(s)": { xicaraCha: 3.03, colherSopa: 55.56, colherCha: 166.67, colherSobremesa: 83.33, colherCafe: 333.33, copoAmericano: 3.7, Ugramas: 1000, Uquilos: 0, Umililitros: 0, Ulitros: 0 }
            },
            "Mel": {
                "Xícara(s) de Chá": { xicaraCha: 0, colherSopa: 16, colherCha: 48, colherSobremesa: 24, colherCafe: 96, copoAmericano: 1.25, Ugramas: 280, Uquilos: 0.28, Umililitros: 280, Ulitros: 0.28 },
                "Copo(s) Americano(s)": { xicaraCha: 0.8, colherSopa: 12.8, colherCha: 38.4, colherSobremesa: 19.2, colherCafe: 76.8, copoAmericano: 0, Ugramas: 224, Uquilos: 0.224, Umililitros: 224, Ulitros: 0.224 },
                "Colher(es) de Sopa": { xicaraCha: 0.0625, colherSopa: 0, colherCha: 3, colherSobremesa: 1.5, colherCafe: 6, copoAmericano: 0.078, Ugramas: 17.5, Uquilos: 0.0175, Umililitros: 17.5, Ulitros: 0.0175 },
                "Colher(es) de Sobremesa": { xicaraCha: 0.0417, colherSopa: 0.666, colherCha: 2, colherSobremesa: 0, colherCafe: 4, copoAmericano: 0.052, Ugramas: 11.67, Uquilos: 0.01167, Umililitros: 11.67, Ulitros: 0.01167 },
                "Colher(es) de Chá": { xicaraCha: 0.0208, colherSopa: 0.333, colherCha: 0, colherSobremesa: 0.5, colherCafe: 2, copoAmericano: 0.026, Ugramas: 5.83, Uquilos: 0.00583, Umililitros: 5.83, Ulitros: 0.00583 },
                "Colher(es) de Café": { xicaraCha: 0.0104, colherSopa: 0.166, colherCha: 0.5, colherSobremesa: 0.25, colherCafe: 0, copoAmericano: 0.013, Ugramas: 2.92, Uquilos: 0.00292, Umililitros: 2.92, Ulitros: 0.00292 },
                "Gramas": { xicaraCha: 0.00357, colherSopa: 0.057, colherCha: 0.172, colherSobremesa: 0.086, colherCafe: 0.343, copoAmericano: 0.00446, Ugramas: 0, Uquilos: 0.001, Umililitros: 1, Ulitros: 0.001 },
                "Quilo(s)": { xicaraCha: 3.57, colherSopa: 57.14, colherCha: 171.43, colherSobremesa: 85.71, colherCafe: 342.86, copoAmericano: 4.46, Ugramas: 1000, Uquilos: 0, Umililitros: 1000, Ulitros: 1 },
                "Mililitros (ML)": {},
                "Litro(s)": {}
            },
            "Pó de Café": {
                "Xícara(s) de Chá": { xicaraCha: 0, colherSopa: 10, colherCha: 29.16, colherSobremesa: 14.58, colherCafe: 58.32, copoAmericano: 1.25, Ugramas: 90, Uquilos: 0.09, Umililitros: 0, Ulitros: 0 },
                "Copo(s) Americano(s)": { xicaraCha: 0.8, colherSopa: 6.67, colherCha: 20, colherSobremesa: 10, colherCafe: 40, copoAmericano: 0, Ugramas: 60, Uquilos: 0.06, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sopa": { xicaraCha: 0.1, colherSopa: 0, colherCha: 3, colherSobremesa: 1.5, colherCafe: 6, copoAmericano: 0.15, Ugramas: 9, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sobremesa": { xicaraCha: 0.0667, colherSopa: 0.67, colherCha: 2, colherSobremesa: 0, colherCafe: 4, copoAmericano: 0.1, Ugramas: 6, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Chá": { xicaraCha: 0, colherSopa: 0.33, colherCha: 0, colherSobremesa: 0.5, colherCafe: 2, copoAmericano: 0, Ugramas: 3, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Café": { xicaraCha: 0, colherSopa: 0.17, colherCha: 0.5, colherSobremesa: 0.25, colherCafe: 0, copoAmericano: 0, Ugramas: 1.5, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Gramas": { xicaraCha: 0.0111, colherSopa: 0.1111, colherCha: 0.3333, colherSobremesa: 0.1667, colherCafe: 0.6667, copoAmericano: 0.0167, Ugramas: 0, Uquilos: 0.001, Umililitros: 0, Ulitros: 0 },
                "Quilo(s)": { xicaraCha: 11.11, colherSopa: 111.11, colherCha: 333.33, colherSobremesa: 166.67, colherCafe: 666.67, copoAmericano: 16.67, Ugramas: 1000, Uquilos: 0, Umililitros: 0, Ulitros: 0 }
            },
            "Farinha de Trigo": {
                "Xícara(s) de Chá": { xicaraCha: 0, colherSopa: 10, colherCha: 28, colherSobremesa: 14, colherCafe: 56, copoAmericano: 1.25, Ugramas: 140, Uquilos: 0.14, Umililitros: 0, Ulitros: 0 },
                "Copo(s) Americano(s)": { xicaraCha: 0.8, colherSopa: 8.21, colherCha: 24.64, colherSobremesa: 12.32, colherCafe: 49.29, copoAmericano: 0, Ugramas: 115, Uquilos: 0.115, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sopa": { xicaraCha: 0.01, colherSopa: 0, colherCha: 3, colherSobremesa: 1.5, colherCafe: 6, copoAmericano: 0.16, Ugramas: 14, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sobremesa": { xicaraCha: 0.0667, colherSopa: 0.67, colherCha: 2, colherSobremesa: 0, colherCafe: 4, copoAmericano: 0.1, Ugramas: 6, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Chá": { xicaraCha: 0, colherSopa: 0.33, colherCha: 0, colherSobremesa: 0.5, colherCafe: 2, copoAmericano: 0, Ugramas: 3, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Café": { xicaraCha: 0, colherSopa: 0.17, colherCha: 0.5, colherSobremesa: 0.25, colherCafe: 0, copoAmericano: 0, Ugramas: 1.5, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Gramas": { xicaraCha: 0.00625, colherSopa: 0.0714, colherCha: 0.2143, colherSobremesa: 0.1071, colherCafe: 0.4286, copoAmericano: 0.0087, Ugramas: 0, Uquilos: 0.001, Umililitros: 0, Ulitros: 0 },
                "Quilo(s)": { xicaraCha: 6.25, colherSopa: 71.43, colherCha: 214.29, colherSobremesa: 107.14, colherCafe: 428.57, copoAmericano: 8.7, Ugramas: 1000, Uquilos: 0, Umililitros: 0, Ulitros: 0 }
            },  
            "Frango Desfiado": {
                "Xícara(s) de Chá": { xicaraCha: 0, colherSopa: 7.1, colherCha: 0, colherSobremesa: 10.7, colherCafe: 0, copoAmericano: 1.3, Ugramas: 128, Uquilos: 0.128, Umililitros: 0, Ulitros: 0 },
                "Copo(s) Americano(s)": { xicaraCha: 0.8, colherSopa: 8.4, colherCha: 24.7, colherSobremesa: 12.3, colherCafe: 49.3, copoAmericano: 0, Ugramas: 115, Uquilos: 0.115, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sopa": { xicaraCha: 0.14, colherSopa: 0, colherCha: 0, colherSobremesa: 1.5, colherCafe: 0, copoAmericano: 0.16, Ugramas: 18, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sobremesa": { xicaraCha: 0.067, colherSopa: 0.67, colherCha: 2, colherSobremesa: 0, colherCafe: 4, copoAmericano: 0.1, Ugramas: 6, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Chá": { xicaraCha: 0, colherSopa: 0.33, colherCha: 0, colherSobremesa: 0.5, colherCafe: 2, copoAmericano: 0, Ugramas: 3, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Café": { xicaraCha: 0, colherSopa: 0.17, colherCha: 0.5, colherSobremesa: 0.25, colherCafe: 0, copoAmericano: 0, Ugramas: 1.5, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Gramas": { xicaraCha: 0.0078, colherSopa: 0.0556, colherCha: 0.1667, colherSobremesa: 0.0833, colherCafe: 0.3333, copoAmericano: 0.0095, Ugramas: 0, Uquilos: 0.001, Umililitros: 0, Ulitros: 0 },
                "Quilo(s)": { xicaraCha: 7.8, colherSopa: 55.6, colherCha: 166.7, colherSobremesa: 83.3, colherCafe: 333.3, copoAmericano: 9.5, Ugramas: 1000, Uquilos: 0, Umililitros: 0, Ulitros: 0 }
            },
          "Grãos de Milho": {
    "Xícara(s) de Chá": { 
        "xicaraCha": 0, 
        "colherSopa": 15, 
        "colherCha": 0, 
        "colherSobremesa": 10, 
        "colherCafe": 0, 
        "copoAmericano": 1.5, 
        "Ugramas": 190, 
        "Uquilos": 0.19, 
        "Umililitros": 0, 
        "Ulitros": 0 
    },
    "Copo(s) Americano(s)": { 
        "xicaraCha": 0.73, 
        "colherSopa": 15, 
        "colherCha": 0, 
        "colherSobremesa": 10, 
        "colherCafe": 0, 
        "copoAmericano": 0, 
        "Ugramas": 130, 
        "Uquilos": 0.13, 
        "Umililitros": 0, 
        "Ulitros": 0 
    },
    "Colher(es) de Sopa": { 
        "xicaraCha": 0.079, 
        "colherSopa": 0, 
        "colherCha": 0, 
        "colherSobremesa": 1.5, 
        "colherCafe": 0, 
        "copoAmericano": 0.12, 
        "Ugramas": 15, 
        "Uquilos": 0.015, 
        "Umililitros": 0, 
        "Ulitros": 0 
    },
    "Colher(es) de Sobremesa": { 
        "xicaraCha": 0.042, 
        "colherSopa": 0.6, 
        "colherCha": 0, 
        "colherSobremesa": 0, 
        "colherCafe": 0, 
        "copoAmericano": 0.08, 
        "Ugramas": 10, 
        "Uquilos": 0.01, 
        "Umililitros": 0, 
        "Ulitros": 0 
    },
    "Gramas": { 
        "xicaraCha": 0.00526315789, 
        "colherSopa": 0.066666666667, 
        "colherCha": 0, 
        "colherSobremesa": 0.1, 
        "colherCafe": 0, 
        "copoAmericano": 0.00769230769, 
        "Ugramas": 0, 
        "Uquilos": 0.001, 
        "Umililitros": 0, 
        "Ulitros": 0 
    }
},
            "Feijão Cru": {
                "Xícara(s) de Chá": { xicaraCha: 0, colherSopa: 0, colherCha: 0, colherSobremesa: 0, colherCafe: 0, copoAmericano: 1.25, Ugramas: 250, Uquilos: 0.250, Umililitros: 0, Ulitros: 0 },
                "Copo(s) Americano(s)": { xicaraCha: 0.8, colherSopa: 0, colherCha: 0, colherSobremesa: 0, colherCafe: 0, copoAmericano: 0, Ugramas: 170, Uquilos: 0.170, Umililitros: 0, Ulitros: 0 },
                "Gramas": { xicaraCha: 0.004, colherSopa: 0.0455, colherCha: 0, colherSobremesa: 0, colherCafe: 0, copoAmericano: 0.0059, Ugramas: 0, Uquilos: 0.001, Umililitros: 0, Ulitros: 0 }
            },
           "Manteiga": {
                "Xícara(s) de Chá": { xicaraCha: 0.1, colherSopa: 0, colherCha: 3, colherSobremesa: 1.5, colherCafe: 6, copoAmericano: 0, Ugramas: 18, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sopa": { xicaraCha: 0, colherSopa: 0.7, colherCha: 2, colherSobremesa: 0, colherCafe: 4, copoAmericano: 0, Ugramas: 12, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sobremesa": { xicaraCha: 0, colherSopa: 0.3, colherCha: 0, colherSobremesa: 0, colherCafe: 2, copoAmericano: 0, Ugramas: 6, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Chá": { xicaraCha: 0.004, colherSopa: 0.06, colherCha: 0.17, colherSobremesa: 0.08, colherCafe: 0.33, copoAmericano: 0.005, Ugramas: 0, Uquilos: 0.001, Umililitros: 0, Ulitros: 0 },
                "Gramas": { xicaraCha: 0.004, colherSopa: 0.06, colherCha: 0.17, colherSobremesa: 0.08, colherCafe: 0.33, copoAmericano: 0.005, Ugramas: 0, Uquilos: 0.001, Umililitros: 0, Ulitros: 0 }
            },
            "Carne Moída": {
                "Xícara(s) de Chá": { xicaraCha: 0, colherSopa: 7.2, colherCha: 21.5, colherSobremesa: 10.8, colherCafe: 43, copoAmericano: 1.3, Ugramas: 172, Uquilos: 0.172, Umililitros: 0, Ulitros: 0 },
                "Colher(es) de Sopa": { xicaraCha: 0.14, colherSopa: 0, colherCha: 3, colherSobremesa: 1.5, colherCafe: 6, copoAmericano: 0, Ugramas: 24, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Gramas": { xicaraCha: 0.0058, colherSopa: 0.0417, colherCha: 0.125, colherSobremesa: 0.0625, colherCafe: 0.25, copoAmericano: 0.0072, Ugramas: 0, Uquilos: 0.001, Umililitros: 0, Ulitros: 0 },
                "Quilo(s)": { xicaraCha: 5.8, colherSopa: 41.7, colherCha: 125, colherSobremesa: 62.5, colherCafe: 250, copoAmericano: 7.2, Ugramas: 1000, Uquilos: 0, Umililitros: 0, Ulitros: 0 },
                "Copo(s) Americano(s)": { xicaraCha: 0.8, colherSopa: 5.8, colherCha: 17.3, colherSobremesa: 8.6, colherCafe: 34.5, copoAmericano: 0, Ugramas: 138, Uquilos: 0.138, Umililitros: 0, Ulitros: 0 }
            },
            "Azeitonas sem Caroço": {
                "Xícara(s) de Chá": { xicaraCha: 0, colherSopa: 0, colherCha: 0, colherSobremesa: 0, colherCafe: 0, copoAmericano: 0.73, Ugramas: 130, Uquilos: 0.13, Unidades: 30, Umililitros: 0, Ulitros: 0 },
                "Gramas": { xicaraCha: 0.0077, colherSopa: 0, colherCha: 0, colherSobremesa: 0, colherCafe: 0, copoAmericano: 0.0105, Ugramas: 0, Uquilos: 0.001, Unidade: 0.233, Umililitros: 0, Ulitros: 0 },
                "Quilo(s)": { xicaraCha: 7.7, colherSopa: 0, colherCha: 0, colherSobremesa: 0, colherCafe: 0, copoAmericano: 10.5, Ugramas: 1000, Uquilos: 0, Unidades: 233, Umililitros: 0, Ulitros: 0 },
                "Copo(s) Americano(s)": { xicaraCha: 1.37, colherSopa: 0, colherCha: 0, colherSobremesa: 0, colherCafe: 0, copoAmericano: 0, Ugramas: 95, Uquilos: 0.095, Unidades: 22, Umililitros: 0, Ulitros: 0 },
                "Unidades": { xicaraCha: 0.0333334, colherSopa: 0, colherCha: 0, colherSobremesa: 0, colherCafe: 0, copoAmericano: 0.045, Ugramas: 4.3, Uquilos: 0.0043, Umililitros: 0, Ulitros: 0 }},
            },
        resultados: {
            xicaraCha: 0,
            colherSopa: 0,
            colherCha: 0,
            colherSobremesa: 0,
            colherCafe: 0,
            copoAmericano: 0,
            Ugramas: 0,
            Uquilos: 0,
            Umililitros: 0,
            Ulitros: 0
        },
        complementoXicara: '',
        complementoCopo: '',
        complementoColherSobremesa: '',
        complementoColherSopa: '',
    },
    methods: {
        resultFunction() {
            this.resetComplementos()
            const conversoes = this.valoresConversao[this.ingredienteAtivo]?.[this.medidaAtiva]
            if (conversoes) {
                Object.keys(conversoes).forEach(key => {
                    if (['Mililitros (ML)', 'Gramas', 'Unidades', 'Litro(s)', 'Quilo(s)'].includes(this.medidaAtiva)) {
                        this[key] = (conversoes[key] * this.inputvalue).toFixed(1)
                    } else {
                        this[key] = (conversoes[key] * this.multiplicador).toFixed(1)
                    }
                })
                this.updateComplementos()
            } else {
                console.error('Conversões não encontradas para:', this.ingredienteAtivo, this.medidaAtiva)
            }
        },
        updateComplementos() {
            const xicaraCha = parseFloat(this.xicaraCha)
            const copoAmericano = parseFloat(this.copoAmericano)
            const colherSobremesa = parseFloat(this.colherSobremesa)
            if (xicaraCha > 0.49 && xicaraCha < 0.6) {
                this.complementoXicara = ' (Meia Xícara)'
            } else if (xicaraCha > 0.29 && xicaraCha < 0.36) {
                this.complementoXicara = ' (Um Terço)'
            }
            if (copoAmericano > 0.49 && copoAmericano < 0.6) {
                this.complementoCopo = ' (Meio Copo)'
            } else if (copoAmericano > 0.29 && copoAmericano < 0.36) {
                this.complementoCopo = ' (Um Terço)'
            }
            if (colherSobremesa === 0.5) {
                this.complementoColherSobremesa = ' (Meia Colher)'
            }
        },
        resetComplementos() {
            this.complementoCopo = ''
            this.complementoXicara = ''
            this.complementoColherSobremesa = ''
            this.complementoColherSopa = ''
        }
    },
    watch: {
        ingredienteAtivo: function() {
            const medidas = {
                'Arroz Cru': 'Xícara(s) de Chá',
                'Açúcar Cristal': 'Colher(es) de Sopa',
                'Farinha de Trigo': 'Xícara(s) de Chá',
                'Feijão Cru': 'Gramas',
                'Frango Desfiado': 'Gramas',
                'Líquidos': 'Mililitros (ML)',
                'Grãos de Milho': 'Xícara(s) de Chá',
                'Manteiga': 'Colher(es) de Sopa',
                'Mel': 'Colher(es) de Sopa',
                'Pó de Café': 'Xícara(s) de Chá',
                'Sal': 'Colher(es) de Chá',
                'Carne Moída': 'Xícara(s) de Chá',
                'Azeitonas sem Caroço': 'Xícara(s) de Chá'
            }
            this.medidaAtiva = medidas[this.ingredienteAtivo]
        },
        multiplicador: function() {
            const quantidades = {
                0.5: '1/2',
                1: '1',
                0.3333333334: '1/3',
                0.25: '1/4',
                1.5: '1 1/2',
                2.5: '2 1/2',
                2: '2',
                3: '3',
                4: '4',
                5: '5'
            }
            this.quantidadeAtiva = quantidades[this.multiplicador]
        },
        inputvalue: function() {
            this.quantidadeAtiva = this.inputvalue
        }
    }
})