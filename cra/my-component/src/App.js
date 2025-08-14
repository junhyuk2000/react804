import { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  const [mode, setMode] = useState("welcome");
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: "HTML", body: "html is ..." },
    { id: 2, title: "CSS", body: "CSS is ..." },
    { id: 3, title: "JAVASCRIPT", body: "Javascript is ..." },
  ];
  let content = null;
  // 제어문
  if (mode === "welcome") {
    content = <Article title="welcome" body="hello,web" />;
  } else if (mode === "read") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
  }

  return (
    <div>
      <Header
        subject="React"
        onChangeMode={() => {
          setMode("welcome");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("read");
          setId(_id);
        }}
      />
      {content}
    </div>
  );
}

export default App;
