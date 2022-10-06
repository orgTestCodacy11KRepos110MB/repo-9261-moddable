import Digital from "embedded:io/digital";
import DigitalBank from "embedded:io/digitalbank";
import I2C from "embedded:io/i2c";
import SMBus from "embedded:io/smbus";

const device = {
	I2C: {
		default: {
			io: I2C,
			data: 4,
			clock: 5,
			port: 0
		}
	},
	io: { Digital, DigitalBank, I2C, SMBus },
	pin: {
		button: 15,
		buttonA: 15,
		buttonB: 17,
		buttonX: 19,
		buttonY: 21,
		buttonUP: 2,
		buttonDOWN: 18,
		buttonLEFT: 16,
		buttonRIGHT: 20,
		buttonCENTER: 3,
		led: 25
	}
};

export default device;
