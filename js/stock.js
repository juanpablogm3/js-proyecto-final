const carrito = [];
let currentStock = [];
let currentCarrito = [];
const stock = [
	{
		id: 1,
		prod: "Pedigree",
		desc: "Croquetas sabor carne y vegetales",
		peso: 21,
		precio: 7500,
		cantidad: 0,
		oferta: false,
		img: '/images/pedigree.png'
	},
	{
		id: 2,
		prod: "Pedigree Cachorro",
		desc: "Croquetas sabor carne y pollo",
		peso: 21,
		precio: 7800,
		cantidad: 0,
		oferta: false,
		img: '/images/pedigree_cach.png'
	},
	{
		id: 3,
		prod: "Cat Chow",
		desc: "Alimento seco sabor carne y pollo",
		peso: 15,
		precio: 8500,
		cantidad: 0,
		oferta: false,
		img: '/images/catchowgatos.png'
	},
	{
		id: 4,
		prod: "Cat Chow Gatitos",
		desc: "Alimento seco sabor carne y pollo",
		peso: 15,
		precio: 8900,
		cantidad: 0,
		oferta: false,
		img: '/images/catchowgatitos.png'
	},
	{
		id: 5,
		prod: "Dog Chow",
		desc: "Croquetas sabor carne y pollo",
		peso: 21,
		precio: 8100,
		cantidad: 0,
		oferta: false,
		img: '/images/dogchow.png'
	},
	{
		id: 6,
		prod: "Dog Chow Cachorros pequeños",
		desc: "Croquetas minis sabor carne y pollo",
		peso: 21,
		precio: 8400,
		cantidad: 0,
		oferta: false,
		img: '/images/dogchow_cach_ch.png'
	},
	{
		id: 7,
		prod: "Dog Chow Cachorros medianos y grandes",
		desc: "Croquetas sabor carne y pollo",
		peso: 21,
		precio: 8400,
		cantidad: 0,
		oferta: false,
		img: '/images/dogchow_cach_med.png'
	},
	{
		id: 8,
		prod: "Infinity Gatos",
		desc: "Alimento seco sabor carne",
		peso: 10,
		precio: 6900,
		cantidad: 0,
		oferta: false,
		img: '/images/Infinity.png'
	},
	{
		id: 9,
		prod: "Biopet",
		desc: "Alimento sabor arroz y pollo",
		peso: 20,
		precio: 8000,
		cantidad: 0,
		oferta: false,
		img: '/images/biopet.png'
	},
	{
		id: 10,
		prod: "9 Lives",
		desc: "Croquetas secas sabor salmón y atún",
		peso: 15,
		precio: 9300,
		cantidad: 0,
		oferta: false,
		img: '/images/9lives.png'
	},
	{
		id: 11,
		prod: "Dogui",
		desc: "Alimento sabor carne, pollo, cereales y vegetales",
		peso: 24,
		precio: 7800,
		cantidad: 0,
		oferta: false,
		img: '/images/dogui.png'
	},
	{
		id: 12,
		prod: "Gati",
		desc: "Croquetas sabor carne con cereales de",
		peso: 15,
		precio: 7600,
		cantidad: 0,
		oferta: false,
		img: '/images/gaty.png'
	},
	{
		id: 13,
		prod: "Sabrositos",
		desc: "Mix de carnes, cereales y vegetales",
		peso: 20,
		precio: 7000,
		cantidad: 0,
		oferta: false,
		img: '/images/sabrocitos.png'
	},
	{
		id: 14,
		prod: "Sabrositos Gatos",
		desc: "Alimento de pollo, carne y vegetales",
		peso: 20,
		precio: 7600,
		cantidad: 0,
		oferta: false,
		img: '/images/sabrositos_gato.png'
	},
	{
		id: 15,
		prod: "Whiskas",
		desc: "Croquetas sabor carne",
		peso: 10,
		precio: 9800,
		cantidad: 0,
		oferta: false,
		img: '/images/whiskas.png'
	},
	{
		id: 16,
		prod: "Whiskas Cachorros",
		desc: "Mini croquetitas sabor carne y leche",
		peso: 8,
		precio: 10500,
		cantidad: 0,
		oferta: false,
		img: '/images/whiskas_cach.png'
	}
]

