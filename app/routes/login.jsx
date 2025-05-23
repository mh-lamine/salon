import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { pb } from "@/lib/pbconfig";
import { Form, redirect } from "react-router";

export async function action({ request }) {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);
  try {
    await pb.collection("users").authWithPassword(email, password);
    return redirect("/dashboard", {
      headers: {
        "Set-Cookie": pb.authStore.exportToCookie({
          domain: "localhost",
          httpOnly: true,
          secure: true,
          sameSite: "Lax",
          path: "/",
          // maxAge: 2592000,
        }),
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return {
      error: "Email ou mot de passe incorrect",
    };
  }
}

export default function Login({ actionData }) {
  return (
    <div className="text-center flex flex-col gap-4 w-4/5 max-w-[500px]">
      <h1 className="text-3xl font-semibold">Se connecter</h1>
      <Form method="post" className="space-y-2 py-2">
        <Input name="email" type="email" placeholder="Email du salon" />
        <Input name="password" type="password" placeholder="Mot de passe" />
        <Button type="submit">Se connecter</Button>
      </Form>
      {actionData?.error && <p>{actionData.error}</p>}
    </div>
  );
}
