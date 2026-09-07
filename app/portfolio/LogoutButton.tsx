"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    setIsLoading(true);
    await fetch("/api/logout", { method: "POST" });
    router.push("/manutentionpage");
    router.refresh();
  }

  return (
    <button type="button" onClick={handleLogout} disabled={isLoading} className="logout-button">
      {isLoading ? "A sair..." : "Logout"}
    </button>
  );
}