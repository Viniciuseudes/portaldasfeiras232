import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-brand-red">404</h1>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            Página não encontrada
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Desculpe, não conseguimos encontrar a página que você está
            procurando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-brand-blue px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Voltar para a página inicial
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Visitar nosso blog <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
