import "bulma/css/bulma.css";

const CoolButton = ({ className, btn1 }) => {
  return (
    <div>
      <button className={className}>{btn1}</button>
    </div>
  )
}

export default CoolButton;