import type { ALLOWED_SIZES } from '../utils/constants';

export interface GeneratorState {
  error: boolean;
  generatedUrl: string;
  size: (typeof ALLOWED_SIZES)[number];
  url: string;
}

export type GeneratorActionKind = 'SET_ERROR' | 'SET_GENERATED_URL' | 'SET_SIZE' | 'SET_URL';

export interface GeneratorAction {
  payload: any;
  type: GeneratorActionKind;
}

export function generatorReducer(
  state: GeneratorState,
  action: GeneratorAction,
): GeneratorState {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_GENERATED_URL':
      return {
        ...state,
        generatedUrl: action.payload,
      };
    case 'SET_SIZE':
      return {
        ...state,
        size: action.payload,
      };
    case 'SET_URL':
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
}