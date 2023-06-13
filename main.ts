function Convert5Analog () {
    let Reft_R2 = 0
    let Reft_R1 = 0
    let Reft_C = 0
    Read_5_Analog()
    if (L2 < Reft_L2) {
        L2 = 0
    } else {
        L2 = 1
    }
    if (L1 < Reft_L1) {
        L1 = 0
    } else {
        L1 = 1
    }
    if (C < Reft_C) {
        C = 0
    } else {
        C = 1
    }
    if (R1 < Reft_R1) {
        R1 = 0
    } else {
        R1 = 1
    }
    if (R2 < Reft_R2) {
        R2 = 0
    } else {
        R2 = 1
    }
}
function Read_5_Analog () {
    L2 = iBIT.ReadADC(ibitReadADC.ADC0)
    L1 = iBIT.ReadADC(ibitReadADC.ADC1)
    C = iBIT.ReadADC(ibitReadADC.ADC2)
    R1 = iBIT.ReadADC(ibitReadADC.ADC2)
    R2 = iBIT.ReadADC(ibitReadADC.ADC3)
}
let L1 = 0
let L2 = 0
let R2 = 0
let R1 = 0
let C = 0
let Reft_L1 = 0
let Reft_L2 = 0
Reft_L2 = 0
Reft_L1 = 0
C = 0
R1 = 0
R2 = 0
basic.forever(function () {
	
})
