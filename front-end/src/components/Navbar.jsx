import '../css/Tablo.css'

export default function Navbar(){
    return(
        <div>
         <div className='flex items-center my-2 p-4 border-b-2 border-b-zinc-400 '>
           <img src='img/logo.png' alt='Doğuş' className='w-12 mr-6' ></img>  DOĞUŞ A.Ş 
           </div>
           <div className=' flex items-center my-2 p-4 border-b-2 border-b-zinc-400  '>
           <img src='img/canadian.png' alt='admin-profil' className='w-12 mr-6 rounded-full bg-white' ></img>  Doğukan KÖR 
           </div>
           <div className=' py-3 px-2 border-b-2 border-b-zinc-600   '>
           <input className=' text-black w-3/4' placeholder='Arama yapınız..'></input>
           <button className=' bg-slate-400 w-1/4  text-gray-100'>Ara</button>
           </div>
           <div className='admin-navbar-text'>
           <a href='/'>Tablolar</a> 
           </div>
           <div className='admin-navbar-text'>
           <a href='/'>Grafikler</a> 
           </div>
           <div className='admin-navbar-text'>
           <a href='/'>Stoktaki Ürünler</a> 
           </div>
           <div className=' admin-navbar-text   '>
           <a href='/'>Stokta Olmayan Ürünler</a> 
           </div>
           <div className='admin-navbar-text'>
           <a href='/'>Tablolar</a> 
           </div>
           <div className='admin-navbar-text'>
           <a href='/'>Grafikler</a> 
           </div>
           <div className='admin-navbar-text'>
           <a href='/'>Stoktaki Ürünler</a> 
           </div>
           <div className=' admin-navbar-text   '>
           <a href='/'>Stokta Olmayan Ürünler</a> 
           </div>
       
         

        
        </div>
        )
}

