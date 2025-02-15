/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseValueAccessorDirective } from './base-value-accessor';

@Directive({
  standalone: true,
  selector: 'scale-radio-button[formControlName],[sclRadioControl]',
  host: {
    '(scaleChange)': '_handleInput($event.target.value)',
    '(blur)': 'onTouched()'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioValueAccessorDirective,
      multi: true
    }
  ]
})
export class RadioValueAccessorDirective extends BaseValueAccessorDirective {

  constructor(el: ElementRef) {
    super(el);
  }

  // TODO

}
