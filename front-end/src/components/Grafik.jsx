import '../css/Grafik.css'
function Grafik(){
    return(
        <div>
            <div class="lg:flex lg:justify-center  w-5/6 mx-auto">

            <div className='cerceve m-6 bg-orange-600'>
            <div class="flex flex-col items-center justify-center ">
              <div class=" py-4 my-3 bg-white rounded-full  ">
                <img src='img/verimlilik.png' alt='r1' className='grafik-img' />
              </div>
             <div className=' grafik-yazi'>
            <p className=' text-3xl text-white '>OEE</p>
            <p className='  text-orange-600 grafik-p'> %90</p>
            <p className='text-white'>(Son 2 ayın en iyi oranı.)</p>

             </div>
         </div>
             </div>

         <div className='cerceve bg-purple-950'>
               <div class="flex flex-col items-center justify-center ">
              <div class=" py-4 my-3 bg-white rounded-full">
                <img src='img/checked.png' alt='r1' className='grafik-img' />
              </div>
             <div className=' grafik-yazi'>
            <p className=' text-3xl text-white '>Üretilen Adet</p>
            <p className='   text-purple-950 grafik-p'> 20/10000</p>
            <p className='text-white'>(Her 100 saniyede 1 ürün yapıldı.)</p>
             </div>
         </div>
             </div>

               <div className='cerceve bg-cyan-700'>
               <div class="flex flex-col items-center justify-center ">
              <div class=" py-4 my-3 bg-white rounded-full">
                <img src='img/notice.png' alt='r1' className='grafik-img' />
              </div>
             <div className='grafik-yazi'>
            <p className=' text-3xl text-white '>Fire Sayısı</p>
            <p className='  text-cyan-700 grafik-p'> 780/10000</p>
            <p className='text-white'>(%4 Fire Verildi)</p>

             </div>
         </div>
               </div>

         <div className='cerceve bg-yellow-500'>
         <div class="flex flex-col items-center justify-center ">
              <div class=" py-4 my-3 bg-white rounded-full">
                <img src='img/hourglass.png' alt='r1' className='grafik-img' />
              </div>
             <div className='grafik-yazi'>
            <p className=' text-3xl text-white '>Kalan Süre</p>
            <p className='   text-yellow-500 grafik-p'> 1 gün 24 saat <br /> 12 dakika 23 saniye</p>
            <p className='text-white'>(Teslimat Tarihi:30.03.2023)</p>

             </div>
         </div>
               </div> 
            </div>
        </div>
        )
}

export default Grafik;