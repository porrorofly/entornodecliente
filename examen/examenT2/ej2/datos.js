const VEHICULOS = [
    {
        id: 'dron',
        nombre: 'Dron de Reparto',
        capacidad: 5,       // kg máx
        tarifaBase: 12,     // € fijos
        precioKg: 0.30,     // € por kg
        admiteFragil: false,
        ecologico: true
    },
    {
        id: 'bici',
        nombre: 'Bicicleta Eléctrica',
        capacidad: 20,
        tarifaBase: 5,
        precioKg: 0.40,
        admiteFragil: false,
        ecologico: true
    },
    {
        id: 'moto',
        nombre: 'Moto Mensajería',
        capacidad: 60,
        tarifaBase: 9,
        precioKg: 0.65,
        admiteFragil: false,
        ecologico: false
    },
    {
        id: 'triciclo',
        nombre: 'Triciclo Eléctrico de Carga',
        capacidad: 120,
        tarifaBase: 11,
        precioKg: 0.55,
        admiteFragil: true,
        ecologico: true
    },
    {
        id: 'pickup',
        nombre: 'Pickup de Reparto',
        capacidad: 350,
        tarifaBase: 14,
        precioKg: 0.75,
        admiteFragil: false,
        ecologico: false
    },
    {
        id: 'furgoneta',
        nombre: 'Furgoneta Eléctrica',
        capacidad: 500,
        tarifaBase: 18,
        precioKg: 0.90,
        admiteFragil: true,
        ecologico: true
    },
    {
        id: 'camion',
        nombre: 'Camión Ligero',
        capacidad: 1500,
        tarifaBase: 30,
        precioKg: 1.25,
        admiteFragil: true,
        ecologico: false
    },
    {
        id: 'camion_elec',
        nombre: 'Camión Eléctrico Pesado',
        capacidad: 2500,
        tarifaBase: 45,
        precioKg: 1.40,
        admiteFragil: true,
        ecologico: true
    }
];