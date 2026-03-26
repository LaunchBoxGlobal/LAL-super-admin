import { SnackbarProvider } from "notistack";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <SnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      />
      <AppRoutes />
    </>
  );
}

export default App;
