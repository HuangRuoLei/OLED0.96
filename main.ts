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
    export enum DisplayChar{
        //% blockId="_gan" block="!"
        _gan=0,
        //% blockId="_shuang" block="""
        _shuang,
        //% blockId="_jin" block="#"
        _jin,
        //% blockId="_mei" block="&"
        _mei,
        //% blockId="_bai" block="%"
        _bai,
        //% blockId="_he" block="&"
        _he,
        //% blockId="_kaidan" block="'"
        _kaidan,
        //% blockId="_bidan" block="'"
        _bidan,
        //% blockId="_kai" block="("
        _kai,
        //% blockId="_guan" block=")"
        _guan,
        //% blockId="_xing" block="*"
        _xing,
        //% blockId="_jia" block="+"
        _jia,
        //% blockId="_dou" block=","
        _dou,
        //% blockId="_jian" block="-"
        _jian,
        //% blockId="_ju" block="."
        _ju,
        //% blockId="_xie" block="/"
        _xie,
        //% blockId="_mao" block=":"
        _mao,
        //% blockId="_fen" block=";"
        _fen,
        //% blockId="_xiao" block="<"
        _xiao,
        //% blockId="_deng" block="="
        _deng,
        //% blockId="_da" block=">"
        _da,
        //% blockId="_wen" block="?"
        _wen,
        //% blockId="_dian" block="@"
        _dian,
        //% blockId="_kaifang" block="["
        _kaifang,
        //% blockId="_fanxie" block="\"
        _fanxie,
        //% blockId="_bifang" block="]"
        _bifang,
        //% blockId="_tuo" block="^"
        _tuo,
        //% blockId="_xia" block="_"
        _xia,
        //% blockId="_kaihua" block="{"
        _kaihua,
        //% blockId="_cui" block="|"
        _cui,
        //% blockId="_bihua" block="}"
        _bihua,
        //% blockId="_bo" block="~"
        _bo
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
                    case DisplayEnglish.a: buf1[2]=97; break;
                    case DisplayEnglish.b: buf1[2]=98; break;
                    case DisplayEnglish.c: buf1[2]=99; break;
                    case DisplayEnglish.d: buf1[2]=100; break;
                    case DisplayEnglish.e: buf1[2]=101; break;
                    case DisplayEnglish.f: buf1[2]=102; break;
                    case DisplayEnglish.g: buf1[2]=103; break;
                    case DisplayEnglish.h: buf1[2]=104; break;
                    case DisplayEnglish.i: buf1[2]=105; break;
                    case DisplayEnglish.j: buf1[2]=106; break;
                    case DisplayEnglish.k: buf1[2]=107; break;
                    case DisplayEnglish.l: buf1[2]=108; break;
                    case DisplayEnglish.m: buf1[2]=109; break;
                    case DisplayEnglish.n: buf1[2]=110; break;
                    case DisplayEnglish.o: buf1[2]=111; break;
                    case DisplayEnglish.p: buf1[2]=112; break;
                    case DisplayEnglish.q: buf1[2]=113; break;
                    case DisplayEnglish.r: buf1[2]=114; break;
                    case DisplayEnglish.s: buf1[2]=115; break;
                    case DisplayEnglish.t: buf1[2]=116; break;
                    case DisplayEnglish.u: buf1[2]=117; break;
                    case DisplayEnglish.v: buf1[2]=118; break;
                    case DisplayEnglish.w: buf1[2]=119; break;
                    case DisplayEnglish.x: buf1[2]=120; break;
                    case DisplayEnglish.y: buf1[2]=121; break;
                    case DisplayEnglish.z: buf1[2]=122; break;

                    case DisplayEnglish.A: buf1[2]=65; break;
                    case DisplayEnglish.B: buf1[2]=66; break;
                    case DisplayEnglish.C: buf1[2]=67; break;
                    case DisplayEnglish.D: buf1[2]=68; break;
                    case DisplayEnglish.E: buf1[2]=69; break;
                    case DisplayEnglish.F: buf1[2]=70; break;
                    case DisplayEnglish.G: buf1[2]=71; break;
                    case DisplayEnglish.H: buf1[2]=72; break;
                    case DisplayEnglish.I: buf1[2]=73; break;
                    case DisplayEnglish.J: buf1[2]=74; break;
                    case DisplayEnglish.K: buf1[2]=75; break;
                    case DisplayEnglish.L: buf1[2]=76; break;
                    case DisplayEnglish.M: buf1[2]=77; break;
                    case DisplayEnglish.N: buf1[2]=78; break;
                    case DisplayEnglish.O: buf1[2]=79; break;
                    case DisplayEnglish.P: buf1[2]=80; break;
                    case DisplayEnglish.Q: buf1[2]=81; break;
                    case DisplayEnglish.R: buf1[2]=82; break;
                    case DisplayEnglish.S: buf1[2]=83; break;
                    case DisplayEnglish.T: buf1[2]=84; break;
                    case DisplayEnglish.U: buf1[2]=85; break;
                    case DisplayEnglish.V: buf1[2]=86; break;
                    case DisplayEnglish.W: buf1[2]=87; break;
                    case DisplayEnglish.X: buf1[2]=88; break;
                    case DisplayEnglish.Y: buf1[2]=89; break;
                    case DisplayEnglish.Z: buf1[2]=90; break;
                }
                IICWriteBuf(70, 2, buf1[0], buf1[1], buf1[2]);
            }; break;
        }
    }
    /**
     * 选择以打开或关闭小车显示屏显示数字功能,输入的数字不能超过255
     * @param index
    */
    //% blockId=TuoYuCar_OLEDShowNumber block="显示数字|%index|在纵坐标x= %index2|横坐标y= %index3|处显示 %index1"
    //% weight=91
    //% blockGap=10
    //% index1.min=0 index1.max=255
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    export function OLEDShowNumber(index:ultrasonicState,index2:Y,index3:X,index1:number):void {
        switch (index) {
            case ultrasonicState.Off: IICWriteBuf(71,1,0,0,0); break;
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
                buf1[2]=index1;
                IICWriteBuf(71, 2, buf1[0], buf1[1], buf1[2]);
            }; break;
        }
    }

    /**
     * 选择以打开或关闭小车显示屏显示字符功能
     * @param index
    */
    //% blockId=TuoYuCar_OLEDShowChar block="显示字符|%index|在纵坐标x= %index2|横坐标y= %index3|处显示 %index1"
    //% weight=90
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    export function OLEDShowChar(index:ultrasonicState,index2:Y,index3:X,index1:DisplayChar):void {
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
                    case DisplayChar._gan:buf1[2]=33;break;
                    case DisplayChar._shuang:buf1[2]=34;break;
                    case DisplayChar._jin:buf1[2]=35;break;
                    case DisplayChar._mei:buf1[2]=36;break;
                    case DisplayChar._bai:buf1[2]=37;break;
                    case DisplayChar._he:buf1[2]=38;break;
                    case DisplayChar._kaidan:buf1[2]=96;break;
                    case DisplayChar._bidan:buf1[2]=39;break;
                    case DisplayChar._kai:buf1[2]=40;break;
                    case DisplayChar._guan:buf1[2]=41;break;
                    case DisplayChar._xing:buf1[2]=42;break;
                    case DisplayChar._jia:buf1[2]=43;break;
                    case DisplayChar._dou:buf1[2]=44;break;
                    case DisplayChar._jian:buf1[2]=45;break;
                    case DisplayChar._ju:buf1[2]=46;break;
                    case DisplayChar._xie:buf1[2]=47;break;
                    case DisplayChar._mao:buf1[2]=58;break;
                    case DisplayChar._fen:buf1[2]=59;break;
                    case DisplayChar._xiao:buf1[2]=60;break;
                    case DisplayChar._deng:buf1[2]=61;break;
                    case DisplayChar._da:buf1[2]=62;break;
                    case DisplayChar._wen:buf1[2]=63;break;
                    case DisplayChar._dian:buf1[2]=64;break;
                    case DisplayChar._kaifang:buf1[2]=91;break;
                    case DisplayChar._fanxie:buf1[2]=92;break;
                    case DisplayChar._bifang:buf1[2]=93;break;
                    case DisplayChar._tuo:buf1[2]=94;break;
                    case DisplayChar._xia:buf1[2]=95;break;
                    case DisplayChar._kaihua:buf1[2]=123;break;
                    case DisplayChar._cui:buf1[2]=124;break;
                    case DisplayChar._bihua:buf1[2]=125;break;
                    case DisplayChar._bo:buf1[2]=126;break;
                }
                IICWriteBuf(69, 2, buf1[0], buf1[1], buf1[2]);
            }; break;
        }
    }
}
