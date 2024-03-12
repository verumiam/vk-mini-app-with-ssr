'use client';

import { SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react';

const HomePage = dynamic(() => import('@/shared/pages/home-page'));
const FactPage = dynamic(() => import('@/shared/pages/fact-page'));
const UserPage = dynamic(() => import('@/shared/pages/user-page'));

interface VKViewProps {
  children: ReactElement;
}

const VKView: FC<VKViewProps> = () => {
  const pathname = usePathname();

  if (!pathname) return;

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={pathname}>
          <HomePage id="/" />
          <FactPage id="/fact" />
          <UserPage id="/user" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export default VKView;
