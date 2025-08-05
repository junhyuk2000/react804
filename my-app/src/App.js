import logo from './logo.svg';
import './App.css';

//16.8 이후 (Hook 훅 use... ~> state를 사용, 라이프 사이클)
// 컴포넌트명의 첫 글자는 대문자로 쓴다. (관례)
// 파일명은 컴포넌트명과 동일하게 한다.(관례)
// 파일 확장자는 .jsx 또는 .js
function App() {
  return (

    // JSX 문법
    // 1. 최상위 부모는 1개
    // 2. class를 className으로 쓴다
    // 3. 표현식
    // 4. 빈 요소도 반드시 닫아야한다
    <div className="App">
      {/* 5. JSX 주석 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
        </a>
      </header>
      <p>
        <img src={logo}/>
      </p>
    </div>
  );
}

export default App;
