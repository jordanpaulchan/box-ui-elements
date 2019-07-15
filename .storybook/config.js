import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import '../src/styles/box-ui.theme.scss';

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withA11y);

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
