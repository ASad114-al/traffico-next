import Head from 'next/head'
import Footer from './Footer';
import Naviagation from './Naviagation';
const Layout = ({children}) => {
    return ( 
        <main>
  
    
           
            <Naviagation />
            {children}

            <Footer/>
    
        </main>
       
     );
}
 
export default Layout;