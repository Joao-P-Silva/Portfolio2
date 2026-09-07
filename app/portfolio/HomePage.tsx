import LogoutButton from "./LogoutButton";

export default function HomePage() {
  return (
    <main className="HomePage-shell">
      <section className="HomePage-content">
        <LogoutButton />
        <h1>Bem-vindo ao meu portfolio</h1>
        <p>Este é o meu espaço para mostrar os meus projetos e habilidades.</p>
        <h2>Projetos em destaque</h2>
      </section>
    </main>
  );
}
