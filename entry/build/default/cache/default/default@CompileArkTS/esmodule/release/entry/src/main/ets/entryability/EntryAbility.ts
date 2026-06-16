import UIAbility from "@ohos:app.ability.UIAbility";
import type window from "@ohos:window";
import e2 from "@bundle:com.example.pageredirection/entry/ets/a/d/f";
const f2 = '[EntryAbility]';
export default class g2 extends UIAbility {
    onCreate(): void {
        e2.info(f2, 'Ability onCreate');
    }
    onDestroy(): void {
        e2.info(f2, 'Ability onDestroy');
    }
    onWindowStageCreate(windowStage: window.WindowStage): void {
        e2.info(f2, 'Ability onWindowStageCreate');
        windowStage.loadContent('pages/IndexPage', (err, data) => {
            if (err.code) {
                e2.error(f2, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
                return;
            }
            e2.info(f2, 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
        });
    }
    onWindowStageDestroy(): void {
        e2.info(f2, 'Ability onWindowStageDestroy');
    }
    onForeground(): void {
        e2.info(f2, 'Ability onForeground');
    }
    onBackground(): void {
        e2.info(f2, 'Ability onBackground');
    }
}
