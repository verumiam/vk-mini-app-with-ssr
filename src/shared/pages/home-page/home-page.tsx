'use client';

import { Group, Header, Panel, SimpleCell } from '@vkontakte/vkui';
import { FC } from 'react';

import Link from '@/shared/link';

interface HomePageProps {
  id: string;
}

const HomePage: FC<HomePageProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <Group header={<Header mode="secondary">Задания</Header>}>
        <SimpleCell>
          <Link href="/fact">Факт о ниндзя коте</Link>
        </SimpleCell>
        <SimpleCell>
          <Link href="/user">Информация о пользователе</Link>
        </SimpleCell>
      </Group>
    </Panel>
  );
};

export default HomePage;
