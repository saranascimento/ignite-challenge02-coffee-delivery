import americano from '../src/assets/coffees/americano.svg'
import arabe from '../src/assets/coffees/arabe.svg'
import cafeComLeite from '../src/assets/coffees/cafe-com-leite.svg'
import expressoGelado from '../src/assets/coffees/expresso-gelado.svg'
import capuccino from '../src/assets/coffees/capuccino.svg'
import chocolateQuente from '../src/assets/coffees/chocolate-quente.svg'
import cubano from '../src/assets/coffees/cubano.svg'
import expressoCremoso from '../src/assets/coffees/expresso-cremoso.svg'
import expresso from '../src/assets/coffees/expresso.svg'
import havaiano from '../src/assets/coffees/havaiano.svg'
import irlandes from '../src/assets/coffees/irlandes.svg'
import latte from '../src/assets/coffees/latte.svg'
import macchiato from '../src/assets/coffees/macchiato.svg'
import mocaccino from '../src/assets/coffees/mochaccino.svg'

export const coffeesData = [
  {
    id: '1',
    image: expresso,
    types: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    amount: 1,
  },
  {
    id: '2',
    image: americano,
    types: ['tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    amount: 1,
  },
  {
    id: '3',
    image: expressoCremoso,
    types: ['tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    amount: 1,
  },
  {
    id: '4',
    image: expressoGelado,
    types: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    amount: 1,
  },
  {
    id: '5',
    image: cafeComLeite,
    types: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    amount: 1,
  },
  {
    id: '6',
    image: latte,
    types: ['tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    amount: 1,
  },
  {
    id: '7',
    image: capuccino,
    types: ['tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    amount: 1,
  },
  {
    id: '8',
    image: macchiato,
    types: ['tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    amount: 1,
  },
  {
    id: '9',
    image: mocaccino,
    types: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    amount: 1,
  },
  {
    id: '10',
    image: chocolateQuente,
    types: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    amount: 1,
  },
  {
    id: '11',
    image: cubano,
    types: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    amount: 1,
  },
  {
    id: '12',
    image: havaiano,
    types: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    amount: 1,
  },
  {
    id: '13',
    image: arabe,
    types: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    amount: 1,
  },
  {
    id: '14',
    image: irlandes,
    types: ['especial', 'alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    amount: 1,
  },
]
