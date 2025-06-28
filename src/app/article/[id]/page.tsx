'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import Link from 'next/link';

const mockArticle = {
  id: 1,
  title: 'Tecnologia revoluciona o jornalismo digital',
  subtitle:
    'Inteligência artificial transforma a forma como consumimos notícias',
  author: 'Maria Silva',
  date: '15 de Janeiro, 2024',
  readTime: '5 min de leitura',
  content: `A revolução digital tem transformado drasticamente o cenário jornalístico mundial. Com o advento da inteligência artificial e das novas tecnologias, os veículos de comunicação estão repensando suas estratégias de produção e distribuição de conteúdo.

Esta transformação não apenas acelera o processo de criação de notícias, mas também personaliza a experiência do leitor de maneiras nunca antes imaginadas. Algoritmos sofisticados analisam padrões de leitura e preferências individuais para oferecer conteúdo mais relevante e envolvente.

## O Impacto da Inteligência Artificial

A inteligência artificial está sendo utilizada em diversas frentes do jornalismo moderno:

**Produção de Conteúdo**: Sistemas automatizados podem gerar relatórios básicos sobre dados financeiros, resultados esportivos e boletins meteorológicos, liberando jornalistas para se concentrarem em reportagens mais complexas e investigativas.

**Verificação de Fatos**: Ferramentas de IA ajudam a identificar informações falsas e verificar a veracidade de declarações em tempo real, contribuindo para um jornalismo mais preciso e confiável.

**Personalização**: Algoritmos analisam o comportamento do leitor para sugerir artigos relevantes, criando uma experiência de leitura mais personalizada e engajante.

## Desafios e Oportunidades

Embora as tecnologias emergentes ofereçam oportunidades sem precedentes, também apresentam desafios significativos. A questão da autenticidade do conteúdo, a necessidade de transparência nos algoritmos e a importância de manter o toque humano no jornalismo são aspectos cruciais que precisam ser cuidadosamente equilibrados.

O futuro do jornalismo digital promete ser ainda mais dinâmico e interativo, com realidade aumentada, podcasts personalizados e experiências imersivas que aproximarão ainda mais os leitores das histórias que realmente importam.

## Conclusão

A tecnologia continuará a moldar o futuro do jornalismo, mas o papel fundamental dos jornalistas - contar histórias importantes, investigar a verdade e informar o público - permanece mais relevante do que nunca. A chave está em abraçar essas inovações enquanto preservamos os valores fundamentais do bom jornalismo.`,
};

export default function ArticlePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <Link href='/'>
              <Button variant='ghost' size='sm'>
                <ArrowLeft className='h-4 w-4 mr-2' />
                Voltar ao Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <article>
          <Card className='mb-8'>
            <CardHeader className='pb-6'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4 leading-tight'>
                {mockArticle.title}
              </h1>

              <p className='text-xl text-gray-600 mb-6 leading-relaxed'>
                {mockArticle.subtitle}
              </p>

              <div className='flex items-center justify-between text-sm text-gray-500 border-t pt-4'>
                <div className='flex items-center space-x-4'>
                  <div className='flex items-center'>
                    <User className='h-4 w-4 mr-1' />
                    {mockArticle.author}
                  </div>
                  <div className='flex items-center'>
                    <Calendar className='h-4 w-4 mr-1' />
                    {mockArticle.date}
                  </div>
                </div>
                <div className='text-gray-400'>{mockArticle.readTime}</div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='prose prose-lg max-w-none'>
                <div className='text-gray-800 leading-relaxed whitespace-pre-line'>
                  {mockArticle.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2
                          key={index}
                          className='text-2xl font-bold text-gray-900 mt-8 mb-4'
                        >
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (
                      paragraph.startsWith('**') &&
                      paragraph.endsWith('**')
                    ) {
                      return (
                        <p
                          key={index}
                          className='font-semibold text-gray-900 mb-4'
                        >
                          {paragraph.replace(/\*\*/g, '')}
                        </p>
                      );
                    }
                    if (paragraph.trim() === '') {
                      return <div key={index} className='h-4' />;
                    }
                    return (
                      <p
                        key={index}
                        className='mb-4 text-gray-700 leading-relaxed'
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>
    </div>
  );
}
