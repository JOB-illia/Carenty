import { carenty } from '~/src/shared/api';

export interface IApiViewerPayload {
  email: string;
  password: string;
}

export const apiAuthByEmail = ({ email, password }: IApiViewerPayload) => {
  return carenty.post<{ token: string }>('/api/auth/login', { email, password });
};
