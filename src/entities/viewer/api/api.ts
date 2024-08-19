import { carenty } from '~/src/shared/api';
import type { IViewer } from '~/src/entities/viewer/api/types';

export const apiViewerMe = (token: string): Promise<IViewer> => {
  return carenty.get('/api/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
