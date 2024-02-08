import UserContext from "./userContext";
import React, { useState, useContext } from "react";

function ContextAPIExampleComponent() {
  const [user, setUser] = useState({ name: "Deep Thakkar" });
  const [heading, setHeading] = useState("Demo App");

  const providerValue = {
    user,
    heading,
    setHeading,
  };
  return (
    <div>
      <UserContext.Provider value={providerValue}>
        <Navbar />
        <MainPage />
      </UserContext.Provider>
    </div>
  );
}

export default ContextAPIExampleComponent;

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {(value) => {
            return (
              <>
                <nav style={{ background: "#10ADDE", color: "#fff" }}>
                  {value.heading}
                </nav>
                <button onClick={() => value.setHeading("Changed the heading")}>
                  Change Heading
                </button>
              </>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

function MainPage() {
  return (
    <div>
      <h2>Main Page</h2>
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div>
      <Message />
    </div>
  );
}

function Message() {
  const value = useContext(UserContext);
  console.log(value);
  return <p>Welcome {value.user.name}</p>;
}
