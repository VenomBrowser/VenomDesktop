import * as React from 'react';
import { NavigationDrawer } from '../NavigationDrawer';
import { observer } from 'mobx-react-lite';
import { WEBUI_BASE_URL, WEBUI_URL_SUFFIX } from '~/constants/files';
import {
  ICON_BOOKMARKS,
  ICON_EXTENSIONS,
  ICON_DOWNLOAD,
} from '~/renderer/constants/icons';

const MenuItem = observer(
  ({
    name,
    children,
    icon,
  }: {
    name: string;
    children: any;
    icon?: string;
  }) => (
    <NavigationDrawer.Item
      onClick={() =>
        (window.location.href = `${WEBUI_BASE_URL}${name}${WEBUI_URL_SUFFIX}`)
      }
      selected={window.location.href.startsWith(
        `${WEBUI_BASE_URL}${name}${WEBUI_URL_SUFFIX}`,
      )}
      icon={icon}
    >
      {children}
    </NavigationDrawer.Item>
  ),
);

export const GlobalNavigationDrawer = () => {
  return (
    <NavigationDrawer dense title="">
      <MenuItem name="bookmarks" icon={ICON_BOOKMARKS}>
        Bookmarks
      </MenuItem>
      <MenuItem name="downloads" icon={ICON_DOWNLOAD}>
        Downloads
      </MenuItem>
      <MenuItem name="extensions" icon={ICON_EXTENSIONS}>
        Extensions
      </MenuItem>
    </NavigationDrawer>
  );
};
