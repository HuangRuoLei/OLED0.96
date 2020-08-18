//% color="#006400" weight=20 icon="\uf1b9"
namespace TuoYuCar {

    const PWM_ADD = 0x01
    const MOTOR = 0x02
    const RGB = 0x01


    export enum enColor {

        //% blockId="OFF" block="OFF"
        OFF = 0,
        //% blockId="Red" block="Red"
        Red,
        //% blockId="Green" block="Green"
        Green,
        //% blockId="Blue" block="Blue"
        Blue,
        //% blockId="White" block="White"
        White,
        //% blockId="Cyan" block="Cyan"
        Cyan,
        //% blockId="Pinkish" block="Pinkish"
        Pinkish,
        //% blockId="Yellow" block="Yellow"
        Yellow,

    }
    export enum enMusic {

        dadadum = 0,
        entertainer,
        prelude,
        ode,
        nyan,
        ringtone,
        funk,
        blues,

        birthday,
        wedding,
        funereal,
        punchline,
        baddy,
        chase,
        ba_ding,
        wawawawaa,
        jump_up,
        jump_down,
        power_up,
        power_down
    }
    export enum enPos {

        //% blockId="LeftState" block="LeftState"
        LeftState = 0,
        //% blockId="RightState" block="RightState"
        RightState = 1
    }

    export enum enLineState {
        //% blockId="White" block="White Line"
        White = 0,
        //% blockId="Black" block="Black Line"
        Black = 1
    }
    
    export enum enTouchState {
        //% blockId="Get" block="Get"
        Get = 0,
        //% blockId="NoGet" block="NoGet"
        NoGet = 1
    }    
    export enum enAvoidState {
        //% blockId="OBSTACLE" block="Obstacle"
        OBSTACLE = 1,
        //% blockId="NOOBSTACLE" block="No Obstacle"
        NOOBSTACLE = 0

    }
    
    export enum CarState {
        //% blockId="Car_Run" block="Run"
        Car_Run = 1,
        //% blockId="Car_Back" block="Back"
        Car_Back = 2,
        //% blockId="Car_Left" block="Left"
        Car_Left = 3,
        //% blockId="Car_Right" block="Right"
        Car_Right = 4,
        //% blockId="Car_Stop" block="Stop"
        Car_Stop = 5,
        //% blockId="Car_SpinLeft" block="SpinLeft"
        Car_SpinLeft = 6,
        //% blockId="Car_SpinRight" block="SpinRight"
        Car_SpinRight = 7
    }
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
    function setPwmRGB(red: number, green: number, blue: number): void {

        let buf = pins.createBuffer(4);
        buf[0] = RGB;
        buf[1] = red;
        buf[2] = green;
        buf[3] = blue;
        
        pins.i2cWriteBuffer(PWM_ADD, buf);
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
    function Car_ultrasonicStateOff() {
        pins.i2cWriteBuffer(1, 0);
    }
    function Car_ultrasonicStateOpen() {
        pins.i2cWriteBuffer(1, 1);
    }
    /**
     * *****************************************************************
     * @param index
     */


    //% blockId=TuoYuCar_IICCtrl block="IICCtrl|%index"
    //% weight=88
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function IICCtrl(index: IICState): void {
        switch (index) {
            case IICState.IIC_ultrasonic: Car_ultrasonicStateOff; break;
            case IICState.IIC_Red: Car_back(255, 255); break;
            case IICState.IIC_Ming: Car_left(255, 255); break;
            case IICState.IIC_Color: Car_right(255, 255); break;
            case IICState.IIC_Voice: Car_stop(); break;
            case IICState.IIC_Display: Car_spinleft(255, 255); break;

        }
    }


}
