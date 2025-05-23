import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/dashboard.jsx"),
  route("login", "routes/login.jsx"),
  route("settings", "routes/settings.jsx"),
  route("settings/informations", "routes/informations.jsx"),
];
