import Link from 'next/link'


const Naviagation = () => {
    return (
      <section className='Naviagation'>
      <section>
        <nav >
            <ul>
              
           
                <li ><Link href="/">
          <a className='TRFIKO'>TRFIKO </a>
        </Link>
        </li>
        <li>
                <Link href="/about">
          <a>About</a>
        </Link>
                </li>
                <li>
                <Link href="/HowTO">
          <a>How to</a>
        </Link>
                </li>
                <li>
                <Link href="/faq">
          <a>FAQS</a>
        </Link>
                </li>

                <li>
                <Link href="/contact">
          <a className='contact'><button>CONTACT US</button></a>
        </Link>
                </li>
                
            </ul>
    
        </nav>
   <div className='awesome'>
     <h2>Your awesome <br/> traffic permit <br/> consultant.</h2>
     <button className='get'>GET STARTED </button>
   </div>
   
        </section>
        <div className='car'>
     
   </div>
        </section>
    );
}
 
export default Naviagation;