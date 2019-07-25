import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';

import enUS from '../i18n/en-US';

import '../src/styles/box-ui.theme.scss';

const messages = {
    'en-US': enUS,
};

const getMessages = locale => messages[locale];
const getFormats = locale => ({});

setIntlConfig({
    locales: ['en-US', 'de'],
    defaultLocale: 'en-US',
    getMessages,
    getFormats,
});

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withIntl);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
