import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { posts } from "@/content/posts";
import Link from "next/link";
import Image from "next/image";

// SEO: Metadata para a página do blog
export const metadata = {
  title: "Blog - Portal das Feiras 232",
  description:
    "Fique por dentro das novidades, tendências e oportunidades do maior polo de confecções do Brasil.",
};

export default function BlogPage() {
  // Pega o post mais recente para ser o destaque
  const featuredPost = posts[0];
  // Pega o restante dos posts
  const otherPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Blog do Portal das Feiras 232
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fique por dentro das novidades, tendências e oportunidades do
              maior polo de confecções do Brasil.
            </p>
          </header>

          {/* Post em Destaque (mesmo de antes) */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block group mb-12 lg:mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-section.jpg"
                    alt={featuredPost.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {featuredPost.date}
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary group-hover:text-brand-red transition-colors duration-300 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    {featuredPost.summary}
                  </p>
                  <span className="inline-block mt-4 font-semibold text-brand-red group-hover:underline">
                    Leia mais →
                  </span>
                </div>
              </div>
            </Link>
          )}

          <hr className="my-12 lg:my-16 border-border" />

          {/* ================================================================== */}
          {/* SEÇÃO DOS OUTROS POSTS - LAYOUT ATUALIZADO */}
          {/* ================================================================== */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Coluna da Imagem */}
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/location-section.jpg"
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Coluna do Texto */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {post.date}
                    </p>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-brand-red transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground line-clamp-3">
                      {post.summary}
                    </p>
                    <span className="inline-block mt-4 font-semibold text-brand-red group-hover:underline">
                      Leia mais →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
