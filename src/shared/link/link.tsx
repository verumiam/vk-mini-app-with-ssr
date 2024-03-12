import { Link as VKLink, LinkProps as VKLinkProps } from '@vkontakte/vkui';
import { Route } from 'next';
import NextLink from 'next/link';
import { FC, ReactNode } from 'react';

interface LinkProps<T extends string> extends Omit<VKLinkProps, 'href'> {
  children: ReactNode;
  href: Route<T> | URL;
}

const Link: FC<LinkProps<string>> = ({ children, href, Component, ...props }) => {
  const hrefString = typeof href === 'string' ? href : href.toString();
  const linkComponent = Component ?? NextLink;

  return (
    <VKLink href={hrefString} Component={linkComponent} {...props}>
      {children}
    </VKLink>
  );
};

export default Link;
