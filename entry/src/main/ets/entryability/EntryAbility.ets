/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
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

import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import Logger from '../common/utils/Logger';

const TAG = '[EntryAbility]';

export default class EntryAbility extends UIAbility {
  storage: LocalStorage = new LocalStorage();

  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info(TAG, 'Ability onCreate');
    // 迁移目的端冷启动时，恢复迁移数据并触发页面恢复
    if (launchParam.launchReason === AbilityConstant.LaunchReason.CONTINUATION) {
      this.context.setMissionContinueState(AbilityConstant.ContinueState.ACTIVE, (result) => {
        Logger.info(TAG, `setMissionContinueState: ${JSON.stringify(result)}`);
      });
      if (want.parameters !== undefined) {
        if (want.parameters['continuePageUrl'] !== undefined) {
          AppStorage.setOrCreate<string>('continuePageUrl', want.parameters['continuePageUrl'] as string);
        }
        if (want.parameters['continueOrderDetail'] !== undefined) {
          AppStorage.setOrCreate<string>('continueOrderDetail', want.parameters['continueOrderDetail'] as string);
        }
        if (want.parameters['statusBarHeight'] !== undefined) {
          AppStorage.setOrCreate<number>('continueStatusBarHeight', want.parameters['statusBarHeight'] as number);
        }
        if (want.parameters['sliderBarHeight'] !== undefined) {
          AppStorage.setOrCreate<number>('continueSliderBarHeight', want.parameters['sliderBarHeight'] as number);
        }
      }
      this.context.restoreWindowStage(this.storage);
    }
  }

  onDestroy(): void {
    Logger.info(TAG, 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    Logger.info(TAG, 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/IndexPage', (err, data) => {
      if (err.code) {
        Logger.error(TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      Logger.info(TAG, 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
    });
  }

  onWindowStageRestore(windowStage: window.WindowStage): void {
    Logger.info(TAG, 'Ability onWindowStageRestore');
    // 迁移恢复时重新加载页面
    windowStage.loadContent('pages/IndexPage', (err, data) => {
      if (err.code) {
        Logger.error(TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      Logger.info(TAG, 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
    });
  }

  onWindowStageDestroy(): void {
    Logger.info(TAG, 'Ability onWindowStageDestroy');
  }

  onForeground(): void {
    Logger.info(TAG, 'Ability onForeground');
  }

  onBackground(): void {
    Logger.info(TAG, 'Ability onBackground');
  }

  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info(TAG, `Ability onNewWant, launchReason: ${launchParam.launchReason}`);
    // 迁移目的端热启动时，恢复迁移数据并触发页面恢复
    if (launchParam.launchReason === AbilityConstant.LaunchReason.CONTINUATION) {
      this.context.setMissionContinueState(AbilityConstant.ContinueState.ACTIVE, (result) => {
        Logger.info(TAG, `setMissionContinueState: ${JSON.stringify(result)}`);
      });
      if (want.parameters !== undefined) {
        if (want.parameters['continuePageUrl'] !== undefined) {
          AppStorage.setOrCreate<string>('continuePageUrl', want.parameters['continuePageUrl'] as string);
        }
        if (want.parameters['continueOrderDetail'] !== undefined) {
          AppStorage.setOrCreate<string>('continueOrderDetail', want.parameters['continueOrderDetail'] as string);
        }
        if (want.parameters['statusBarHeight'] !== undefined) {
          AppStorage.setOrCreate<number>('continueStatusBarHeight', want.parameters['statusBarHeight'] as number);
        }
        if (want.parameters['sliderBarHeight'] !== undefined) {
          AppStorage.setOrCreate<number>('continueSliderBarHeight', want.parameters['sliderBarHeight'] as number);
        }
      }
      this.context.restoreWindowStage(this.storage);
    }
  }

  // 源端保存迁移数据：当对端点击Dock栏接续图标时触发
  onContinue(wantParam: Record<string, Object>): AbilityConstant.OnContinueResult {
    Logger.info(TAG, `Ability onContinue, targetDevice: ${wantParam.targetDevice}`);

    // 保存当前浏览的Web页面URL
    const currentPageUrl = AppStorage.get<string>('currentPageUrl');
    if (currentPageUrl) {
      wantParam['continuePageUrl'] = currentPageUrl;
    }

    // 保存订单确认页的商品详情
    const orderDetail = AppStorage.get<string>('currentOrderDetail');
    if (orderDetail) {
      wantParam['continueOrderDetail'] = orderDetail;
    }

    // 保存设备状态栏和导航栏高度
    const statusBarHeight = AppStorage.get<number>('statusBarHeight');
    if (statusBarHeight !== undefined) {
      wantParam['statusBarHeight'] = statusBarHeight;
    }
    const sliderBarHeight = AppStorage.get<number>('sliderBarHeight');
    if (sliderBarHeight !== undefined) {
      wantParam['sliderBarHeight'] = sliderBarHeight;
    }

    return AbilityConstant.OnContinueResult.AGREE;
  }
}
