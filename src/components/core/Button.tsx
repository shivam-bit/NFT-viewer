
const Button: any = ({triggerOnClick,children}) => {
    const onClickHandler = (e) => {
        triggerOnClick();
        const buttonNode = e.currentTarget
        buttonNode.classList.add('animate');
        setTimeout(()=>{
            buttonNode.classList.remove('animate')
        },500);
        // TODO: Add analytics event
    }
  return (
        <button 
        className="confetti-button"
        
        onClick={onClickHandler}
        >
            {children}
        </button>
  )
}

export default Button;
