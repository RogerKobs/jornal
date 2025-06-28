import { PlusCircle, Eye, Edit, User, LogOut } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockArticles } from '@/mocks/articles';

export default function Home() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'review':
        return 'bg-yellow-100 text-yellow-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published':
        return 'Publicado';
      case 'review':
        return 'Em Revisão';
      case 'draft':
        return 'Rascunho';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <h1 className='text-2xl font-bold text-gray-900'>
                Jornal Digital
              </h1>
            </div>
            <div className='flex items-center space-x-4'>
              <Link href='/write'>
                <Button className='flex items-center gap-2'>
                  <PlusCircle className='h-4 w-4' />
                  Escrever Matéria
                </Button>
              </Link>

              <Link href='/login'>
                <Button variant='outline' size='sm'>
                  <LogOut className='h-4 w-4' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>
            Todas as Matérias
          </h2>
          <p className='text-gray-600'>
            Gerencie e acompanhe todas as matérias do jornal
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {mockArticles.map((article) => (
            <Card
              key={article.id}
              className='hover:shadow-lg transition-shadow'
            >
              <CardHeader>
                <div className='flex justify-between items-start mb-2'>
                  <Badge className={getStatusColor(article.status)}>
                    {getStatusText(article.status)}
                  </Badge>
                  <span className='text-sm text-gray-500'>{article.date}</span>
                </div>
                <CardTitle className='text-lg leading-tight mb-2'>
                  {article.title}
                </CardTitle>
                <p className='text-sm text-gray-600 mb-3'>{article.subtitle}</p>
                <div className='flex items-center text-sm text-gray-500'>
                  <User className='h-4 w-4 mr-1' />
                  {article.author}
                </div>
              </CardHeader>

              <CardContent>
                <div className='flex gap-2'>
                  <Link href={`/article/${article.id}`} className='flex-1'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full bg-transparent'
                    >
                      <Eye className='h-4 w-4 mr-1' />
                      Ler
                    </Button>
                  </Link>
                  {article.status === 'review' && (
                    <Link href={`/review/${article.id}`} className='flex-1'>
                      <Button size='sm' className='w-full'>
                        <Edit className='h-4 w-4 mr-1' />
                        Revisar
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
