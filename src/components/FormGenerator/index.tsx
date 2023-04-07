import QRCode from 'qrcode';
import { useCallback, useEffect, useState } from 'react';
import type {
  GeneratorAction,
  GeneratorState,
  generatorReducer,
} from '../../hooks/generator';
import { ALLOWED_SIZES, URL_REGEX } from '../../utils/constants';
import { Form } from './styles';

interface FormGeneratorProps {
  reducer: [state: GeneratorState, dispatch: React.Dispatch<GeneratorAction>];
}

export default function FormGenerator({ reducer }: FormGeneratorProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [state, dispatch] = reducer;

  const handleURLChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      dispatch({ type: 'SET_URL', payload: value });
      dispatch({
        type: 'SET_ERROR',
        payload: !value || !URL_REGEX.test(value),
      });
    },
    [dispatch],
  );

  const handleSizeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      dispatch({ type: 'SET_SIZE', payload: Number(value) });
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      dispatch({
        type: 'SET_GENERATED_URL',
        payload: await QRCode.toDataURL(state.url),
      });
    },
    [state.url, dispatch],
  );

  return (
    <Form isInvalid={state.error} onSubmit={handleSubmit}>
      <input
        id="url"
        onChange={handleURLChange}
        placeholder="Enter your URL"
        type="url"
        value={state.url}
      />

      {!isMobile && (
        <select defaultValue="300" onChange={handleSizeChange}>
          {ALLOWED_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}x{size}
            </option>
          ))}
        </select>
      )}

      <button disabled={!state.url || state.error} type="submit">
        Generate QR Code
      </button>
    </Form>
  );
}
