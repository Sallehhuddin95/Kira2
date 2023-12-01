import "./App.css";
import { MainTabs } from "./components";
import { FaGithub } from "react-icons/fa6";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to Kira-Kira</h1>
      <MainTabs />
      <footer className="text-center text-xs text-gray-500">
        <p>Coded by Hacker</p>
        <p>
          <a
            href="https://github.com/Sallehhuddin95/Kira2"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            <span className="align-middle">GitHub</span>
            <FaGithub className="ml-1 inline-block align-middle" />
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
