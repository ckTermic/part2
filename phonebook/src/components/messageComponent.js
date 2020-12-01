import React from "react";

const MessageComponent = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  return (
    <div>
      <p>
        {type === "success" ? (
          <div className={"success"}>{message}</div>
        ) : (
          <div className={"error"}>{message}</div>
        )}
      </p>
    </div>
  );
};

export default MessageComponent;
