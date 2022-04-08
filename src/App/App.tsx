import { useState } from 'react';
import { UseEffectAntiPatterns } from '../UseEffect/AntiPatterns/AntiPatterns';
import { QueryProvider } from './QueryProvider';

const inputId = 'firstNameId';
export function App() {
  const [firstName, setFirstName] = useState('jaz');
  return (
    <QueryProvider>
      <label id="firstNameLabel" htmlFor={inputId}>
        First Name
        <input
          id={inputId}
          aria-labelledby="firstNameLabel"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <h1>Use Effect AntiPatterns</h1>
      <UseEffectAntiPatterns firstName={firstName} />
    </QueryProvider>
  );
}
