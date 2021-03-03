radio.onReceivedString(function (receivedString) {
    makerbit.showStringOnLcd1602(receivedString, makerbit.position1602(LcdPosition1602.Pos17), 16)
})
function leesIngedrukteKnop () {
    bit0 = pins.digitalReadPin(DigitalPin.P16)
    bit1 = pins.digitalReadPin(DigitalPin.P15)
    bit2 = pins.digitalReadPin(DigitalPin.P14)
    bit3 = pins.digitalReadPin(DigitalPin.P13)
    makerbit.showStringOnLcd1602("" + (bit0), makerbit.position1602(LcdPosition1602.Pos13), 1)
    makerbit.showStringOnLcd1602("" + (bit1), makerbit.position1602(LcdPosition1602.Pos14), 1)
    makerbit.showStringOnLcd1602("" + (bit2), makerbit.position1602(LcdPosition1602.Pos15), 1)
    makerbit.showStringOnLcd1602("" + (bit3), makerbit.position1602(LcdPosition1602.Pos16), 1)
    waarde = bit3 * 8 + (bit2 * 4 + (bit1 * 2 + bit0))
    return waarde
}
let waarde = 0
let bit3 = 0
let bit2 = 0
let bit1 = 0
let bit0 = 0
makerbit.connectLcd(39)
makerbit.clearLcd1602()
makerbit.showStringOnLcd1602("Welkom bij Zender", makerbit.position1602(LcdPosition1602.Pos1), 16)
radio.setGroup(11)
makerbit.showStringOnLcd1602("Op RadioGroep 11", makerbit.position1602(LcdPosition1602.Pos17), 16)
basic.pause(1000)
makerbit.clearLcd1602()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        while (pins.digitalReadPin(DigitalPin.P8) != 0) {
            basic.pause(100)
        }
        basic.pause(200)
        waarde = leesIngedrukteKnop()
        makerbit.showStringOnLcd1602("" + (bit0), makerbit.position1602(LcdPosition1602.Pos13), 1)
        makerbit.showStringOnLcd1602("" + (bit1), makerbit.position1602(LcdPosition1602.Pos14), 1)
        makerbit.showStringOnLcd1602("" + (bit2), makerbit.position1602(LcdPosition1602.Pos15), 1)
        makerbit.showStringOnLcd1602("" + (bit3), makerbit.position1602(LcdPosition1602.Pos16), 1)
        if (waarde == 0) {
            makerbit.showStringOnLcd1602("knop 0", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 0)
        } else if (waarde == 1) {
            makerbit.showStringOnLcd1602("knop 1", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 1)
        } else if (waarde == 2) {
            makerbit.showStringOnLcd1602("knop 2", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 2)
        } else if (waarde == 3) {
            makerbit.showStringOnLcd1602("knop 3", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 3)
        } else if (waarde == 4) {
            makerbit.showStringOnLcd1602("knop 4", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 4)
        } else if (waarde == 5) {
            makerbit.showStringOnLcd1602("knop 5", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 5)
        } else if (waarde == 6) {
            makerbit.showStringOnLcd1602("knop 6", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 6)
        } else if (waarde == 7) {
            makerbit.showStringOnLcd1602("knop 7", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 7)
        } else if (waarde == 8) {
            makerbit.showStringOnLcd1602("knop 8", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 8)
        } else if (waarde == 9) {
            makerbit.showStringOnLcd1602("knop 9", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 9)
        } else if (waarde == 10) {
            makerbit.showStringOnLcd1602("knop 10", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 10)
        } else if (waarde == 11) {
            makerbit.showStringOnLcd1602("knop 11", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 11)
        } else if (waarde == 12) {
            makerbit.showStringOnLcd1602("knop 12", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 12)
        } else if (waarde == 13) {
            makerbit.showStringOnLcd1602("knop 13", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 13)
        } else if (waarde == 14) {
            makerbit.showStringOnLcd1602("knop 14", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 14)
        } else if (waarde == 15) {
            makerbit.showStringOnLcd1602("knop 15", makerbit.position1602(LcdPosition1602.Pos1), 7)
            radio.sendValue("knop", 15)
        } else {
        	
        }
        basic.pause(500)
        makerbit.showStringOnLcd1602("", makerbit.position1602(LcdPosition1602.Pos1), 7)
    } else {
    	
    }
})
