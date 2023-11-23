import { RegistrationTemplateEngine } from "../src/index";

describe("RegistrationTemplateEngine", () => {
  test("should generate correct number with template {SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}", () => {
    const data1 = {
      regType: "RI",
      currentDate: new Date("2023-01-01"),
      seq: 1,
    };
    const template1 = "{SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}";
    const result1 = RegistrationTemplateEngine.generateNumber(template1, data1);
    expect(result1).toBe("0001-2023/01/01-RI");
  });

  test("should generate correct number with template {REG_TYPE}/{YYMMDD}/{SEQ}", () => {
    const data2 = {
      regType: "RI",
      currentDate: new Date("2023-01-01"),
      seq: 1,
    };
    const template2 = "{REG_TYPE}/{YYMMDD}/{SEQ}";
    const result2 = RegistrationTemplateEngine.generateNumber(template2, data2);
    expect(result2).toBe("RI/230101/0001");
  });

  // Add more test cases as needed
});
