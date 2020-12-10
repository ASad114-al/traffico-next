
import { useRouter } from 'next/router'
const Blogitem = () => {
    const router = useRouter()
    const { pid } = router.query
    console.log(router)
    return ( 
        <div>
            Blogitem {pid}
        </div>
     );
}
 
export default Blogitem;