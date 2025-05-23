import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { pb } from "@/lib/pbconfig";
import { Form } from "react-router";

// --- Loader & Action ---

export async function loader() {
  return await pb.collection("users").getOne(pb.authStore.record.id);
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    return await pb.collection("users").update(pb.authStore.record.id, data);
  } catch (error) {
    console.error("Erreur mise à jour :", error);
    return {
      error: "Une erreur est survenue lors de la mise à jour.",
    };
  }
}

// --- Primary component ---

export default function Informations({ loaderData, actionData }) {

  const baseFields = [
    { id: "name", label: "Nom du salon" },
    { id: "address", label: "Adresse" },
    { id: "phoneNumber", label: "Téléphone du salon", type: "tel" },
    { id: "email", label: "Email", type: "email" },
  ];

  return (
    <main className="w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col gap-4">
      <h1 className="text-3xl font-semibold">Mes informations</h1>

      <Form method="post" className="space-y-6">
        {/* Base informations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {baseFields.map(({ id, label, type }) => (
            <FormField
              key={id}
              id={id}
              label={label}
              type={type}
              defaultValue={loaderData?.[id] || actionData?.[id]}
            />
          ))}
        </div>

        {/* Switchs */}
        <SwitchSection
          id="autoAccept"
          label="Confirmation automatique"
          description="Accepter automatiquement les demandes de rendez-vous."
          subtext="Sinon, elles resteront en attente jusqu'à votre validation."
        />

        <SwitchSection
          id="vacancyMode"
          label="Mode vacances"
          className="text-destructive"
          description="Activez le mode vacances pour arrêter de recevoir des demandes."
          subtext="Utile pour une fermeture temporaire de votre salon."
        />

        {/* Conditions */}
        <div>
          <Label htmlFor="bookingTerms">Conditions de réservation</Label>
          <Textarea
            id="bookingTerms"
            name="bookingTerms"
            className="text-lg whitespace-pre-line"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button type="submit">Enregistrer les modifications</Button>
          <Button variant="outline" type="reset">
            Annuler
          </Button>
        </div>
      </Form>
    </main>
  );
}

// --- Reusable components ---

const FormField = ({ id, label, defaultValue, type = "text" }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      name={id}
      type={type}
      defaultValue={defaultValue}
      className="text-lg"
    />
  </div>
);

const SwitchSection = ({ id, label, description, subtext, className }) => (
  <div>
    <Label htmlFor={id} className={className}>
      {label}
    </Label>
    <div className="bg-white rounded-md px-3 py-2 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <p>{description}</p>
        <Switch id={id} name={id} />
      </div>
      <p>{subtext}</p>
    </div>
  </div>
);
