'use client';

import { Group, Header, Panel, SimpleCell } from '@vkontakte/vkui';
import { FC } from 'react';

import Link from '@/shared/link';

import UserForm from './user-form';

interface UserPageProps {
  id: string;
}

const UserPage: FC<UserPageProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <Group header={<Header mode="tertiary">Страница с пользователем</Header>}>
        <SimpleCell>
          <Link href="/">Главное меню</Link>
        </SimpleCell>
        <SimpleCell>
          <Link href="/fact">Факт о ниндзя коте</Link>
        </SimpleCell>
        <UserForm />
      </Group>
    </Panel>
  );
};

export default UserPage;
