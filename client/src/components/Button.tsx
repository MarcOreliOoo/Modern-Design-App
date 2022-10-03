
type unStyle = {
	astyle:string
};
const Button = (unstyle:unStyle) => {
  return (
	<button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${unstyle.astyle}`}>
		Get Started
	</button>
  )
}

export default Button;