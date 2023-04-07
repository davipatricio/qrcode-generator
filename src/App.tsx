import { useReducer } from 'react';
import { Container, Description, Introduction } from './App.styles';
import QRCodeImage from './assets/qr-code.svg';
import Footer from './components/Footer';
import FormGenerator from './components/FormGenerator';
import Header from './components/Header';
import { generatorReducer } from './hooks/generator';

function App() {
  const [generator, dispatch] = useReducer(generatorReducer, {
    url: '',
    generatedUrl: '',
    error: false,
    size: 300,
  });

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

        <FormGenerator reducer={[generator, dispatch]} />

        {generator.generatedUrl && (
          <img
            alt="Generated QR Code for the requested URL"
            className="generated-image"
            height={generator.size}
            src={generator.generatedUrl}
            style={{ marginBottom: '70px' }}
            title="Generated QR Code for the requested URL"
            width={generator.size}
          />
        )}
      </Container>
          
      <Footer />
    </>
  );
}

export default App;
