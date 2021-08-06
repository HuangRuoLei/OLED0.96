//% color="#cc33ff" weight=50 icon="\uf1b9" block="0.96oled"
namespace HuLuMaoGame1 {
    const chipAdress = 0x3C//显示屏地址
    const OLED_CMD =0	//写命令
    const OLED_DATA=1	//写数据

    let OLED_GRAM: number[][];
    export enum display{
        //% blockId="on" block="开启"
        on = 0,
        //% blockId="off" block="关闭"
        off = 1,
    }
    //写指令
    function Write_IIC_Command(com:number){
        let buf = pins.createBuffer(2)
        buf[0]=0x00
        buf[1]=com

        pins.i2cWriteBuffer(chipAdress, buf);
    }
    //写数据
    function Write_IIC_Data(data:number){
        let buf = pins.createBuffer(2)
        buf[0]=0x40
        buf[1]=data

        pins.i2cWriteBuffer(chipAdress, buf);
    }
    //写一个字节
    function OLED_WR_Byte(data:number,CorD:number){
        if(CorD!=0){
            Write_IIC_Data(data)
        }else{
            Write_IIC_Command(data)
        }
    }
  
    function OLED_WR_BP(x:number,y:number){
        OLED_WR_Byte(0xb0+y,OLED_CMD);//设置行起始地址
	    OLED_WR_Byte(((x&0xf0)>>4)|0x10,OLED_CMD);
	    OLED_WR_Byte((x&0x0f)|0x01,OLED_CMD);
    }

    
     /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame1_OLED_Init block="初始化小显示屏"
    //% weight=150
    //% blockGap=10
    //% color="#cc33ff"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED_Init(): void {
        pins.digitalWritePin(DigitalPin.P9, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P9, 1)
        
