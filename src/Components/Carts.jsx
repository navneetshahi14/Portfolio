/* eslint-disable react/prop-types */

const Carts = ({image,title,link,description}) => {
  return (
    <>
        <div className="">
            <a href={link} target="_blank" className='m-2 lg:m-4 block max-w-sm overflow-hidden rounded-lg'>
                <div className="relative">
                    <img src={image} alt="" className="w-full" />
                    <div className='flex flex-col justify-between p-4 text-white'>
                        <h2 className='mb-2 text-2xl font-bold'>{title}</h2>
                        <p className="mb-4 text-sm font-medium">
                        {description?.slice(0, 120)}{description?.length > 120 && "..."}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    </>
  )
}

export default Carts