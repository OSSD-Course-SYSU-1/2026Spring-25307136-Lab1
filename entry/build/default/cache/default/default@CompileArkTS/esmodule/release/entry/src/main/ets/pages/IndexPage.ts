if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface h2 {
    currentBreakpoint?: string;
    webCanBack?: boolean;
    webCanForward?: boolean;
    controller?: webview.WebviewController;
    statusBarHeight?: number;
    sliderBarHeight?: number;
    showCompareBtn?: boolean;
    compareMode?: boolean;
    lastUrl?: string;
    breakpointSystem?: d1;
    arkTSObj?: i2;
}
import type { BusinessError } from "@ohos:base";
import webview from "@ohos:web.webview";
import window from "@ohos:window";
import e2 from "@bundle:com.example.pageredirection/entry/ets/a/d/f";
import { i } from "@bundle:com.example.pageredirection/entry/ets/a/b/c";
import type { i2 } from "../g/h";
import { a1, d1 } from "@bundle:com.example.pageredirection/entry/ets/a/d/e";
const f2: string = '[IndexPage]';
class j2 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', a1.j1, "currentBreakpoint");
        this.__webCanBack = new ObservedPropertySimplePU(false, this, "webCanBack");
        this.__webCanForward = new ObservedPropertySimplePU(false, this, "webCanForward");
        this.__controller = new ObservedPropertyObjectPU(new webview.WebviewController(), this, "controller");
        this.__statusBarHeight = new ObservedPropertySimplePU(0, this, "statusBarHeight");
        this.__sliderBarHeight = new ObservedPropertySimplePU(0, this, "sliderBarHeight");
        this.__showCompareBtn = new ObservedPropertySimplePU(true, this, "showCompareBtn");
        this.__compareMode = new ObservedPropertySimplePU(false, this, "compareMode");
        this.lastUrl = '';
        this.breakpointSystem = new d1();
        this.arkTSObj = {
            jumpOrderConfirm: (d3: string) => this.jumpOrderConfirm(d3),
            showToast: (msg: string) => this.showArkToast(msg)
        };
        this.setInitiallyProvidedValue(params);
        this.declareWatch("webCanBack", this.updateStatus);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: h2) {
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
        if (params.showCompareBtn !== undefined) {
            this.showCompareBtn = params.showCompareBtn;
        }
        if (params.compareMode !== undefined) {
            this.compareMode = params.compareMode;
        }
        if (params.lastUrl !== undefined) {
            this.lastUrl = params.lastUrl;
        }
        if (params.breakpointSystem !== undefined) {
            this.breakpointSystem = params.breakpointSystem;
        }
        if (params.arkTSObj !== undefined) {
            this.arkTSObj = params.arkTSObj;
        }
    }
    updateStateVars(params: h2) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__webCanBack.purgeDependencyOnElmtId(rmElmtId);
        this.__webCanForward.purgeDependencyOnElmtId(rmElmtId);
        this.__controller.purgeDependencyOnElmtId(rmElmtId);
        this.__statusBarHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__sliderBarHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__showCompareBtn.purgeDependencyOnElmtId(rmElmtId);
        this.__compareMode.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__webCanBack.aboutToBeDeleted();
        this.__webCanForward.aboutToBeDeleted();
        this.__controller.aboutToBeDeleted();
        this.__statusBarHeight.aboutToBeDeleted();
        this.__sliderBarHeight.aboutToBeDeleted();
        this.__showCompareBtn.aboutToBeDeleted();
        this.__compareMode.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
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
    private __showCompareBtn: ObservedPropertySimplePU<boolean>;
    get showCompareBtn() {
        return this.__showCompareBtn.get();
    }
    set showCompareBtn(newValue: boolean) {
        this.__showCompareBtn.set(newValue);
    }
    private __compareMode: ObservedPropertySimplePU<boolean>;
    get compareMode() {
        return this.__compareMode.get();
    }
    set compareMode(newValue: boolean) {
        this.__compareMode.set(newValue);
    }
    private lastUrl: string;
    private breakpointSystem: d1;
    private arkTSObj: i2;
    aboutToAppear() {
        this.breakpointSystem.register();
        webview.WebviewController.setWebDebuggingAccess(true);
        window.getLastWindow(this.getUIContext().getHostContext(), (err: BusinessError, a3: window.Window) => {
            if (err && err.code) {
                e2.error(f2, `Failed to obtain the main window. Cause: code=${err.code}, message=${err.message}`);
                return;
            }
            e2.info(f2, 'Succeeded in obtaining the main window. Data: ' + JSON.stringify(a3));
            try {
                let type = window.AvoidAreaType.TYPE_SYSTEM;
                let area: window.AvoidArea = a3.getWindowAvoidArea(type);
                let statusBarHeight = this.getUIContext().px2vp(area.topRect.height);
                let c3 = this.getUIContext().px2vp(area.bottomRect.height);
                this.statusBarHeight = statusBarHeight;
                this.sliderBarHeight = c3;
                if (statusBarHeight > 0) {
                    a3.setWindowLayoutFullScreen(true);
                }
            }
            catch (b3) {
                let error = b3 as BusinessError;
                e2.error(f2, `Failed to set the system bar properties. Cause: code=${error.code}, message=${error.message}`);
            }
        });
    }
    onPageShow() {
        this.showCompareBtn = !this.lastUrl.includes('product_detail');
        this.compareMode = false;
        this.updateStatusBar(this.webCanBack);
    }
    onPageHide() {
        this.updateStatusBar(false);
        this.breakpointSystem.unregister();
    }
    updateStatus() {
        this.updateStatusBar(this.webCanBack);
    }
    onBackPress() {
        if (this.webCanBack) {
            try {
                this.controller.backward();
            }
            catch (z2) {
                let error = z2 as BusinessError;
                e2.error(f2, `Failed to backward. Cause: code=${error.code}, message=${error.message}`);
            }
            return true;
        }
        return false;
    }
    updateStatusBar(u2?: boolean): void {
        window.getLastWindow(this.getUIContext().getHostContext()).then((v2: window.Window) => {
            let systemBarProperties: window.SystemBarProperties = {
                statusBarColor: u2 ? '#000000' : '#F1F3F5',
                statusBarContentColor: u2 ? '#FFFFFF' : '#000000'
            };
            try {
                v2.setWindowSystemBarProperties(systemBarProperties);
            }
            catch (w2) {
                let error = w2 as BusinessError;
                e2.error(f2, `Failed to set the system bar properties. Cause: code=${error.code}, message=${error.message}`);
            }
        }).catch((error: BusinessError) => {
            e2.error(f2, `Failed to get window. Cause: code=${error.code}, message=${error.message}`);
        });
    }
    toggleCompare(): void {
        this.compareMode = !this.compareMode;
        try {
            if (this.compareMode) {
                this.controller.runJavaScript('enableCompareMode()');
            }
            else {
                this.controller.runJavaScript('disableCompareMode()');
            }
        }
        catch (t2) {
            let error = t2 as BusinessError;
            e2.error(f2, `Failed to toggle compare mode. Cause: code=${error.code}, message=${error.message}`);
        }
    }
    showArkToast(msg: string): void {
        try {
            this.getUIContext().getPromptAction().showToast({
                message: msg,
                duration: i.t
            });
        }
        catch (s2) {
            let error = s2 as BusinessError;
            e2.error(f2, `Failed to show toast. Cause: code=${error.code}, message=${error.message}`);
        }
    }
    jumpOrderConfirm(r2: string): void {
        this.showCompareBtn = false;
        this.getUIContext().getRouter().pushUrl({
            url: 'pages/OrderConfirmPage',
            params: { statusBarHeight: this.statusBarHeight, sliderBarHeight: this.sliderBarHeight, detailStr: r2 }
        }).catch((error: BusinessError) => {
            e2.error(f2, `Failed to push url. Cause: code=${error.code}, message=${error.message}`);
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(i.m);
            Column.height(i.m);
            Column.backgroundColor({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Column.padding({ top: this.statusBarHeight - 1, bottom: this.sliderBarHeight });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Web.create({ src: { "id": 0, "type": 30000, params: ['product_list.html'], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, controller: this.controller });
            Web.layoutWeight(1);
            Web.javaScriptProxy({
                object: this.arkTSObj,
                name: 'arkTSFunObj',
                methodList: ['jumpOrderConfirm', 'showToast'],
                controller: this.controller
            });
            Web.onConfirm(() => {
                try {
                    this.getUIContext().getPromptAction().showToast({
                        message: { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" },
                        duration: i.t
                    });
                }
                catch (q2) {
                    let error = q2 as BusinessError;
                    e2.error(f2, `Failed to show toast. Cause: code=${error.code}, message=${error.message}`);
                }
                return false;
            });
            Web.onPageBegin((event) => {
                if (event && event.url) {
                    this.lastUrl = event.url;
                    let o2 = event.url.includes('product_detail');
                    this.showCompareBtn = !o2;
                    if (o2 && this.compareMode) {
                        this.compareMode = false;
                    }
                }
            });
            Web.onPageEnd(() => {
                try {
                    this.webCanBack = this.controller.accessBackward();
                    this.webCanForward = this.controller.accessForward();
                }
                catch (n2) {
                    let error = n2 as BusinessError;
                    e2.error(f2, `Failed to access backward or forward. Cause: code=${error.code}, message=${error.message}`);
                }
            });
        }, Web);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.width(i.m);
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
                catch (m2) {
                    let error = m2 as BusinessError;
                    e2.error(f2, `Failed to backward. Cause: code=${error.code}, message=${error.message}`);
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
                    this.controller.forward();
                }
                catch (l2) {
                    let error = l2 as BusinessError;
                    e2.error(f2, `Failed to forward. Cause: code=${error.code}, message=${error.message}`);
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
                    this.controller.loadUrl({ "id": 0, "type": 30000, params: ['product_list.html'], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
                }
                catch (k2) {
                    let error = k2 as BusinessError;
                    e2.error(f2, `Failed to load url. Cause: code=${error.code}, message=${error.message}`);
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.showCompareBtn) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.compareMode) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Button.createWithLabel('确认');
                                    Button.constraintSize({
                                        minWidth: this.currentBreakpoint === a1.m1 ? 88 : 72,
                                        maxWidth: this.currentBreakpoint === a1.m1 ? 88 : 72,
                                        minHeight: this.currentBreakpoint === a1.m1 ? 88 : 72,
                                        maxHeight: this.currentBreakpoint === a1.m1 ? 88 : 72
                                    });
                                    Button.borderRadius(this.currentBreakpoint === a1.m1 ? 44 : 36);
                                    Button.backgroundColor({ "id": 16777274, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
                                    Button.fontColor(Color.White);
                                    Button.fontSize(this.currentBreakpoint === a1.m1 ? 22 : 18);
                                    Button.fontWeight(FontWeight.Medium);
                                    Button.shadow({
                                        radius: 8,
                                        color: '#33000000',
                                        offsetX: 0,
                                        offsetY: 2
                                    });
                                    Button.onClick(() => {
                                        this.controller.runJavaScript('confirmCompare()');
                                    });
                                    Button.position({
                                        right: this.currentBreakpoint === a1.m1 ? 24 : 16,
                                        bottom: this.sliderBarHeight + 148
                                    });
                                }, Button);
                                Button.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel(this.compareMode ? '取消' : '比货');
                        Button.constraintSize({
                            minWidth: this.currentBreakpoint === a1.m1 ? 88 : 72,
                            maxWidth: this.currentBreakpoint === a1.m1 ? 88 : 72,
                            minHeight: this.currentBreakpoint === a1.m1 ? 88 : 72,
                            maxHeight: this.currentBreakpoint === a1.m1 ? 88 : 72
                        });
                        Button.borderRadius(this.currentBreakpoint === a1.m1 ? 44 : 36);
                        Button.backgroundColor(this.compareMode ? '#E92F4F' : { "id": 16777274, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
                        Button.fontColor(Color.White);
                        Button.fontSize(this.currentBreakpoint === a1.m1 ? 22 : 18);
                        Button.fontWeight(FontWeight.Medium);
                        Button.shadow({
                            radius: 8,
                            color: '#33000000',
                            offsetX: 0,
                            offsetY: 2
                        });
                        Button.onClick(() => this.toggleCompare());
                        Button.position({
                            right: this.currentBreakpoint === a1.m1 ? 24 : 16,
                            bottom: this.sliderBarHeight + 64
                        });
                    }, Button);
                    Button.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "IndexPage";
    }
}
registerNamedRoute(() => new j2(undefined, {}), "", { bundleName: "com.example.pageredirection", moduleName: "entry", pagePath: "pages/IndexPage", pageFullPath: "entry/src/main/ets/pages/IndexPage", integratedHsp: "false", moduleType: "followWithHap" });
