import "./App.css";
import Information from "./components/Imformation";
import LandingPage from "./components/landingPage";
import ProgrammeList from "./components/programme";
import Contacts from "./components/contacts";

import NavBar from "./components/navbar";
function App() {
  return (
    <div className=" scroll-smooth">
      <NavBar />
      <LandingPage />
      <Information />
      <ProgrammeList />
      <Contacts />
    </div>
  );
}

export default App;
