import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("login", "routes/login.jsx"),
  route("dashboard", "routes/dashboard.jsx"),
  route("dashboard/settings", "routes/settings.jsx"),
  route("dashboard/settings/informations", "routes/informations.jsx"),
];
