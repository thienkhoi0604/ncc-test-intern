import "./App.css";
import SideBar from "./components/sidebar/sidebar";
import HomePage from "./components/home/home-page";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="overal-container">
      <SideBar />
      <div className="full-height-screen">
        <div className="content-container">
          <HomePage />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
