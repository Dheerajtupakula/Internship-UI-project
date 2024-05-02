import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="grid place-items-center">
      <Header />
      <div className="flex w-full">
      <SideMenu />
      <Main />
      </div>
        
    </div>
  );
};

export default App;
