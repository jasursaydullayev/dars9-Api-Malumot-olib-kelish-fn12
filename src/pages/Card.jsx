import { useParams } from "react-router-dom"
import {useFetch} from '../hooks/useFetch'
function Card() {
  const {id} = useParams()
  const url = `https://dummyjson.com/products/${id}`;
  const { data, isPending, error } = useFetch(url);
 
  // const {title, images, description}
  return (
    <div className='container flex text-center'>
  <div className="mt-[150px] h-[150px] flex flex-col gap-[30px]">
  <img src={data && data.images[0]} alt={data&& data.title} width={300}/>
    <h1 className="font-bold text-[27px]">{data && data.title}</h1>
  </div>
  <div className="mt-[120px] ml-[35px] mr-[40px] h-[400px] w-[2px] bg-slate-500"></div>
  <p className="mt-[300px]">{data && data.description}</p>
    </div>
  )
}

export default Card