'use client';

import vkBridge, { parseURLSearchParamsForGetLaunchParams } from '@vkontakte/vk-bridge';
import { useAdaptivity, useAppearance, useInsets } from '@vkontakte/vk-bridge-react';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { AppRootMode } from '@vkontakte/vkui/dist/components/AppRoot/types';
import { FC, ReactNode } from 'react';

import { transformVKBridgeAdaptivity } from '@/shared/utils';

interface VKProviderProps {
  children: ReactNode;
  mode: AppRootMode;
}

vkBridge.send('VKWebAppInit');

const VKProvider: FC<VKProviderProps> = ({ children, mode }) => {
  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const searchParams = typeof window !== 'undefined' ? window.location.search : '';
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(searchParams);

  return (
    <ConfigProvider
      appearance={vkBridgeAppearance}
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot safeAreaInsets={vkBridgeInsets} mode={mode}>
          {children}
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default VKProvider;
