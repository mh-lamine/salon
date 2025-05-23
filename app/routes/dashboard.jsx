import { Settings } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function Dashboard() {
  return (
    <main className="w-full h-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col gap-4">
      <h1 className="text-3xl font-semibold">Mes rendez-vous de la journée</h1>
      <div className="flex items-center gap-4">
        <Link to="settings">
          <Settings size={24} className="text-primary" />
        </Link>
      </div>
    </main>
  );
}
