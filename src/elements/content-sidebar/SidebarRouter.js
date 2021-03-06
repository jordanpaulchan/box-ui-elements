/**
 * @flow
 * @file Sidebar Router Component
 * @author Box
 */
import * as React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';

type Props = {
    children: React.Node,
    history?: RouterHistory,
};

const SidebarRouter = ({ children, history, ...rest }: Props) => {
    if (history) {
        return <Router history={history}>{children}</Router>;
    }

    return <MemoryRouter {...rest}>{children}</MemoryRouter>;
};

export default SidebarRouter;
