function leesIngedrukteKnop () {
    bit0 = pins.digitalReadPin(DigitalPin.P16)
    bit1 = pins.digitalReadPin(DigitalPin.P15)
    bit2 = pins.digitalReadPin(DigitalPin.P14)
    bit3 = pins.digitalReadPin(DigitalPin.P13)
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
makerbit.showStringOnLcd1602("Welkom bij de Zender", makerbit.position1602(LcdPosition1602.Pos1), 16)
radio.setGroup(11)
makerbit.showStringOnLcd1602("Op RadioGroep 11", makerbit.position1602(LcdPosition1602.Pos17), 16)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        while (pins.digitalReadPin(DigitalPin.P8) != 0) {
            basic.pause(100)
        }
        if (leesIngedrukteKnop() == 0) {
            makerbit.showStringOnLcd1602("knop 0", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 1) {
            makerbit.showStringOnLcd1602("knop 1", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 2) {
            makerbit.showStringOnLcd1602("knop 2", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 3) {
            makerbit.showStringOnLcd1602("knop 3", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 4) {
            makerbit.showStringOnLcd1602("knop 4", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 5) {
            makerbit.showStringOnLcd1602("knop 5", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 6) {
            makerbit.showStringOnLcd1602("knop 6", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 7) {
            makerbit.showStringOnLcd1602("knop 7", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 8) {
            makerbit.showStringOnLcd1602("knop 8", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 9) {
            makerbit.showStringOnLcd1602("knop 9", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 10) {
            makerbit.showStringOnLcd1602("knop 10", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 11) {
            makerbit.showStringOnLcd1602("knop 11", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 12) {
            makerbit.showStringOnLcd1602("knop 12", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 13) {
            makerbit.showStringOnLcd1602("knop 13", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 14) {
            makerbit.showStringOnLcd1602("knop 14", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else if (leesIngedrukteKnop() == 15) {
            makerbit.showStringOnLcd1602("knop 15", makerbit.position1602(LcdPosition1602.Pos1), 16)
        } else {
        	
        }
        basic.pause(500)
    } else {
        makerbit.clearLcd1602()
    }
})
