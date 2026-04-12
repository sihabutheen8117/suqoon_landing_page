import React from 'react';
import { createRoot } from 'react-dom/client';
import FloatingAssistant from './components/FloatingAssistant';

const rootElement = document.createElement('div');
rootElement.id = 'suqoon-floating-assistant-root';
document.body.appendChild(rootElement);

createRoot(rootElement).render(<FloatingAssistant />);
