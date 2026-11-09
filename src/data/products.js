export const products = [
  { id: 'product-1', image: 'images/viva/product-1.jpg', title: 'Колье с подвеской-птицей', material: 'Колье · цветные бусины', price: '2 300 ₽', tag: 'В наличии', featured: true, type: 'necklaces' },
  { id: 'product-2', image: 'images/viva/product-2.jpg', title: 'Яркое колье с бирюзой', material: 'Колье · цветные бусины', price: '3 900 ₽', tag: 'В наличии', featured: true, type: 'necklaces' },
  { id: 'product-3', image: 'images/viva/product-3.jpg', title: 'Браслет с подвеской-медведем', material: 'Браслет · металлическая подвеска', price: '2 600 ₽', tag: 'Новинка', featured: true, type: 'bracelets' },
  { id: 'product-4', image: 'images/viva/product-4.jpg', title: 'Серьги с белым камнем', material: 'Серьги · натуральный камень', price: '3 600 ₽', type: 'earrings' },
  { id: 'product-5', image: 'images/viva/product-5.jpg', title: 'Жемчужное колье с крестом', material: 'Колье · жемчуг и подвеска', price: 'от 2 800 ₽', tag: 'На заказ', type: 'necklaces' },
  { id: 'product-6', image: 'images/viva/product-6.jpg', title: 'Именное колье', material: 'Колье · индивидуальная надпись', price: '3 900 ₽', type: 'necklaces' },
];

export const featuredProducts = products.filter((product) => product.featured);
