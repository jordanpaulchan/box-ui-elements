import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import Button from './Button';

// eslint-disable-next-line import/prefer-default-export
export const actions = {
    onClick: action('onClick'),
};

storiesOf('Button', module)
    .add('default', () => <Button {...actions}>{text('Label', 'Click Here')}</Button>, {
        notes: 'Default Button state',
    })
    .add('loading', () => (
        <Button {...actions} isLoading>
            Click Here
        </Button>
    ))
    .add('disabled', () => (
        <Button {...actions} isDisabled>
            Click Here
        </Button>
    ))
    .add('radar', () => (
        <Button {...actions} showRadar>
            Click Here
        </Button>
    ));
