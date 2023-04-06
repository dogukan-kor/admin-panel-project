import '../css/App.css';
import Grafik from '../components/Grafik'

export default function Anasayfa() {
  return (
   <div>
    <div className=' bg-slate-500 flex'>
      <div className=' bg-red-600 w-1/12'>navbar</div>
      <div className=' bg-slate-600 w-11/12'>
        <Grafik />
      </div>
    </div>
    
   </div>
   
  );
}


