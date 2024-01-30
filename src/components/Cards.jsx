import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export function Cards() {
  const url = `https://dummyjson.com/products?limit=9`;
  const { data, isPending, error } = useFetch(url);
  console.log(data && data.products);
  return (
    <ul className="container flex flex-wrap mt-[60px] gap-[29px] pb-[40px] justify-center items-center">
      {data &&
        data.products.map((data) => {
       const {id, images, title, description, price} = data
          return (
            <Link  key={id} to={`/${id}`}>
              <div className="card w-96 h-[408px] bg-base-100 shadow-xl pb-2">
                  <img className="w-[384px] h-[202px]"
                    src={images[0]}
                    alt={title}
                  />
                <div className="card-body">
                  <h2 className="card-title">{title}!</h2>
                  <p className="">{description}</p>
                  <hr className="h-[2px] bg-amber-300" />
                  <p>{price +"" + '$'}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </ul>
  );
}


