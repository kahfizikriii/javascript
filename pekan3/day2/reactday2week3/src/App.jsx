import "./App.css";
import ToggleButton from "./components/ToggleButton";
import Switch from "./components/Switch";
import FetchData from "./components/FetchData";
import CounterWithToggle from "./components/counterWithToggle";
import FormComponent from "./components/FormComponent";
import ThemeSwitcher from "./components/ThemeSwitcher";
export default function App() {
  return (
    <div className="app-container">
      <div className="components-grid">
        <div className="component-wrapper">
          <ToggleButton />
        </div>
        <div className="component-wrapper">
          <Switch />
        </div>
        <div className="component-wrapper">
          <FetchData />
        </div>
        <div className="component-wrapper">
          <CounterWithToggle />
        </div>
        <div className="component-wrapper">
          <FormComponent />
        </div>
        <div className="component-wrapper">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
