//% color="#006400" weight=2 0 icon="\uf1b9" block="拓宇小车"
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
        //% blockId="tuo" block="拓"
        tuo,
        //% blockId="yu" block="宇"
        yu,
        //% blockId="ke" block="科"
        ke,
        //% blockId="ji" block="技"
        ji,
        //% blockId="zhi" block="智"
        zhi,
        //% blockId="neng" block="能"
        neng,
        //% blockId="xiao" block="小"
        xiao,
        //% blockId="che" block="车"
        che

    }
    export enum DisplayEnglish{
        a = 0, b, c, d, e, f, g, h, i, j,
        k, l, m, n, o, p, q, r, s, t,
        u, v, w, x, y, z, A, B, C, D,
        E, F, G, H, I, J, K, L, M, N,
        O, P, Q, R, S, T, U, V, W, X, Y, Z
    }
    export enum Y{
        //% blockId="_0" block="0"
        _0= 0,
        //% blockId="_2" block="2"
        _2,
        //% blockId="_4" block="4"
        _4,
        //% blockId="_6" block="6"
        _6
    }
    export enum X{
        //% blockId="_0" block="0"
        _0 = 0,
        //% blockId="_8" block="8"
        _8,
        //% blockId="_16" block="16"
        _16,
        //% blockId="_24" block="24"
        _24,
        //% blockId="_32" block="32"
        _32,
        //% blockId="_40" block="40"
        _40,
        //% blockId="_48" block="48"
        _48,
        //% blockId="_56" block="56"
        _56,
        //% blockId="_64" block="64"
        _64,
        //% blockId="_72" block="72"
        _72,
        //% blockId="_80" block="80"
        _80,
        //% blockId="_88" block="88"
        _88,
        //% blockId="_96" block="96"
        _96,
        //% blockId="_104" block="104"
        _104,
        //% blockId="_112" block="112"
        _112,
        //% blockId="_120" block="120"
        _120
    }
    function IICWrite(value:number,value1:number) {
        
        pins.i2cWriteNumber(value, value1, NumberFormat.UInt8LE);
    }
    function IICWriteBuf(value: number, value1: number, value2: number, value3: number, value4: number) {
        let buf = pins.createBuffer(4);
        buf[0] = value1;
        buf[1] = value2;
        buf[2] = value3;
        buf[3] = value4;
        
        pins.i2cWriteBuffer(value, buf);
    }
    function SPIWrite(value: number) {
        pins.spiPins(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2);
        pins.spiFormat(8, 3);
        pins.spiFrequency(100000);
        pins.spiWrite(value);
    }
    /**
     * 选择以打开或关闭小车超声波功能
     * @param index
    */
    //% blockId=TuoYuCar_Chao_Sheng_Bo block="超声波|%index"
    //% weight=101
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Chao_Sheng_Bo(index: ultrasonicState):void {
        
        switch (index) {
            case ultrasonicState.Off: IICWrite(65, 1); break;
            case ultrasonicState.Open: IICWrite(65, 2); break;
        }
    }

    /**
     * 调用此将返回超声波的所测到的距离
     * @param index
    */
    //% blockId=TuoYuCar_Read_Chao_Sheng_Bo block="读取超声波测到的距离(cm)"
    //% weight=100
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Read_Chao_Sheng_Bo(): number {
        let length;
        length=pins.i2cReadNumber(65, NumberFormat.Int8LE);
        return length;
    }
    /**
     * 选择以打开或关闭小车颜色传感器功能
     * @param index
    */

    //% blockId=TuoYuCar_Yan_She_Chuan_Gan_Qi block="颜色传感器|%index"
    //% weight=99
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Yan_She_Chuan_Gan_Qi(index:ultrasonicState):void {
        switch (index) {
            case ultrasonicState.Off: IICWrite(67, 1); break;
            case ultrasonicState.Open: IICWrite(67, 2); break;
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
    export function Sheng_Ying_Chuan_Gan_Qi(index:ultrasonicState):void {
        switch (index) {
            case ultrasonicState.Off: IICWrite(68, 1); break;
            case ultrasonicState.Open: IICWrite(68, 2); break;
        }
    }
    /**
     * 选择以打开或关闭小车语音识别传感器功能
     * @param index
    */
    //% blockId=TuoYuCar_Yu_Ying_Shi_Bie_Chuan_Gan_Qi block="语音识别传感器|%index"
    //% weight=95
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Yu_Ying_Shi_Bie_Chuan_Gan_Qi(index: ultrasonicState):void {
        
        switch (index) {
            case ultrasonicState.Off: SPIWrite(0); break;
            case ultrasonicState.Open: SPIWrite(1); break;
        }
    }
    /**
     * 选择以打开或关闭小车显示屏显示中文功能
     * @param index
    */
    //% blockId=TuoYuCar_OLEDShowChine block="显示中文|%index|在纵坐标x= %index2|横坐标y= %index3|处显示 %index1"
    //% weight=93
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    export function OLEDShowChine(index:ultrasonicState,index2:Y,index3:X,index1:DisplayChine):void {
        switch (index) {
            case ultrasonicState.Off: IICWriteBuf(69,1,0,0,0); break;
            case ultrasonicState.Open: {
                let buf1 = pins.createBuffer(3);
                switch (index2) {
                    case Y._0: buf1[0]=0; break;
                    case Y._2: buf1[0]=2; break;
                    case Y._4: buf1[0]=4; break;
                    case Y._6: buf1[0]=6; break;
                }
                switch (index3) {
                    case X._0:  buf1[1]=0; break;
                    case X._8:  buf1[1]=8; break;
                    case X._16: buf1[1]=16; break;
                    case X._24: buf1[1]=24; break;
                    case X._32: buf1[1]=32; break;
                    case X._40: buf1[1]=40; break;
                    case X._48: buf1[1]=48; break;
                    case X._56: buf1[1]=56; break;
                    case X._64: buf1[1]=64; break;
                    case X._72: buf1[1]=72; break;
                    case X._80: buf1[1]=80; break;
                    case X._88: buf1[1]=88; break;
                    case X._96: buf1[1]=96; break;
                    case X._104: buf1[1]=104; break;
                    case X._112: buf1[1]=112; break;
                }

                switch (index1) {
                    case DisplayChine.wo: buf1[2]=0; break;
                    case DisplayChine.ni: buf1[2]=1; break;
                    case DisplayChine.tuo: buf1[2]=2; break;
                    case DisplayChine.yu: buf1[2]=3; break;
                    case DisplayChine.ke: buf1[2]=4; break;
                    case DisplayChine.ji: buf1[2]=5; break;
                    case DisplayChine.zhi: buf1[2]=6; break;
                    case DisplayChine.neng: buf1[2]=7; break;
                    case DisplayChine.xiao: buf1[2]=8; break;
                    case DisplayChine.che: buf1[2]=9; break;
                }
                IICWriteBuf(69, 2, buf1[0], buf1[1], buf1[2]);
            }; break;
        }
    }
    /**
     * 选择以打开或关闭小车显示屏显示字母功能
     * @param index
    */
    //% blockId=TuoYuCar_OLEDShowEnglish block="显示字母|%index|在纵坐标X= %index1|横坐标y= %index2|处显示 %index3"
    //% weight=92
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLEDShowEnglish(index:ultrasonicState,index1:Y,index2:X,index3:DisplayEnglish):void {
        switch (index) {
            case ultrasonicState.Off: IICWriteBuf(70,1,0,0,0); break;
            case ultrasonicState.Open: {
                let buf1 = pins.createBuffer(3);
                switch (index1) {
                    case Y._0: buf1[0]=0; break;
                    case Y._2: buf1[0]=2; break;
                    case Y._4: buf1[0]=4; break;
                    case Y._6: buf1[0]=6; break;
                }
                switch (index2) {
                    case X._0:  buf1[1]=0; break;
                    case X._8:  buf1[1]=8; break;
                    case X._16: buf1[1]=16; break;
                    case X._24: buf1[1]=24; break;
                    case X._32: buf1[1]=32; break;
                    case X._40: buf1[1]=40; break;
                    case X._48: buf1[1]=48; break;
                    case X._56: buf1[1]=56; break;
                    case X._64: buf1[1]=64; break;
                    case X._72: buf1[1]=72; break;
                    case X._80: buf1[1]=80; break;
                    case X._88: buf1[1]=88; break;
                    case X._96: buf1[1]=96; break;
                    case X._104: buf1[1]=104; break;
                    case X._112: buf1[1]=112; break;
                    case X._120: buf1[1]=120; break;
                }
                switch (index3) {
                    case DisplayEnglish.a: buf1[2]=1; break;
                    case DisplayEnglish.b: buf1[2]=2; break;
                    case DisplayEnglish.c: buf1[2]=3; break;
                    case DisplayEnglish.d: buf1[2]=4; break;
                }
                IICWriteBuf(70, 2, buf1[0], buf1[1], buf1[2]);
            }; break;
        }
    }
}
