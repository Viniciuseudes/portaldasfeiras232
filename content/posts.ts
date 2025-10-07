export interface Post {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  imageUrl: string; // 1. CAMPO ADICIONADO AQUI
}

export const posts: Post[] = [
  {
    slug: '5-vantagens-de-investir-no-polo-textil-do-agreste',
    title: '5 vantagens de investir no polo têxtil do Agreste (São Caetano - PE)',
    summary: 'O polo têxtil do Agreste é uma das maiores engrenagens econômicas do Brasil. Descubra 5 grandes vantagens para entender o tamanho da oportunidade de investir na região com o Portal das Feiras 232.',
    date: '3 de Outubro de 2025',
    // 2. ADICIONE O CAMINHO DA IMAGEM PARA CADA POST
    imageUrl: '/1.png', 
    content: `
      <p>O polo têxtil do Agreste é uma das maiores engrenagens econômicas do Brasil. Caruaru, Toritama e Santa Cruz já provaram que a força da confecção nordestina não é apenas regional, mas nacional. Agora, São Caetano entra em cena com o Portal das Feiras 232, um espaço que promete profissionalizar ainda mais a moda do Agreste e atrair lojistas de todo o país.</p>
      <h3 class="text-2xl font-bold my-4">1. Mercado que não para de crescer</h3>
      <p>O setor têxtil do Agreste movimenta mais de R$ 8 bilhões por ano. Isso significa que, mesmo em cenários de crise, o consumo de moda na região segue firme.</p>
      <h3 class="text-2xl font-bold my-4">2. Localização estratégica</h3>
      <p>São Caetano está no coração do Agreste, ligado diretamente pela BR-232, rota que conecta Caruaru, Toritama e Santa Cruz. Uma posição privilegiada para quem busca acesso rápido a fornecedores e clientes.</p>
      <h3 class="text-2xl font-bold my-4">3. Fluxo intenso de compradores</h3>
      <p>Todos os meses, milhares de lojistas, revendedores e sacoleiros circulam pelo polo em busca de novidades. Isso garante alta rotatividade de mercadorias e boas margens de lucro.</p>
      <h3 class="text-2xl font-bold my-4">4. Estoque sempre renovado</h3>
      <p>A proximidade com a produção local facilita a reposição constante dos estoques, permitindo variedade e novidades semanais para os clientes.</p>
      <h3 class="text-2xl font-bold my-4">5. Estrutura moderna e segura</h3>
      <p>Com o Portal das Feiras 232, São Caetano oferece um espaço planejado para receber lojistas e consumidores. Segurança, acessibilidade e conforto viram padrão no maior polo de confecções do Brasil.</p>
      <p class="mt-6 font-semibold">Investir no polo têxtil do Agreste não é apenas seguir uma tendência: é estar no centro de um dos mercados mais estratégicos do país.</p>
    `
  },
  {
    slug: 'sao-caetano-a-nova-capital-da-moda',
    title: 'São Caetano - PE: a nova capital da moda',
    summary: 'Enquanto Caruaru, Toritama e Santa Cruz dominaram o mapa, uma nova estrela surge: São Caetano - PE, que ganha projeção nacional com o Portal das Feiras 232.',
    date: '1 de Outubro de 2025',
    imageUrl: '/2.png', // <--- Imagem diferente
    content: `
      <p>Por muito tempo, Caruaru, Toritama e Santa Cruz dominaram o mapa da confecção no Nordeste. Mas agora, uma nova estrela surge: São Caetano - PE, que começa a ganhar projeção nacional com o Portal das Feiras 232.</p>
      <p>O município se transforma em protagonista de um novo capítulo do polo têxtil, reunindo tradição e inovação em um só lugar.</p>
      <h3 class="text-2xl font-bold my-4">Um marco para a moda nordestina</h3>
      <p>Com a chegada do Portal das Feiras, São Caetano passa a oferecer não apenas mais espaço para a confecção, mas uma estrutura moderna e planejada para que lojistas possam crescer de forma organizada e sustentável.</p>
      <h3 class="text-2xl font-bold my-4">Por que São Caetano está se destacando?</h3>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Infraestrutura moderna:</strong> ambientes seguros, acessíveis e pensados para o fluxo intenso de lojistas.</li>
        <li><strong>Posição estratégica:</strong> no coração do Agreste, cercado pelos principais centros produtores.</li>
        <li><strong>Potencial econômico:</strong> integração com um mercado que já gera 500 mil empregos diretos e indiretos.</li>
      </ul>
      <p class="mt-6">São Caetano não é mais apenas uma cidade vizinha dos grandes centros. Agora ela é vista como a nova capital da moda do Agreste, capaz de atrair lojistas e investidores de todas as regiões.</p>
    `
  },
  {
    slug: 'guia-completo-para-lojistas-portal-das-feiras-232',
    title: 'Guia completo para lojistas no Portal das Feiras 232',
    summary: 'Se você é lojista e busca expandir seus negócios, precisa conhecer o Portal das Feiras 232. Este espaço une o melhor do polo têxtil com uma infraestrutura pensada para o futuro.',
    date: '28 de Setembro de 2025',
    imageUrl: '/3.png', // <--- Imagem diferente
    content: `
      <p>Se você é lojista e busca expandir seus negócios, precisa conhecer o Portal das Feiras 232, em São Caetano - PE. Este espaço nasce com o propósito de unir o que o polo têxtil do Agreste já tem de melhor com uma infraestrutura pensada para o futuro da moda.</p>
      <h3 class="text-2xl font-bold my-4">Localização Estratégica</h3>
      <p>O Portal está na BR-232, principal eixo de conexão do Agreste, facilitando o acesso de compradores que vêm de diversas regiões do Brasil.</p>
      <h3 class="text-2xl font-bold my-4">Estrutura Moderna</h3>
      <p>Um ambiente planejado para dar suporte a lojistas e clientes: segurança, acessibilidade, conforto e visibilidade para cada negócio.</p>
      <h3 class="text-2xl font-bold my-4">Visibilidade para sua Marca</h3>
      <p>A cada semana, milhares de pessoas circulam pelo polo em busca de novidades. Ter sua loja no Portal é garantir exposição contínua e vendas recorrentes.</p>
      <h3 class="text-2xl font-bold my-4">Oportunidades de Networking</h3>
      <p>Mais do que um ponto de vendas, o Portal é um espaço de encontros estratégicos. É aqui que você estará lado a lado com lojistas, fornecedores e compradores do Brasil inteiro.</p>
      <p class="mt-6">O Portal das Feiras 232 é um hub de oportunidades para quem acredita no potencial do Agreste e quer crescer junto com ele.</p>
    `
  },
  {
    slug: 'prefeitura-de-sao-caetano-desenvolve-polo-textil',
    title: 'Prefeitura de São Caetano faz parceria e desenvolve o primeiro polo têxtil da cidade',
    summary: 'O município de São Caetano vive um momento histórico. Com apoio da prefeitura, foi lançado o Portal das Feiras 232, o primeiro grande polo têxtil da cidade.',
    date: '25 de Setembro de 2025',
    imageUrl: '/4.png', // <--- Imagem diferente
    content: `
      <p>O município de São Caetano vive um momento histórico. Com apoio da prefeitura, foi lançado o Portal das Feiras 232, o primeiro grande polo têxtil da cidade, que promete mudar a realidade econômica e social da região.</p>
      <h3 class="text-2xl font-bold my-4">Um Marco de Desenvolvimento</h3>
      <p>A parceria entre poder público e iniciativa privada mostra a força de São Caetano em apostar na moda como vetor de crescimento. Com isso, o município se integra oficialmente ao circuito de cidades que formam o maior polo de confecções do Brasil.</p>
      <h3 class="text-2xl font-bold my-4">Benefícios para a Cidade e para os Lojistas</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Geração de emprego e renda para a população local.</li>
        <li>Infraestrutura moderna para atrair lojistas de toda a região.</li>
        <li>Valorização da economia regional e fortalecimento do Agreste.</li>
      </ul>
      <p class="mt-6">Mais do que um projeto, o Portal é uma conquista coletiva que coloca a cidade no mapa dos grandes polos têxteis do Brasil.</p>
    `
  }
];