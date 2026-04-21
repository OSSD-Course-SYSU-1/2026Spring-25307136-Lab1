if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface IndexPage_Params {
    webCanBack?: boolean;
    webCanForward?: boolean;
    controller?: webview.WebviewController;
    statusBarHeight?: number;
    sliderBarHeight?: number;
    arkTSObj?: ArkTSFunModel;
}
import type { BusinessError } from "@ohos:base";
import webview from "@ohos:web.webview";
import window from "@ohos:window";
import Logger from "@bundle:com.example.pageredirection/entry/ets/common/utils/Logger";
import { CommonConstants } from "@bundle:com.example.pageredirection/entry/ets/common/constants/CommonConstants";
import type { ArkTSFunModel } from '../model/ProductModel';
const TAG: string = '[IndexPage]';
class IndexPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__webCanBack = new ObservedPropertySimplePU(false, this, "webCanBack");
        this.__webCanForward = new ObservedPropertySimplePU(false, this, "webCanForward");
        this.__controller = new ObservedPropertyObjectPU(new webview.WebviewController(), this, "controller");
        this.__statusBarHeight = new ObservedPropertySimplePU(0, this, "statusBarHeight");
        this.__sliderBarHeight = new ObservedPropertySimplePU(0, this, "sliderBarHeight");
        this.arkTSObj = {
            jumpOrderConfirm: (detailStr: string) => this.jumpOrderConfirm(detailStr)
        };
        this.setInitiallyProvidedValue(params);
        this.declareWatch("webCanBack", this.updateStatus);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: IndexPage_Params) {
        if (params.webCanBack !== undefined) {
            this.webCanBack = params.webCanBack;
        }
        if (params.webCanForward !== undefined) {
            this.webCanForward = params.webCanForward;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.statusBarHeight !== undefined) {
            this.statusBarHeight = params.statusBarHeight;
        }
        if (params.sliderBarHeight !== undefined) {
            this.sliderBarHeight = params.sliderBarHeight;
        }
        if (params.arkTSObj !== undefined) {
            this.arkTSObj = params.arkTSObj;
        }
    }
    updateStateVars(params: IndexPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__webCanBack.purgeDependencyOnElmtId(rmElmtId);
        this.__webCanForward.purgeDependencyOnElmtId(rmElmtId);
        this.__controller.purgeDependencyOnElmtId(rmElmtId);
        this.__statusBarHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__sliderBarHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__webCanBack.aboutToBeDeleted();
        this.__webCanForward.aboutToBeDeleted();
        this.__controller.aboutToBeDeleted();
        this.__statusBarHeight.aboutToBeDeleted();
        this.__sliderBarHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __webCanBack: ObservedPropertySimplePU<boolean>;
    get webCanBack() {
        return this.__webCanBack.get();
    }
    set webCanBack(newValue: boolean) {
        this.__webCanBack.set(newValue);
    }
    private __webCanForward: ObservedPropertySimplePU<boolean>;
    get webCanForward() {
        return this.__webCanForward.get();
    }
    set webCanForward(newValue: boolean) {
        this.__webCanForward.set(newValue);
    }
    private __controller: ObservedPropertyObjectPU<webview.WebviewController>;
    get controller() {
        return this.__controller.get();
    }
    set controller(newValue: webview.WebviewController) {
        this.__controller.set(newValue);
    }
    private __statusBarHeight: ObservedPropertySimplePU<number>;
    get statusBarHeight() {
        return this.__statusBarHeight.get();
    }
    set statusBarHeight(newValue: number) {
        this.__statusBarHeight.set(newValue);
    }
    private __sliderBarHeight: ObservedPropertySimplePU<number>;
    get sliderBarHeight() {
        return this.__sliderBarHeight.get();
    }
    set sliderBarHeight(newValue: number) {
        this.__sliderBarHeight.set(newValue);
    }
    private arkTSObj: ArkTSFunModel;
    aboutToAppear() {
        webview.WebviewController.setWebDebuggingAccess(true);
        window.getLastWindow(this.getUIContext().getHostContext(), (err: BusinessError, windowClass: window.Window) => {
            if (err && err.code) {
                Logger.error(TAG, `Failed to obtain the main window. Cause: code=${err.code}, message=${err.message}`);
                return;
            }
            Logger.info(TAG, 'Succeeded in obtaining the main window. Data: ' + JSON.stringify(windowClass));
            // Realize the immersive effect.
            try {
                let type = window.AvoidAreaType.TYPE_SYSTEM;
                // Get status bar height.
                let area: window.AvoidArea = windowClass.getWindowAvoidArea(type);
                let statusBarHeight = this.getUIContext().px2vp(area.topRect.height);
                let sliderBarHeight = this.getUIContext().px2vp(area.bottomRect.height);
                this.statusBarHeight = statusBarHeight;
                this.sliderBarHeight = sliderBarHeight;
                if (statusBarHeight > 0) {
                    windowClass.setWindowLayoutFullScreen(true);
                }
            }
            catch (exception) {
                let error = exception as BusinessError;
                Logger.error(TAG, `Failed to set the system bar properties. Cause: code=${error.code}, message=${error.message}`);
            }
        });
    }
    onPageShow() {
        this.updateStatusBar(this.webCanBack);
    }
    onPageHide() {
        this.updateStatusBar(false);
    }
    updateStatus() {
        this.updateStatusBar(this.webCanBack);
    }
    onBackPress() {
        if (this.webCanBack) {
            try {
                this.controller.backward();
            }
            catch (exception) {
                let error = exception as BusinessError;
                Logger.error(TAG, `Failed to backward. Cause: code=${error.code}, message=${error.message}`);
            }
            return true;
        }
        return false;
    }
    updateStatusBar(isDarkMode?: boolean): void {
        window.getLastWindow(this.getUIContext().getHostContext()).then((windowClass: window.Window) => {
            let systemBarProperties: window.SystemBarProperties = {
                statusBarColor: isDarkMode ? '#000000' : '#F1F3F5',
                statusBarContentColor: isDarkMode ? '#FFFFFF' : '#000000'
            };
            try {
                windowClass.setWindowSystemBarProperties(systemBarProperties);
            }
            catch (exception) {
                let error = exception as BusinessError;
                Logger.error(TAG, `Failed to set the system bar properties. Cause: code=${error.code}, message=${error.message}`);
            }
        }).catch((error: BusinessError) => {
            Logger.error(TAG, `Failed to get window. Cause: code=${error.code}, message=${error.message}`);
        });
    }
    jumpOrderConfirm(detailStr: string): void {
        this.getUIContext().getRouter().pushUrl({
            url: 'pages/OrderConfirmPage',
            params: { statusBarHeight: this.statusBarHeight, sliderBarHeight: this.sliderBarHeight, detailStr }
        }).catch((error: BusinessError) => {
            Logger.error(TAG, `Failed to push url. Cause: code=${error.code}, message=${error.message}`);
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.backgroundColor({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Column.padding({ top: this.statusBarHeight - 1, bottom: this.sliderBarHeight });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Web.create({ src: { "id": 0, "type": 30000, params: ['product_list.html'], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, controller: this.controller });
            Web.layoutWeight(1);
            Web.javaScriptProxy({
                object: this.arkTSObj,
                name: 'arkTSFunObj',
                methodList: ['jumpOrderConfirm'],
                controller: this.controller
            });
            Web.onConfirm(() => {
                try {
                    this.getUIContext().getPromptAction().showToast({
                        message: { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" },
                        duration: CommonConstants.TOAST_DURATION
                    });
                }
                catch (exception) {
                    let error = exception as BusinessError;
                    Logger.error(TAG, `Failed to show toast. Cause: code=${error.code}, message=${error.message}`);
                }
                return false;
            });
            Web.onPageEnd(() => {
                try {
                    this.webCanBack = this.controller.accessBackward();
                    this.webCanForward = this.controller.accessForward();
                }
                catch (exception) {
                    let error = exception as BusinessError;
                    Logger.error(TAG, `Failed to access backward or forward. Cause: code=${error.code}, message=${error.message}`);
                }
            });
        }, Web);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.width({ "id": 16777240, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Button.aspectRatio(1);
            Button.enabled(this.webCanBack);
            Button.onClick(() => {
                try {
                    this.controller.backward();
                }
                catch (exception) {
                    let error = exception as BusinessError;
                    Logger.error(TAG, `Failed to backward. Cause: code=${error.code}, message=${error.message}`);
                }
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.webCanBack ? { "id": 16777265, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } : { "id": 16777264, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.width({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.aspectRatio(1);
        }, Image);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.width({ "id": 16777240, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Button.aspectRatio(1);
            Button.enabled(this.webCanForward);
            Button.onClick(() => {
                try {
                    this.controller.backward();
                }
                catch (exception) {
                    let error = exception as BusinessError;
                    Logger.error(TAG, `Failed to backward. Cause: code=${error.code}, message=${error.message}`);
                }
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.webCanForward ? { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } : { "id": 16777269, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.width({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.aspectRatio(1);
        }, Image);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.width({ "id": 16777240, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Button.aspectRatio(1);
            Button.onClick(() => {
                try {
                    this.controller.backward();
                }
                catch (exception) {
                    let error = exception as BusinessError;
                    Logger.error(TAG, `Failed to backward. Cause: code=${error.code}, message=${error.message}`);
                }
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777266, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.width({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.aspectRatio(1);
        }, Image);
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "IndexPage";
    }
}
registerNamedRoute(() => new IndexPage(undefined, {}), "", { bundleName: "com.example.pageredirection", moduleName: "entry", pagePath: "pages/IndexPage", pageFullPath: "entry/src/main/ets/pages/IndexPage", integratedHsp: "false", moduleType: "followWithHap" });
