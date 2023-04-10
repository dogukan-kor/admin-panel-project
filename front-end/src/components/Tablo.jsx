import '../css/Tablo.css'
import useFetch from '../hooks/useFetch';
import MobileTab from '../components/MobileTab';

function createTableMobil(data){
    return(
      <MobileTab
      id={data._id}
      name={data.name} 
      surname={data.surname}
      position={data.position}
      status={data.status}
      successful_piece={data.successful_piece}
      fire_piece={data.fire_piece}
      />
    )
  }

 
  

function Tablo(props){
    const {data}=useFetch("/employee/getEmployee");
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
        {data.map((calisan)=>(
            <tr id={calisan._id} className=' bg-slate-100'>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>{calisan.name+" "+calisan.surname} </td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>{calisan.position} </td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>
                <div className='flex items-center'> 
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div> 
                {calisan.status}
                </div>
                </td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>{calisan.successful_piece}</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>{calisan.fire_piece}</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'>%67</td>
                <td className='p-3 text-sm text-slate-900 whitespace-nowrap'><button className="table-buton">İncele</button></td>
            </tr>
        ))}
         
           
        </tbody>
       </table>
       
        </div>

        <div className=' grid grid-cols-1 gap-4 lg:hidden w-5/6 md:w-1/2 text-lg mx-auto '>
            <p className=' text-center bg-sky-900 text-white'>Durum</p>
            {data.map(createTableMobil)}
        </div> 
        </div>
        )
}

export default Tablo;