import { configure } from '@kadira/storybook';

function loadStories() {
  require('../components');
}

configure(loadStories, module);
