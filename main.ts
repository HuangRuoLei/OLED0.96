//% color="#006400" weight=50 icon="\uf1b9" block="呼噜猫蜘蛛机器人"
namespace HuLuMaoCar_connection {
    const PCA9685_adrr1=0x40;
    const PCA9685_MODE1=0x00;
    const PCA9685_PRESCALE=0xFE;	//控制周期寄存器
    export function IICWrite2(value:number,value1:number) {
        
        pins.i2cWriteNumber(value, value1, NumberFormat.UInt8LE);
    }
    export function IICWriteBuf3(value: number, value1: number, value2: number) {
        let buf = pins.createBuffer(2);
        buf[0] = value1;
        buf[1] = value2;
        
        pins.i2cWriteBuffer(value, buf);
    }
    export function IICWriteBuf5(value: number, value1: number, value2: number, value3: number, value4: number) {
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

    export enum SelectChannal{
        //% blockId="right_first_H" block="右前基节"
        right_first_H=0,
        //% blockId="right_first_L" block="右前转节"
        right_first_L=1,
        //% blockId="left_first_H" block="左前基节"
        left_first_H=3,
        //% blockId="left_first_L" block="左前转节"
        left_first_L=2,
        //% blockId="right_mid_H" block="右中基节"
        right_mid_H=11,
        //% blockId="right_mid_L" block="右中转节"
        right_mid_L=10,
        //% blockId="left_mid_H" block="左中基节"
        left_mid_H=5,
        //% blockId="left_mid_L" block="左中转节"
        left_mid_L=4,
        //% blockId="right_third_H" block="右后基节"
        right_third_H=8,
        //% blockId="right_third_L" block="右后转节"
        right_third_L=9,
        //% blockId="left_third_H" block="左后基节"
        left_third_H=6,
        //% blockId="left_third_L" block="左后转节"
        left_third_L=7,
    }
    
    /*向PCA9685指定的寄存器地址写入数据
    value:芯片寄存器地址
    value1:写入的数据
    */
    export function PCA9685_Write(value:number,value1:number) {
        //PCA9685_adrr1 芯片片选地址,代表写操作
        IICWriteBuf3(PCA9685_adrr1,value,value1);
    }
    /*向PCA9685指定的寄存器地址读出数据
    value:芯片寄存器地址
    */
    export function PCA9685_Read(value:number):number {
        let leng;
        //PCA9685_adrr1 芯片片选地址,代表写操作   PCA9685_adrr1|0x01 代表读操作
        IICWrite2(PCA9685_adrr1,value);
        leng=pins.i2cReadNumber(PCA9685_adrr1, NumberFormat.UInt8LE); 
        return leng;
    }

    export function PCA9685_setpwm(value:number,value1:number){
        value1=102+408*value1/180;
        PCA9685_Write(0x06+4*value,0);
        PCA9685_Write(0x07+4*value,0>>8);
        PCA9685_Write(0x08+4*value,value1);
        PCA9685_Write(0x09+4*value,value1>>8);
    }
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoCar_connection_con block="初始化蜘蛛机器人"
    //% weight=100
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function con(): void {
        let freq=50,prescale,oldmode,newmode;
        let prescaleval;
        PCA9685_Write(PCA9685_MODE1,0);
        freq*=0.97;
        prescaleval = 25000000;
		prescaleval /= 4096;
		prescaleval /= freq;
		prescaleval -= 1;
        prescale =Math.floor(prescaleval + 0.5);
        oldmode=PCA9685_Read(PCA9685_MODE1);
        newmode = (oldmode&0x7F) | 0x10; // sleep
        PCA9685_Write(PCA9685_MODE1,newmode);
        PCA9685_Write(PCA9685_PRESCALE, prescale); // 设置预分频器
        PCA9685_Write(PCA9685_MODE1, oldmode);
        basic.pause(2);
        PCA9685_Write(PCA9685_MODE1, oldmode | 0xa1);
        PCA9685_Write(0xFD,0x10);
    }   

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoCar_connection_control block="控制|%value转动|%value1°"
    //% weight=99
    //% blockGap=10
    //% value1.min=0 value1.max=180
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function control(value:SelectChannal,value1:number): void {
        if((value==SelectChannal.right_first_L)||(value==SelectChannal.right_mid_L)||(value==SelectChannal.right_third_L)){
            value1=180-value1;
        }
        PCA9685_setpwm(value,value1);
    }  

        /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoCar_connection_controzhuan block="控制所有基节转动|%value1°"
    //% weight=98
    //% blockGap=10
    //% value1.min=0 value1.max=180
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function controzhuan(value1:number): void {
        PCA9685_setpwm(0,value1);
        PCA9685_setpwm(3,value1);
        PCA9685_setpwm(11,value1);
        PCA9685_setpwm(5,value1);
        PCA9685_setpwm(8,value1);
        PCA9685_setpwm(6,value1);
    } 
         /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoCar_connection_controji block="控制所有转节转动|%value1°"
    //% weight=97
    //% blockGap=10
    //% value1.min=0 value1.max=180
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function controji(value1:number): void {
        PCA9685_setpwm(1,180-value1);
        PCA9685_setpwm(2,value1);
        PCA9685_setpwm(10,180-value1);
        PCA9685_setpwm(4,value1);
        PCA9685_setpwm(9,180-value1);
        PCA9685_setpwm(7,value1);
    } 
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoCar_connection_controlAll block="控制所有关节转动|%value°"
    //% weight=90
    //% blockGap=10
    //% value.min=0 value.max=180
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function controlAll(value:number): void {

        //   PCA9685_setpwm(61,value); 一次全部控制
        let num=0;
        for(num=0;num<12;num++){
            // if((num==SelectChannal.right_first_L)||(num==SelectChannal.right_mid_L)||(num==SelectChannal.right_third_L)){
            //     value=180-value;
            // }
            control(num,value);
        }
        
    }  

        /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoCar_connection_NotcontrolAll block="释放所有关节"
    //% weight=77
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function NotcontrolAll(): void {
        con();
    }  
}

