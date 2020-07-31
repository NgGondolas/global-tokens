# GlobalTokens

## Usage

```typescript
import {Component, inject, InjectionToken} from '@angular/core';
import {USER_AGENT} from '@nggondolas/global-tokens';

export const GET_BROWSER = new InjectionToken<string>('User Agent', {
    providedIn: 'root',
    factory: () => inject(USER_AGENT).toLowerCase()
});

@Component({})
export class AppComponent {
    constructor(@Inject(GET_BROWSER) private readonly userAgent: string) {}

    get foo(): string {
        return this.userAgent;
    }
}

```