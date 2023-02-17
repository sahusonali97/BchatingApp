import React, { useContext } from "react";
import { ChatEngineContext } from "react-chat-engine";
import { Row, Col } from "react-grid-system";
import { setConfiguration } from "react-grid-system";
import Avatar from "@mui/material/Avatar";
import SelectInput from "./HeaderComp/SelectInput";

setConfiguration({ maxScreenClass: "xl", gutterWidth: 0 });

export const ChatHeader = (props) => {
  const { conn, chats, activeChat } = useContext(ChatEngineContext);

  const capitalize = (str, lower = true) => {
    return (lower ? str.toLowerCase() : str).replace(
      /(?:^|\s|["'([{])+\S/g,
      (match) => match.toUpperCase()
    );
  };

  if (!chats || !activeChat || !chats[activeChat]) {
    return <div />;
  }

  if (!conn || conn === null) {
    return <div />;
  }

  const chat = chats[activeChat];
  const otherPerson = chat.people.find(
    (person) => person.person.username !== conn.userName
  );
  const userStatus = otherPerson ? otherPerson.person.first_name : "";
  const title = otherPerson
    ? capitalize(decodeURIComponent(otherPerson.person.username))
    : "";

  function getDateTime(date) {
    if (!date) return "";
    date = date.replace(" ", "T");
    const year = date.substr(0, 4);
    const month = date.substr(5, 2);
    const day = date.substr(8, 2);
    const hour = date.substr(11, 2);
    const minute = date.substr(14, 2);
    const second = date.substr(17, 2);
    var d = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
    let offset = -d.getTimezoneOffset() / 60;
    d.setHours(d.getHours() + offset);


    return d;
  }

  return (
    <Row className="ce-chat-title" style={styles.titleSection}>
      <div className="mobile-toggler">
      </div>
      <Avatar
        className="operator-avatar"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <SelectInput className="icon-setA" />

      <div className="ce-chat-header-container">
        <div
          style={styles.titleText}
          className="ce-chat-title-text"
          id={`ce-chat-feed-title-${title}`}
        >
          {title}
        </div>

        <div
          style={styles.subtitleText}
          className="ce-chat-subtitle-text"
        ></div>
      </div>
    </Row>
  );
};

export default ChatHeader;

const styles = {
  titleSection: {
    position: "absolute",
    top: "0px",
    width: "100%",
    zIndex: "1",
    backgroundColor: "rgb(256, 256, 256, 0.92)",
    fontFamily: "Avenir",
  },
  mobileOptiom: {
    width: "100%",
    top: "32px",
    textAlign: "center",
    color: "rgb(24, 144, 255)",
    overflow: "hidden",
  },
  titleContainer: {
    width: "100%",
    padding: "18px 0px",
    textAlign: "left",
    color: "rgb(24, 144, 255)",
  },
  titleText: {
    fontSize: "24px",
    fontWeight: "600",
  },
  subtitleText: {
    fontSize: "12px",
  },
};
