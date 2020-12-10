import Link from 'next/link'

const Footer = () => {
    return ( 
        <div className="Footer">
            <div className="we">
            <ul>
                <li className="Footertext">We provide traffic management consultants so you get started quickly, contact us for a quote today!</li>
                <li className="getstarted"><a href="#">Get Started </a></li>
            </ul>
            </div>

            <div className="footerNav">

                       <h1>TRFIKO.</h1> 
                    <ul>
                        <li>
                        <Link href="/about">
                        <a>About</a>
                    </Link>
                        </li>
                        <li>
                        <Link href="/howTo">
                        <a>How TO</a>
                    </Link>
                        </li>
                        <li>
                        <Link href="/faq">
                        <a>FAQS</a>
                    </Link>
                        </li>
                    </ul>
            </div>
        </div>
     );
}
 
export default Footer;