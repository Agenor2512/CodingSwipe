import { useContext } from "react";
import PropTypes from "prop-types";
import RegisterContext from "../../context/RegisterContext";
import "../../styles/resume_job_offer/messages.css";

function getFirstLetter(name) {
  return name.charAt(0).toUpperCase();
}

function Messages({ messagesData }) {
  const { userRole } = useContext(RegisterContext);

  return (
    <section className="messages_container">
      {userRole === "match" &&
        messagesData.map((messages) => (
          <div key={messages.id} className="messages_card">
            {userRole === "candidat" ? (
              <div>
                <div>{getFirstLetter(messages.name)}</div>
                <div>{messages.jobName}</div>
                <div>{messages.date}</div>
                <div>{messages.jobPosting}</div>
              </div>
            ) : (
              <div className="messages_card_content">
                <div className="first_content_block">
                  {getFirstLetter(messages.name)}
                </div>

                <div className="second_content_block">
                  <div className="bold_font">
                    <span>{messages.category} </span>
                    <p>{`- ${messages.date}`}</p>
                  </div>
                  <div className="font_content"> {messages.jobName}</div>
                </div>
              </div>
            )}
          </div>
        ))}
    </section>
  );
}

Messages.propTypes = {
  messagesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      jobName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Messages;
