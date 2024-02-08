import logo from "./logo.svg";
import "./App.css";
import FlowerShop from "./components/LocalState";
import AppPropDrillingExampleComponent from "./components/PropDrilling/AppPropDrillingExampleComponent";
import ContextAPIExampleComponent from "./components/ContextApi/ContextAPIExampleComponent";
import { CalculateFactorial } from "./components/Optimization/UseMemoComponent";
import { UseCallBackComponent } from "./components/Optimization/UseCallBackComponent";
import { ReactLazyComponent } from "./components/Optimization/LazyLoading/ReactLazyComponent";

import RoutingBasedLazy from "./components/Optimization/LazyLoadingRouting/ReactBasedLazy";

function App() {
  return (
    <div className="App">
      <h1>Main App Component</h1>

      {/* <FlowerShop></FlowerShop> */}
      {/* <AppPropDrillingExampleComponent></AppPropDrillingExampleComponent> */}
      <ContextAPIExampleComponent />

      {/* <CalculateFactorial></CalculateFactorial> */}
      {/* <UseCallBackComponent></UseCallBackComponent> */}
      {/* <ReactLazyComponent></ReactLazyComponent> */}

      {/* <RoutingBasedLazy /> */}
    </div>
  );
}

export default App;
