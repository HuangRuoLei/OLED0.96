//% color="#006400" weight=20 icon="\uf1b9" block="拓宇小车"
namespace TuoYuCar {

    export enum ultrasonicState{
        //% blockId="OFF" block="关闭"
        Off = 0,
        //% blockId="Open" block="开启"
        Open = 1
    }
    export enum DisplayChine{
        //% blockId="wo" block="我"
        wo = 0,
        //% blockId="ni" block="你"
        ni = 1,
        
    }
    export enum DisplayEnglish{
        a = 0,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z
    }
    export enum DisplayChance{
        //% blockId="Chine" block="显示中文"
        Chine = 0,
        //% blockId="English"" block="显示字母""
        English=1
    }
    function IICWrite(value:number,value1:number) {
        
        pins.i2cWriteNumber(value, value1, NumberFormat.UInt8LE);
    }
    /**
     * 选择以打开或关闭小车颜色传感器功能
     * @param index
    */

    //% blockId=TuoYuCar_Yan_She_Chuan_Gan_Qi block="颜色传感器|%index"
    //% weight=101
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Yan_She_Chuan_Gan_Qi(index:ultrasonicState) {
        switch (index) {
            case ultrasonicState.Off: IICWrite(2, 1); break;
            case ultrasonicState.Open: IICWrite(2, 2); break;
        }
    }
    /**
     * 选择以打开或关闭小车超声波功能
     * @param index
    */
    //% blockId=TuoYuCar_Chao_Sheng_Bo block="超声波|%index"
    //% weight=99
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Chao_Sheng_Bo(index: ultrasonicState) {
        
        switch (index) {
            case ultrasonicState.Off: IICWrite(1, 1); break;
            case ultrasonicState.Open: IICWrite(1, 2); break;
        }
    }

    /**
     * 选择以打开或关闭小车声音传感器功能
     * @param index
    */

    //% blockId=TuoYuCar_Sheng_Ying_Chuan_Gan_Qi block="声音传感器|%index"
    //% weight=97
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Sheng_Ying_Chuan_Gan_Qi(index:ultrasonicState) {
        switch (index) {
            case ultrasonicState.Off: IICWrite(3, 1); break;
            case ultrasonicState.Open: IICWrite(3, 2); break;
        }
    }
    /**
     * 选择以打开或关闭小车显示屏功能
     * @param index
    */
    //% blockId=TuoYuCar_OLED block="显示屏|index %index|index1 %index1|index2 %index2"
    //% weight=97
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED(index:DisplayChance,index1:DisplayChine,index2:DisplayEnglish) {
        switch (index) {
            case DisplayChance.Chine: {
                switch (index1) {
                    case DisplayChine.wo: IICWrite(4, 1); break;
                    case DisplayChine.ni: IICWrite(4, 2); break;
                }
            } break;
            case DisplayChance.English: {
                switch (index2) {
                    case DisplayEnglish.a: IICWrite(5, 1); break;
                    case DisplayEnglish.b: break;
                    case DisplayEnglish.c: break;
                    case DisplayEnglish.d: break;
                }
            }; break;
        }
    }
}
