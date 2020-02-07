/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';
import { DtEmptyState } from 'components/empty-state/src/empty-state';

@Component({
  templateUrl: 'empty-state-custom-empty-state-table-example.html',
})
export class DtExampleCustomEmptyStateTable {}

@Component({
  selector: 'dt-example-custom-empty-state',
  providers: [
    {
      provide: DtEmptyState,
      useExisting: DtExampleCustomEmptyState,
    },
  ],
  template: `
    <dt-empty-state-item>
      <dt-empty-state-item-img>
        <img src="/assets/cta-noagent.svg" alt="My Asset" />
      </dt-empty-state-item-img>
      <dt-empty-state-item-title
        >Reusable empty state</dt-empty-state-item-title
      >
      Custom empty state message
    </dt-empty-state-item>
  `,
})
export class DtExampleCustomEmptyState extends DtEmptyState {}
