import { useState } from 'react'
import '/src/app.css'
import { Run_stroke } from './run_stroke'
function App() {
  return (
    <>
      <div className='wrapper'>
        <header className='hdr text-white relative'>
          <div className='px-[320px] max-w-[1920px] mx-auto'>
            <nav className='flex justify-end items-center gap-x-[178px] py-[70px] mb-[115px]'>
              <ul className='flex items-center gap-x-[68px] font-bold text-[24px] leading-[28px]'>
                <li><a className='hdr_a relative' href='#'>Home</a></li>
                <li><a className='hdr_a relative' href='#'>Shop</a></li>
                <li><a className='hdr_a relative' href='#'>About Us</a></li>
                <li><a className='hdr_a relative' href='#'>Contact</a></li>
              </ul>
              <button><img src="/header_shop_cart.svg" alt="" /></button>
            </nav>
          </div>
          <div className='contr'>
            <div className='text-center flex flex-col items-center'>
              <h1 className='mb-6 text-[82px] font-bold'>Bring Serenity to Your Place
              With Interior</h1>
              <p className='mb-[42px] text-'>find your dream plant for you home decoration with us, and we will make it happen.</p>
              <div className='py-[10px] px-[10px] border-[1px] rounded-full flex items-center gap-x-[30px] backdrop-blur-[10px] transition-shadow hover:shadow-2xl hover:shadow-[#ffffff27]'>
                <input className='bg-transparent outline-none text-[20px] ml-[20px] placeholder:text-white w-[340px]' placeholder='Search plant' type="text" />
                <button className='bg-[#525A55] rounded-full p-[15px]' type='submit'><img src="/search.svg" alt="" /></button>
              </div>
            </div>
            <div className='absolute py-[15px] pl-[24px] border-[1px] rounded-[50px] flex text-left gap-x-[30px] backdrop-blur-[10px] left-[145px] bottom-[269px]'>
              <div className='relative'>
                <h3>Milan Jack</h3>
                <span className='flex gap-x-6'>home seller, usa<span><img src="/star.svg" alt="" />4.9 rating</span></span>
                <p className='w-[268px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum.</p>
                <img src="/user_icon.svg" className='absolute top-[-45px] right-[-2px]' alt="" />
              </div>
            </div>
            <div className='absolute right-[169px]'>
              <div className='p-[19px] backdrop-blur-[4px] border-[1px] rounded-full'>
                <div className='w-4 h-4 rounded-full bg-white z-[1]'></div>
              </div>
            </div>
          </div>
          <div className='w-full absolute bottom-0 bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF00] h-[334px]'></div>
        </header>
        <main>
          <div className='contr overflow-hidden'>
            <div className='flex mx-auto gap-x-[193px] mb-[140px]'>
              <div className='flex gap-x-[20px] items-center'>
                <img src="/boxx.svg" alt="" />
                <div className='whitespace-nowrap flex flex-col gap-y-[14px]'>
                  <h3 className='font-medium text-[27px]'>Free Shapping</h3>
                  <p className='text-[#828282] font-medium text-[17px]'>No charge for each delivery</p>
                </div>
              </div>
              <div className='flex gap-x-[20px] items-center'>
                <img src="/wallet.svg" alt="" />
                <div className='whitespace-nowrap flex flex-col gap-y-[14px]'>
                  <h3 className='font-medium text-[27px]'>Quick Payment</h3>
                  <p className='text-[#828282] font-medium text-[17px]'>100% secure payment</p>
                </div>
              </div>
              <div className='flex gap-x-[20px] items-center'>
                <img src="/social.svg" alt="" />
                <div className='whitespace-nowrap flex flex-col gap-y-[14px]'>
                  <h3 className='font-medium text-[27px]'>24/7 Support</h3>
                  <p className='text-[#828282] font-medium text-[17px]'>Quick support</p>
                </div>
              </div>
            </div>
            <div className='mb-[136px] relative'>
              <h2 className='mb-[29px] w-[485px] text-[75px] leading-[89px] font-semibold'>Best Seller 
              Product</h2>
              <a className='mb-[43px] flex gap-x-[21px] font-medium text-[#4F4F4F] text-[26px]' href="">See all colection<img src="/arrow.svg" alt="" /></a>
              <Run_stroke />
              <div className='absolute w-[321px] h-[625px] bg-gradient-to-l from-[#FFFFFF] to-[#FFFFFF00] right-[-360px] bottom-[76px]'></div>
              <div className='absolute w-[321px] h-[625px] bg-gradient-to-l from-[#FFFFFF00] to-[#FFFFFF]  left-[-360px] bottom-[76px]'></div>
            </div>
            <div className='text-center mb-[209px]'>
              <h2 className='mb-[32px] text-[64px] font-semibold leading-[75px]'>Interior Plant Reference</h2>
              <p className='mb-[83px] text-6 leading-[28px]'>make your home so comfortable with refreshing plants</p>
              <ul>
                <li className='flex justify-between mb-[59px]'>
                  <div className='flex justify-center items-center rounded-[30px] bg-[url("/grid_interior_1.png")] w-[700px] h-[615px] bg-no-repeat text-white text-[64px] font-semibold'>living room</div>
                  <div className=' rounded-[30px] text-white bg-[url("/grid_interior_2.png")] w-[430px] h-[645px]'></div>
                </li>
                <li className='flex justify-between'>
                  <div className=' rounded-[30px] text-white bg-[url("/grid_interior_4.png")] w-[430px] h-[645px]'></div>
                  <div className='flex justify-center items-center rounded-[30px] text-white text-[64px] font-semibold bg-[url("/grid_interior_3.png")] w-[658px] h-[595px] bg-no-repeat'>see all</div>
                </li>
              </ul>
            </div>
          </div>
          <div className='contr bg-[#262626] text-white'>
            <div className='py-[71px] text-center'>
              <h2 className='text-[63px] font-semibold leading-[82px] mb-[15px]'>Ready for a <span className='text-[#DCB47A]'>Site visit ?</span></h2>
              <p className='mb-[36px] text-[#FFFFFFCC] text-[21px] leading-[27px]'>Lorem ipsum dolo elit Lorem ipsum dolo</p>
              <button className='px-[55px] py-[21px] bg-[#DCB47A] rounded-full font-bold leading-[20px] border-[1px] transition-colors border-transparent btn'>View now</button>
            </div>
          </div>
        </main>
        <footer>
          <div className='max-w-[1920px] mx-auto'>
            <section className='pt-[203px] pb-[52px] flex gap-x-[122px] px-[194px]'>
              <div className='pr-[12px] pl-[30px] py-[12px] border-[1px] border-[#878787] rounded-full flex gap-x-[20px] h-[71px] mt-[92px] transition-shadow hover:shadow-lg hover:shadow-[#26262610]'>
                <input type="text" className='outline-none w-[275px] bg-transparent text-[20px] leading-[23px]' placeholder='Enter your email' />
                <button className='px-[24px] py-[12px] bg-[#DCB47A] rounded-full text-white leading-[24px] border-[1px] transition-colors border-transparent btn'>Subscribe</button>
              </div>
              <ul className='flex gap-x-[88px]'>
                <li>
                  <h3 className='mb-[34px] font-bold text-[24px] leading-[34px] whitespace-nowrap'>Support</h3>
                  <div className='whitespace-nowrap flex flex-col gap-y-[17px] font-medium'>
                    <a className='footer_a transition-colors' href='#'>About Us</a>
                    <a className='footer_a transition-colors' href='#'>Careers</a>
                    <a className='footer_a transition-colors' href='#'>Blog</a>
                  </div>
                </li>
                <li>
                  <h3 className='mb-[34px] font-bold text-[24px] leading-[34px] whitespace-nowrap'>Useful Link</h3>
                  <div className='whitespace-nowrap flex flex-col gap-y-[17px] font-medium'>
                    <a className='footer_a transition-colors' href='#'>Payment & Tax</a>
                    <a className='footer_a transition-colors' href='#'>Team of service</a>
                    <a className='footer_a transition-colors' href='#'>Privaci Policy</a>
                  </div>
                </li>
                <li>
                  <h3 className='mb-[34px] font-bold text-[24px] leading-[34px] whitespace-nowrap'>Our Menu</h3>
                  <div className='whitespace-nowrap flex flex-col gap-y-[17px] font-medium'>
                    <a className='footer_a transition-colors' href='#'>Best Product</a>
                    <a className='footer_a transition-colors' href='#'>Category</a>
                  </div>
                </li>
                <li>
                  <h3 className='mb-[34px] font-bold text-[24px] leading-[34px] whitespace-nowrap'>Address</h3>
                  <div className=' flex flex-col gap-y-[17px] font-medium'>
                    <a className='footer_a transition-colors w-[340px]' href='#'>JL. Setiabudhi No. 193 Sukasari, Bandung
                      West Java, Indonesia
                    </a>
                    <a className='footer_a transition-colors' href='#'>hallo@daunku.com</a>
                  </div>
                </li>
              </ul>
            </section>
            <div className='w-full h-[1px] bg-[#000000]'></div>
            <p className='text-center pt-[52px] pb-[69px] leading-[28px] text-[24px]'>© 2023 davixq - All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
