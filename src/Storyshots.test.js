// import path from 'path';
import pupDevices from 'puppeteer/DeviceDescriptors';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

// const storybookUrl = path.resolve('storybook-static');

const getMatchOptions = ({ context: { kind, story }, url }) => {
    return {
        failureThreshold: 0.0005,
        failureThresholdType: 'percent',
    };
};

const beforeScreenshot = (page, { context: { kind, story }, url }) => {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, 600),
    );
};

const getScreenshotOptions = ({ context, url }) => {
    return {
        fullPage: false, // Do not take the full page screenshot. Default is 'true' in Storyshots.
    };
};

const supportedDevices = new Set(['iPad Pro landscape', 'iPhone X']);

const createCustomizePage = pupDevice => {
    return page => {
        return page.emulate(pupDevice);
    };
};

supportedDevices.forEach(supportedDevice => {
    const pupDevice = pupDevices[supportedDevice];

    if (!pupDevice) {
        return;
    }
    const customizePage = createCustomizePage(pupDevice);

    initStoryshots({
        suite: `Image storyshots: ${pupDevice.name}`,
        test: imageSnapshot({ getMatchOptions, beforeScreenshot, getScreenshotOptions, customizePage }),
    });
});
