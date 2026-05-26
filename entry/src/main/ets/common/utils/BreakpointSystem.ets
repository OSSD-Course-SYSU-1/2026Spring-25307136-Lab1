/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { mediaquery } from '@kit.ArkUI';

/**
 * Breakpoint constants following HarmonyOS official recommendations.
 * sm: 320-600vp (phone)
 * md: 600-840vp (foldable / small tablet)
 * lg: 840+vp (tablet / large screen)
 */
export class BreakpointConstants {
  static readonly BREAKPOINT_SM: string = 'sm';
  static readonly BREAKPOINT_MD: string = 'md';
  static readonly BREAKPOINT_LG: string = 'lg';
  static readonly CURRENT_BREAKPOINT: string = 'currentBreakpoint';
  static readonly RANGE_SM: string = '(320vp<=width<600vp)';
  static readonly RANGE_MD: string = '(600vp<=width<840vp)';
  static readonly RANGE_LG: string = '(840vp<=width)';
}

/**
 * Utility class for responsive value selection based on breakpoints.
 */
declare interface BreakPointTypeOption<T> {
  sm: T;
  md?: T;
  lg?: T;
}

export class BreakPointType<T> {
  options: BreakPointTypeOption<T>;

  constructor(option: BreakPointTypeOption<T>) {
    this.options = option;
  }

  getValue(currentBreakPoint: string): T {
    if (currentBreakPoint === BreakpointConstants.BREAKPOINT_MD && this.options.md !== undefined) {
      return this.options.md as T;
    }
    if (currentBreakPoint === BreakpointConstants.BREAKPOINT_LG && this.options.lg !== undefined) {
      return this.options.lg as T;
    }
    return this.options.sm as T;
  }
}

/**
 * Breakpoint system that monitors window size and updates AppStorage.
 * Tablet devices (>= 840vp) fall into 'lg' breakpoint.
 */
export class BreakpointSystem {
  private currentBreakpoint: string = BreakpointConstants.BREAKPOINT_SM;
  private smListener?: mediaquery.MediaQueryListener;
  private mdListener?: mediaquery.MediaQueryListener;
  private lgListener?: mediaquery.MediaQueryListener;

  public getCurrentBreakpoint(): string {
    return this.currentBreakpoint;
  }

  public isTablet(): boolean {
    return this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ||
      this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD;
  }

  private updateCurrentBreakpoint(breakpoint: string): void {
    if (this.currentBreakpoint !== breakpoint) {
      this.currentBreakpoint = breakpoint;
      AppStorage.setOrCreate<string>(BreakpointConstants.CURRENT_BREAKPOINT, this.currentBreakpoint);
    }
  }

  private isBreakpointSM = (mediaQueryResult: mediaquery.MediaQueryResult): void => {
    if (mediaQueryResult.matches) {
      this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_SM);
    }
  };

  private isBreakpointMD = (mediaQueryResult: mediaquery.MediaQueryResult): void => {
    if (mediaQueryResult.matches) {
      this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_MD);
    }
  };

  private isBreakpointLG = (mediaQueryResult: mediaquery.MediaQueryResult): void => {
    if (mediaQueryResult.matches) {
      this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_LG);
    }
  };

  public register(): void {
    this.smListener = mediaquery.matchMediaSync(BreakpointConstants.RANGE_SM);
    this.smListener.on('change', this.isBreakpointSM);
    this.mdListener = mediaquery.matchMediaSync(BreakpointConstants.RANGE_MD);
    this.mdListener.on('change', this.isBreakpointMD);
    this.lgListener = mediaquery.matchMediaSync(BreakpointConstants.RANGE_LG);
    this.lgListener.on('change', this.isBreakpointLG);

    // Initialize with current size
    if (this.smListener.matches) {
      this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_SM);
    } else if (this.mdListener.matches) {
      this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_MD);
    } else if (this.lgListener.matches) {
      this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_LG);
    }
  }

  public unregister(): void {
    this.smListener?.off('change', this.isBreakpointSM);
    this.mdListener?.off('change', this.isBreakpointMD);
    this.lgListener?.off('change', this.isBreakpointLG);
  }
}
