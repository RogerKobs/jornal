'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  MessageSquare,
  Highlighter,
  Check,
  X,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const mockArticle = {
  id: 2,
  title: 'Sustentabilidade: O futuro das cidades inteligentes',
  subtitle: 'Como a tecnologia verde está moldando os centros urbanos',
  author: 'João Santos',
  date: '20/12/2025',
  status: 'review',
  content: `As cidades do futuro estão sendo construídas hoje, com foco em sustentabilidade e eficiência energética. Projetos inovadores ao redor do mundo demonstram como a integração de tecnologias verdes pode criar ambientes urbanos mais habitáveis e ecologicamente responsáveis.

A implementação de sistemas inteligentes de gestão de energia tem revolucionado a forma como as cidades consomem recursos. Sensores distribuídos pela infraestrutura urbana coletam dados em tempo real sobre consumo de energia, qualidade do ar e fluxo de tráfego, permitindo otimizações automáticas que reduzem significativamente o impacto ambiental.

Exemplos práticos incluem semáforos adaptativos que reduzem congestionamentos, iluminação pública LED com sensores de movimento, e sistemas de coleta de lixo inteligentes que otimizam rotas baseadas no nível de preenchimento dos containers.

O investimento em infraestrutura verde não apenas beneficia o meio ambiente, mas também gera economia significativa a longo prazo. Estudos mostram que cidades que adotaram tecnologias sustentáveis reduziram seus custos operacionais em até 30% nos primeiros cinco anos de implementação.`,
};

interface Highlight {
  id: number;
  start: number;
  end: number;
  text: string;
}

export default function ReviewArticle() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [highlights] = useState<Highlight[]>([]);
  const router = useRouter();

  const approveArticle = () => {
    alert('Matéria aprovada e enviada para publicação!');
    router.push('/');
  };

  const rejectArticle = () => {
    alert('Matéria rejeitada e enviada de volta para o autor!');
    router.push('/');
  };

  const renderContentWithHighlights = (content: string) => {
    if (highlights.length === 0) return content;

    let result = content;
    let offset = 0;

    const sortedHighlights = [...highlights].sort((a, b) => a.start - b.start);

    sortedHighlights.forEach((highlight) => {
      const start = highlight.start + offset;
      const end = highlight.end + offset;
      const beforeText = result.substring(0, start);
      const highlightedText = result.substring(start, end);
      const afterText = result.substring(end);

      const highlightHtml = `<mark class="bg-yellow-200 px-1 rounded">${highlightedText}</mark>`;
      result = beforeText + highlightHtml + afterText;
      offset += highlightHtml.length - highlightedText.length;
    });

    return result;
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <Link href='/'>
                <Button variant='ghost' size='sm' className='mr-4'>
                  <ArrowLeft className='h-4 w-4 mr-2' />
                  Voltar
                </Button>
              </Link>
              <h1 className='text-xl font-semibold text-gray-900'>
                Revisar Matéria
              </h1>
            </div>
            <div className='flex items-center space-x-2'>
              <Button
                variant='outline'
                onClick={rejectArticle}
                className='text-red-600 border-red-200 hover:bg-red-50 bg-transparent'
              >
                <X className='h-4 w-4 mr-2' />
                Rejeitar
              </Button>
              <Button
                onClick={approveArticle}
                className='bg-green-600 hover:bg-green-700'
              >
                <Check className='h-4 w-4 mr-2' />
                Aprovar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <Card>
              <CardHeader>
                <div className='flex items-center justify-between mb-4'>
                  <Badge className='bg-yellow-100 text-yellow-800'>
                    Em Revisão
                  </Badge>
                  <span className='text-sm text-gray-500'>
                    {mockArticle.date}
                  </span>
                </div>

                <CardTitle className='text-2xl mb-2'>
                  {mockArticle.title}
                </CardTitle>

                <p className='text-lg text-gray-600 mb-4'>
                  {mockArticle.subtitle}
                </p>

                <div className='flex items-center text-sm text-gray-500'>
                  <User className='h-4 w-4 mr-1' />
                  {mockArticle.author}
                </div>
              </CardHeader>

              <CardContent>
                <div className='prose max-w-none'>
                  <div
                    ref={contentRef}
                    className='text-gray-800 leading-relaxed whitespace-pre-line select-text cursor-text'
                    dangerouslySetInnerHTML={{
                      __html: renderContentWithHighlights(mockArticle.content),
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg flex items-center'>
                  <MessageSquare className='h-5 w-5 mr-2' />
                  Comentários 0
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-500 text-sm'>
                  Nenhum comentário ainda. Selecione um trecho do texto para
                  começar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg flex items-center'>
                  <Highlighter className='h-5 w-5 mr-2' />
                  Destaques 0
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-500 text-sm'>Nenhum destaque ainda.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
