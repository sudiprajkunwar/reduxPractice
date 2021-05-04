import React from "react";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer"
import IceCreamContainer from "./components/IceCreamContainer";
import IteamContainer from "./components/IteamContainer";
import Usercontainer from "./components/Usercontainer";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App"> 
        {/* <CakeContainer/>
        <IceCreamContainer/> */}
        <IteamContainer cake/>
        <IteamContainer/>
        <Usercontainer/>
      </div>
    </Provider>
    )
};

export default App;


   
