if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface f3 {
    currentBreakpoint?: string;
    statusBarHeight?: number;
    sliderBarHeight?: number;
    productDetail?: g3;
}
import type { BusinessError } from "@ohos:base";
import { i } from "@bundle:com.example.pageredirection/entry/ets/a/b/c";
import e2 from "@bundle:com.example.pageredirection/entry/ets/a/d/f";
import type g3 from "../g/h";
import { a1 } from "@bundle:com.example.pageredirection/entry/ets/a/d/e";
const f2: string = 'OrderConfirmPage';
function e3(): void {
    Text.fontSize({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
    Text.lineHeight({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
    Text.fontWeight(FontWeight.Normal);
    Text.fontFamily('HarmonyHeiTi');
}
class h3 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', a1.j1, "currentBreakpoint");
        this.statusBarHeight = (this.getUIContext().getRouter().getParams() as Record<string, number>)['statusBarHeight'];
        this.sliderBarHeight = (this.getUIContext().getRouter().getParams() as Record<string, number>)['sliderBarHeight'];
        this.productDetail = JSON.parse((this.getUIContext().getRouter().getParams() as Record<string, string>)['detailStr']) as g3;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: f3) {
        if (params.statusBarHeight !== undefined) {
            this.statusBarHeight = params.statusBarHeight;
        }
        if (params.sliderBarHeight !== undefined) {
            this.sliderBarHeight = params.sliderBarHeight;
        }
        if (params.productDetail !== undefined) {
            this.productDetail = params.productDetail;
        }
    }
    updateStateVars(params: f3) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
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
    private statusBarHeight: number;
    private sliderBarHeight: number;
    private productDetail: g3;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(i.m);
            Column.height(i.m);
            Column.backgroundColor({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Column.padding({
                top: this.statusBarHeight,
                left: this.currentBreakpoint === a1.m1 ? { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } : { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" },
                right: this.currentBreakpoint === a1.m1 ? { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } : { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" },
                bottom: this.sliderBarHeight
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(i.m);
            Row.height({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777265, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.width({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.margin({ left: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, right: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Image.onClick(() => {
                this.getUIContext().getRouter().back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777220, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontSize({ "id": 16777243, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.padding({ "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777259, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Row.backgroundColor(Color.White);
            Row.width(i.m);
            Row.borderRadius({ "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.width({ "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ left: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            e3();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            e3();
            Text.margin({ left: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            e3();
            Text.fontSize({ "id": 16777247, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontColor({ "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777260, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: i.u });
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ top: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Column.padding({ left: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, right: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Column.backgroundColor(Color.White);
            Column.width(i.m);
            Column.borderRadius({ "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 16777242, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777263, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.width({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            e3();
            Text.margin({ left: { "id": 16777259, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.vertical(false);
            Divider.width(i.m);
            Divider.color({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: i.u });
            Row.alignItems(VerticalAlign.Top);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": 30000, params: [this.productDetail.j3], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.width({ "id": 16777258, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.aspectRatio(1);
            Image.borderRadius({ "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.SpaceBetween);
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
            Column.height({ "id": 16777258, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.productDetail.name);
            e3();
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.productDetail.l3);
            e3();
            Text.fontSize({ "id": 16777247, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.lineHeight({ "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontColor({ "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({ left: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Column.alignItems(HorizontalAlign.End);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777222, "type": 10003, params: [this.productDetail.price], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            e3();
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('x1');
            Text.fontSize({ "id": 16777247, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontColor({ "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontFamily('HarmonyHeiTi-Medium');
            Text.margin({ top: { "id": 16777260, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 16777242, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Row.width(i.m);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            e3();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            e3();
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.vertical(false);
            Divider.width(i.m);
            Divider.color({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 16777242, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Row.margin({ bottom: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Row.width(i.m);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            e3();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            e3();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777268, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.width({ "id": 16777256, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.height({ "id": 16777255, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.margin({ left: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Image);
        Row.pop();
        Row.pop();
        Column.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.margin({ bottom: { "id": 16777241, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(i.m);
            Row.height({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.layoutWeight(1);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777222, "type": 10003, params: [''], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontSize({ "id": 16777245, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.productDetail.price.toString());
            Text.fontColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontSize({ "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777220, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Button.width(this.currentBreakpoint === a1.m1 ? '40%' : i.o);
            Button.height(this.currentBreakpoint === a1.m1 ? 52 : undefined);
            Button.linearGradient({
                angle: 90,
                colors: [[{ "id": 16777233, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, 0.11], [{ "id": 16777232, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, 0.89]]
            });
            Button.onClick(() => {
                try {
                    this.getUIContext().getPromptAction().showToast({
                        message: { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" },
                        duration: i.t
                    });
                }
                catch (i3) {
                    let error = i3 as BusinessError;
                    e2.error(f2, `Failed to show toast. Cause: code=${error.code}, message=${error.message}`);
                }
            });
        }, Button);
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "OrderConfirmPage";
    }
}
registerNamedRoute(() => new h3(undefined, {}), "", { bundleName: "com.example.pageredirection", moduleName: "entry", pagePath: "pages/OrderConfirmPage", pageFullPath: "entry/src/main/ets/pages/OrderConfirmPage", integratedHsp: "false", moduleType: "followWithHap" });
