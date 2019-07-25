import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import MetaDataInstanceEditor from './MetadataInstanceEditor';

export const props = {
    isCascadingPolicyApplicable: true,
    isDropdownBusy: false,
};

export const actions = {
    onAdd: action('onAdd'),
    onModification: action('onModification'),
    onRemove: action('onRemove'),
    onSave: action('onSave'),
};

const template0 = {
    id: 'template0',
    templateKey: 'template0',
    displayName: 'template0 simple',
    scope: 'enterprise_123',
    fields: [
        {
            id: 'field0',
            type: 'string',
            key: 'somefieldkey',
            displayName: 'Description of the field',
        },
    ],
};

const template1 = {
    id: 'template1',
    templateKey: 'template1',
    displayName: 'template1 title',
    scope: 'enterprise_123',
    fields: [
        {
            id: 'field0',
            type: 'string',
            key: 'nodescfield',
            displayName: 'No Description Field',
        },
        {
            id: 'field1',
            type: 'string',
            key: 'stringfield',
            displayName: 'String Field',
            description: 'example of a string field',
        },
        {
            id: 'field2',
            type: 'string',
            key: 'emptystring',
            displayName: 'Empty String Field',
            description: 'example of an empty string field',
        },
        {
            id: 'field3',
            type: 'float',
            key: 'floatfield',
            displayName: 'Float Field',
            description: 'example of a float field',
        },
        {
            id: 'field4',
            type: 'float',
            key: 'emptyfloat',
            displayName: 'Empty Float Field',
            description: 'example of an empty float field',
        },
        {
            id: 'field5',
            type: 'enum',
            key: 'enumfield',
            displayName: 'Enum Field',
            description: 'example of a enum field',
            options: [{ key: 'yes' }, { key: 'no' }],
        },
        {
            id: 'field6',
            type: 'enum',
            key: 'emptyenumfield',
            displayName: 'Empty Enum Field',
            description: 'example of an empty enum field',
            options: [{ key: 'yes' }, { key: 'no' }],
        },
        {
            id: 'field7',
            type: 'date',
            key: 'datefield',
            displayName: 'Date Field',
            description: 'example of a date field',
        },
        {
            id: 'field8',
            type: 'date',
            key: 'emptydatefield',
            displayName: 'Empty Date Field',
            description: 'example of an empty date field',
        },
        {
            id: 'field9',
            type: 'multiSelect',
            key: 'multiselectfield',
            displayName: 'Multi-Select Field',
            description: 'example of a multi-select field',
            options: [
                { key: 'yes' },
                { key: 'no' },
                { key: 'maybe' },
                { key: 'idk?' },
                { key: 'oh well' },
                { key: 'whatever' },
            ],
        },
        {
            id: 'field10',
            type: 'multiSelect',
            key: 'emptymultiselectfield',
            displayName: 'Empty Multi-Select Field',
            description: 'example of an empty multi-select field',
            options: [
                { key: 'yes' },
                { key: 'no' },
                { key: 'maybe' },
                { key: 'idk?' },
                { key: 'oh well' },
                { key: 'whatever' },
            ],
        },
        {
            id: 'field11',
            type: 'integer',
            key: 'integerfield',
            displayName: 'Integer Field',
            description: 'example of an integer field',
        },
        {
            id: 'field12',
            type: 'integer',
            key: 'emptyintegerfield',
            displayName: 'Empty Integer Field',
            description: 'example of an empty integer field',
        },
        {
            id: 'field13',
            type: 'string',
            key:
                'longlonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
            displayName:
                'longlonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
            description:
                'longlonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
        },
        {
            id: 'field14',
            type: 'string',
            key:
                'long long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long long',
            displayName:
                'long long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long long',
            description:
                'long long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long long',
        },
        {
            id: 'field15',
            type: 'enum',
            key:
                'enumlonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
            displayName:
                'enumlonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
            description:
                'enumlonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
            options: [
                { key: 'yes' },
                { key: 'no' },
                { key: 'maybe' },
                { key: 'idk?' },
                { key: 'oh well' },
                { key: 'whatever' },
            ],
        },
        {
            id: 'field16',
            type: 'multiSelect',
            key:
                'multiselectlonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
            displayName:
                'multiSelectlonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
            description:
                'multiSelectlonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
            options: [
                { key: 'yes' },
                { key: 'no' },
                { key: 'maybe' },
                { key: 'idk?' },
                { key: 'oh well' },
                { key: 'whatever' },
            ],
        },
        {
            id: 'field17',
            type: 'enum',
            key:
                'enumlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long long',
            displayName:
                'enumlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long long',
            description:
                'enumlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long long',
            options: [
                { key: 'yes' },
                { key: 'no' },
                { key: 'maybe' },
                { key: 'idk?' },
                { key: 'oh well' },
                { key: 'whatever' },
            ],
        },
        {
            id: 'field18',
            type: 'multiSelect',
            key:
                'multiSelectlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long long',
            displayName:
                'multiSelectlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long long',
            description:
                'multiSelectlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long long',
            options: [
                { key: 'yes' },
                { key: 'no' },
                { key: 'maybe' },
                { key: 'idk?' },
                { key: 'oh well' },
                { key: 'whatever' },
            ],
        },
        {
            id: 'field19',
            type: 'badfieldtype',
            key: 'badfieldtype',
            displayName: 'badfieldtype',
            description: 'bad field type',
        },
    ],
};

export const templates = [template0, template1];

const editor0 = {
    instance: {
        canEdit: true,
        id: 'editor0',
        data: {
            stringfield: 'some string',
            floatfield: 1,
            enumfield: 'yes',
            datefield: '2018-06-20T00:00:00.000Z',
        },
        cascadePolicy: {
            canEdit: true,
            isEnabled: false,
            id: 'some cascading policy id',
        },
    },
    template: template0,
    hasError: false,
};

const editor1 = {
    instance: {
        canEdit: true,
        id: 'editor1',
        data: {
            stringfield: 'some string',
            floatfield: 1,
            enumfield: 'yes',
            integerfield: 3,
            multiselectfield: ['no', 'maybe'],
            datefield: '2018-06-20T00:00:00.000Z',
        },
        cascadePolicy: {
            canEdit: true,
            isEnabled: false,
            id: 'some cascading policy id',
        },
    },
    template: template1,
};

export const editors = [editor0, editor1];

storiesOf('MetaDataInstanceEditor', module).add(
    'default',
    () => (
        <MetaDataInstanceEditor
            canAdd={boolean('Can Add', true)}
            templates={templates}
            editors={editors}
            {...props}
            {...actions}
        />
    ),
    {
        notes: 'MetaDataInstanceEditor notes',
    },
);
