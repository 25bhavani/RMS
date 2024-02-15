import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Andhra Lunch',
    
    cookTime: '40-50',
    price: 99,
    favorite: false,
    origins: ['India','Andhra'],
    stars: 4.5,
    imageUrl: 'assets/f1-transformed.webp',
    tags: ['Lunch'],
  },
  {
    id:'2',
    name: 'Kerala Lunch',
    
    price: 99,
    cookTime: '40-50',
    favorite: true,
    origins: ['India','Kerala'],
    stars: 4.7,
    imageUrl: 'assets/f2-transformed.webp',
    tags: [ 'Lunch'],
  },
  {
    id:'3',
    name: 'Kannada Lunch',
    
    price: 99,
    cookTime: '40-50',
    favorite: false,
    origins: ['India','Karnataka'],
    stars: 3.5,
    imageUrl: 'assets/ff3-transformed.jpeg',
    tags: ['Lunch'],
  },
  {
    id:'4',
    name: 'TamilNadu Lunch',
    
    price: 99,
    cookTime: '40-50',
    favorite: true,
    origins: ['India','TamilNadu'],
    stars: 3.3,
    imageUrl: 'assets/ff4-transformed.jpeg',
    tags: ['Lunch'],
  },
  {
    id:'5',
    name: 'North Indian Lunch',
    
    price: 99,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', ],
    stars: 3.0,
    imageUrl: 'assets/ff5-transformed.jpg',
    tags: ['Lunch'],
  },
  {
    id:'6',
    name: 'Veg Biryani',
    
    price: 99,
    cookTime: '40-50',
    favorite: false,
    origins: ['India'],
    stars: 4.0,
    imageUrl: 'assets/veg-biryani .png',
    tags: ['Biryani'],
  },
  // {
  //   id:'7',
  //   name: 'Spicy Cheese Burger',
  //   price: 12,
  //   cookTime: '20-30',
  //   favorite: false,
  //   origins: ['Indian'],
  //   stars: 4.0,
  //   imageUrl: 'assets/food-7.jpg',
  //   tags: ['FastFood', 'Burger', 'Lunch'],
  // },
  // {
  //   id:'8',
  //   name: 'Vegetables Magento Pizza',
  //   price: 9,
  //   cookTime: '45-50',
  //   favorite: false,
  //   origins: ['indian'],
  //   stars: 4.0,
  //   imageUrl: 'assets/food-8.jpg',
  //   tags: ['FastFood', 'Pizza', 'Lunch'],
  // },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'Lunch', count: 5 },
  { name: 'Biryani', count:1 }
  
]
