import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from './navigator-ref';

export const USER_AGENT = new InjectionToken<string>(
    'An abstraction over window.navigator.userAgent object',
    {
        factory: () => inject(NAVIGATOR).userAgent,
    },
);
