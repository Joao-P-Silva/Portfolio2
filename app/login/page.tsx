"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
    });

    if (!response.ok) {
      setError("Utilizador ou palavra-passe invalidos.");
      setIsLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="maintenance-shell">
      <section className="login-panel">
        <p className="eyebrow">Area privada</p>
        <h1>Entrar no portfolio</h1>
        <p className="login-intro">Acede ao site enquanto ele esta em desenvolvimento.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Utilizador
            <input name="username" type="text" autoComplete="username" required />
          </label>
          <label>
            Palavra-passe
            <input name="password" type="password" autoComplete="current-password" required />
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? "A entrar..." : "Entrar"}
          </button>
        </form>
      </section>
    </main>
  );
}