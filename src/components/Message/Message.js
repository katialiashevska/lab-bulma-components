import './Message.css';
import "bulma/css/bulma.css";

const Message = ({ title, description }) => {
    return (
        <article className="message is-info">
          <div className="message-header">
            <p>{title}</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">
            {description}
          </div>
        </article>
    )
}

export default Message;