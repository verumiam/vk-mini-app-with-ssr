'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

import { VKView } from '@/shared/view';

const Header = dynamic(() => import('@/widgets/header/header'));

interface TemplateProps {
  children: ReactElement;
}

export default function Template({ children }: TemplateProps) {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      <VKView>{children}</VKView>
    </HydrationBoundary>
  );
}
