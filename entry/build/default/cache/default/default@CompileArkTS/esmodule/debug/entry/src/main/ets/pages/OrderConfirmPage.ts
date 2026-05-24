if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface OrderConfirmPage_Params {
    statusBarHeight?: number;
    sliderBarHeight?: number;
    productDetail?: ProductModel;
}
import type { BusinessError } from "@ohos:base";
import { CommonConstants } from "@bundle:com.example.pageredirection/entry/ets/common/constants/CommonConstants";
import Logger from "@bundle:com.example.pageredirection/entry/ets/common/utils/Logger";
import type ProductModel from '../model/ProductModel';
const TAG: string = 'OrderConfirmPage';
function __Text__titleStyle(): void {
    Text.fontSize({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
    Text.lineHeight({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
    Text.fontWeight(FontWeight.Normal);
    Text.fontFamily('HarmonyHeiTi');
}
class OrderConfirmPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
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
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private statusBarHeight: number;
    private sliderBarHeight: number;
    private productDetail: ProductModel;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.backgroundColor({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Column.padding({
                top: this.statusBarHeight,
                left: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" },
                right: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" },
                bottom: this.sliderBarHeight
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
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
            Row.width(CommonConstants.FULL_PERCENT);
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
            __Text__titleStyle();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            __Text__titleStyle();
            Text.margin({ left: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            __Text__titleStyle();
            Text.fontSize({ "id": 16777247, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.fontColor({ "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777260, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: CommonConstants.NORMAL_SPACE });
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ top: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Column.padding({ left: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, right: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Column.backgroundColor(Color.White);
            Column.width(CommonConstants.FULL_PERCENT);
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
            __Text__titleStyle();
            Text.margin({ left: { "id": 16777259, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.vertical(false);
            Divider.width(CommonConstants.FULL_PERCENT);
            Divider.color({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: CommonConstants.NORMAL_SPACE });
            Row.alignItems(VerticalAlign.Top);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": 30000, params: [this.productDetail.img], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
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
            __Text__titleStyle();
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.productDetail.sku);
            __Text__titleStyle();
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
            __Text__titleStyle();
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
            Row.width(CommonConstants.FULL_PERCENT);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            __Text__titleStyle();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            __Text__titleStyle();
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.vertical(false);
            Divider.width(CommonConstants.FULL_PERCENT);
            Divider.color({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 16777242, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            Row.margin({ bottom: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" } });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            __Text__titleStyle();
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
            __Text__titleStyle();
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
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
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
            Button.width(CommonConstants.PERCENT_50);
            Button.linearGradient({
                angle: 90,
                colors: [[{ "id": 16777233, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, 0.11], [{ "id": 16777232, "type": 10001, params: [], "bundleName": "com.example.pageredirection", "moduleName": "entry" }, 0.89]]
            });
            Button.onClick(() => {
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
