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
        multiplicador: 1,
        inputvalue: 1,
        complementoXicara: '',
        complementoCopo: '',
        complementoColherSobremesa: '',
        complementoColherSopa: ''
    },
    methods: {
        resultFunction() {
            this.complementoCopo = ''
            this.complementoXicara = ''
            this.complementoColherSobremesa = ''
            this.complementoColherSopa = ''
            if (this.ingredienteAtivo == 'Líquidos' && this.medidaAtiva == 'Xícara(s) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (16 * this.multiplicador).toFixed(1)
                this.colherCha = (48 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (24 * this.multiplicador).toFixed(1)
                this.colherCafe = (96 * this.multiplicador).toFixed(1)
                this.copoAmericano = (1.25 * this.multiplicador).toFixed(1)
                this.Ugramas = (240 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.24 * this.multiplicador).toFixed(1)
                this.Umililitros = (240 * this.multiplicador).toFixed(1)
                this.Ulitros = (0.24 * this.multiplicador).toFixed(1)
            }  else if (this.ingredienteAtivo == 'Líquidos' && this.medidaAtiva == 'Copo(s) Americano(s)') {
                this.xicaraCha = (0.8 * this.multiplicador).toFixed(1)
                this.colherSopa = (12.66 * this.multiplicador).toFixed(1)
                this.colherCha = (38 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (19 * this.multiplicador).toFixed(1)
                this.colherCafe = (76 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (190 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.19 * this.multiplicador).toFixed(1)
                this.Umililitros = (190 * this.multiplicador).toFixed(1)
                this.Ulitros = (0.19 * this.multiplicador).toFixed(1)
            } else if (this.ingredienteAtivo == 'Líquidos' && this.medidaAtiva == 'Colher(es) de Sopa') {
                this.xicaraCha = (0.064 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (1.5 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (3 * this.multiplicador).toFixed(1)
                this.colherCafe = (6 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0.08 * this.multiplicador).toFixed(1)
                this.Ugramas = (15 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (15 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Líquidos' && this.medidaAtiva == 'Colher(es) de Sobremesa') {
                this.xicaraCha = (0.042 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.66 * this.multiplicador).toFixed(1)
                this.colherCha = (2 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0 * this.multiplicador).toFixed(1)
                this.colherCafe = (4 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0.05 * this.multiplicador).toFixed(1)
                this.Ugramas = (10 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (10 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
            }
            else if (this.ingredienteAtivo == 'Líquidos' && this.medidaAtiva == 'Colher(es) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.33 * this.multiplicador).toFixed(1)
                this.colherCha = (0 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (2 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (5 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (5 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            }
            else if (this.ingredienteAtivo == 'Líquidos' && this.medidaAtiva == 'Colher(es) de Café') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.165 * this.multiplicador).toFixed(1)
                this.colherCha = (0.5 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0.25 * this.multiplicador).toFixed(1)
                this.colherCafe = (0 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (2.5 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (2.5 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
            } else if (this.ingredienteAtivo == 'Líquidos' && this.medidaAtiva == 'Mililitros (ML)') {
                this.xicaraCha = (0.00417 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.0667 * this.inputvalue).toFixed(1)
                this.colherCha = (0.2 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.1 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.4 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.0053 * this.inputvalue).toFixed(1)
                this.Ugramas = (1 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0.001 * this.inputvalue).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            }
            else if (this.ingredienteAtivo == 'Líquidos' && this.medidaAtiva == 'Litro(s)') {
                this.xicaraCha = (4.16667 * this.inputvalue).toFixed(1)
                this.colherSopa = (66.6667 * this.inputvalue).toFixed(1)
                this.colherCha = (200 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (100 * this.inputvalue).toFixed(1)
                this.colherCafe = (400 * this.inputvalue).toFixed(1)
                this.copoAmericano = (5.263 * this.inputvalue).toFixed(1)
                this.Ugramas = (1000 * this.inputvalue).toFixed(1)
                this.Uquilos = (1 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
            }
            else if (this.ingredienteAtivo == 'Açúcar Cristal' && this.medidaAtiva == 'Colher(es) de Sopa') {
                this.xicaraCha = (0.10 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (3 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (1.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (6 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0.12 * this.multiplicador).toFixed(1)
                this.Ugramas = (17.5 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } if (this.colherSobremesa == 1.5) {
                    this.complementoColherSobremesa = ' (Uma Colher e Meia)'
                }
            }
            else if (this.ingredienteAtivo == 'Açúcar Cristal' && this.medidaAtiva == 'Colher(es) de Sobremesa') {
                this.xicaraCha = (0.066 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.66 * this.multiplicador).toFixed(1)
                this.colherCha = (2 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0 * this.multiplicador).toFixed(1)
                this.colherCafe = (4 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0.069 * this.multiplicador).toFixed(1)
                this.Ugramas = (11.66 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                }
            }
            else if (this.ingredienteAtivo == 'Açúcar Cristal' && this.medidaAtiva == 'Colher(es) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.333337 * this.multiplicador).toFixed(1)
                this.colherCha = (0 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (2 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (5.83 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Açúcar Cristal' && this.medidaAtiva == 'Colher(es) de Café') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.165 * this.multiplicador).toFixed(1)
                this.colherCha = (0.5 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0.25 * this.multiplicador).toFixed(1)
                this.colherCafe = (0 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (2.915 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Açúcar Cristal' && this.medidaAtiva == 'Gramas') {
                this.xicaraCha = (0.0057142857142858 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.0571428571428572 * this.inputvalue).toFixed(1)
                this.colherCha = (0.1715265866209263 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.0857632933104632 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.3430531732418526 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.0071428571428572 * this.inputvalue).toFixed(1)
                this.Ugramas = (0 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa > 0.490 && this.colherSobremesa < 0.600) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
                if (this.colherSopa > 0.490 && this.colherSopa < 0.600) {
                    this.complementoColherSopa = ' (Meia Colher)'
                }
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Açúcar Cristal' && this.medidaAtiva == 'Quilo(s)') {
                this.xicaraCha = (5.714285714285715 * this.inputvalue).toFixed(1)
                this.colherSopa = (57.14285714285715 * this.inputvalue).toFixed(1)
                this.colherCha = (171.52658662 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (85.76329331 * this.inputvalue).toFixed(1)
                this.colherCafe = (343.05317324 * this.inputvalue).toFixed(1)
                this.copoAmericano = (7.142857142857144 * this.inputvalue).toFixed(1)
                this.Ugramas = (1000 * this.inputvalue).toFixed(1)
                this.Uquilos = (0 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Açúcar Cristal' && this.medidaAtiva == 'Xícara(s) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (10 * this.multiplicador).toFixed(1)
                this.colherCha = (29.15951972555746 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (14.57975986277873 * this.multiplicador).toFixed(1)
                this.colherCafe = (58.31903945111492 * this.multiplicador).toFixed(1)
                this.copoAmericano = (1.25 * this.multiplicador).toFixed(1)
                this.Ugramas = (175 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.175 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Açúcar Cristal' && this.medidaAtiva == 'Copo(s) Americano(s)') {
                this.xicaraCha = (0.8 * this.multiplicador).toFixed(1)
                this.colherSopa = (8 * this.multiplicador).toFixed(1)
                this.colherCha = (24.01372212692967 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (12.00686106346484 * this.multiplicador).toFixed(1)
                this.colherCafe = (48.02744425385935 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (140 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.140 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Arroz Cru' && this.medidaAtiva == 'Xícara(s) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (16.15384615384615 * this.multiplicador).toFixed(1)
                this.colherCha = (21.53846153846154 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (10.76923076923077 * this.multiplicador).toFixed(1)
                this.colherCafe = (43.07692307692308 * this.multiplicador).toFixed(1)
                this.copoAmericano = (1.25 * this.multiplicador).toFixed(1)
                this.Ugramas = (210 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.210 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Arroz Cru' && this.medidaAtiva == 'Copo(s) Americano(s)') {
                this.xicaraCha = (0.8 * this.multiplicador).toFixed(1)
                this.colherSopa = (13.84615384615385 * this.multiplicador).toFixed(1)
                this.colherCha = (18.46153846153847 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (9.230769230769234 * this.multiplicador).toFixed(1)
                this.colherCafe = (36.92307692307694 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (180 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.180 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
            } else if (this.ingredienteAtivo == 'Arroz Cru' && this.medidaAtiva == 'Gramas') {
                this.xicaraCha = (0.0047619047619048 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.0769230769230769 * this.inputvalue).toFixed(1)
                this.colherCha = (0.23076923076923 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.1153846153846154 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.46153846153846 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.0055555555555556 * this.inputvalue).toFixed(1)
                this.Ugramas = (0 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa > 0.490 && this.colherSobremesa < 0.600) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
                if (this.colherSopa > 0.490 && this.colherSopa < 0.600) {
                    this.complementoColherSopa = ' (Meia Colher)'
                }
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Arroz Cru' && this.medidaAtiva == 'Quilo(s)') {
                this.xicaraCha = (4.7619047619048 * this.inputvalue).toFixed(1)
                this.colherSopa = (76.9230769230769 * this.inputvalue).toFixed(1)
                this.colherCha = (230.76923076923 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (115.3846153846154 * this.inputvalue).toFixed(1)
                this.colherCafe = (461.53846153846 * this.inputvalue).toFixed(1)
                this.copoAmericano = (5.5555555555556 * this.inputvalue).toFixed(1)
                this.Ugramas = (1000 * this.inputvalue).toFixed(1)
                this.Uquilos = (0 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Sal' && this.medidaAtiva == 'Colher(es) de Sopa') {
                this.xicaraCha = (0.0545454545454545 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (3 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (1.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (6 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (18 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } if (this.colherSobremesa == 1.5) {
                    this.complementoColherSobremesa = ' (Uma Colher e Meia)'
                }
            } else if (this.ingredienteAtivo == 'Sal' && this.medidaAtiva == 'Colher(es) de Sobremesa') {
                this.xicaraCha = (0.0363636363636364 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.66 * this.multiplicador).toFixed(1)
                this.colherCha = (2 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0 * this.multiplicador).toFixed(1)
                this.colherCafe = (4 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (12 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                }
            }  else if (this.ingredienteAtivo == 'Sal' && this.medidaAtiva == 'Colher(es) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.333337 * this.multiplicador).toFixed(1)
                this.colherCha = (0 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (2 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (6 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Sal' && this.medidaAtiva == 'Colher(es) de Café') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.165 * this.multiplicador).toFixed(1)
                this.colherCha = (0.5 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0.25 * this.multiplicador).toFixed(1)
                this.colherCafe = (0 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (3 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Sal' && this.medidaAtiva == 'Gramas') {
                this.xicaraCha = (0.0030303030303031 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.0555555555555556 * this.inputvalue).toFixed(1)
                this.colherCha = (0.1666666666666667 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.0833333333333333 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.33333333333333337 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.00370370370370371 * this.inputvalue).toFixed(1)
                this.Ugramas = (0 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa > 0.490 && this.colherSobremesa < 0.600) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
                if (this.colherSopa > 0.490 && this.colherSopa < 0.600) {
                    this.complementoColherSopa = ' (Meia Colher)'
                }
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            }
            else if (this.ingredienteAtivo == 'Mel' && this.medidaAtiva == 'Xícara(s) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (16 * this.multiplicador).toFixed(1)
                this.colherCha = (48 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (24 * this.multiplicador).toFixed(1)
                this.colherCafe = (96 * this.multiplicador).toFixed(1)
                this.copoAmericano = (1.25 * this.multiplicador).toFixed(1)
                this.Ugramas = (300 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.3 * this.multiplicador).toFixed(1)
                this.Umililitros = (240 * this.multiplicador).toFixed(1)
                this.Ulitros = (0.240 * this.multiplicador).toFixed(1)
            } else if (this.ingredienteAtivo == 'Mel' && this.medidaAtiva == 'Colher(es) de Sopa') {
                this.xicaraCha = (0.064 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (1.5 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (3 * this.multiplicador).toFixed(1)
                this.colherCafe = (6 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0.08 * this.multiplicador).toFixed(1)
                this.Ugramas = (18.75 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (15 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Mel' && this.medidaAtiva == 'Colher(es) de Sobremesa') {
                this.xicaraCha = (0.042 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.66 * this.multiplicador).toFixed(1)
                this.colherCha = (2 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0 * this.multiplicador).toFixed(1)
                this.colherCafe = (4 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0.05 * this.multiplicador).toFixed(1)
                this.Ugramas = (12.5 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (10 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
            } else if (this.ingredienteAtivo == 'Mel' && this.medidaAtiva == 'Colher(es) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.33 * this.multiplicador).toFixed(1)
                this.colherCha = (0 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (2 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (6.25 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (5 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Mel' && this.medidaAtiva == 'Colher(es) de Café') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.165 * this.multiplicador).toFixed(1)
                this.colherCha = (0.5 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0.25 * this.multiplicador).toFixed(1)
                this.colherCafe = (0 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (3.125 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (2.5 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
            }
            else if (this.ingredienteAtivo == 'Mel' && this.medidaAtiva == 'Gramas') {
                this.xicaraCha = (0.0033333334 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.053333334 * this.inputvalue).toFixed(1)
                this.colherCha = (0.16 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.080 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.32 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.00421299999 * this.inputvalue).toFixed(1)
                this.Ugramas = (0 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0.75 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa > 0.490 && this.colherSobremesa < 0.600) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
                if (this.colherSopa > 0.490 && this.colherSopa < 0.600) {
                    this.complementoColherSopa = ' (Meia Colher)'
                }
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Mel' && this.medidaAtiva == 'Mililitros (ML)') {
                this.xicaraCha = (0.00417 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.0667 * this.inputvalue).toFixed(1)
                this.colherCha = (0.2 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.1 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.4 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.0053 * this.inputvalue).toFixed(1)
                this.Ugramas = (1.25 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.00125 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0.001 * this.inputvalue).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Mel' && this.medidaAtiva == 'Litro(s)') {
                this.xicaraCha = (4.16667 * this.inputvalue).toFixed(1)
                this.colherSopa = (66.6667 * this.inputvalue).toFixed(1)
                this.colherCha = (200 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (100 * this.inputvalue).toFixed(1)
                this.colherCafe = (400 * this.inputvalue).toFixed(1)
                this.copoAmericano = (5.263 * this.inputvalue).toFixed(1)
                this.Ugramas = (1250 * this.inputvalue).toFixed(1)
                this.Uquilos = (1.25 * this.inputvalue).toFixed(1)
                this.Umililitros = (1000 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
            } else if (this.ingredienteAtivo == 'Mel' && this.medidaAtiva == 'Copo(s) Americano(s)') {
                this.xicaraCha = (0.8 * this.multiplicador).toFixed(1)
                this.colherSopa = (12.66 * this.multiplicador).toFixed(1)
                this.colherCha = (38 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (19 * this.multiplicador).toFixed(1)
                this.colherCafe = (76 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (237.5 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.24 * this.multiplicador).toFixed(1)
                this.Umililitros = (190 * this.multiplicador).toFixed(1)
                this.Ulitros = (0.19 * this.multiplicador).toFixed(1)
            } else if (this.ingredienteAtivo == 'Pó de Café' && this.medidaAtiva == 'Xícara(s) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (10 * this.multiplicador).toFixed(1)
                this.colherCha = (29.15951972555746 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (14.57975986277873 * this.multiplicador).toFixed(1)
                this.colherCafe = (58.31903945111492 * this.multiplicador).toFixed(1)
                this.copoAmericano = (1.25 * this.multiplicador).toFixed(1)
                this.Ugramas = (90 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.09 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Pó de Café' && this.medidaAtiva == 'Colher(es) de Sopa') {
                this.xicaraCha = (0.1 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (3 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (1.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (6 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0.15 * this.multiplicador).toFixed(1)
                this.Ugramas = (9 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } if (this.colherSobremesa == 1.5) {
                    this.complementoColherSobremesa = ' (Uma Colher e Meia)'
                }
            } else if (this.ingredienteAtivo == 'Pó de Café' && this.medidaAtiva == 'Colher(es) de Sobremesa') {
                this.xicaraCha = (0.066666666666667 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.66 * this.multiplicador).toFixed(1)
                this.colherCha = (2 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0 * this.multiplicador).toFixed(1)
                this.colherCafe = (4 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0.1 * this.multiplicador).toFixed(1)
                this.Ugramas = (6 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                }
            } else if (this.ingredienteAtivo == 'Pó de Café' && this.medidaAtiva == 'Colher(es) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.333337 * this.multiplicador).toFixed(1)
                this.colherCha = (0 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (2 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (3 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Pó de Café' && this.medidaAtiva == 'Copo(s) Americano(s)') {
                this.xicaraCha = (0.8 * this.multiplicador).toFixed(1)
                this.colherSopa = (6.666666666666667 * this.multiplicador).toFixed(1)
                this.colherCha = (20 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (10 * this.multiplicador).toFixed(1)
                this.colherCafe = (40 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (60 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.06 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Pó de Café' && this.medidaAtiva == 'Gramas') {
                this.xicaraCha = (0.01111111111111112 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.11111111111111112 * this.inputvalue).toFixed(1)
                this.colherCha = (0.33333333333333334 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.1666666666666667 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.6666666666666667 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.0166666666666667 * this.inputvalue).toFixed(1)
                this.Ugramas = (0 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa > 0.490 && this.colherSobremesa < 0.600) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
                if (this.colherSopa > 0.490 && this.colherSopa < 0.600) {
                    this.complementoColherSopa = ' (Meia Colher)'
                }
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Farinha de Trigo' && this.medidaAtiva == 'Colher(es) de Sopa') {
                this.xicaraCha = (0.01 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (3 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (1.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (6 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0.1565217391304348 * this.multiplicador).toFixed(1)
                this.Ugramas = (14 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } if (this.colherSobremesa == 1.5) {
                    this.complementoColherSobremesa = ' (Uma Colher e Meia)'
                }
            } else if (this.ingredienteAtivo == 'Farinha de Trigo' && this.medidaAtiva == 'Xícara(s) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (10 * this.multiplicador).toFixed(1)
                this.colherCha = (28 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (14 * this.multiplicador).toFixed(1)
                this.colherCafe = (56 * this.multiplicador).toFixed(1)
                this.copoAmericano = (1.25 * this.multiplicador).toFixed(1)
                this.Ugramas = (140 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.140 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Farinha de Trigo' && this.medidaAtiva == 'Copo(s) Americano(s)') {
                this.xicaraCha = (0.8 * this.multiplicador).toFixed(1)
                this.colherSopa = (8.214285714285714 * this.multiplicador).toFixed(1)
                this.colherCha = (24.64285714294515 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (12.32142857147258 * this.multiplicador).toFixed(1)
                this.colherCafe = (49.28571428578469 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (115 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.115 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Farinha de Trigo' && this.medidaAtiva == 'Gramas') {
                this.xicaraCha = (0.00625 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.0714285714285714 * this.inputvalue).toFixed(1)
                this.colherCha = (0.2142857142857142 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.1071428571428571 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.4285714285714284 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.008695652173914 * this.inputvalue).toFixed(1)
                this.Ugramas = (0 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa > 0.490 && this.colherSobremesa < 0.600) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
                if (this.colherSopa > 0.490 && this.colherSopa < 0.600) {
                    this.complementoColherSopa = ' (Meia Colher)'
                }
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Farinha de Trigo' && this.medidaAtiva == 'Quilo(s)') {
                this.xicaraCha = (6.25 * this.inputvalue).toFixed(1)
                this.colherSopa = (71.42857142857143 * this.inputvalue).toFixed(1)
                this.colherCha = (214.2857142857142 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (107.1428571428571 * this.inputvalue).toFixed(1)
                this.colherCafe = (428.5714285714284 * this.inputvalue).toFixed(1)
                this.copoAmericano = (8.695652173913999 * this.inputvalue).toFixed(1)
                this.Ugramas = (1000 * this.inputvalue).toFixed(1)
                this.Uquilos = (0 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Frango Desfiado' && this.medidaAtiva == 'Xícara(s) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (7.1111111111111112 * this.multiplicador).toFixed(1)
                this.colherCha = (0 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (10.66666666666667 * this.multiplicador).toFixed(1)
                this.colherCafe = (0 * this.multiplicador).toFixed(1)
                this.copoAmericano = (1.25 * this.multiplicador).toFixed(1)
                this.Ugramas = (128 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.128 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Frango Desfiado' && this.medidaAtiva == 'Colher(es) de Sopa') {
                this.xicaraCha = (0.140625 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (0 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (1.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (0 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0.1565217391304348 * this.multiplicador).toFixed(1)
                this.Ugramas = (18 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } if (this.colherSobremesa == 1.5) {
                    this.complementoColherSobremesa = ' (Uma Colher e Meia)'
                }
            } else if (this.ingredienteAtivo == 'Frango Desfiado' && this.medidaAtiva == 'Gramas') {
                this.xicaraCha = (0.0078125 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.0555555555555556 * this.inputvalue).toFixed(1)
                this.colherCha = (0.1666666666666667 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.08333333333333334 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.33333333333333334 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.0095238095238096 * this.inputvalue).toFixed(1)
                this.Ugramas = (0 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa > 0.490 && this.colherSobremesa < 0.600) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
                if (this.colherSopa > 0.490 && this.colherSopa < 0.600) {
                    this.complementoColherSopa = ' (Meia Colher)'
                }
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Feijão Cru' && this.medidaAtiva == 'Xícara(s) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (0 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0 * this.multiplicador).toFixed(1)
                this.colherCafe = (0 * this.multiplicador).toFixed(1)
                this.copoAmericano = (1.25 * this.multiplicador).toFixed(1)
                this.Ugramas = (250 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.250 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Feijão Cru' && this.medidaAtiva == 'Copo(s) Americano(s)') {
                this.xicaraCha = (0.8 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (0 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0 * this.multiplicador).toFixed(1)
                this.colherCafe = (0 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (170 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.170 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Feijão Cru' && this.medidaAtiva == 'Gramas') {
                this.xicaraCha = (0.004 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.0454545454545455 * this.inputvalue).toFixed(1)
                this.colherCha = (0 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0 * this.inputvalue).toFixed(1)
                this.colherCafe = (0 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.0058823529411765 * this.inputvalue).toFixed(1)
                this.Ugramas = (0 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa > 0.490 && this.colherSobremesa < 0.600) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
                if (this.colherSopa > 0.490 && this.colherSopa < 0.600) {
                    this.complementoColherSopa = ' (Meia Colher)'
                }
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Manteiga' && this.medidaAtiva == 'Colher(es) de Sopa') {
                this.xicaraCha = (0.072 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (3 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (1.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (6 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (18 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } if (this.colherSobremesa == 1.5) {
                    this.complementoColherSobremesa = ' (Uma Colher e Meia)'
                }
            } else if (this.ingredienteAtivo == 'Manteiga' && this.medidaAtiva == 'Colher(es) de Sobremesa') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.66 * this.multiplicador).toFixed(1)
                this.colherCha = (2 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0 * this.multiplicador).toFixed(1)
                this.colherCafe = (4 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (12 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                }
            } else if (this.ingredienteAtivo == 'Manteiga' && this.medidaAtiva == 'Colher(es) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (0.333337 * this.multiplicador).toFixed(1)
                this.colherCha = (0 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (0.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (2 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (6 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Manteiga' && this.medidaAtiva == 'Gramas') {
                this.xicaraCha = (0.004 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.0555555555555556 * this.inputvalue).toFixed(1)
                this.colherCha = (0.1666666666666667 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.0833333333333334 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.3333333333333334 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.005 * this.inputvalue).toFixed(1)
                this.Ugramas = (0 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa > 0.490 && this.colherSobremesa < 0.600) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
                if (this.colherSopa > 0.490 && this.colherSopa < 0.600) {
                    this.complementoColherSopa = ' (Meia Colher)'
                }
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            }  else if (this.ingredienteAtivo == 'Carne Moída' && this.medidaAtiva == 'Xícara(s) de Chá') {
                this.xicaraCha = (0 * this.multiplicador).toFixed(1)
                this.colherSopa = (7.166666666666667 * this.multiplicador).toFixed(1)
                this.colherCha = (21.5 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (10.75 * this.multiplicador).toFixed(1)
                this.colherCafe = (43 * this.multiplicador).toFixed(1)
                this.copoAmericano = (1.25 * this.multiplicador).toFixed(1)
                this.Ugramas = (172 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.172 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            } else if (this.ingredienteAtivo == 'Carne Moída' && this.medidaAtiva == 'Colher(es) de Sopa') {
                this.xicaraCha = (0.1395348837209302 * this.multiplicador).toFixed(1)
                this.colherSopa = (0 * this.multiplicador).toFixed(1)
                this.colherCha = (3 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (1.5 * this.multiplicador).toFixed(1)
                this.colherCafe = (6 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (24 * this.multiplicador).toFixed(1)
                this.Uquilos = (0 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } if (this.colherSobremesa == 1.5) {
                    this.complementoColherSobremesa = ' (Uma Colher e Meia)'
                }
            } else if (this.ingredienteAtivo == 'Carne Moída' && this.medidaAtiva == 'Gramas') {
                this.xicaraCha = (0.005813953488372 * this.inputvalue).toFixed(1)
                this.colherSopa = (0.0416666666666667 * this.inputvalue).toFixed(1)
                this.colherCha = (0.125 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (0.0625 * this.inputvalue).toFixed(1)
                this.colherCafe = (0.25 * this.inputvalue).toFixed(1)
                this.copoAmericano = (0.0072463768115942 * this.inputvalue).toFixed(1)
                this.Ugramas = (0 * this.inputvalue).toFixed(1)
                this.Uquilos = (0.001 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa > 0.490 && this.colherSobremesa < 0.600) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
                if (this.colherSopa > 0.490 && this.colherSopa < 0.600) {
                    this.complementoColherSopa = ' (Meia Colher)'
                }
                if (this.xicaraCha > 0.490 && this.xicaraCha < 0.600) {
                    this.complementoXicara = ' (Meia Xícara)'
                } else if (this.xicaraCha > 0.290 && this.xicaraCha < 0.360) {
                    this.complementoXicara = ' (Um Terço)'
                }
                if (this.copoAmericano > 0.490 && this.copoAmericano < 0.600) {
                    this.complementoCopo = ' (Meio Copo)'
                } else if (this.copoAmericano > 0.290 && this.copoAmericano < 0.360) {
                    this.complementoCopo = ' (Um Terço)'
                }
            } else if (this.ingredienteAtivo == 'Carne Moída' && this.medidaAtiva == 'Quilo(s)') {
                this.xicaraCha = (5.813953488372093 * this.inputvalue).toFixed(1)
                this.colherSopa = (41.66666666666667 * this.inputvalue).toFixed(1)
                this.colherCha = (125 * this.inputvalue).toFixed(1)
                this.colherSobremesa = (62.5 * this.inputvalue).toFixed(1)
                this.colherCafe = (250 * this.inputvalue).toFixed(1)
                this.copoAmericano = (7.246376811594203 * this.inputvalue).toFixed(1)
                this.Ugramas = (1000 * this.inputvalue).toFixed(1)
                this.Uquilos = (0 * this.inputvalue).toFixed(1)
                this.Umililitros = (0 * this.inputvalue).toFixed(1)
                this.Ulitros = (0 * this.inputvalue).toFixed(1)
                if (this.colherSobremesa == 0.5) {
                    this.complementoColherSobremesa = ' (Meia Colher)'
                }
            }  else if (this.ingredienteAtivo == 'Carne Moída' && this.medidaAtiva == 'Copo(s) Americano(s)') {
                this.xicaraCha = (0.8 * this.multiplicador).toFixed(1)
                this.colherSopa = (5.75 * this.multiplicador).toFixed(1)
                this.colherCha = (17.25 * this.multiplicador).toFixed(1)
                this.colherSobremesa = (8.625 * this.multiplicador).toFixed(1)
                this.colherCafe = (34.5 * this.multiplicador).toFixed(1)
                this.copoAmericano = (0 * this.multiplicador).toFixed(1)
                this.Ugramas = (138 * this.multiplicador).toFixed(1)
                this.Uquilos = (0.138 * this.multiplicador).toFixed(1)
                this.Umililitros = (0 * this.multiplicador).toFixed(1)
                this.Ulitros = (0 * this.multiplicador).toFixed(1)
            } 
        }
    }, watch: {
        ingredienteAtivo: function() {
            if (this.ingredienteAtivo == 'Arroz Cru') {
                this.medidaAtiva = 'Xícara(s) de Chá'
            } else if (this.ingredienteAtivo == 'Açúcar Cristal') {
                this.medidaAtiva = 'Colher(es) de Sopa'
            } else if (this.ingredienteAtivo == 'Farinha de Trigo') {
                this.medidaAtiva = 'Xícara(s) de Chá'
            } else if (this.ingredienteAtivo == 'Feijão Cru') {
                this.medidaAtiva = 'Gramas'
            } else if (this.ingredienteAtivo == 'Feijão Cru') {
                this.medidaAtiva = 'Gramas'
            } else if (this.ingredienteAtivo == 'Frango Desfiado') {
                this.medidaAtiva = 'Gramas'
            } else if (this.ingredienteAtivo == 'Líquidos') {
                this.medidaAtiva = 'Mililitros (ML)'
            } else if (this.ingredienteAtivo == 'Manteiga') {
                this.medidaAtiva = 'Colher(es) de Sopa'
            } else if (this.ingredienteAtivo == 'Mel') {
                this.medidaAtiva = 'Colher(es) de Sopa'
            } else if (this.ingredienteAtivo == 'Pó de Café') {
                this.medidaAtiva = 'Xícara(s) de Chá'
            } else if (this.ingredienteAtivo == 'Sal') {
                this.medidaAtiva = 'Colher(es) de Chá'
            } else if (this.ingredienteAtivo == 'Carne Moída') {
                this.medidaAtiva = 'Xícara(s) de Chá'
            }
        },
        multiplicador: function() {
            if (this.multiplicador == 0.5) {
                this.quantidadeAtiva = '1/2'
            } else if (this.multiplicador == 1) {
                this.quantidadeAtiva = '1'
            } else if (this.multiplicador == 0.3333333334) {
                this.quantidadeAtiva = '1/3'
            } else if (this.multiplicador == 0.25) {
                this.quantidadeAtiva = '1/4'
            } else if (this.multiplicador == 1.5) {
                this.quantidadeAtiva = '1 1/2'
            } else if (this.multiplicador == 2.5) {
                this.quantidadeAtiva = '2 1/2'
            } else if (this.multiplicador == 2) {
                this.quantidadeAtiva = '2'
            } else if (this.multiplicador == 3) {
                this.quantidadeAtiva = '3'
            } else if (this.multiplicador == 4) {
                this.quantidadeAtiva = '4'
            } else if (this.multiplicador == 5) {
                this.quantidadeAtiva = '5'
            }
        }
    }
})