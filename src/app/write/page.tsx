'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Eye, Send } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function WriteArticle() {
  const router = useRouter();

  const handlePreview = () => {
    router.push('/article/preview');
  };

  const handleSubmit = () => {
    alert('Matéria enviada para revisão!');
    router.push('/');
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <Link href='/'>
                <Button variant='ghost' size='sm' className='mr-4'>
                  <ArrowLeft className='h-4 w-4 mr-2' />
                  Voltar
                </Button>
              </Link>
              <h1 className='text-xl font-semibold text-gray-900'>
                Escrever Nova Matéria
              </h1>
            </div>

            <div className='flex items-center space-x-2'>
              <Button variant='outline' onClick={handlePreview}>
                <Eye className='h-4 w-4 mr-2' />
                Visualizar
              </Button>

              <Button onClick={handleSubmit}>
                <Send className='h-4 w-4 mr-2' />
                Enviar para Revisão
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Conteúdo da Matéria</CardTitle>
            </CardHeader>

            <CardContent className='space-y-6'>
              <div className='space-y-2'>
                <Label htmlFor='title'>Título da Matéria</Label>
                <Input
                  id='title'
                  placeholder='Digite o título principal da matéria'
                  className='text-lg font-medium'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='subtitle'>Subtítulo</Label>
                <Input
                  id='subtitle'
                  placeholder='Digite o subtítulo ou linha de apoio'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='content'>Conteúdo da Matéria</Label>
                <div className='border rounded-lg'>
                  <div className='border-b p-2 bg-gray-50 rounded-t-lg'>
                    <div className='flex items-center space-x-2 text-sm'>
                      <Button variant='ghost' size='sm' className='h-8 px-2'>
                        <strong>B</strong>
                      </Button>
                      <Button variant='ghost' size='sm' className='h-8 px-2'>
                        <em>I</em>
                      </Button>
                      <Button variant='ghost' size='sm' className='h-8 px-2'>
                        <u>U</u>
                      </Button>
                      <div className='w-px h-4 bg-gray-300' />
                      <Button variant='ghost' size='sm' className='h-8 px-2'>
                        H1
                      </Button>
                      <Button variant='ghost' size='sm' className='h-8 px-2'>
                        H2
                      </Button>
                      <div className='w-px h-4 bg-gray-300' />
                      <Button variant='ghost' size='sm' className='h-8 px-2'>
                        Lista
                      </Button>
                      <Button variant='ghost' size='sm' className='h-8 px-2'>
                        Link
                      </Button>
                    </div>
                  </div>

                  <Textarea
                    id='content'
                    placeholder='Escreva o conteúdo da sua matéria aqui. Use este espaço como se fosse um editor de texto completo...'
                    className='min-h-[400px] border-0 resize-none focus-visible:ring-0 rounded-t-none'
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
