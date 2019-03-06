export type Precision =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51;

export function numberToDoubleN(num: number, precision: Precision) {
  return toDoubleN(to64BitBinaryString(num), precision);
}

function to64BitBinaryString(num: number): string {
  const numberWriter = new DataView(new ArrayBuffer(8));
  numberWriter.setFloat64(0, num, false);

  let bitStr = "";
  for (let i = 0; i < 8; i++) {
    let bits = numberWriter.getUint8(i).toString(2);
    if (bits.length < 8) {
      let subBits = "";
      for (let j = 0; j < 8 - bits.length; j++) {
        subBits += "0";
      }
      bits = subBits + bits;
    }
    bitStr += bits;
  }
  return bitStr;
}

function toDoubleN(binary: string, precision: Precision): number {
  const sign = parseInt(binary[0], 10);
  const exponent = parseInt(binary.substr(1, 11), 2);

  const mantissaStr = binary.substr(12, precision);
  let mantissa = 0;
  for (let i = 0; i < mantissaStr.length; i++) {
    const bin = mantissaStr[i] === "0" ? 0 : 1;
    mantissa += bin * Math.pow(2, -(i + 1));
  }

  return Math.pow(-1, sign) * (1 + mantissa) * Math.pow(2, exponent - 1023);
}
