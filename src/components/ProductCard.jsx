import cartImg from '../../public/images/icon-add-to-cart.svg'

export default function ProductCard({image, category, name, price}) {
    return (
      <>
        <div className='w-1/4'>
            <div>
                <img className='rounded-lg' src={image} alt={name}/>
                <div className='bg-rose50 text-center p-3 rounded-3xl w-3/4 border relative bottom-7 m-auto  hover:cursor-pointer hover:border-red hover:text-red'>
                  <img className='inline' 
                  src={cartImg} alt='Add to Cart'/>
                  <span className='ml-2 text-sm font-bold'>Add to Cart</span>
                </div>
            </div>
            <div className='flex flex-col'>
              <span className='text-rose400 text-sm'>{category}</span>
              <span className='my-1'>{name}</span>
              <span className='text-red font-bold text-sm'>${price.toFixed(2)}</span>
            </div>
        </div>
      </>
    )
  }