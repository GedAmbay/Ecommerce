import React from 'react'
import Container from './components/Container'
import { products } from '../../utils/products'
import { truncateText } from '../../utils/truncateText'
import ProductCard from './products/ProductCard'

const HomePage = () => {
  
  return (
    <div className='p-8'>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product}/>
          })}
        </div>
      </Container>
    </div>
  )
}

export default HomePage