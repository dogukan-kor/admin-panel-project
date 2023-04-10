import '../css/Tablo.css'

function MobileTab(calisan){
    return(
        <div id={calisan.id}>
                <div className=' bg-slate-100  p-4 rounded-lg shadow space-y-3'>
                <div className=' flex items-center space-x-2 font-bold '>
                    <div> {calisan.name+" "+calisan.surname} | </div>
                    <div> {calisan.position}</div>
                    
                </div>
                <div className=' flex items-center'>Durum: <div class="h-3 w-3 rounded-full bg-green-500 ml-2 mr-1"></div>Çalışıyor </div>
                <div>Yapılan Ürün Sayısı: {calisan.successful_piece}</div>
                <div>Fire Sayısı: {calisan.fire_piece}</div>
                <div>Verimlilik: %90</div>

                <div><button className="bg-slate-300 rounded-lg py-2 px-3">İncele</button></div>

            </div>
            
      
        </div> 
        )
}

export default MobileTab;