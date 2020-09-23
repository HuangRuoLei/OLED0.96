//% color="#006400" weight=2 0 icon="\uf1b9" block="呼噜猫小车传感器类"
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
        //% blockId="_gan" block="! 感叹号"
        _gan=0,
        //% blockId="_shuang" block="“ 双引号"
        _shuang,
        //% blockId="_jin" block="# 井号"
        _jin,
        //% blockId="_mei" block="$ 美元符号"
        _mei,
        //% blockId="_bai" block="% 百分号"
        _bai,
        //% blockId="_he" block="& 和符号"
        _he,
        //% blockId="_kaidan" block="' 开单引号"
        _kaidan,
        //% blockId="_bidan" block="' 关单引号"
        _bidan,
        //% blockId="_kai" block="( 开括号"
        _kai,
        //% blockId="_guan" block=") 关括号"
        _guan,
        //% blockId="_xing" block="* 星号"
        _xing,
        //% blockId="_jia" block="+ 加号"
        _jia,
        //% blockId="_dou" block=", 逗号"
        _dou,
        //% blockId="_jian" block="- 减号"
        _jian,
        //% blockId="_ju" block=". 句号"
        _ju,
        //% blockId="_xie" block="/ 斜杠"
        _xie,
        //% blockId="_xie" block="/ 反斜杠"
        _fanxie,
        //% blockId="_mao" block=": 冒号"
        _mao,
        //% blockId="_fen" block="; 分号"
        _fen,
        //% blockId="_xiao" block="< 小于号"
        _xiao,
        //% blockId="_deng" block="= 等于号"
        _deng,
        //% blockId="_da" block="> 大于号"
        _da,
        //% blockId="_wen" block="? 问号"
        _wen,
        //% blockId="_dian" block="@ 电子邮件符号"
        _dian,
        //% blockId="_kaifang" block="[ 开方括号"
        _kaifang,
        //% blockId="_bifang" block="] 闭方括号"
        _bifang,
        //% blockId="_tuo" block="^ 乘方符号"
        _tuo,
        //% blockId="_xia" block="_ 下划线"
        _xia,
        //% blockId="_kaihua" block="{ 开花括号"
        _kaihua,
        //% blockId="_cui" block="| 垂直线"
        _cui,
        //% blockId="_bihua" block="} 闭花括号"
        _bihua,
        //% blockId="_bo" block="~ 波浪号"
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
    export enum X1{
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
    }
    export enum X2{
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
        _120,
        //% blockId="_128" block="128"
        _128
    }
    export function IICWrite(value:number,value1:number) {
        
        pins.i2cWriteNumber(value, value1, NumberFormat.UInt8LE);
    }
    export function IICWriteBuf3(value: number, value1: number, value2: number) {
        let buf = pins.createBuffer(2);
        buf[0] = value1;
        buf[1] = value2;
        
        pins.i2cWriteBuffer(value, buf);
    }
    export function IICWriteBuf(value: number, value1: number, value2: number, value3: number, value4: number) {
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
     * 选择以打开或关闭小车超声波测量距离的功能（有效距离2cm~200cm）
     * @param index
    */
    //% blockId=TuoYuCar_Chao_Sheng_Bo block="超声波测距系统|%index"
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
     * 调用此将返回超声波的所测到的距离（有效距离2cm~200cm）
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

    //% blockId=TuoYuCar_Yan_She_Chuan_Gan_Qi block="小车智能循迹系统|%index"
    //% weight=99
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Yan_She_Chuan_Gan_Qi(index:ultrasonicState):void {
        switch (index) {
            case ultrasonicState.Off: IICWrite(67, 3); break;
            case ultrasonicState.Open: IICWrite(67, 4); break;
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
            case ultrasonicState.Off: IICWrite(68, 5); break;
            case ultrasonicState.Open: IICWrite(68, 6); break;
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
     * 选择以打开或关闭小车雨天检测系统
     * @param index
    */
    //% blockId=TuoYuCar_Rain block="雨天检测系统|%index"
    //% weight=94
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Rain(index: ultrasonicState):void {
        
        switch (index) {
            case ultrasonicState.Off: IICWrite(75, 17); break;
            case ultrasonicState.Open: IICWrite(75, 18); break;
        }
    }
     /**
     * 选择以打开或关闭小车自动灭火系统
     * @param index
    */
    //% blockId=TuoYuCar_Flame block="自动灭火系统|%index"
    //% weight=93
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Flame(index: ultrasonicState):void {
        
        switch (index) {
            case ultrasonicState.Off: IICWrite(76, 19); break;
            case ultrasonicState.Open: IICWrite(76, 20); break;
        }
    }
}


//% color="#006400" weight=2 0 icon="\uf1b9" block="呼噜猫小车显示类"
namespace TuoYuCar1{

     /**
     * 选择以清除小车显示屏所有区域的内容
     * @param index
    */
    //% blockId=TuoYuCar1_OLEDCleanALL block="清空显示屏所有内容"
    //% weight=95
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    export function OLEDCleanALL():void {
        let buf1=pins.createBuffer(3);
        buf1[0]=1;
        buf1[1]=0;
        buf1[2]=0;
        pins.i2cWriteBuffer(73, buf1);
    }

    /**
     * 选择以清除小车显示屏指定区域的内容
     * @param index
    */
    //% blockId=TuoYuCar1_OLEDClean block="清除第|%index行|从|%index2到|%index3|处内容"
    //% weight=94
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    export function OLEDClean(index:TuoYuCar.Y,index1:TuoYuCar.X,index2:TuoYuCar.X2):void{
        let buf1=pins.createBuffer(3);
        switch(index){
            case TuoYuCar.Y._0: buf1[0]=0; break;
            case TuoYuCar.Y._2: buf1[0]=2; break;
            case TuoYuCar.Y._4: buf1[0]=4; break;
            case TuoYuCar.Y._6: buf1[0]=6; break;
        }
        switch(index1){
            case TuoYuCar.X._0:  buf1[1]=0; break;
            case TuoYuCar.X._8:  buf1[1]=8; break;
            case TuoYuCar.X._16: buf1[1]=16; break;
            case TuoYuCar.X._24: buf1[1]=24; break;
            case TuoYuCar.X._32: buf1[1]=32; break;
            case TuoYuCar.X._40: buf1[1]=40; break;
            case TuoYuCar.X._48: buf1[1]=48; break;
            case TuoYuCar.X._56: buf1[1]=56; break;
            case TuoYuCar.X._64: buf1[1]=64; break;
            case TuoYuCar.X._72: buf1[1]=72; break;
            case TuoYuCar.X._80: buf1[1]=80; break;
            case TuoYuCar.X._88: buf1[1]=88; break;
            case TuoYuCar.X._96: buf1[1]=96; break;
            case TuoYuCar.X._104: buf1[1]=104; break;
            case TuoYuCar.X._112: buf1[1]=112; break;
            case TuoYuCar.X._120: buf1[1]=120; break;
        }
        switch(index2){
            case TuoYuCar.X2._8:  buf1[2]=8; break;
            case TuoYuCar.X2._16: buf1[2]=16; break;
            case TuoYuCar.X2._24: buf1[2]=24; break;
            case TuoYuCar.X2._32: buf1[2]=32; break;
            case TuoYuCar.X2._40: buf1[2]=40; break;
            case TuoYuCar.X2._48: buf1[2]=48; break;
            case TuoYuCar.X2._56: buf1[2]=56; break;
            case TuoYuCar.X2._64: buf1[2]=64; break;
            case TuoYuCar.X2._72: buf1[2]=72; break;
            case TuoYuCar.X2._80: buf1[2]=80; break;
            case TuoYuCar.X2._88: buf1[2]=88; break;
            case TuoYuCar.X2._96: buf1[2]=96; break;
            case TuoYuCar.X2._104: buf1[2]=104; break;
            case TuoYuCar.X2._112: buf1[2]=112; break;
            case TuoYuCar.X2._120: buf1[2]=120; break;
            case TuoYuCar.X2._128:  buf1[2]=128; break;
        }
        pins.i2cWriteBuffer(73, buf1);
    }

    /**
     * 选择以打开或关闭小车显示屏显示中文功能
     * @param index
    */
    //% blockId=TuoYuCar1_OLEDShowChine block="显示中文|在第%index2行|第%index3处|显示%index1"
    //% weight=93
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    export function OLEDShowChine(index2:TuoYuCar.Y,index3:TuoYuCar.X1,index1:TuoYuCar.DisplayChine):void {
        let buf1 = pins.createBuffer(3);
        switch (index2) {
            case TuoYuCar.Y._0: buf1[0]=0; break;
            case TuoYuCar.Y._2: buf1[0]=2; break;
            case TuoYuCar.Y._4: buf1[0]=4; break;
            case TuoYuCar.Y._6: buf1[0]=6; break;
        }
        switch (index3) {
            case TuoYuCar.X1._0:  buf1[1]=0; break;
            case TuoYuCar.X1._8:  buf1[1]=8; break;
            case TuoYuCar.X1._16: buf1[1]=16; break;
            case TuoYuCar.X1._24: buf1[1]=24; break;
            case TuoYuCar.X1._32: buf1[1]=32; break;
            case TuoYuCar.X1._40: buf1[1]=40; break;
            case TuoYuCar.X1._48: buf1[1]=48; break;
            case TuoYuCar.X1._56: buf1[1]=56; break;
            case TuoYuCar.X1._64: buf1[1]=64; break;
            case TuoYuCar.X1._72: buf1[1]=72; break;
            case TuoYuCar.X1._80: buf1[1]=80; break;
            case TuoYuCar.X1._88: buf1[1]=88; break;
            case TuoYuCar.X1._96: buf1[1]=96; break;
            case TuoYuCar.X1._104: buf1[1]=104; break;
            case TuoYuCar.X1._112: buf1[1]=112; break;
        }

        switch (index1) {
            case TuoYuCar.DisplayChine.wo: buf1[2]=0; break;
            case TuoYuCar.DisplayChine.ni: buf1[2]=1; break;
            case TuoYuCar.DisplayChine.tuo: buf1[2]=2; break;
            case TuoYuCar.DisplayChine.yu: buf1[2]=3; break;
            case TuoYuCar.DisplayChine.ke: buf1[2]=4; break;
            case TuoYuCar.DisplayChine.ji: buf1[2]=5; break;
            case TuoYuCar.DisplayChine.zhi: buf1[2]=6; break;
            case TuoYuCar.DisplayChine.neng: buf1[2]=7; break;
            case TuoYuCar.DisplayChine.xiao: buf1[2]=8; break;
            case TuoYuCar.DisplayChine.che: buf1[2]=9; break;
        }
        pins.i2cWriteBuffer(69, buf1);
    }
    /**
     * 选择以打开或关闭小车显示屏显示字母功能
     * @param index
    */
    //% blockId=TuoYuCar1_OLEDShowEnglish block="显示字母|在第%index1行|第%index2处|显示%index3"
    //% weight=92
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLEDShowEnglish(index1:TuoYuCar.Y,index2:TuoYuCar.X,index3:TuoYuCar.DisplayEnglish):void {
        let buf1 = pins.createBuffer(3);
        switch (index1) {
            case TuoYuCar.Y._0: buf1[0]=0; break;
            case TuoYuCar.Y._2: buf1[0]=2; break;
            case TuoYuCar.Y._4: buf1[0]=4; break;
            case TuoYuCar.Y._6: buf1[0]=6; break;
        }
        switch (index2) {
            case TuoYuCar.X._0:  buf1[1]=0; break;
            case TuoYuCar.X._8:  buf1[1]=8; break;
            case TuoYuCar.X._16: buf1[1]=16; break;
            case TuoYuCar.X._24: buf1[1]=24; break;
            case TuoYuCar.X._32: buf1[1]=32; break;
            case TuoYuCar.X._40: buf1[1]=40; break;
            case TuoYuCar.X._48: buf1[1]=48; break;
            case TuoYuCar.X._56: buf1[1]=56; break;
            case TuoYuCar.X._64: buf1[1]=64; break;
            case TuoYuCar.X._72: buf1[1]=72; break;
            case TuoYuCar.X._80: buf1[1]=80; break;
            case TuoYuCar.X._88: buf1[1]=88; break;
            case TuoYuCar.X._96: buf1[1]=96; break;
            case TuoYuCar.X._104: buf1[1]=104; break;
            case TuoYuCar.X._112: buf1[1]=112; break;
            case TuoYuCar.X._120: buf1[1]=120; break;
        }
        switch (index3) {
            case TuoYuCar.DisplayEnglish.a: buf1[2]=97; break;
            case TuoYuCar.DisplayEnglish.b: buf1[2]=98; break;
            case TuoYuCar.DisplayEnglish.c: buf1[2]=99; break;
            case TuoYuCar.DisplayEnglish.d: buf1[2]=100; break;
            case TuoYuCar.DisplayEnglish.e: buf1[2]=101; break;
            case TuoYuCar.DisplayEnglish.f: buf1[2]=102; break;
            case TuoYuCar.DisplayEnglish.g: buf1[2]=103; break;
            case TuoYuCar.DisplayEnglish.h: buf1[2]=104; break;
            case TuoYuCar.DisplayEnglish.i: buf1[2]=105; break;
            case TuoYuCar.DisplayEnglish.j: buf1[2]=106; break;
            case TuoYuCar.DisplayEnglish.k: buf1[2]=107; break;
            case TuoYuCar.DisplayEnglish.l: buf1[2]=108; break;
            case TuoYuCar.DisplayEnglish.m: buf1[2]=109; break;
            case TuoYuCar.DisplayEnglish.n: buf1[2]=110; break;
            case TuoYuCar.DisplayEnglish.o: buf1[2]=111; break;
            case TuoYuCar.DisplayEnglish.p: buf1[2]=112; break;
            case TuoYuCar.DisplayEnglish.q: buf1[2]=113; break;
            case TuoYuCar.DisplayEnglish.r: buf1[2]=114; break;
            case TuoYuCar.DisplayEnglish.s: buf1[2]=115; break;
            case TuoYuCar.DisplayEnglish.t: buf1[2]=116; break;
            case TuoYuCar.DisplayEnglish.u: buf1[2]=117; break;
            case TuoYuCar.DisplayEnglish.v: buf1[2]=118; break;
            case TuoYuCar.DisplayEnglish.w: buf1[2]=119; break;
            case TuoYuCar.DisplayEnglish.x: buf1[2]=120; break;
            case TuoYuCar.DisplayEnglish.y: buf1[2]=121; break;
            case TuoYuCar.DisplayEnglish.z: buf1[2]=122; break;

            case TuoYuCar.DisplayEnglish.A: buf1[2]=65; break;
            case TuoYuCar.DisplayEnglish.B: buf1[2]=66; break;
            case TuoYuCar.DisplayEnglish.C: buf1[2]=67; break;
            case TuoYuCar.DisplayEnglish.D: buf1[2]=68; break;
            case TuoYuCar.DisplayEnglish.E: buf1[2]=69; break;
            case TuoYuCar.DisplayEnglish.F: buf1[2]=70; break;
            case TuoYuCar.DisplayEnglish.G: buf1[2]=71; break;
            case TuoYuCar.DisplayEnglish.H: buf1[2]=72; break;
            case TuoYuCar.DisplayEnglish.I: buf1[2]=73; break;
            case TuoYuCar.DisplayEnglish.J: buf1[2]=74; break;
            case TuoYuCar.DisplayEnglish.K: buf1[2]=75; break;
            case TuoYuCar.DisplayEnglish.L: buf1[2]=76; break;
            case TuoYuCar.DisplayEnglish.M: buf1[2]=77; break;
            case TuoYuCar.DisplayEnglish.N: buf1[2]=78; break;
            case TuoYuCar.DisplayEnglish.O: buf1[2]=79; break;
            case TuoYuCar.DisplayEnglish.P: buf1[2]=80; break;
            case TuoYuCar.DisplayEnglish.Q: buf1[2]=81; break;
            case TuoYuCar.DisplayEnglish.R: buf1[2]=82; break;
            case TuoYuCar.DisplayEnglish.S: buf1[2]=83; break;
            case TuoYuCar.DisplayEnglish.T: buf1[2]=84; break;
            case TuoYuCar.DisplayEnglish.U: buf1[2]=85; break;
            case TuoYuCar.DisplayEnglish.V: buf1[2]=86; break;
            case TuoYuCar.DisplayEnglish.W: buf1[2]=87; break;
            case TuoYuCar.DisplayEnglish.X: buf1[2]=88; break;
            case TuoYuCar.DisplayEnglish.Y: buf1[2]=89; break;
            case TuoYuCar.DisplayEnglish.Z: buf1[2]=90; break;
        }
        pins.i2cWriteBuffer(70, buf1);
        
    }
    /**
     * 选择以打开或关闭小车显示屏显示数字功能,输入的数字不能超过255
     * @param index
    */
    //% blockId=TuoYuCar1_OLEDShowNumber block="显示数字|在第%index2行|第%index3|处|显示%index1"
    //% weight=91
    //% blockGap=10
    //% index1.min=0 index1.max=255
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    export function OLEDShowNumber(index2:TuoYuCar.Y,index3:TuoYuCar.X,index1:number):void {
        let buf1 = pins.createBuffer(3);
        switch (index2) {
            case TuoYuCar.Y._0: buf1[0]=0; break;
            case TuoYuCar.Y._2: buf1[0]=2; break;
            case TuoYuCar.Y._4: buf1[0]=4; break;
            case TuoYuCar.Y._6: buf1[0]=6; break;
        }
        switch (index3) {
            case TuoYuCar.X._0:  buf1[1]=0; break;
            case TuoYuCar.X._8:  buf1[1]=8; break;
            case TuoYuCar.X._16: buf1[1]=16; break;
            case TuoYuCar.X._24: buf1[1]=24; break;
            case TuoYuCar.X._32: buf1[1]=32; break;
            case TuoYuCar.X._40: buf1[1]=40; break;
            case TuoYuCar.X._48: buf1[1]=48; break;
            case TuoYuCar.X._56: buf1[1]=56; break;
            case TuoYuCar.X._64: buf1[1]=64; break;
            case TuoYuCar.X._72: buf1[1]=72; break;
            case TuoYuCar.X._80: buf1[1]=80; break;
            case TuoYuCar.X._88: buf1[1]=88; break;
            case TuoYuCar.X._96: buf1[1]=96; break;
            case TuoYuCar.X._104: buf1[1]=104; break;
            case TuoYuCar.X._112: buf1[1]=112; break;
            case TuoYuCar.X._120: buf1[1]=120; break;
        }
        buf1[2]=index1;
        pins.i2cWriteBuffer(71, buf1);
    }

    /**
     * 选择以打开或关闭小车显示屏显示字符功能
     * @param index
    */
    //% blockId=TuoYuCar1_OLEDShowChar block="显示字符|在第%index2行|第%index3处|显示 %index1"
    //% weight=90
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    export function OLEDShowChar(index2:TuoYuCar.Y,index3:TuoYuCar.X,index1:TuoYuCar.DisplayChar):void {
        let buf1 = pins.createBuffer(3);
        switch (index2) {
            case TuoYuCar.Y._0: buf1[0]=0; break;
            case TuoYuCar.Y._2: buf1[0]=2; break;
            case TuoYuCar.Y._4: buf1[0]=4; break;
            case TuoYuCar.Y._6: buf1[0]=6; break;
        }
        switch (index3) {
            case TuoYuCar.X._0:  buf1[1]=0; break;
            case TuoYuCar.X._8:  buf1[1]=8; break;
            case TuoYuCar.X._16: buf1[1]=16; break;
            case TuoYuCar.X._24: buf1[1]=24; break;
            case TuoYuCar.X._32: buf1[1]=32; break;
            case TuoYuCar.X._40: buf1[1]=40; break;
            case TuoYuCar.X._48: buf1[1]=48; break;
            case TuoYuCar.X._56: buf1[1]=56; break;
            case TuoYuCar.X._64: buf1[1]=64; break;
            case TuoYuCar.X._72: buf1[1]=72; break;
            case TuoYuCar.X._80: buf1[1]=80; break;
            case TuoYuCar.X._88: buf1[1]=88; break;
            case TuoYuCar.X._96: buf1[1]=96; break;
            case TuoYuCar.X._104: buf1[1]=104; break;
            case TuoYuCar.X._112: buf1[1]=112; break;
            case TuoYuCar.X._120: buf1[1]=120; break;
        }

        switch (index1) {
            case TuoYuCar.DisplayChar._gan:buf1[2]=33;break;
            case TuoYuCar.DisplayChar._shuang:buf1[2]=34;break;
            case TuoYuCar.DisplayChar._jin:buf1[2]=35;break;
            case TuoYuCar.DisplayChar._mei:buf1[2]=36;break;
            case TuoYuCar.DisplayChar._bai:buf1[2]=37;break;
            case TuoYuCar.DisplayChar._he:buf1[2]=38;break;
            case TuoYuCar.DisplayChar._kaidan:buf1[2]=96;break;
            case TuoYuCar.DisplayChar._bidan:buf1[2]=39;break;
            case TuoYuCar.DisplayChar._kai:buf1[2]=40;break;
            case TuoYuCar.DisplayChar._guan:buf1[2]=41;break;
            case TuoYuCar.DisplayChar._xing:buf1[2]=42;break;
            case TuoYuCar.DisplayChar._jia:buf1[2]=43;break;
            case TuoYuCar.DisplayChar._dou:buf1[2]=44;break;
            case TuoYuCar.DisplayChar._jian:buf1[2]=45;break;
            case TuoYuCar.DisplayChar._ju:buf1[2]=46;break;
            case TuoYuCar.DisplayChar._xie:buf1[2]=47;break;
            case TuoYuCar.DisplayChar._mao:buf1[2]=58;break;
            case TuoYuCar.DisplayChar._fen:buf1[2]=59;break;
            case TuoYuCar.DisplayChar._xiao:buf1[2]=60;break;
            case TuoYuCar.DisplayChar._deng:buf1[2]=61;break;
            case TuoYuCar.DisplayChar._da:buf1[2]=62;break;
            case TuoYuCar.DisplayChar._wen:buf1[2]=63;break;
            case TuoYuCar.DisplayChar._dian:buf1[2]=64;break;
            case TuoYuCar.DisplayChar._kaifang:buf1[2]=91;break;
            case TuoYuCar.DisplayChar._fanxie:buf1[2]=92;break;
            case TuoYuCar.DisplayChar._bifang:buf1[2]=93;break;
            case TuoYuCar.DisplayChar._tuo:buf1[2]=94;break;
            case TuoYuCar.DisplayChar._xia:buf1[2]=95;break;
            case TuoYuCar.DisplayChar._kaihua:buf1[2]=123;break;
            case TuoYuCar.DisplayChar._cui:buf1[2]=124;break;
            case TuoYuCar.DisplayChar._bihua:buf1[2]=125;break;
            case TuoYuCar.DisplayChar._bo:buf1[2]=126;break;
        }
        pins.i2cWriteBuffer(72, buf1);
    }
    
}

//% color="#006400" weight=2 0 icon="\uf1b9" block="呼噜猫小车行驶类"
namespace TuoYuCar2{
    export enum Drive{
        //% blockId="forward" block="前进"
        forward,
        //% blockId="back" block="后退"
        back,
        //% blockId="stop" block="停止"
        stop,
        //% blockId="turn_left" block="向前左转"
        turn_left,
        //% blockId="turn_right" block="向前右转"
        turn_right,
        //% blockId="turn_back_left" block="向后左转"
        turn_back_left,
        //% blockId="turn_back_right" block="向后右转"
        turn_back_right,
        //% blockId="left_hand" block="原地左旋"
        left_hand,
        //% blockId="right_hand" block="原地右旋"
        right_hand
    }
    export enum SpeedRank{
        //% blockId="_1" block="1"
        _1=1,
        //% blockId="_2" block="2"
        _2=2,
        //% blockId="_3" block="3"
        _3=3,
        //% blockId="_4" block="4"
        _4=4,
        //% blockId="_5" block="5"
        _5=5,
        //% blockId="_6" block="6"
        _6=6,

    }
    /**
     * 选择以打开或关闭小车行驶功能,速度可调
     * @param index
    */

    //% blockId=TuoYuCar2_Car_DriveSpeed block="控制小车|%index|速度等级为 %speed 级"
    //% weight=99
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Car_DriveSpeed(index:Drive,index1:SpeedRank):void {
        let buf1 = pins.createBuffer(2);
        buf1[1]=index1;
        switch (index) {
          case Drive.forward:buf1[0]=21;;break;
          case Drive.back:buf1[0]=22;break;
          case Drive.stop:buf1[0]=23;break;
          case Drive.turn_left:buf1[0]=24;break;
          case Drive.turn_right:buf1[0]=25;break;
          case Drive.turn_back_left:buf1[0]=26;break;
          case Drive.turn_back_right:buf1[0]=27;break;
          case Drive.left_hand:buf1[0]=28;break;
          case Drive.right_hand:buf1[0]=29;break;
        }
        pins.i2cWriteBuffer(77, buf1);
    }
}