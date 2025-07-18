import { createRoot } from 'react-dom/client';

import { StrictMode } from 'react';
import { App } from './app/App';

import './globals.css';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
