import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import UsersPage from "../pages/users/UsersPage";
import SuspendedUsers from "../pages/suspendedUsers/SuspendedUsers";
import ReportsPage from "../pages/reports/ReportsPage";
import NotificationsPage from "../pages/notifications/NotificationsPage";
import PromptQuestionsPage from "../pages/promptQuestions/PromptQuestionsPage";

import PrivateRoute from "./PrivateRoutes";
import PublicRoute from "./PublicRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/suspended-users" element={<SuspendedUsers />} />
          <Route path="/prompt-questions" element={<PromptQuestionsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
