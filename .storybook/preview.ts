import type { Preview } from '@storybook/react-vite'
import Highcharts from 'highcharts';
import {
  primitives,
  decorative,
  transportation,
  peopleAnalytics,
  registerSymbols,
} from '../src/index.js';

// Register all symbol sets for use across every story
registerSymbols(
  { ...primitives, ...decorative, ...transportation, ...peopleAnalytics },
  Highcharts
);
// Also register primitives under the non-invasive 'primitive-*' prefix
registerSymbols(primitives, Highcharts, { prefix: 'primitive' });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;