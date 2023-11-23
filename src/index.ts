export class RegistrationTemplateEngine {
  private static padNumber(num: number, length: number): string {
    // ex: num = 1, length = 4
    // "1" => padStart with length = 4
    // "0001"
    return num.toString().padStart(length, "0");
  }

  static generateNumber(
    template: string,
    data: { regType: string; currentDate: Date; seq: number }
  ): string {
    const { regType, currentDate, seq } = data;

    const year = currentDate.getFullYear().toString().slice(2);
    const month = this.padNumber(currentDate.getMonth() + 1, 2);
    const day = this.padNumber(currentDate.getDate(), 2);

    const replacements: { [key: string]: string } = {
      REG_TYPE: regType, // => RI
      YYYY: currentDate.getFullYear().toString(), // => "2023"
      YYMMDD: year + month + day, // => "230101"
      YY: year, // => "23"
      MM: month, // => "01"
      DD: day, // => "01"
      SEQ: this.padNumber(seq, 4), // => seq = 0,
    };

    const formattedNumber = template.replace(
      /{(\w+)}/g,
      (match, key) => replacements[key]
    );

    return formattedNumber;
  }
}

// Unit tests
// const data = {
//   regType: "RI",
//   currentDate: new Date("2023-01-30"),
//   seq: 1,
// };

// const template1 = "{REG_TYPE}/{YYMMDD}/{SEQ}";
// console.log(RegistrationTemplateEngine.generateNumber(template1, data));

// const template2 = "{SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}";
// console.log(RegistrationTemplateEngine.generateNumber(template2, data));
