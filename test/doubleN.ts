import * as test from "tape";
import * as DoubleN from "../src/doubleN";

test("amount_precision_test", t => {
  t.test(
    "2^x should be equals to any number between 2^x and 2^(x+1)-1 when using 0 bit precision",
    st => {
      const a = 1024;
      const b = 2047;
      const c = 2048;
      const p = 0;

      st.true(DoubleN.numberToDoubleN(a, p) === DoubleN.numberToDoubleN(b, p));
      st.false(DoubleN.numberToDoubleN(a, p) === DoubleN.numberToDoubleN(c, p));

      st.end();
    }
  );
  t.test(
    "2^x should be equals to any amount between 2^x and 2^(x+1)*0.75-1 when using 1 bit precision",
    st => {
      const a = 1024;
      const b = 1535;
      const c = 1536;
      const p = 1;

      st.true(DoubleN.numberToDoubleN(a, p) === DoubleN.numberToDoubleN(b, p));
      st.false(DoubleN.numberToDoubleN(a, p) === DoubleN.numberToDoubleN(c, p));
      st.end();
    }
  );
  t.test(
    "Difference should be insignificant enough when using 42 bit precision",
    st => {
      const a = 6.81926300043489;
      const b = 6.819263000434886;
      const p = 42;

      st.true(DoubleN.numberToDoubleN(a, p) === DoubleN.numberToDoubleN(b, p));
      st.end();
    }
  );
});
