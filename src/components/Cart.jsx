import carbonNeutral from '../assets/images/icon-carbon-neutral.svg'
import deleteItem from '../assets/images/icon-remove-item.svg'
import emptyCart from '../assets/images/illustration-empty-cart.svg'

export default function Cart() {
    return (
      <>
        <div className='bg-rose50 p-5 w-full'>
        {/* count items in () */}
            <h2 className='text-red font-bold text-xxl mb-4'>Your Cart (7)</h2>

            <div className='flex flex-col'>
                <div className='flex flex-col' id='individualItem'>
                {/* per Product in Cart (if not 0!) then image */}
                    <span className='font-bold text-sm'>Classic Tiramisu</span>
                    <div className='text-rose300 flex justify-between items-center'>
                    <span>
                      <span className='text-red font-bold text-xs mr-3'>1x </span>
                      <span className='text-sm'>$5.50 </span>
                      <span className='text-rose500 text-sm'>= $5.50</span>
                    </span>
                    <img className='w-[10px] h-[10px] inline rounded-full outline outline-1 hover:cursor-pointer hover:brightness-50' src={deleteItem} alt='remove item'/>
                    </div>
                    <hr className='mt-3 mb-2 border-rose100'/>
                </div>

                <div className='flex justify-between items-center mt-4'>
                  <span className='text-sm'>Order Total</span>
                  <span className='font-bold text-xl'>$46.50</span>
                </div>
            </div>

            <div className='bg-rose100 rounded-sm text-center p-2 mb-5 mt-6 text-xs'>
            <img className='inline' src={carbonNeutral}/> This is a <span className='font-bold'>carbon-neutral</span> delivery
            </div>
            
            <button className='bg-red text-rose50 p-3 rounded-3xl w-full text-xs hover:cursor-pointer hover:brightness-[0.8]'>
            Confirm Order</button>
        </div>
      </>
    )
  }