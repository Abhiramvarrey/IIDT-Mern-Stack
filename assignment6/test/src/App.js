import React from 'react';
import './styles.css';
const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image: 'https://course-api.com/images/store/product-1.jpeg',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-2.jpeg',
    price: 79.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-3.jpeg',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-4.jpeg',

    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-5.jpeg',

    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-6.jpeg',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-7.jpeg',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-8.jpeg',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-9.jpeg',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-10.jpeg',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image: 'https://course-api.com/images/store/product-11.jpeg',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-12.jpeg',
    price: 9.99,
  },
];


const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
  </div>
);

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

const App = () => {
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filterByCategory = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.company === category.toLowerCase()));
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(term)
      )
    );
  };

  const categories = ['All', ...new Set(products.map((product) => product.company))];

  return (
    <div className="container">
      <header className="header">
        <h2>Your Furniture Store Name</h2>
      </header>
      <div className="filters">
        <div className="category-filter">
          {categories.map((category) => (
            <button key={category} onClick={() => filterByCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button>Search</button>
        </div>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
