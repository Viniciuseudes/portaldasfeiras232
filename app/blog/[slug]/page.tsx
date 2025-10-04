import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { posts } from "@/content/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string;
  };
}

// SEO: Gera metadados dinâmicos para cada página de post
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post não encontrado",
      description: "O artigo que você está procurando não existe.",
    };
  }

  return {
    title: `${post.title} | Blog Portal das Feiras 232`,
    description: post.summary,
  };
}

// Gera as páginas estaticamente no momento da build para melhor performance
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // Redireciona para a página 404 se o post não for encontrado
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 lg:pt-32 pb-16">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <header className="mb-8">
            <Link
              href="/blog"
              className="text-brand-red hover:underline mb-4 inline-block"
            >
              ← Voltar para o blog
            </Link>
            <p className="text-muted-foreground mb-2">{post.date}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="relative aspect-[16/9] rounded-lg overflow-hidden my-8 shadow-lg">
            <Image
              src="/images/camisa.png"
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div
            className="prose lg:prose-xl max-w-none prose-h3:text-primary prose-strong:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
