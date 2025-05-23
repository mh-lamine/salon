import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

export default function Settings() {
  return (
    <main className="w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col">
      <h1 className="text-3xl font-semibold py-4">Mon salon</h1>
      <Link
        to="informations"
        className="flex items-center justify-between py-1"
      >
        <h2 className="text-lg font-medium">Informations du salon</h2>
        <ChevronRight size={36} />
      </Link>
      <div className="divider my-0"></div>
      <Link
        to="availabilities"
        className="flex items-center justify-between py-1"
      >
        <h2 className="text-lg font-medium">Disponibilités</h2>
        <ChevronRight size={36} />
      </Link>
      <div className="divider my-0"></div>
      <Link to="services" className="flex items-center justify-between py-1">
        <h2 className="text-lg font-medium">Prestations</h2>
        <ChevronRight size={36} />
      </Link>
      <div className="divider my-0"></div>
      <Link to="members" className="flex items-center justify-between py-1">
        <h2 className="text-lg font-medium">Membres</h2>
        <ChevronRight size={36} />
      </Link>
      <div className="divider my-0"></div>
      <Link to="payment" className="flex items-center justify-between py-1">
        <h2 className="text-lg font-medium">Paiements</h2>
        <ChevronRight size={36} />
      </Link>
    </main>
  );
}
