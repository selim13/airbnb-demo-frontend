import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';

export default [
  {
    id: 10,
    name: 'Apartamento, piscina y parqueadero para 8 personas',
    image: img1,
    price: 50,
    roomType: 'Entire apartment',
    bedsNumber: 3,
    reviews: { rating: 4, count: 4 },
  },
  {
    id: 11,
    name: 'Full apartment in the best area of the city',
    image: img2,
    price: 51,
    roomType: 'Entire apartment',
    bedsNumber: 4,
    reviews: {},
    hot: true,
  },
  {
    id: 12,
    name: 'Beautiful Apartament North Armenia Quindio',
    image: img3,
    price: 45,
    roomType: 'Entire apartment',
    bedsNumber: 4,
    reviews: { rating: 5, count: 3 },
    hot: true,
  },
];
