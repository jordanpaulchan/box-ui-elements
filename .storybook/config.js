import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
// import requireContext from 'require-context.macro';

import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';
import jaLocaleData from 'react-intl/locale-data/ja';

import enUS from '../i18n/en-US';
import deDE from '../i18n/de-DE';
import jaJP from '../i18n/ja-JP';

import '../src/styles/box-ui.theme.scss';

const messages = {
    'en-US': enUS,
    'de-DE': deDE,
    'ja-JP': jaJP,
};

const getMessages = locale => messages[locale];
const getFormats = locale => ({});

setIntlConfig({
    locales: ['en-US', 'de-DE', 'ja-JP'],
    defaultLocale: 'en-US',
    getMessages,
    getFormats,
});

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);
addLocaleData(jaLocaleData);

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withIntl);

addParameters({
    options: {
        sortStoriesByKind: true,
    },
});

// automatically import all files with *.stories
configure(require.context('../src', true, /\.stories\.(mdx)$/), module);
