import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import UsersPage from "./pages/users/UsersPage";
import SuspendedUsers from "./pages/suspendedUsers/SuspendedUsers";
import ReportsPage from "./pages/reports/ReportsPage";
import NotificationsPage from "./pages/notifications/NotificationsPage";
import PromptQuestionsPage from "./pages/promptQuestions/PromptQuestionsPage";
import { getToken } from "./utils/getToken";

export const PrivateRoute = ({ children }) => {
  const token = getToken();
  if (!token) return <Navigate to={"/login"} replace />;

  return children;
};
export const PublicRoute = ({ children }) => {
  const token = getToken();
  if (token) return <Navigate to={"/"} replace />;
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <DashboardLayout
            pages={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        }
      />
      <Route
        path="/users"
        element={
          <DashboardLayout
            pages={
              <PrivateRoute>
                <UsersPage />
              </PrivateRoute>
            }
          />
        }
      />
      <Route
        path="/notifications"
        element={
          <DashboardLayout
            pages={
              <PrivateRoute>
                <NotificationsPage />
              </PrivateRoute>
            }
          />
        }
      />
      <Route
        path="/reports"
        element={
          <DashboardLayout
            pages={
              <PrivateRoute>
                <ReportsPage />
              </PrivateRoute>
            }
          />
        }
      />
      <Route
        path="/suspended-users"
        element={
          <DashboardLayout
            pages={
              <PrivateRoute>
                <SuspendedUsers />
              </PrivateRoute>
            }
          />
        }
      />
      <Route
        path="/prompt-questions"
        element={
          <DashboardLayout
            pages={
              <PrivateRoute>
                <PromptQuestionsPage />
              </PrivateRoute>
            }
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
