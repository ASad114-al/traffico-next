// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Naviagtion from '../Componentes/Naviagation';
import Layout from '../Componentes/Layout';
export default function Home() {
  return (
   
   <Layout>
   <article className='first_grid'>
     <div className='info_about'>
       <h2 id='about'>ABOUT US</h2>
       <p id='occup'>The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all. </p>
       <p id='howbox'>How do you do when you need to obtain 
a commercial traffic permit for freight transport to your business?</p>
     </div>
     <div id='imag_div'> </div>
   </article>
   <div className='secund_grid'>
     <div id='imag2'></div>
     <div id='Info_HOW'>
       <h3 id='apply' >How to apply</h3>
       <p id='when'>Whenn applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.</p>
     </div>
   </div>
   </Layout>

     
  )
}
