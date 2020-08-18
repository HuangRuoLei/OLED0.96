//% color="#006400" weight=20 icon="\uf1b9"
namespace TuoYuCar {

    const PWM_ADD = 0x01
    const MOTOR = 0x02
    const RGB = 0x01

    export enum IICState {
        //% blockId="IIC_ultrasonic" block="ultrasonic"
        IIC_ultrasonic = 1,
        //% blockId="IIC_Red" block="Red"
        IIC_Red = 2,
        //% blockId="IIC_Ming" block="Ming"
        IIC_Ming = 3,
        //% blockId="IIC_Color" block="Color"
        IIC_Color = 4,
        //% blockId="IIC_Voice" block="Voice"
        IIC_Voice = 5,
        //% blockId="IIC_Display" block="Display"
        IIC_Display = 6
    }
    export enum ultrasonicState{
        //% blockId="OFF" block="OFF"
        Off = 0,
        //% blockId="Open" block="Open"
        Open=1
    }


    function setPwmMotor(mode: number, speed1: number, speed2: number): void {
        if (mode < 0 || mode > 6)
            return;
        
        let buf = pins.createBuffer(5);
        buf[0] = MOTOR;
        switch (mode) { 
            case 0: buf[1] = 0; buf[2] = 0; buf[3] = 0; buf[4] = 0; break;              //stop
            case 1: buf[1] = speed1; buf[2] = 0; buf[3] = speed2; buf[4] = 0; break;    //run
            case 2: buf[1] = 0; buf[2] = speed1; buf[3] = 0; buf[4] = speed2; break;    //back
            case 3: buf[1] = 0; buf[2] = 0; buf[3] = speed2; buf[4] = 0; break;         //left
            case 4: buf[1] = speed1; buf[2] = 0; buf[3] = 0; buf[4] = 0; break;         //right
            case 5: buf[1] = 0; buf[2] = speed1; buf[3] = speed2; buf[4] = 0; break;    //tleft
            case 6: buf[1] = speed1; buf[2] = 0; buf[3] = 0; buf[4] = speed2; break;    //tright
        }
        pins.i2cWriteBuffer(PWM_ADD, buf);
    }
    function Car_run(speed1: number, speed2: number) {


        setPwmMotor(1, speed1, speed2);
    }

    function Car_back(speed1: number, speed2: number) {

        setPwmMotor(2, speed1, speed2);
    }

    function Car_left(speed1: number, speed2: number) {

        setPwmMotor(3, speed1, speed2);
    }

    function Car_right(speed1: number, speed2: number) {

        setPwmMotor(4, speed1, speed2);
    }

    function Car_stop() {
       
        setPwmMotor(0, 0, 0);
    }

    function Car_spinleft(speed1: number, speed2: number) {

        setPwmMotor(5, speed1, speed2);
    } 

    function Car_spinright(speed1: number, speed2: number) {

        setPwmMotor(6, speed1, speed2);
    }
    function IICWrite(value:number,value1:number) {
        
        pins.i2cWriteNumber(value, value1, NumberFormat.UInt8LE);
    }
    /**
     * *****************************************************************
     * @param index
     */

    //% blockId=TuoYuCar_Chao_Sheng_Bo block="Chao_Sheng_Bo|%index|value %value|value1 %value1"
    //% weight=101
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Chao_Sheng_Bo(index: ultrasonicState, value: number, value1: number) {
        
        switch (index) {
            case ultrasonicState.Off: IICWrite(value, value1);
            case ultrasonicState.Open: IICWrite(value, value1);
        }
    }

    //% blockId=TuoYuCar_IIII block="IIII|%index"
    //% weight=89
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function IIII() {
        let b = pins.createBuffer(5);
        b[0] = 1;
        b[1] = b[2] = b[3] = b[4] = 0;
        pins.i2cWriteBuffer(6, b);
    }


    //% blockId=TuoYuCar_IICCtrl block="IICCtrl|%index"
    //% weight=88
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function IICCtrl(index: IICState): void {
        switch (index) {
            case IICState.IIC_ultrasonic: Car_run(255,255); break;
            case IICState.IIC_Red: Car_back(255, 255); break;
            case IICState.IIC_Ming: Car_left(255, 255); break;
            case IICState.IIC_Color: Car_right(255, 255); break;
            case IICState.IIC_Voice: Car_stop(); break;
            case IICState.IIC_Display: Car_spinleft(255, 255); break;

        }
    }


}
