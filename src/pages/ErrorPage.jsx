import errorImg from "../assets/error-page.jpg"

const ErrorPage = () => {
  return (
    <div className=" h-full bg-white " style={{backgroundImage:`url(${errorImg})`,backgroundSize:"contain",backgroundRepeat:"no-repeat", backgroundPosition:"center"}} >

    </div>
  )
}
export default ErrorPage