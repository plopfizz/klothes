import {
  DifferentCategories,
  Genders,
  ProductTypes,
} from '../enums/gender.enum';

export interface productType {
  name: string;
  productType: ProductTypes;
  type: DifferentCategories;
  gender: Genders[];
}
export const filteredData = {
  brands: {
    Nike: [
      {
        brand: 'Nike',
        title: 'Air Jordan 1 Retro High',
        subTitle: 'Basketball Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'Black',
      },
      {
        brand: 'Nike',
        title: 'Air Max 270',
        subTitle: 'Casual Shoes',
        price: 150,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: false,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Force 1',
        subTitle: 'Casual Shoes',
        price: 100,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'White',
      },
    ],
    Adidas: [
      {
        brand: 'Adidas',
        title: 'UltraBoost 21',
        subTitle: 'Running Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'NMD R1',
        subTitle: 'Sneakers',
        price: 130,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'Stan Smith',
        subTitle: 'Originals Shoes',
        price: 85,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Superstar',
        subTitle: 'Originals Shoes',
        price: 90,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'White',
      },
    ],
    Puma: [
      {
        brand: 'Puma',
        title: 'RS-X3 Puzzle',
        subTitle: 'Sneakers',
        price: 110,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'Blue',
      },
      {
        brand: 'Puma',
        title: 'Cali Sport',
        subTitle: "Women's Sneakers",
        price: 100,
        sizes: [
          {
            sizeNumber: 6,
            isAvailable: true,
          },
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'Rider Vintage',
        subTitle: 'Unisex Sneakers',
        price: 80,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'Black',
      },
    ],
  },
  colors: {
    Black: [
      {
        brand: 'Nike',
        title: 'Air Jordan 1 Retro High',
        subTitle: 'Basketball Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'NMD R1',
        subTitle: 'Sneakers',
        price: 130,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'Black',
      },
      {
        brand: 'Puma',
        title: 'Rider Vintage',
        subTitle: 'Unisex Sneakers',
        price: 80,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'Black',
      },
    ],
    White: [
      {
        brand: 'Adidas',
        title: 'UltraBoost 21',
        subTitle: 'Running Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Max 270',
        subTitle: 'Casual Shoes',
        price: 150,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: false,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'Cali Sport',
        subTitle: "Women's Sneakers",
        price: 100,
        sizes: [
          {
            sizeNumber: 6,
            isAvailable: true,
          },
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Stan Smith',
        subTitle: 'Originals Shoes',
        price: 85,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: ['../../assets/image1.jpg', '../../assets/image2.jpg'],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Force 1',
        subTitle: 'Casual Shoes',
        price: 100,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link36',
          'url Link37',
          'url Link38',
          'url Link39',
          'url Link40',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Superstar',
        subTitle: 'Originals Shoes',
        price: 90,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link46',
          'url Link47',
          'url Link48',
          'url Link49',
          'url Link50',
        ],
        color: 'White',
      },
    ],
    Blue: [
      {
        brand: 'Puma',
        title: 'RS-X3 Puzzle',
        subTitle: 'Sneakers',
        price: 110,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link11',
          'url Link12',
          'url Link13',
          'url Link14',
          'url Link15',
        ],
        color: 'Blue',
      },
    ],
  },
  sizes: {
    'size 7': [
      {
        brand: 'Nike',
        title: 'Air Jordan 1 Retro High',
        subTitle: 'Basketball Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link1',
          'url Link2',
          'url Link3',
          'url Link4',
          'url Link5',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'UltraBoost 21',
        subTitle: 'Running Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link6',
          'url Link7',
          'url Link8',
          'url Link9',
          'url Link10',
        ],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Max 270',
        subTitle: 'Casual Shoes',
        price: 150,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link16',
          'url Link17',
          'url Link18',
          'url Link19',
          'url Link20',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'NMD R1',
        subTitle: 'Sneakers',
        price: 130,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link21',
          'url Link22',
          'url Link23',
          'url Link24',
          'url Link25',
        ],
        color: 'Black',
      },
      {
        brand: 'Puma',
        title: 'Cali Sport',
        subTitle: "Women's Sneakers",
        price: 100,
        sizes: [
          {
            sizeNumber: 6,
            isAvailable: true,
          },
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link26',
          'url Link27',
          'url Link28',
          'url Link29',
          'url Link30',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Stan Smith',
        subTitle: 'Originals Shoes',
        price: 85,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link31',
          'url Link32',
          'url Link33',
          'url Link34',
          'url Link35',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'Rider Vintage',
        subTitle: 'Unisex Sneakers',
        price: 80,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link41',
          'url Link42',
          'url Link43',
          'url Link44',
          'url Link45',
        ],
        color: 'Black',
      },
    ],
    'size 8': [
      {
        brand: 'Nike',
        title: 'Air Jordan 1 Retro High',
        subTitle: 'Basketball Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link1',
          'url Link2',
          'url Link3',
          'url Link4',
          'url Link5',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'UltraBoost 21',
        subTitle: 'Running Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link6',
          'url Link7',
          'url Link8',
          'url Link9',
          'url Link10',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'RS-X3 Puzzle',
        subTitle: 'Sneakers',
        price: 110,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link11',
          'url Link12',
          'url Link13',
          'url Link14',
          'url Link15',
        ],
        color: 'Blue',
      },
      {
        brand: 'Nike',
        title: 'Air Max 270',
        subTitle: 'Casual Shoes',
        price: 150,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link16',
          'url Link17',
          'url Link18',
          'url Link19',
          'url Link20',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'NMD R1',
        subTitle: 'Sneakers',
        price: 130,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link21',
          'url Link22',
          'url Link23',
          'url Link24',
          'url Link25',
        ],
        color: 'Black',
      },
      {
        brand: 'Puma',
        title: 'Cali Sport',
        subTitle: "Women's Sneakers",
        price: 100,
        sizes: [
          {
            sizeNumber: 6,
            isAvailable: true,
          },
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link26',
          'url Link27',
          'url Link28',
          'url Link29',
          'url Link30',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Stan Smith',
        subTitle: 'Originals Shoes',
        price: 85,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link31',
          'url Link32',
          'url Link33',
          'url Link34',
          'url Link35',
        ],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Force 1',
        subTitle: 'Casual Shoes',
        price: 100,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link36',
          'url Link37',
          'url Link38',
          'url Link39',
          'url Link40',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'Rider Vintage',
        subTitle: 'Unisex Sneakers',
        price: 80,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link41',
          'url Link42',
          'url Link43',
          'url Link44',
          'url Link45',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'Superstar',
        subTitle: 'Originals Shoes',
        price: 90,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link46',
          'url Link47',
          'url Link48',
          'url Link49',
          'url Link50',
        ],
        color: 'White',
      },
    ],
    'size 9': [
      {
        brand: 'Nike',
        title: 'Air Jordan 1 Retro High',
        subTitle: 'Basketball Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link1',
          'url Link2',
          'url Link3',
          'url Link4',
          'url Link5',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'UltraBoost 21',
        subTitle: 'Running Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link6',
          'url Link7',
          'url Link8',
          'url Link9',
          'url Link10',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'RS-X3 Puzzle',
        subTitle: 'Sneakers',
        price: 110,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link11',
          'url Link12',
          'url Link13',
          'url Link14',
          'url Link15',
        ],
        color: 'Blue',
      },
      {
        brand: 'Nike',
        title: 'Air Max 270',
        subTitle: 'Casual Shoes',
        price: 150,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link16',
          'url Link17',
          'url Link18',
          'url Link19',
          'url Link20',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'NMD R1',
        subTitle: 'Sneakers',
        price: 130,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link21',
          'url Link22',
          'url Link23',
          'url Link24',
          'url Link25',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'Stan Smith',
        subTitle: 'Originals Shoes',
        price: 85,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link31',
          'url Link32',
          'url Link33',
          'url Link34',
          'url Link35',
        ],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Force 1',
        subTitle: 'Casual Shoes',
        price: 100,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link36',
          'url Link37',
          'url Link38',
          'url Link39',
          'url Link40',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'Rider Vintage',
        subTitle: 'Unisex Sneakers',
        price: 80,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link41',
          'url Link42',
          'url Link43',
          'url Link44',
          'url Link45',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'Superstar',
        subTitle: 'Originals Shoes',
        price: 90,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link46',
          'url Link47',
          'url Link48',
          'url Link49',
          'url Link50',
        ],
        color: 'White',
      },
    ],
    'size 10': [
      {
        brand: 'Puma',
        title: 'RS-X3 Puzzle',
        subTitle: 'Sneakers',
        price: 110,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link11',
          'url Link12',
          'url Link13',
          'url Link14',
          'url Link15',
        ],
        color: 'Blue',
      },
      {
        brand: 'Nike',
        title: 'Air Force 1',
        subTitle: 'Casual Shoes',
        price: 100,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link36',
          'url Link37',
          'url Link38',
          'url Link39',
          'url Link40',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Superstar',
        subTitle: 'Originals Shoes',
        price: 90,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link46',
          'url Link47',
          'url Link48',
          'url Link49',
          'url Link50',
        ],
        color: 'White',
      },
    ],
    'size 6': [
      {
        brand: 'Puma',
        title: 'Cali Sport',
        subTitle: "Women's Sneakers",
        price: 100,
        sizes: [
          {
            sizeNumber: 6,
            isAvailable: true,
          },
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link26',
          'url Link27',
          'url Link28',
          'url Link29',
          'url Link30',
        ],
        color: 'White',
      },
    ],
  },
  priceRange: {
    start: 80,
    end: 180,
  },
};
