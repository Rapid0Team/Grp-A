export default function HeaderPhone({setShow}){
    return(
        <div className="w-full  h-screen flex justify-center  items-center">
            <ul className=" w-full flex flex-col justify-center items-center ">
            <li onClick={()=>setShow(false)}  className="text-2xl w-full text-center py-4 font-medium text-[#0056D2] hover:text-white hover:bg-gradient-to-r from-[#0056D2] via-[#007BFF] to-[#00A8E8] transition-all ">
              <a href="">Hardware</a>
            </li>
            <li onClick={()=>setShow(false)} className="text-2xl w-full text-center py-4 font-medium text-[#0056D2] hover:text-white hover:bg-gradient-to-r from-[#0056D2] via-[#007BFF] to-[#00A8E8] transition-all ">
              <a href="">Software</a>
            </li>
            <li onClick={()=>setShow(false)} className="text-2xl w-full text-center py-4 font-medium text-[#0056D2] hover:text-white hover:bg-gradient-to-r from-[#0056D2] via-[#007BFF] to-[#00A8E8] transition-all ">
              <a href="">Accessories</a>
            </li>
            <li onClick={()=>setShow(false)} className="text-2xl w-full text-center py-4 font-medium text-[#0056D2] hover:text-white hover:bg-gradient-to-r from-[#0056D2] via-[#007BFF] to-[#00A8E8] transition-all ">
           <a href="">Deals</a>   
            </li>
            <li onClick={()=>setShow(false)} className="text-2xl w-full text-center py-4 font-medium text-[#0056D2] hover:text-white hover:bg-gradient-to-r from-[#0056D2] via-[#007BFF] to-[#00A8E8] transition-all ">
             <a href="">Support</a> 
            </li>
          </ul>
        </div>
    )
}