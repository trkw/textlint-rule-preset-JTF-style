// LICENSE : MIT
"use strict";
export default {
    rules: {
        "1.1.1.本文": require("./1.1.1"),
        "1.1.2.見出し": require("./1.1.2"),
        "1.1.3.箇条書き": require("./1.1.3"),
        // 1.1.4. 図表内のテキスト はスキップ
        "1.1.5.図表のキャプション": require("./1.1.5"),
        "1.2.1.句点(。)と読点(、)": require("./1.2.1"),
        "1.2.2.ピリオド(.)とカンマ(,)": require("./1.2.2"),
        // TODO: 2.1.1.ひらがな
        // TODO: 2.1.2.漢字
        // TODO: 2.1.3.漢字の送りがな
        // TODO: 2.1.4.複合語の送りがな
        "2.1.5.カタカナ": require("./2.1.5"),
        "2.1.6.カタカナの長音": require("./2.1.6"),
        // TODO: 2.1.7.カタカナ複合語
        "2.1.8.算用数字": require("./2.1.8"),
        "2.1.9.アルファベット": require("./2.1.9"),
        "2.1.10.算用数字の位取りの表記": require("./2.1.10"),
        "2.2.1.ひらがなと漢字の使い分け": require("./2.2.1"),
        "2.2.2.算用数字と漢数字の使い分け": require("./2.2.2"),
        "2.2.3.一部の助数詞の表記": require("./2.2.3"),
        "3.1.1.全角文字と半角文字の間": require("./3.1.1"),
        "3.1.2.全角文字どうし": require("./3.1.2"),
        "3.2.カタカナ語間のスペースの有無": require("./3.2"),
        "3.3.かっこ類と隣接する文字の間のスペースの有無": require("./3.3"),
        "4.1.1.句点(。)": require("./4.1.1"),
        "4.1.3.ピリオド(.)、カンマ(,)": require("./4.1.3"),
        "4.2.1.感嘆符(！)": require("./4.2.1"),
        "4.2.2.疑問符(？)": require("./4.2.2"),
        "4.2.5.波線(〜)": require("./4.2.5"),
        "4.2.6.ハイフン(-)": require("./4.2.6"),
        "4.2.7.コロン(：)": require("./4.2.7"),
        "4.2.8.セミコロン(;)": require("./4.2.8"),
        "4.2.9.ダッシュ(-)": require("./4.2.9"),
        "4.3.1.丸かっこ（）": require("./4.3.1"),
        "4.3.2.大かっこ［］": require("./4.3.2"),
        "4.3.3.かぎかっこ「」": require("./4.3.3"),
        "4.3.4.二重かぎかっこ『』": require("./4.3.4"),
        "4.3.5.二重引用符": require("./4.3.5"),
        "4.3.6.中かっこ{ }": require("./4.3.6"),
        "4.3.7.山かっこ<>": require("./4.3.7"),
        "4.3.8.一重引用符": require("./4.3.8")
    },
    rulesConfig: {
        "1.1.1.本文": true,
        "1.1.2.見出し": true,
        "1.1.3.箇条書き": true,
        "1.1.5.図表のキャプション": true,
        "1.2.1.句点(。)と読点(、)": true,
        "1.2.2.ピリオド(.)とカンマ(,)": true,
        "2.1.5.カタカナ": true,
        "2.1.6.カタカナの長音": true,
        "2.1.8.算用数字": true,
        "2.1.9.アルファベット": true,
        "2.1.10.算用数字の位取りの表記": true,
        "2.2.1.ひらがなと漢字の使い分け": true,
        "2.2.2.算用数字と漢数字の使い分け": true,
        "2.2.3.一部の助数詞の表記": true,
        "3.1.1.全角文字と半角文字の間": true,
        "3.1.2.全角文字どうし": true,
        "3.2.カタカナ語間のスペースの有無": true,
        "3.3.かっこ類と隣接する文字の間のスペースの有無": true,
        "4.1.1.句点(。)": true,
        "4.1.3.ピリオド(.)、カンマ(,)": true,
        "4.2.1.感嘆符(！)": true,
        "4.2.2.疑問符(？)": true,
        "4.2.5.波線(〜)": true,
        "4.2.6.ハイフン(-)": true,// default off?
        "4.2.7.コロン(：)": true,// default off?
        "4.2.8.セミコロン(;)": true, // default off?
        "4.2.9.ダッシュ(-)": true,
        "4.3.1.丸かっこ（）": true,
        "4.3.2.大かっこ［］": true,
        "4.3.3.かぎかっこ「」": true,
        "4.3.4.二重かぎかっこ『』": true,
        "4.3.5.二重引用符": true,
        "4.3.6.中かっこ{ }": true,
        "4.3.7.山かっこ<>": true,
        "4.3.8.一重引用符": true
    }
};
