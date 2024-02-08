const { useState } = require("react");

function AppPropDrillingExampleComponent() {
  const [user, setUser] = useState({ name: "Deep Thakkar" });
  const [heading, setHeading] = useState("Demo App");

  return (
    <div>
      <Navbar heading={heading} setHeading={setHeading} />
      <MainPage user={user} />
    </div>
  );
}

export default AppPropDrillingExampleComponent;

function Navbar(props) {
  return (
    <div>
      <nav style={{ background: "#10ADDE", color: "#fff" }}>
        {props.heading}
      </nav>
      <button onClick={() => props.setHeading("Changed the heading")}>
        Change Heading
      </button>
    </div>
  );
}

function MainPage({ user }) {
  return (
    <div>
      <h2>Main Page</h2>
      <Content user={user} />
    </div>
  );
}

function Content({ user }) {
  return (
    <div>
      <Message user={user} />
    </div>
  );
}

function Message({ user }) {
  return <p>Welcome {user.name}</p>;
}
