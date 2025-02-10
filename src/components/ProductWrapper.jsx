import ProductCard from "./ProductCard"

export default function ProductWrapper({data}) {
    return (
      <>
      <span className='font-bold text-3xl m-7'>Desserts</span>
        <div className='flex flex-row flex-wrap justify-between gap-5 m-5'>
        {data.map((item, index) => {
          return (
            <ProductCard
            key={index}
            image={item.image.desktop}
            category={item.category}
            name={item.name}
            price={item.price}
            />
          )
        })}        
      </div>
      </>
    )
  }