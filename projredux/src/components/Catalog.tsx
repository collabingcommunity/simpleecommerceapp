import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  const [catalog, setCalog] = useState<IProduct[]>([]);

  const findCatalog = () => {
    api.get('products').then(response => {
      setCalog(response.data);
    })
  };

  useEffect(() => {
    findCatalog();
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <CatalogItem 
          key={product.id}
          product={product}
        />
      ))}
    </main>
  );

}

export default Catalog;