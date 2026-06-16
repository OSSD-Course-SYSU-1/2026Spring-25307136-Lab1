if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface OrderConfirmPage_Params {
    currentBreakpoint?: string;
    statusBarHeight?: number;
    sliderBarHeight?: number;
    productDetail?: ProductModel;
}
import type { BusinessError } from "@ohos:base";
import { CommonConstants } from "@bundle:com.example.pageredirection/entry/ets/common/constants/CommonConstants";
import Logger from "@bundle:com.example.pageredirection/entry/ets/common/utils/Logger";
import type ProductModel from '../model/ProductModel';
import { BreakpointConstants } from "@bundle:com.example.pageredirection/entry/ets/common/utils/BreakpointSystem";
const TAG: string = 'OrderConfirmPage';
function __Text__titleStyle(): void {
    Text.fontSize({ "id": 16777225, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
    Text.lineHeight({ "id": 16777229, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
    Text.fontWeight(FontWeight.Normal);
    Text.fontFamily('HarmonyHeiTi');
}
class OrderConfirmPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.statusBarHeight = (this.getUIContext().getRouter().getParams() as Record<string, number>)['statusBarHeight'];
        this.sliderBarHeight = (this.getUIContext().getRouter().getParams() as Record<string, number>)['sliderBarHeight'];
        this.productDetail = JSON.parse((this.getUIContext().getRouter().getParams() as Record<string, string>)['detailStr']) as ProductModel;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: OrderConfirmPage_Params) {
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
    updateStateVars(params: OrderConfirmPage_Params) {
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
    private productDetail: ProductModel;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(42:5)", "entry");
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.backgroundColor({ "id": 16777268, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Column.padding({
                top: this.statusBarHeight,
                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 16777228, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } : { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" },
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 16777228, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } : { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" },
                bottom: this.sliderBarHeight
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(43:7)", "entry");
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 16777236, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(44:9)", "entry");
            Image.width({ "id": 16777227, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.margin({ left: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, right: { "id": 16777228, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Image.onClick(() => {
                this.getUIContext().getRouter().back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777249, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(50:9)", "entry");
            Text.fontSize({ "id": 16777222, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(57:7)", "entry");
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(58:9)", "entry");
            Row.padding({ "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777238, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Row.backgroundColor(Color.White);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.borderRadius({ "id": 16777218, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777264, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(59:11)", "entry");
            Image.width({ "id": 16777231, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(62:11)", "entry");
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ left: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(63:13)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777259, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(64:15)", "entry");
            __Text__titleStyle();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(66:15)", "entry");
            __Text__titleStyle();
            Text.margin({ left: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777258, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(71:13)", "entry");
            __Text__titleStyle();
            Text.fontSize({ "id": 16777226, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontColor({ "id": 16777270, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: CommonConstants.NORMAL_SPACE });
            Column.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(87:9)", "entry");
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ top: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Column.padding({ left: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, right: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Column.backgroundColor(Color.White);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.borderRadius({ "id": 16777218, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(88:11)", "entry");
            Row.height({ "id": 16777221, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777241, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(89:13)", "entry");
            Image.width({ "id": 16777227, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777255, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(92:13)", "entry");
            __Text__titleStyle();
            Text.margin({ left: { "id": 16777238, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(99:11)", "entry");
            Divider.vertical(false);
            Divider.width(CommonConstants.FULL_PERCENT);
            Divider.color({ "id": 16777268, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: CommonConstants.NORMAL_SPACE });
            Row.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(104:11)", "entry");
            Row.alignItems(VerticalAlign.Top);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": 30000, params: [this.productDetail.img], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(105:13)", "entry");
            Image.width({ "id": 16777237, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.aspectRatio(1);
            Image.borderRadius({ "id": 16777218, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(109:13)", "entry");
            Column.justifyContent(FlexAlign.SpaceBetween);
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
            Column.height({ "id": 16777237, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.productDetail.name);
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(110:15)", "entry");
            __Text__titleStyle();
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.productDetail.sku);
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(114:15)", "entry");
            __Text__titleStyle();
            Text.fontSize({ "id": 16777226, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.lineHeight({ "id": 16777230, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontColor({ "id": 16777270, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(127:13)", "entry");
            Column.margin({ left: { "id": 16777228, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Column.alignItems(HorizontalAlign.End);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777251, "type": 10003, params: [this.productDetail.price], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(128:15)", "entry");
            __Text__titleStyle();
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('x1');
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(131:15)", "entry");
            Text.fontSize({ "id": 16777226, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontColor({ "id": 16777270, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontFamily('HarmonyHeiTi-Medium');
            Text.margin({ top: { "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(143:11)", "entry");
            Row.height({ "id": 16777221, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777250, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(144:13)", "entry");
            __Text__titleStyle();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777256, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(146:13)", "entry");
            __Text__titleStyle();
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(154:11)", "entry");
            Divider.vertical(false);
            Divider.width(CommonConstants.FULL_PERCENT);
            Divider.color({ "id": 16777268, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(158:11)", "entry");
            Row.height({ "id": 16777221, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Row.margin({ bottom: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777252, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(159:13)", "entry");
            __Text__titleStyle();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(161:13)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777254, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(162:15)", "entry");
            __Text__titleStyle();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777265, "type": 20000, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(164:15)", "entry");
            Image.width({ "id": 16777235, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.height({ "id": 16777234, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Image.margin({ left: { "id": 16777233, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Image);
        Row.pop();
        Row.pop();
        Column.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(184:7)", "entry");
            Row.margin({ bottom: { "id": 16777220, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 16777236, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(185:9)", "entry");
            Row.layoutWeight(1);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777251, "type": 10003, params: [''], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(186:11)", "entry");
            Text.fontColor({ "id": 16777272, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontSize({ "id": 16777224, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.productDetail.price.toString());
            Text.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(190:11)", "entry");
            Text.fontColor({ "id": 16777272, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontSize({ "id": 16777223, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777249, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Button.debugLine("entry/src/main/ets/pages/OrderConfirmPage.ets(197:9)", "entry");
            Button.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? '40%' : CommonConstants.PERCENT_50);
            Button.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? 52 : undefined);
            Button.linearGradient({
                angle: 90,
                colors: [[{ "id": 16777267, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, 0.11], [{ "id": 16777266, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, 0.89]]
            });
            Button.onClick(() => {
                try {
                    this.getUIContext().getPromptAction().showToast({
                        message: { "id": 16777257, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" },
                        duration: CommonConstants.TOAST_DURATION
                    });
                }
                catch (exception) {
                    let error = exception as BusinessError;
                    Logger.error(TAG, `Failed to show toast. Cause: code=${error.code}, message=${error.message}`);
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
registerNamedRoute(() => new OrderConfirmPage(undefined, {}), "", { bundleName: "com.example.pageredirection", moduleName: "entry", pagePath: "pages/OrderConfirmPage", pageFullPath: "entry/src/main/ets/pages/OrderConfirmPage", integratedHsp: "false", moduleType: "followWithHap" });
