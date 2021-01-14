import React from 'react';
import { Story } from '@storybook/react';
import { MultiFileEditor, MultiFileEditorProps } from './MultiFileEditor';
import { sandpackDarkTheme } from '../themes';

export default {
  title: 'presets/Multi-File Editor',
  component: MultiFileEditor,
};

const reactCode = `import React from 'react';
import Button from './button';
import Link from './link';

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button />
      <Link />
    </div>
  )
}
`;

const buttonCode = `import React from 'react';

export default function Button() {
  return <button>Click me</button>
}
`;

const linkCode = `import React from 'react';

export default function Link() {
  return <a href="https://www.example.com" target="_blank">Click Here</a>
}`;

export const ReactEditor: Story<MultiFileEditorProps> = args => (
  <MultiFileEditor
    {...args}
    editableFiles={{
      '/App.js': { code: reactCode },
      '/button.js': { code: buttonCode },
      '/link.js': { code: linkCode },
    }}
    template="react"
  />
);

export const VanillaEditor: Story<MultiFileEditorProps> = args => (
  <MultiFileEditor
    {...args}
    template="vanilla"
    editableFiles={['/src/index.js', '/src/styles.css']}
  />
);

export const DarkTheme: Story<MultiFileEditorProps> = args => (
  <MultiFileEditor
    {...args}
    editableFiles={{
      '/App.js': { code: reactCode },
      '/button.js': { code: buttonCode },
      '/link.js': { code: linkCode },
    }}
    template="react"
    previewOptions={{ showNavigator: true }}
    theme={sandpackDarkTheme}
  />
);
