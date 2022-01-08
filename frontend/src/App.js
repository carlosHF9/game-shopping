import logo from './logo.svg';
import './App.css';
import { Button } from './assets/button';
import { ThemeProvider } from 'styled-components';
import LoadingAnimation from './assets/loading-animation';



const theme = {
  primaryColor: '#790796',
  textColor: 'black',
  textWithPrimary: 'white',
  overallBackgroundColor: 'white',
  font: "'Josefin Sans', sans-serif",
  defaultBorderRadius: '3px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Nice button</h1>
        <Button size="large">Comprar</Button>

        <LoadingAnimation />
      </div>
    </ThemeProvider>
  );
}

export default App;
