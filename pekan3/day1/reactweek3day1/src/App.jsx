import { UserProvider } from "./context/UserContext";
import "./App.css"; // Impor file CSS baru
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { NotificationProvider } from "./context/NotificationContext";
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header";
import LoginButton from "./components/LoginButton";
import UserProfile from "./components/UserProfile";
import UserDetails from "./components/UserDetails";
import ButtonTheme from "./components/ButtonTheme";
import CardTheme from "./components/CardTheme";
import TextTheme from "./components/TextTheme";
import ProductList from "./components/ProductList";
import CartDisplay from "./components/CartDisplay";

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <NotificationProvider>
            <CartProvider>
              <div className="app-container">
                <Header />
                <hr />

                <div className="component-card">
                  <h2>User Components</h2>
                  <LoginButton />
                  <UserProfile />
                  <UserDetails />
                </div>

                <hr />

                <div className="component-card">
                  <h2>Theme Components</h2>
                  <ButtonTheme />
                  <CardTheme />
                  <TextTheme />
                </div>

                <hr />
                <div className="cart-section">
                  <ProductList />
                  <CartDisplay />
                </div>
              </div>
            </CartProvider>
          </NotificationProvider>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
