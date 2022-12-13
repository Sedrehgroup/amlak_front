import { Link } from 'react-router-dom';
import sad_img from './../assets/Images/emoji_sad.svg'
const NotFound = () => {
  return ( <center className='mt-[6rem]'>
          <img src={sad_img} alt="" className="w-1/6 p-10" />
        <div className='text-center'>
        <p dir='ltr' className='font-sans my-2'>404 Not Found</p>
        <p className='my-2'>صفحه مورد نظر یافت نشد</p>
          <Link
                to={`/`}
              
                className="text-main-500 underline my-2"
              >
               صفحه اصلی
              </Link>
        </div>
  </center> );
}
 
export default NotFound;