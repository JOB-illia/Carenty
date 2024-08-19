import type { v_heading, v_subheading, text } from './types';

export default <Record<v_heading | v_subheading | text, { size: string; height: string }>>{
  'heading-1': {
    size: 62 + '@s',
    height: 75 + '@s',
  },
  'heading-2': {
    size: 56 + '@s',
    height: 68 + '@s',
  },
  'heading-3': {
    size: 48 + '@s',
    height: 58 + '@s',
  },
  'heading-4': {
    size: 40 + '@s',
    height: 48 + '@s',
  },
  'heading-5': {
    size: 36 + '@s',
    height: 44 + '@s',
  },
  'heading-6': {
    size: 32 + '@s',
    height: 39 + '@s',
  },
  'subheading-1': {
    size: 24 + '@s',
    height: 29 + '@s',
  },
  'subheading-2': {
    size: 20 + '@s',
    height: 24 + '@s',
  },
  'subheading-3': {
    size: 18 + '@s',
    height: 22 + '@s',
  },
  'text-1': {
    size: 16 + '@s',
    height: 19 + '@s',
  },
  'text-2': {
    size: 14 + '@s',
    height: 17 + '@s',
  },
  'text-3': {
    size: 12 + '@s',
    height: 15 + '@s',
  },
  'text-4': {
    size: 10 + '@s',
    height: 12 + '@s',
  },
};

export const borderRadius: Record<string, number> = {
  '100': 100,
  '12': 12,
};
