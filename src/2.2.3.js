// LICENSE : MIT
"use strict";
/*
2.2.3. 一部の助数詞の表記
助数詞にともなう「ヵ」、「か」、「カ」、「ヶ」、「ケ」、「箇」、「個」の表記は、原則として、ひらがなの「か」を使います。
 */
import prh from "textlint-rule-prh";
import path from "path";
export default function (context) {
    return prh.fixer(context, {
        rulePaths: [path.join(__dirname, "..", "dict", "2.2.3.yml")]
    });
}