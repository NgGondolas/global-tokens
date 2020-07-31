import {TestBed} from '@angular/core/testing';
import {NAVIGATOR} from '../navigator-ref';

describe('WINDOW', () => {
    it('injects window.navigator object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(NAVIGATOR)).toBe(window.navigator);
    });
});
