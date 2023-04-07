import QRCode from 'qrcode';
import { useCallback, useRef, useState } from 'react';
import { Container, Description, Form, Introduction } from './App.styles';
import QRCodeImage from './assets/qr-code.svg';
import Header from './components/Header';

// eslint-disable-next-line prefer-named-capture-group, unicorn/no-unsafe-regex
const URL_REGEX = /^(https?:\/\/)?([\d.a-z-]+)\.([.a-z]{2,6})([\w ./-]*)*\/?$/;

const ALLOWED_SIZES = [100, 200, 300, 400, 500, 600, 700] as const;

function App() {
  const [url, setUrl] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [error, setError] = useState(false);
  const [size, setSize] = useState(300 as (typeof ALLOWED_SIZES)[number]);

  const handleURLChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setUrl(value);
      setError(false);

      if (!value || !URL_REGEX.test(value)) setError(true);
    },
    [],
  );

  const handleSizeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      setSize(Number(value) as (typeof ALLOWED_SIZES)[number]);
    },
    [],
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setGeneratedUrl(await QRCode.toDataURL(url));
    },
    [url],
  );

  return (
    <>
      <Header />

      <Container>
        <Description>
          <Introduction>
            <h1>QR Code Generator</h1>
            <p>
              QR Codes allow smartphone users to access your website simply and
              quickly.
            </p>
            <p>
              Enter your URL below to generate a QR Code and download the image.
            </p>
          </Introduction>

          <img alt="QR Code" src={QRCodeImage} />
        </Description>

        <Form isInvalid={error} onSubmit={handleSubmit}>
          <input
            id="url"
            onChange={handleURLChange}
            placeholder="Enter your URL"
            type="url"
            value={url}
          />

          <select defaultValue="300">
            {ALLOWED_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}x{size}
              </option>
            ))}
          </select>

          <button disabled={!url || error} type="submit">
            Generate QR Code
          </button>
        </Form>

        {generatedUrl && (
          <img
            alt="Generated QR Code for the requested URL"
            height={size}
            src={generatedUrl}
            title="Generated QR Code for the requested URL"
            width={size}
          />
        )}
      </Container>
    </>
  );
}

export default App;
