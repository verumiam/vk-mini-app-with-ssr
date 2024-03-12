'use client';

import {
  Button,
  FormItem,
  FormLayoutGroup,
  Group,
  Header,
  Panel,
  SimpleCell,
  Textarea,
} from '@vkontakte/vkui';
import { FC } from 'react';

import Link from '@/shared/link';

import useFactForm from '../lib/fact-form.hook';

interface FactPageProps {
  id: string;
}

const FactPage: FC<FactPageProps> = ({ id }) => {
  const { handleClick, handleChange, fact, textareaRef, isRefetching } = useFactForm();

  return (
    <Panel id={id}>
      <Group header={<Header mode="secondary">Страница с фактом</Header>}>
        <SimpleCell>
          <Link href="/">Главное меню</Link>
        </SimpleCell>
        <SimpleCell>
          <Link href="/user">Информация о человеке</Link>
        </SimpleCell>
        <FormLayoutGroup>
          <FormItem>
            <Textarea
              placeholder="Тут должен появиться интересный факт, выполни запрос"
              value={fact}
              getRef={textareaRef}
              onChange={(e) => handleChange(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Button loading={isRefetching} onClick={handleClick}>
              Выполнить запрос
            </Button>
          </FormItem>
        </FormLayoutGroup>
      </Group>
    </Panel>
  );
};

export default FactPage;
