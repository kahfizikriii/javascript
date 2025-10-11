import FetchPost from "./components/FetchPost.jsx";
import AxiosUser from "./components/AxiosUser.jsx";
import UserList from "./components/UserList.jsx";

function App() {
  return (
    <div style={styles.container}>

      <div style={styles.box}>
        <h2>Fetch API</h2>
        <FetchPost />
      </div>

      <div style={styles.box}>
        <h2> Axios API</h2>
        <AxiosUser />
      </div>

      <div style={styles.box}>
        <h2> Manipulasi Data JSON</h2>
        <UserList />
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    maxWidth: "700px",
    margin: "auto",
    padding: "20px",
  },
  box: {
    border: "2px solid #ddd",
    borderRadius: "12px",
    padding: "15px",
    marginTop: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
};

export default App;