        OLED_WR_Byte(0xAE,OLED_CMD);//--turn off oled panel
        OLED_WR_Byte(0x00,OLED_CMD);//---set low column address
        OLED_WR_Byte(0x10,OLED_CMD);//---set high column address
        OLED_WR_Byte(0x40,OLED_CMD);//--set start line address  Set Mapping RAM Display Start Line (0x00~0x3F)
        OLED_WR_Byte(0x81,OLED_CMD);//--set contrast control register
        OLED_WR_Byte(0xCF,OLED_CMD);// Set SEG Output Current Brightness
        OLED_WR_Byte(0xA1,OLED_CMD);//--Set SEG/Column Mapping     0xa0左右反置 0xa1正常
        OLED_WR_Byte(0xC8,OLED_CMD);//Set COM/Row Scan Direction   0xc0上下反置 0xc8正常
        OLED_WR_Byte(0xA6,OLED_CMD);//--set normal display
        OLED_WR_Byte(0xA8,OLED_CMD);//--set multiplex ratio(1 to 64)
        OLED_WR_Byte(0x3f,OLED_CMD);//--1/64 duty
        OLED_WR_Byte(0xD3,OLED_CMD);//-set display offset	Shift Mapping RAM Counter (0x00~0x3F)
        OLED_WR_Byte(0x00,OLED_CMD);//-not offset
        OLED_WR_Byte(0xd5,OLED_CMD);//--set display clock divide ratio/oscillator frequency
        OLED_WR_Byte(0x80,OLED_CMD);//--set divide ratio, Set Clock as 100 Frames/Sec
        OLED_WR_Byte(0xD9,OLED_CMD);//--set pre-charge period
        OLED_WR_Byte(0xF1,OLED_CMD);//Set Pre-Charge as 15 Clocks & Discharge as 1 Clock
        OLED_WR_Byte(0xDA,OLED_CMD);//--set com pins hardware configuration
        OLED_WR_Byte(0x12,OLED_CMD);
        OLED_WR_Byte(0xDB,OLED_CMD);//--set vcomh
        OLED_WR_Byte(0x40,OLED_CMD);//Set VCOM Deselect Level
        OLED_WR_Byte(0x20,OLED_CMD);//-Set Page Addressing Mode (0x00/0x01/0x02)
        OLED_WR_Byte(0x02,OLED_CMD);//
        OLED_WR_Byte(0x8D,OLED_CMD);//--set Charge Pump enable/disable
        OLED_WR_Byte(0x14,OLED_CMD);//--set(0x10) disable
        OLED_WR_Byte(0xA4,OLED_CMD);// Disable Entire Display On (0xa4/0xa5)
        OLED_WR_Byte(0xA6,OLED_CMD);// Disable Inverse Display On (0xa6/a7) 
        OLED_WR_Byte(0xAF, OLED_CMD);
        for (let i = 0; i < 8; i++){
            for (let j = 0; j < 144; j++){
                OLED_GRAM[j][i]=0
            }
        }
        OLED_Clear();
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame1_OLED_Clear block="清空显示屏"
    //% weight=149
    //% blockGap=10
    //% color="#cc33ff"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED_Clear():void{
        // let i,n;		    
        // for(i=0;i<8;i++)  
        // {  
        //     OLED_WR_Byte (0xb0+i,OLED_CMD);    //设置页地址（0~7）
        //     OLED_WR_Byte (0x00,OLED_CMD);      //设置显示位置—列低地址
        //     OLED_WR_Byte (0x10,OLED_CMD);      //设置显示位置—列高地址   
        //     for(n=0;n<128;n++) OLED_WR_Byte(0,OLED_DATA); 
        // } 
        OLED_Clearxy(0,0,128,8)
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame1_OLED_Clearxy block="清空指定区域 起点 x0 =%x0 y0 =%y0  终点 x1 =%x1 y1 =%y1"
    //% weight=148
    //% blockGap=10
    //% color="#cc33ff"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED_Clearxy(x0:number,y0:number,x1:number,y1:number):void{
        let x,y;
        for(y=y0;y<y1;y++)
        {
            for(x=x0;x<x1;x++)
            {
                OLED_GRAM[y][x]=0;//清除所有数据
            }
        } 
        OLED_Refresh();//更新显示
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame1_OLED_display block="|%dis显示"
    //% weight=147
    //% blockGap=10
    //% color="#cc33ff"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED_display(dis:display):void{
        OLED_WR_Byte(0X8D,OLED_CMD);  //SET DCDC命令
        if(dis==display.on){
            OLED_WR_Byte(0X14,OLED_CMD);  //DCDC ON
	        OLED_WR_Byte(0XAF,OLED_CMD);  //DISPLAY ON
        }else{
            OLED_WR_Byte(0X10,OLED_CMD);  //DCDC OFF
	        OLED_WR_Byte(0XAE,OLED_CMD);  //DISPLAY OFF
        }
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame1_OLED_ShowChar block="在 x=|%x,y=|%y处显示字符|%chr"
    //% weight=146
    //% blockGap=10
    //% color="#cc33ff"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED_ShowChar(x:number,y:number,chr:string){
        let n,k,i,m
        let data:number=0
        let y0=y
        for(n=0;n<chr.length;n++){
            k=chr.charCodeAt(n)
            if(k>32) k-=32
            else k=0
            data=0;
            for(i=0;i<8;i++){
                // data|=(((HuLuMaoGame.asc16[k*4]>>24)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4]>>16)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4]>>8)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4])&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+1]>>24)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+1]>>16)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+1]>>8)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+1])&0x000000ff)<<i)&0x80;
                for(m=0;m<8;m++)           //写入数据
				{
					if(data&0x80)OLED_DrawPoint(x,y);
					else OLED_ClearPoint(x,y);
					data<<=1;
					y++;
					if((y-y0)==16)
					{
						y=y0;
						x++;
						break;
                    }
				}
                
				data=0;
            }
            for(i=0;i<8;i++){
                // data|=(((HuLuMaoGame.asc16[k*4+2]>>24)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+2]>>16)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+2]>>8)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+2])&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+3]>>24)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+3]>>16)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+3]>>8)&0x000000ff)<<i)&0x80;data>>=1
                // data|=(((HuLuMaoGame.asc16[k*4+3])&0x000000ff)<<i)&0x80;
                for(m=0;m<8;m++)           //写入数据
				{
					if(data&0x80)OLED_DrawPoint(x,y);
					else OLED_ClearPoint(x,y);
					data<<=1;
					y++;
					if((y-y0)==16)
					{
						y=y0;
						x++;
						break;
                    }
				}
				data=0;
            }
            x+=8;
        }
    }

    
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame1_OLED_ShowNum block="在 x=|%x,y=|%y处显示数字|%dat"
    //% weight=145
    //% blockGap=10
    //% color="#cc33ff"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED_ShowNum(x:number,y:number,dat:number){
        OLED_ShowChar(x,y,dat.toString())
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame1_OLED_DrawPoint block="在 x=|%x,y=|%y处画一个点"
    //% weight=144
    //% blockGap=10
    //% color="#cc33ff"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED_DrawPoint(x:number,y:number){
        let i,m,n;
        i=y/8;
        m=y%8;
        n=1<<m;
        OLED_GRAM[x][i]|=n;

    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame1_OLED_ClearPoint block="删除 x=|%x,y=|%y处的点"
    //% weight=143
    //% blockGap=10
    //% color="#cc33ff"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED_ClearPoint(x:number,y:number){
        let i,m,n;
        i=y/8;
        m=y%8;
        n=1<<m;
        OLED_GRAM[x][i]=~OLED_GRAM[x][i];
        OLED_GRAM[x][i]|=n;
        OLED_GRAM[x][i]=~OLED_GRAM[x][i];
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame1_OLED_Refresh block="更新屏幕显示"
    //% weight=142
    //% blockGap=10
    //% color="#cc33ff"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED_Refresh(){
        let i,n;
        for(i=0;i<8;i++)
        {
            OLED_WR_Byte(0xb0+i,OLED_CMD); //设置行起始地址
            OLED_WR_Byte(0x00,OLED_CMD);   //设置低列起始地址
            OLED_WR_Byte(0x10,OLED_CMD);   //设置高列起始地址
            for(n=0;n<128;n++)
                OLED_WR_Byte(OLED_GRAM[n][i],OLED_DATA);
        }
    }
}