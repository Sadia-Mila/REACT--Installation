
const Card = ({bgColor, cardTitle, cardDescription, className, btnText }) => {
  return (
    <div className="container m-auto mt-5">
        <div className={`w-[600px] h-[450px] p-5 rounded shadow-lg ${bgColor}`}>
            <div className="border-2 border-white p-5 rounded-sm">
                <h1 className="text-3xl font-bold text-white pt-5 pb-5 ">{cardTitle}</h1>
                <p className="text-xl font-medium text-justify pb-8">{cardDescription}</p>
                <button className={`${className}`}>{btnText}</button>
            </div>
        </div>
    </div>
  )
}

export default Card
