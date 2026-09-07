import Link from "next/link";

export default function MaintenancePage() {
  return (
    <main className="maintenance-shell">
      <section className="maintenance-content">
        <p className="maintenance-brand">JHONNY SILVA</p>
        <span className="maintenance-status">Em desenvolvimento</span>
        <h1>Portfolio em desenvolvimento.</h1>
        <p>
          Estou a finalizar projetos e a preparar a nova versao do site.
          Entretanto, podes contactar-me diretamente por email.
        </p>
        <a className="maintenance-email" href="mailto:contacto@jhonnysilva.pt">
          contacto@jhonnysilva.pt
        </a>
        <Link className="maintenance-login" href="/login">
          Acesso privado
        </Link>
      </section>
    </main>
  );
}