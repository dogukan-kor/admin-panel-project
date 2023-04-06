import '../css/Tablo.css'

function Tablo(){
    return(
        <div>
       
        <div className=' overflow-auto rounded-lg hidden lg:block w-full my-14'>
        <p className=' text-center font-serif text-2xl'>Haftalık Çalışan Durum Tablosu</p>
       <table className='w-1/3 md:w-2/3 mx-auto my-3 '>
       
        <thead className=' bg-slate-600 text-white border-b-2 border-gray-700'>
            <th className=' p-3 text-sm font-semibol tracking-wide text-left'>Adı Soyadı</th>
            <th className=' p-3 text-sm font-semibol tracking-wide text-left'>Ünvanı</th>
            <th className=' p-3 text-sm font-semibol tracking-wide text-left'>Durum</th>
            <th className=' p-3 text-sm font-semibol tracking-wide text-left'>Yapılan Ürün Sayısı</th>
            <th className=' p-3 text-sm font-semibol tracking-wide text-left'>Fire Sayısı</th>
            <th className=' p-3 text-sm font-semibol tracking-wide text-left'>Verimlilik</th>
            <th className=' p-3 text-sm font-semibol tracking-wide text-left'>Detay</th>
        </thead>
        <tbody className=' divide-y divide-gray-500'>
            <tr className=' bg-slate-100'>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>Doğukan KÖR</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>Baş Operatör</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>
                <div className='flex items-center'> 
                <div class="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  Beklemede
                  </div>
                </td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>1300</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>200</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>%67</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'><button className="table-buton">İncele</button></td>
            </tr>
            <tr className=' bg-slate-100'>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>Volkan ERYİĞİT</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>Ustabaşı</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>
                <div className='flex items-center'> 
                <div class="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  Çalışıyor
                  </div>
                </td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>2300</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>140</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>%92</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'><button className="table-buton">İncele</button></td>
            </tr>
            <tr className=' bg-slate-100'>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>Umuthan KAYGUSUZ</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>Bakımcı</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>
                <div className='flex items-center'> 
                <div class="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  Molada
                  </div>
                </td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>210</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>40</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>%82</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'><button className="table-buton">İncele</button></td>
            </tr>
        </tbody>
       </table>
       
        </div>


        <div className=' grid grid-cols-1 gap-4 lg:hidden w-5/6 md:w-1/2 text-lg mx-auto '>
            <p className=' text-center bg-sky-900 text-white'>Haftalık Çalışan Durum Tablosu</p>
            <div className=' bg-slate-100  p-4 rounded-lg shadow space-y-3'>
                <div className=' flex items-center space-x-2 font-bold '>
                    <div>Doğukan KÖR |</div>
                    <div> Baş Operatör</div>
                    
                </div>
                <div className=' flex items-center'>Durum: <div class="h-3 w-3 rounded-full bg-green-500 ml-2 mr-1"></div>Çalışıyor </div>
                <div>Yapılan Ürün Sayısı: 1300</div>
                <div>Fire Sayısı: 200</div>
                <div>Verimlilik: %90</div>

                <div><button className="bg-slate-300 rounded-lg py-2 px-3">İncele</button></div>

            </div>
            <div className='bg-slate-100  p-4 rounded-lg shadow space-y-3'>
                <div className=' flex items-center space-x-2 font-bold '>
                    <div>Volkan ERYİĞİT |</div>
                    <div> Operatör</div>
                    
                </div>
                <div className=' flex items-center'>Durum: <div class="h-3 w-3 rounded-full bg-red-500 ml-2 mr-1"></div>Mola </div>
                <div>Yapılan Ürün Sayısı: 2300</div>
                <div>Fire Sayısı: 10</div>
                <div>Verimlilik: %90</div>
                <div><button className="bg-slate-300 rounded-lg py-2 px-3">İncele</button></div>
            </div>
        </div>
        
        </div>
        )
}

export default Tablo;