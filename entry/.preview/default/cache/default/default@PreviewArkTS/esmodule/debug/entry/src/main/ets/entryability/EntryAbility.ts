import UIAbility from "@ohos:app.ability.UIAbility";
import type window from "@ohos:window";
import Logger from "@bundle:com.example.pageredirection/entry/ets/common/utils/Logger";
const TAG = '[EntryAbility]';
export default class EntryAbility extends UIAbility {
    onCreate(): void {
        Logger.info(TAG, 'Ability onCreate');
    }
    onDestroy(): void {
        Logger.info(TAG, 'Ability onDestroy');
    }
    onWindowStageCreate(windowStage: window.WindowStage): void {
        // Main window is created, set main page for this ability.
        Logger.info(TAG, 'Ability onWindowStageCreate');
        windowStage.loadContent('pages/IndexPage', (err, data) => {
            if (err.code) {
                Logger.error(TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
                return;
            }
            Logger.info(TAG, 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
        });
    }
    onWindowStageDestroy(): void {
        // Main window is destroyed, release UI related resources.
        Logger.info(TAG, 'Ability onWindowStageDestroy');
    }
    onForeground(): void {
        // Ability has brought to foreground.
        Logger.info(TAG, 'Ability onForeground');
    }
    onBackground(): void {
        // Ability has back to background.
        Logger.info(TAG, 'Ability onBackground');
    }
}
