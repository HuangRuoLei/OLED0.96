//% color="#006400" weight=50 icon="\uf1b9" block="呼噜猫游戏机"
namespace HuLuMaoGame {
   
    
    export enum LCDcolor {
        //% blockId="RED" block="红色"
        RED = 0xf800,
        //% blockId="GREEN" block="绿色"
        GREEN = 0x07e0,
        //% blockId="BLUE" block="蓝色"
        BLUE = 0x001f,
        //% blockId="WHITE" block="白色"
        WHITE = 0xffff,
        //% blockId="BLACK" block="黑色"
        BLACK = 0x0000,
        //% blockId="YELLOW" block="黄色"
        YELLOW = 0xFFE0,
        //% blockId="GRAY0" block="灰色0"
        GRAY0 = 0xEF7D,  	                    //灰色0 3165 00110 001011 00101
        //% blockId="GRAY1" block="灰色1"
        GRAY1 = 0x8410,      	                //灰色1      00000 000000 00000
        //% blockId="GRAY2" block="灰色2"
        GRAY2=0x4208      	                    //灰色2  1111111111011111
    }
    //写指令
    function LCDWriteindex (value: number) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.spiWrite(value)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    //写8位数据
    function LCDWritedata (value: number) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.spiWrite(value)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    //写16位数据
    function LCDWritedata16 (value: number) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.spiWrite(value >> 8)
        pins.spiWrite(value)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    //LCD设置Region
    function Lcd_SetRegion (value: number, value1: number, value2: number, value3: number) {
        LCDWriteindex(42)
        LCDWritedata(0)
        LCDWritedata(value)
        LCDWritedata(0)
        LCDWritedata(value2)
        LCDWriteindex(43)
        LCDWritedata(0)
        LCDWritedata(value1)
        LCDWritedata(0)
        LCDWritedata(value3)
        LCDWriteindex(44)
    }

    
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_LcdInit block="初始化显示屏"
    //% weight=100
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function LcdInit(): void {
        pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
        pins.spiFormat(8, 1)
        pins.spiPins(DigitalPin.P15, DigitalPin.P14, DigitalPin.P13)
        pins.spiFrequency(40000000)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)

        LCDReset()
        LCDWriteindex(17)
        basic.pause(120)
        LCDWriteindex(177)
        LCDWritedata(5)
        LCDWritedata(60)
        LCDWritedata(60)
        LCDWriteindex(178)
        LCDWritedata(5)
        LCDWritedata(60)
        LCDWritedata(60)
        LCDWriteindex(179)
        LCDWritedata(5)
        LCDWritedata(60)
        LCDWritedata(60)
        LCDWritedata(5)
        LCDWritedata(60)
        LCDWritedata(60)
        LCDWriteindex(180)
        LCDWritedata(3)
        LCDWriteindex(192)
        LCDWritedata(40)
        LCDWritedata(8)
        LCDWritedata(4)
        LCDWriteindex(193)
        LCDWritedata(192)
        LCDWriteindex(194)
        LCDWritedata(13)
        LCDWritedata(0)
        LCDWriteindex(195)
        LCDWritedata(141)
        LCDWritedata(42)
        LCDWriteindex(196)
        LCDWritedata(141)
        LCDWritedata(238)
        LCDWriteindex(197)
        LCDWritedata(26)
        LCDWriteindex(54)
        LCDWritedata(192)
        LCDWriteindex(224)
        LCDWritedata(4)
        LCDWritedata(34)
        LCDWritedata(7)
        LCDWritedata(10)
        LCDWritedata(46)
        LCDWritedata(48)
        LCDWritedata(37)
        LCDWritedata(42)
        LCDWritedata(40)
        LCDWritedata(38)
        LCDWritedata(46)
        LCDWritedata(58)
        LCDWritedata(0)
        LCDWritedata(1)
        LCDWritedata(3)
        LCDWritedata(19)
        LCDWriteindex(225)
        LCDWritedata(4)
        LCDWritedata(22)
        LCDWritedata(6)
        LCDWritedata(13)
        LCDWritedata(45)
        LCDWritedata(38)
        LCDWritedata(35)
        LCDWritedata(39)
        LCDWritedata(39)
        LCDWritedata(37)
        LCDWritedata(45)
        LCDWritedata(59)
        LCDWritedata(0)
        LCDWritedata(1)
        LCDWritedata(4)
        LCDWritedata(18)
        LCDWriteindex(58)
        LCDWritedata(5)
        LCDWriteindex(41)
    }
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_LCDReset block="复位显示屏"
    //% weight=99
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function LCDReset () {
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_Lcd_Clear block="清空屏幕并将底色设置为|%value"
    //% weight=98 
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Lcd_Clear (value:LCDcolor) {
        Lcd_SetRegion(2, 1, 129, 160)
        LCDWriteindex(44)
        for (let i = 0; i < 128; i++) {
            for (let i = 0; i < 160; i++) {
                LCDWritedata16(value)
            }
        }
    }

}

