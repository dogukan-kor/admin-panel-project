import '../css/App.css';
import Grafik from '../components/Grafik';
import Tablo from '../components/Tablo';
import Navbar from '../components/Navbar';
import useFetch from '../hooks/useFetch';


export default function Admin() {
  const {data,loading,error}=useFetch("/employee/getEmployee");

  return (
   <div>
     <div className=' flex '>
      <div className='admin-navbar'>
        <Navbar />
      </div>
      <div className= ' w-full'>
      <div className=' admin-menu'>
      <div className='  w-16'>
       <a href='/deneme'> <img src='img/menu2.png' alt='menu' className='p-3' /></a>
      </div>
      <div className='flex w-full '>    
       <div className=' admin-menu-text '><a href='deneme'>Anasayfa</a></div>
      <div className=' admin-menu-text '><a href='deneme'>Adminler</a></div>
      <div className=' admin-menu-text '><a href='deneme'>Siparişler</a></div>
      </div>
      <div className='w-16'>
      <a href='/deneme'> <img src='img/menu.png' alt='menu' className='p-3' /> </a>
      </div>
      </div>
        <Grafik />
        <Tablo data={data} error={error} loading={loading} />
        
      </div>
      
    </div>
   </div>
   
  );
}


