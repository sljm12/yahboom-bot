function inc_angle () {
    servo_angle += 1
    if (servo_angle >= 98) {
        servo_angle = 98
    }
    SuperBit.Servo(SuperBit.enServo.S5, servo_angle)
}
input.onButtonPressed(Button.A, function () {
    SuperBit.MotorStopAll()
})
function dec_angle () {
    servo_angle += -1
    if (servo_angle <= 50) {
        servo_angle = 50
    }
    SuperBit.Servo(SuperBit.enServo.S5, servo_angle)
}
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    100,
    SuperBit.enMotors.M3,
    100
    )
})
radio.onReceivedValue(function (name, value) {
    if (name == "forward") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        100,
        SuperBit.enMotors.M3,
        100
        )
    } else if (name == "left") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        50,
        SuperBit.enMotors.M3,
        140
        )
    } else if (name == "right") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        140,
        SuperBit.enMotors.M3,
        50
        )
    } else if (name == "reverse") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -100,
        SuperBit.enMotors.M3,
        -100
        )
    } else if (name == "stop") {
        SuperBit.MotorStopAll()
    } else if (name == "inc") {
        inc_angle()
    } else if (name == "dec") {
        dec_angle()
    } else {
    	
    }
})
let servo_angle = 0
radio.setGroup(1)
servo_angle = 50
SuperBit.Servo(SuperBit.enServo.S5, servo_angle)
basic.forever(function () {
	
})
