"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// ../../node_modules/.pnpm/js-tokens@4.0.0/node_modules/js-tokens/index.js
var require_js_tokens = __commonJS({
  "../../node_modules/.pnpm/js-tokens@4.0.0/node_modules/js-tokens/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
    exports2.matchToToken = function(match) {
      var token = { type: "invalid", value: match[0], closed: void 0 };
      if (match[1])
        token.type = "string", token.closed = !!(match[3] || match[4]);
      else if (match[5])
        token.type = "comment";
      else if (match[6])
        token.type = "comment", token.closed = !!match[7];
      else if (match[8])
        token.type = "regex";
      else if (match[9])
        token.type = "number";
      else if (match[10])
        token.type = "name";
      else if (match[11])
        token.type = "punctuator";
      else if (match[12])
        token.type = "whitespace";
      return token;
    };
  }
});

// ../../node_modules/.pnpm/@babel+helper-validator-identifier@7.24.7/node_modules/@babel/helper-validator-identifier/lib/identifier.js
var require_identifier = __commonJS({
  "../../node_modules/.pnpm/@babel+helper-validator-identifier@7.24.7/node_modules/@babel/helper-validator-identifier/lib/identifier.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.isIdentifierChar = isIdentifierChar;
    exports2.isIdentifierName = isIdentifierName;
    exports2.isIdentifierStart = isIdentifierStart;
    var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
    var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
    nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
    var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191];
    var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
    function isInAstralSet(code, set) {
      let pos = 65536;
      for (let i = 0, length = set.length; i < length; i += 2) {
        pos += set[i];
        if (pos > code)
          return false;
        pos += set[i + 1];
        if (pos >= code)
          return true;
      }
      return false;
    }
    function isIdentifierStart(code) {
      if (code < 65)
        return code === 36;
      if (code <= 90)
        return true;
      if (code < 97)
        return code === 95;
      if (code <= 122)
        return true;
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
      }
      return isInAstralSet(code, astralIdentifierStartCodes);
    }
    function isIdentifierChar(code) {
      if (code < 48)
        return code === 36;
      if (code < 58)
        return true;
      if (code < 65)
        return false;
      if (code <= 90)
        return true;
      if (code < 97)
        return code === 95;
      if (code <= 122)
        return true;
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
      }
      return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
    }
    function isIdentifierName(name) {
      let isFirst = true;
      for (let i = 0; i < name.length; i++) {
        let cp = name.charCodeAt(i);
        if ((cp & 64512) === 55296 && i + 1 < name.length) {
          const trail = name.charCodeAt(++i);
          if ((trail & 64512) === 56320) {
            cp = 65536 + ((cp & 1023) << 10) + (trail & 1023);
          }
        }
        if (isFirst) {
          isFirst = false;
          if (!isIdentifierStart(cp)) {
            return false;
          }
        } else if (!isIdentifierChar(cp)) {
          return false;
        }
      }
      return !isFirst;
    }
  }
});

// ../../node_modules/.pnpm/@babel+helper-validator-identifier@7.24.7/node_modules/@babel/helper-validator-identifier/lib/keyword.js
var require_keyword = __commonJS({
  "../../node_modules/.pnpm/@babel+helper-validator-identifier@7.24.7/node_modules/@babel/helper-validator-identifier/lib/keyword.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.isKeyword = isKeyword;
    exports2.isReservedWord = isReservedWord;
    exports2.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
    exports2.isStrictBindReservedWord = isStrictBindReservedWord;
    exports2.isStrictReservedWord = isStrictReservedWord;
    var reservedWords = {
      keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
      strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
      strictBind: ["eval", "arguments"]
    };
    var keywords = new Set(reservedWords.keyword);
    var reservedWordsStrictSet = new Set(reservedWords.strict);
    var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
    function isReservedWord(word, inModule) {
      return inModule && word === "await" || word === "enum";
    }
    function isStrictReservedWord(word, inModule) {
      return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
    }
    function isStrictBindOnlyReservedWord(word) {
      return reservedWordsStrictBindSet.has(word);
    }
    function isStrictBindReservedWord(word, inModule) {
      return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
    }
    function isKeyword(word) {
      return keywords.has(word);
    }
  }
});

// ../../node_modules/.pnpm/@babel+helper-validator-identifier@7.24.7/node_modules/@babel/helper-validator-identifier/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/@babel+helper-validator-identifier@7.24.7/node_modules/@babel/helper-validator-identifier/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isIdentifierChar", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierChar;
      }
    });
    Object.defineProperty(exports2, "isIdentifierName", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierName;
      }
    });
    Object.defineProperty(exports2, "isIdentifierStart", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierStart;
      }
    });
    Object.defineProperty(exports2, "isKeyword", {
      enumerable: true,
      get: function() {
        return _keyword.isKeyword;
      }
    });
    Object.defineProperty(exports2, "isReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictBindOnlyReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindOnlyReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictBindReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictReservedWord;
      }
    });
    var _identifier = require_identifier();
    var _keyword = require_keyword();
  }
});

// ../../node_modules/.pnpm/picocolors@1.0.1/node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "../../node_modules/.pnpm/picocolors@1.0.1/node_modules/picocolors/picocolors.js"(exports2, module2) {
    var argv = process.argv || [];
    var env2 = process.env;
    var isColorSupported = !("NO_COLOR" in env2 || argv.includes("--no-color")) && ("FORCE_COLOR" in env2 || argv.includes("--color") || process.platform === "win32" || require != null && require("tty").isatty(1) && env2.TERM !== "dumb" || "CI" in env2);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "";
      let cursor = 0;
      do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
      } while (~index);
      return result + string.substring(cursor);
    };
    var createColors = (enabled = isColorSupported) => {
      let init = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: init("\x1B[0m", "\x1B[0m"),
        bold: init("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: init("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: init("\x1B[3m", "\x1B[23m"),
        underline: init("\x1B[4m", "\x1B[24m"),
        inverse: init("\x1B[7m", "\x1B[27m"),
        hidden: init("\x1B[8m", "\x1B[28m"),
        strikethrough: init("\x1B[9m", "\x1B[29m"),
        black: init("\x1B[30m", "\x1B[39m"),
        red: init("\x1B[31m", "\x1B[39m"),
        green: init("\x1B[32m", "\x1B[39m"),
        yellow: init("\x1B[33m", "\x1B[39m"),
        blue: init("\x1B[34m", "\x1B[39m"),
        magenta: init("\x1B[35m", "\x1B[39m"),
        cyan: init("\x1B[36m", "\x1B[39m"),
        white: init("\x1B[37m", "\x1B[39m"),
        gray: init("\x1B[90m", "\x1B[39m"),
        bgBlack: init("\x1B[40m", "\x1B[49m"),
        bgRed: init("\x1B[41m", "\x1B[49m"),
        bgGreen: init("\x1B[42m", "\x1B[49m"),
        bgYellow: init("\x1B[43m", "\x1B[49m"),
        bgBlue: init("\x1B[44m", "\x1B[49m"),
        bgMagenta: init("\x1B[45m", "\x1B[49m"),
        bgCyan: init("\x1B[46m", "\x1B[49m"),
        bgWhite: init("\x1B[47m", "\x1B[49m")
      };
    };
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// ../../node_modules/.pnpm/escape-string-regexp@1.0.5/node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "../../node_modules/.pnpm/escape-string-regexp@1.0.5/node_modules/escape-string-regexp/index.js"(exports2, module2) {
    "use strict";
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    module2.exports = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
  }
});

// ../../node_modules/.pnpm/color-name@1.1.3/node_modules/color-name/index.js
var require_color_name = __commonJS({
  "../../node_modules/.pnpm/color-name@1.1.3/node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// ../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (key in cssKeywords) {
      if (cssKeywords.hasOwnProperty(key)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
    }
    var key;
    var convert = module2.exports = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    for (model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        channels = convert[model].channels;
        labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
    }
    var channels;
    var labels;
    var model;
    convert.rgb.hsl = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff = v - Math.min(r, g, b);
      var diffc = function(c2) {
        return (v - c2) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c2;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c2 = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [c2 * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
    }
    convert.rgb.keyword = function(rgb) {
      var reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      var currentClosestDistance = Infinity;
      var currentClosestKeyword;
      for (var keyword in cssKeywords) {
        if (cssKeywords.hasOwnProperty(keyword)) {
          var value = cssKeywords[keyword];
          var distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      t1 = 2 * l - t2;
      rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;
      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh);
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      var c2 = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c2 * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c2;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c2 = Math.sqrt(a * a + b * b);
      return [l, c2, h];
    };
    convert.lch.lab = function(lch) {
      var l = lch[0];
      var c2 = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c2 * Math.cos(hr);
      b = c2 * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      var color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        var c2 = (args - 232) * 10 + 8;
        return [c2, c2, c2];
      }
      args -= 16;
      var rem;
      var r = Math.floor(args / 36) / 5 * 255;
      var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      var colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map(function(char) {
          return char + char;
        }).join("");
      }
      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 255;
      var g = integer >> 8 & 255;
      var b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c2 = 1;
      var f = 0;
      if (l < 0.5) {
        c2 = 2 * s * l;
      } else {
        c2 = 2 * s * (1 - l);
      }
      if (c2 < 1) {
        f = (l - 0.5 * c2) / (1 - c2);
      }
      return [hsl[0], c2 * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c2 = s * v;
      var f = 0;
      if (c2 < 1) {
        f = (v - c2) / (1 - c2);
      }
      return [hsv[0], c2 * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      var h = hcg[0] / 360;
      var c2 = hcg[1] / 100;
      var g = hcg[2] / 100;
      if (c2 === 0) {
        return [g * 255, g * 255, g * 255];
      }
      var pure = [0, 0, 0];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c2) * g;
      return [
        (c2 * pure[0] + mg) * 255,
        (c2 * pure[1] + mg) * 255,
        (c2 * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      var c2 = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c2 + g * (1 - c2);
      var f = 0;
      if (v > 0) {
        f = c2 / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      var c2 = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1 - c2) + 0.5 * c2;
      var s = 0;
      if (l > 0 && l < 0.5) {
        s = c2 / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c2 / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      var c2 = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c2 + g * (1 - c2);
      return [hcg[0], (v - c2) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c2 = v - w;
      var g = 0;
      if (c2 < 1) {
        g = (v - c2) / (1 - c2);
      }
      return [hwb[0], c2 * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = convert.gray.hsv = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      var val = Math.round(gray[0] / 100 * 255) & 255;
      var integer = (val << 16) + (val << 8) + val;
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// ../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/route.js
var require_route = __commonJS({
  "../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      var graph = {};
      var models = Object.keys(conversions);
      for (var len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      var graph = buildGraph();
      var queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        var current = queue.pop();
        var adjacents = Object.keys(conversions[current]);
        for (var len = adjacents.length, i = 0; i < len; i++) {
          var adjacent = adjacents[i];
          var node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      var path = [graph[toModel].parent, toModel];
      var fn = conversions[graph[toModel].parent][toModel];
      var cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      var graph = deriveBFS(fromModel);
      var conversion = {};
      var models = Object.keys(graph);
      for (var len = models.length, i = 0; i < len; i++) {
        var toModel = models[i];
        var node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// ../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        var result = fn(args);
        if (typeof result === "object") {
          for (var len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach(function(fromModel) {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      var routes = route(fromModel);
      var routeModels = Object.keys(routes);
      routeModels.forEach(function(toModel) {
        var fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// ../../node_modules/.pnpm/ansi-styles@3.2.1/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "../../node_modules/.pnpm/ansi-styles@3.2.1/node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var colorConvert = require_color_convert();
    var wrapAnsi16 = (fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => function() {
      const rgb = fn.apply(colorConvert, arguments);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          gray: [90, 39],
          // Bright color
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.grey = styles.color.gray;
      for (const groupName of Object.keys(styles)) {
        const group = styles[groupName];
        for (const styleName of Object.keys(group)) {
          const style = group[styleName];
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
      }
      const ansi2ansi = (n) => n;
      const rgb2rgb = (r, g, b) => [r, g, b];
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      styles.color.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 0)
      };
      styles.color.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 0)
      };
      styles.color.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 0)
      };
      styles.bgColor.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 10)
      };
      styles.bgColor.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 10)
      };
      styles.bgColor.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 10)
      };
      for (let key of Object.keys(colorConvert)) {
        if (typeof colorConvert[key] !== "object") {
          continue;
        }
        const suite = colorConvert[key];
        if (key === "ansi16") {
          key = "ansi";
        }
        if ("ansi16" in suite) {
          styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
          styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
        }
        if ("ansi256" in suite) {
          styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
          styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
        }
        if ("rgb" in suite) {
          styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
          styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
        }
      }
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// ../../node_modules/.pnpm/has-flag@3.0.0/node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "../../node_modules/.pnpm/has-flag@3.0.0/node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv) => {
      argv = argv || process.argv;
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const pos = argv.indexOf(prefix + flag);
      const terminatorPos = argv.indexOf("--");
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// ../../node_modules/.pnpm/supports-color@5.5.0/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "../../node_modules/.pnpm/supports-color@5.5.0/node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os2 = require("os");
    var hasFlag2 = require_has_flag();
    var env2 = process.env;
    var forceColor;
    if (hasFlag2("no-color") || hasFlag2("no-colors") || hasFlag2("color=false")) {
      forceColor = false;
    } else if (hasFlag2("color") || hasFlag2("colors") || hasFlag2("color=true") || hasFlag2("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env2) {
      forceColor = env2.FORCE_COLOR.length === 0 || parseInt(env2.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel2(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor2(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag2("color=16m") || hasFlag2("color=full") || hasFlag2("color=truecolor")) {
        return 3;
      }
      if (hasFlag2("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      const min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        const osRelease = os2.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env2) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((sign) => sign in env2) || env2.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env2) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env2.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env2.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env2) {
        const version = parseInt((env2.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env2.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env2.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env2.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env2) {
        return 1;
      }
      if (env2.TERM === "dumb") {
        return min;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor2(stream);
      return translateLevel2(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// ../../node_modules/.pnpm/chalk@2.4.2/node_modules/chalk/templates.js
var require_templates = __commonJS({
  "../../node_modules/.pnpm/chalk@2.4.2/node_modules/chalk/templates.js"(exports2, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c2) {
      if (c2[0] === "u" && c2.length === 5 || c2[0] === "x" && c2.length === 3) {
        return String.fromCharCode(parseInt(c2.slice(1), 16));
      }
      return ESCAPES.get(c2) || c2;
    }
    function parseArguments(name, args) {
      const results = [];
      const chunks = args.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const styleName of Object.keys(enabled)) {
        if (Array.isArray(enabled[styleName])) {
          if (!(styleName in current)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
          }
          if (enabled[styleName].length > 0) {
            current = current[styleName].apply(current, enabled[styleName]);
          } else {
            current = current[styleName];
          }
        }
      }
      return current;
    }
    module2.exports = (chalk, tmp) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
        if (escapeChar) {
          chunk.push(unescape(escapeChar));
        } else if (style) {
          const str = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(chr);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMsg);
      }
      return chunks.join("");
    };
  }
});

// ../../node_modules/.pnpm/chalk@2.4.2/node_modules/chalk/index.js
var require_chalk = __commonJS({
  "../../node_modules/.pnpm/chalk@2.4.2/node_modules/chalk/index.js"(exports2, module2) {
    "use strict";
    var escapeStringRegexp = require_escape_string_regexp();
    var ansiStyles = require_ansi_styles();
    var stdoutColor = require_supports_color().stdout;
    var template = require_templates();
    var isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
    var levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"];
    var skipModels = /* @__PURE__ */ new Set(["gray"]);
    var styles = /* @__PURE__ */ Object.create(null);
    function applyOptions(obj, options) {
      options = options || {};
      const scLevel = stdoutColor ? stdoutColor.level : 0;
      obj.level = options.level === void 0 ? scLevel : options.level;
      obj.enabled = "enabled" in options ? options.enabled : obj.level > 0;
    }
    function Chalk(options) {
      if (!this || !(this instanceof Chalk) || this.template) {
        const chalk = {};
        applyOptions(chalk, options);
        chalk.template = function() {
          const args = [].slice.call(arguments);
          return chalkTag.apply(null, [chalk.template].concat(args));
        };
        Object.setPrototypeOf(chalk, Chalk.prototype);
        Object.setPrototypeOf(chalk.template, chalk);
        chalk.template.constructor = Chalk;
        return chalk.template;
      }
      applyOptions(this, options);
    }
    if (isSimpleWindowsTerm) {
      ansiStyles.blue.open = "\x1B[94m";
    }
    for (const key of Object.keys(ansiStyles)) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
      styles[key] = {
        get() {
          const codes = ansiStyles[key];
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
        }
      };
    }
    styles.visible = {
      get() {
        return build.call(this, this._styles || [], true, "visible");
      }
    };
    ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), "g");
    for (const model of Object.keys(ansiStyles.color.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      styles[model] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.color.close,
              closeRe: ansiStyles.color.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
          };
        }
      };
    }
    ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), "g");
    for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.bgColor.close,
              closeRe: ansiStyles.bgColor.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, styles);
    function build(_styles, _empty, key) {
      const builder = function() {
        return applyStyle.apply(builder, arguments);
      };
      builder._styles = _styles;
      builder._empty = _empty;
      const self = this;
      Object.defineProperty(builder, "level", {
        enumerable: true,
        get() {
          return self.level;
        },
        set(level) {
          self.level = level;
        }
      });
      Object.defineProperty(builder, "enabled", {
        enumerable: true,
        get() {
          return self.enabled;
        },
        set(enabled) {
          self.enabled = enabled;
        }
      });
      builder.hasGrey = this.hasGrey || key === "gray" || key === "grey";
      builder.__proto__ = proto;
      return builder;
    }
    function applyStyle() {
      const args = arguments;
      const argsLen = args.length;
      let str = String(arguments[0]);
      if (argsLen === 0) {
        return "";
      }
      if (argsLen > 1) {
        for (let a = 1; a < argsLen; a++) {
          str += " " + args[a];
        }
      }
      if (!this.enabled || this.level <= 0 || !str) {
        return this._empty ? "" : str;
      }
      const originalDim = ansiStyles.dim.open;
      if (isSimpleWindowsTerm && this.hasGrey) {
        ansiStyles.dim.open = "";
      }
      for (const code of this._styles.slice().reverse()) {
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
      }
      ansiStyles.dim.open = originalDim;
      return str;
    }
    function chalkTag(chalk, strings) {
      if (!Array.isArray(strings)) {
        return [].slice.call(arguments, 1).join(" ");
      }
      const args = [].slice.call(arguments, 2);
      const parts = [strings.raw[0]];
      for (let i = 1; i < strings.length; i++) {
        parts.push(String(args[i - 1]).replace(/[{}\\]/g, "\\$&"));
        parts.push(String(strings.raw[i]));
      }
      return template(chalk, parts.join(""));
    }
    Object.defineProperties(Chalk.prototype, styles);
    module2.exports = Chalk();
    module2.exports.supportsColor = stdoutColor;
    module2.exports.default = module2.exports;
  }
});

// ../../node_modules/.pnpm/@babel+highlight@7.24.7/node_modules/@babel/highlight/lib/index.js
var require_lib2 = __commonJS({
  "../../node_modules/.pnpm/@babel+highlight@7.24.7/node_modules/@babel/highlight/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = highlight;
    exports2.shouldHighlight = shouldHighlight;
    var _jsTokens = require_js_tokens();
    var _helperValidatorIdentifier = require_lib();
    var _picocolors = _interopRequireWildcard(require_picocolors(), true);
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap)
        return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule)
        return e;
      if (null === e || "object" != typeof e && "function" != typeof e)
        return { default: e };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e))
        return t.get(e);
      var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e)
        if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
          var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
        }
      return n.default = e, t && t.set(e, n), n;
    }
    var colors = typeof process === "object" && (process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false") ? (0, _picocolors.createColors)(false) : _picocolors.default;
    var compose = (f, g) => (v) => f(g(v));
    var sometimesKeywords = /* @__PURE__ */ new Set(["as", "async", "from", "get", "of", "set"]);
    function getDefs(colors2) {
      return {
        keyword: colors2.cyan,
        capitalized: colors2.yellow,
        jsxIdentifier: colors2.yellow,
        punctuator: colors2.yellow,
        number: colors2.magenta,
        string: colors2.green,
        regex: colors2.magenta,
        comment: colors2.gray,
        invalid: compose(compose(colors2.white, colors2.bgRed), colors2.bold)
      };
    }
    var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
    var BRACKET = /^[()[\]{}]$/;
    var tokenize;
    {
      const JSX_TAG = /^[a-z][\w-]*$/i;
      const getTokenType = function(token, offset, text) {
        if (token.type === "name") {
          if ((0, _helperValidatorIdentifier.isKeyword)(token.value) || (0, _helperValidatorIdentifier.isStrictReservedWord)(token.value, true) || sometimesKeywords.has(token.value)) {
            return "keyword";
          }
          if (JSX_TAG.test(token.value) && (text[offset - 1] === "<" || text.slice(offset - 2, offset) === "</")) {
            return "jsxIdentifier";
          }
          if (token.value[0] !== token.value[0].toLowerCase()) {
            return "capitalized";
          }
        }
        if (token.type === "punctuator" && BRACKET.test(token.value)) {
          return "bracket";
        }
        if (token.type === "invalid" && (token.value === "@" || token.value === "#")) {
          return "punctuator";
        }
        return token.type;
      };
      tokenize = function* (text) {
        let match;
        while (match = _jsTokens.default.exec(text)) {
          const token = _jsTokens.matchToToken(match);
          yield {
            type: getTokenType(token, match.index, text),
            value: token.value
          };
        }
      };
    }
    function highlightTokens(defs, text) {
      let highlighted = "";
      for (const {
        type,
        value
      } of tokenize(text)) {
        const colorize = defs[type];
        if (colorize) {
          highlighted += value.split(NEWLINE).map((str) => colorize(str)).join("\n");
        } else {
          highlighted += value;
        }
      }
      return highlighted;
    }
    function shouldHighlight(options) {
      return colors.isColorSupported || options.forceColor;
    }
    var pcWithForcedColor = void 0;
    function getColors(forceColor) {
      if (forceColor) {
        var _pcWithForcedColor;
        (_pcWithForcedColor = pcWithForcedColor) != null ? _pcWithForcedColor : pcWithForcedColor = (0, _picocolors.createColors)(true);
        return pcWithForcedColor;
      }
      return colors;
    }
    function highlight(code, options = {}) {
      if (code !== "" && shouldHighlight(options)) {
        const defs = getDefs(getColors(options.forceColor));
        return highlightTokens(defs, code);
      } else {
        return code;
      }
    }
    {
      let chalk, chalkWithForcedColor;
      exports2.getChalk = ({
        forceColor
      }) => {
        var _chalk;
        (_chalk = chalk) != null ? _chalk : chalk = require_chalk();
        if (forceColor) {
          var _chalkWithForcedColor;
          (_chalkWithForcedColor = chalkWithForcedColor) != null ? _chalkWithForcedColor : chalkWithForcedColor = new chalk.constructor({
            enabled: true,
            level: 1
          });
          return chalkWithForcedColor;
        }
        return chalk;
      };
    }
  }
});

// ../../node_modules/.pnpm/@babel+code-frame@7.24.7/node_modules/@babel/code-frame/lib/index.js
var require_lib3 = __commonJS({
  "../../node_modules/.pnpm/@babel+code-frame@7.24.7/node_modules/@babel/code-frame/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.codeFrameColumns = codeFrameColumns2;
    exports2.default = _default;
    var _highlight = require_lib2();
    var _picocolors = _interopRequireWildcard(require_picocolors(), true);
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap)
        return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule)
        return e;
      if (null === e || "object" != typeof e && "function" != typeof e)
        return { default: e };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e))
        return t.get(e);
      var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e)
        if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
          var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
        }
      return n.default = e, t && t.set(e, n), n;
    }
    var colors = typeof process === "object" && (process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false") ? (0, _picocolors.createColors)(false) : _picocolors.default;
    var compose = (f, g) => (v) => f(g(v));
    var pcWithForcedColor = void 0;
    function getColors(forceColor) {
      if (forceColor) {
        var _pcWithForcedColor;
        (_pcWithForcedColor = pcWithForcedColor) != null ? _pcWithForcedColor : pcWithForcedColor = (0, _picocolors.createColors)(true);
        return pcWithForcedColor;
      }
      return colors;
    }
    var deprecationWarningShown = false;
    function getDefs(colors2) {
      return {
        gutter: colors2.gray,
        marker: compose(colors2.red, colors2.bold),
        message: compose(colors2.red, colors2.bold)
      };
    }
    var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
    function getMarkerLines(loc, source, opts) {
      const startLoc = Object.assign({
        column: 0,
        line: -1
      }, loc.start);
      const endLoc = Object.assign({}, startLoc, loc.end);
      const {
        linesAbove = 2,
        linesBelow = 3
      } = opts || {};
      const startLine = startLoc.line;
      const startColumn = startLoc.column;
      const endLine = endLoc.line;
      const endColumn = endLoc.column;
      let start = Math.max(startLine - (linesAbove + 1), 0);
      let end = Math.min(source.length, endLine + linesBelow);
      if (startLine === -1) {
        start = 0;
      }
      if (endLine === -1) {
        end = source.length;
      }
      const lineDiff = endLine - startLine;
      const markerLines = {};
      if (lineDiff) {
        for (let i = 0; i <= lineDiff; i++) {
          const lineNumber = i + startLine;
          if (!startColumn) {
            markerLines[lineNumber] = true;
          } else if (i === 0) {
            const sourceLength = source[lineNumber - 1].length;
            markerLines[lineNumber] = [startColumn, sourceLength - startColumn + 1];
          } else if (i === lineDiff) {
            markerLines[lineNumber] = [0, endColumn];
          } else {
            const sourceLength = source[lineNumber - i].length;
            markerLines[lineNumber] = [0, sourceLength];
          }
        }
      } else {
        if (startColumn === endColumn) {
          if (startColumn) {
            markerLines[startLine] = [startColumn, 0];
          } else {
            markerLines[startLine] = true;
          }
        } else {
          markerLines[startLine] = [startColumn, endColumn - startColumn];
        }
      }
      return {
        start,
        end,
        markerLines
      };
    }
    function codeFrameColumns2(rawLines, loc, opts = {}) {
      const highlighted = (opts.highlightCode || opts.forceColor) && (0, _highlight.shouldHighlight)(opts);
      const colors2 = getColors(opts.forceColor);
      const defs = getDefs(colors2);
      const maybeHighlight = (fmt, string) => {
        return highlighted ? fmt(string) : string;
      };
      const lines = rawLines.split(NEWLINE);
      const {
        start,
        end,
        markerLines
      } = getMarkerLines(loc, lines, opts);
      const hasColumns = loc.start && typeof loc.start.column === "number";
      const numberMaxWidth = String(end).length;
      const highlightedLines = highlighted ? (0, _highlight.default)(rawLines, opts) : rawLines;
      let frame = highlightedLines.split(NEWLINE, end).slice(start, end).map((line, index) => {
        const number = start + 1 + index;
        const paddedNumber = ` ${number}`.slice(-numberMaxWidth);
        const gutter = ` ${paddedNumber} |`;
        const hasMarker = markerLines[number];
        const lastMarkerLine = !markerLines[number + 1];
        if (hasMarker) {
          let markerLine = "";
          if (Array.isArray(hasMarker)) {
            const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " ");
            const numberOfMarkers = hasMarker[1] || 1;
            markerLine = ["\n ", maybeHighlight(defs.gutter, gutter.replace(/\d/g, " ")), " ", markerSpacing, maybeHighlight(defs.marker, "^").repeat(numberOfMarkers)].join("");
            if (lastMarkerLine && opts.message) {
              markerLine += " " + maybeHighlight(defs.message, opts.message);
            }
          }
          return [maybeHighlight(defs.marker, ">"), maybeHighlight(defs.gutter, gutter), line.length > 0 ? ` ${line}` : "", markerLine].join("");
        } else {
          return ` ${maybeHighlight(defs.gutter, gutter)}${line.length > 0 ? ` ${line}` : ""}`;
        }
      }).join("\n");
      if (opts.message && !hasColumns) {
        frame = `${" ".repeat(numberMaxWidth + 1)}${opts.message}
${frame}`;
      }
      if (highlighted) {
        return colors2.reset(frame);
      } else {
        return frame;
      }
    }
    function _default(rawLines, lineNumber, colNumber, opts = {}) {
      if (!deprecationWarningShown) {
        deprecationWarningShown = true;
        const message = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        if (process.emitWarning) {
          process.emitWarning(message, "DeprecationWarning");
        } else {
          const deprecationError = new Error(message);
          deprecationError.name = "DeprecationWarning";
          console.warn(new Error(message));
        }
      }
      colNumber = Math.max(colNumber, 0);
      const location = {
        start: {
          column: colNumber,
          line: lineNumber
        }
      };
      return codeFrameColumns2(rawLines, location, opts);
    }
  }
});

// ../../node_modules/.pnpm/ansi-colors@4.1.3/node_modules/ansi-colors/symbols.js
var require_symbols = __commonJS({
  "../../node_modules/.pnpm/ansi-colors@4.1.3/node_modules/ansi-colors/symbols.js"(exports2, module2) {
    "use strict";
    var isHyper = typeof process !== "undefined" && process.env.TERM_PROGRAM === "Hyper";
    var isWindows = typeof process !== "undefined" && process.platform === "win32";
    var isLinux = typeof process !== "undefined" && process.platform === "linux";
    var common = {
      ballotDisabled: "\u2612",
      ballotOff: "\u2610",
      ballotOn: "\u2611",
      bullet: "\u2022",
      bulletWhite: "\u25E6",
      fullBlock: "\u2588",
      heart: "\u2764",
      identicalTo: "\u2261",
      line: "\u2500",
      mark: "\u203B",
      middot: "\xB7",
      minus: "\uFF0D",
      multiplication: "\xD7",
      obelus: "\xF7",
      pencilDownRight: "\u270E",
      pencilRight: "\u270F",
      pencilUpRight: "\u2710",
      percent: "%",
      pilcrow2: "\u2761",
      pilcrow: "\xB6",
      plusMinus: "\xB1",
      question: "?",
      section: "\xA7",
      starsOff: "\u2606",
      starsOn: "\u2605",
      upDownArrow: "\u2195"
    };
    var windows = Object.assign({}, common, {
      check: "\u221A",
      cross: "\xD7",
      ellipsisLarge: "...",
      ellipsis: "...",
      info: "i",
      questionSmall: "?",
      pointer: ">",
      pointerSmall: "\xBB",
      radioOff: "( )",
      radioOn: "(*)",
      warning: "\u203C"
    });
    var other = Object.assign({}, common, {
      ballotCross: "\u2718",
      check: "\u2714",
      cross: "\u2716",
      ellipsisLarge: "\u22EF",
      ellipsis: "\u2026",
      info: "\u2139",
      questionFull: "\uFF1F",
      questionSmall: "\uFE56",
      pointer: isLinux ? "\u25B8" : "\u276F",
      pointerSmall: isLinux ? "\u2023" : "\u203A",
      radioOff: "\u25EF",
      radioOn: "\u25C9",
      warning: "\u26A0"
    });
    module2.exports = isWindows && !isHyper ? windows : other;
    Reflect.defineProperty(module2.exports, "common", { enumerable: false, value: common });
    Reflect.defineProperty(module2.exports, "windows", { enumerable: false, value: windows });
    Reflect.defineProperty(module2.exports, "other", { enumerable: false, value: other });
  }
});

// ../../node_modules/.pnpm/ansi-colors@4.1.3/node_modules/ansi-colors/index.js
var require_ansi_colors = __commonJS({
  "../../node_modules/.pnpm/ansi-colors@4.1.3/node_modules/ansi-colors/index.js"(exports2, module2) {
    "use strict";
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var ANSI_REGEX = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;
    var hasColor = () => {
      if (typeof process !== "undefined") {
        return process.env.FORCE_COLOR !== "0";
      }
      return false;
    };
    var create = () => {
      const colors = {
        enabled: hasColor(),
        visible: true,
        styles: {},
        keys: {}
      };
      const ansi = (style2) => {
        let open = style2.open = `\x1B[${style2.codes[0]}m`;
        let close = style2.close = `\x1B[${style2.codes[1]}m`;
        let regex = style2.regex = new RegExp(`\\u001b\\[${style2.codes[1]}m`, "g");
        style2.wrap = (input, newline) => {
          if (input.includes(close))
            input = input.replace(regex, close + open);
          let output = open + input + close;
          return newline ? output.replace(/\r*\n/g, `${close}$&${open}`) : output;
        };
        return style2;
      };
      const wrap = (style2, input, newline) => {
        return typeof style2 === "function" ? style2(input) : style2.wrap(input, newline);
      };
      const style = (input, stack) => {
        if (input === "" || input == null)
          return "";
        if (colors.enabled === false)
          return input;
        if (colors.visible === false)
          return "";
        let str = "" + input;
        let nl = str.includes("\n");
        let n = stack.length;
        if (n > 0 && stack.includes("unstyle")) {
          stack = [.../* @__PURE__ */ new Set(["unstyle", ...stack])].reverse();
        }
        while (n-- > 0)
          str = wrap(colors.styles[stack[n]], str, nl);
        return str;
      };
      const define = (name, codes, type) => {
        colors.styles[name] = ansi({ name, codes });
        let keys = colors.keys[type] || (colors.keys[type] = []);
        keys.push(name);
        Reflect.defineProperty(colors, name, {
          configurable: true,
          enumerable: true,
          set(value) {
            colors.alias(name, value);
          },
          get() {
            let color = (input) => style(input, color.stack);
            Reflect.setPrototypeOf(color, colors);
            color.stack = this.stack ? this.stack.concat(name) : [name];
            return color;
          }
        });
      };
      define("reset", [0, 0], "modifier");
      define("bold", [1, 22], "modifier");
      define("dim", [2, 22], "modifier");
      define("italic", [3, 23], "modifier");
      define("underline", [4, 24], "modifier");
      define("inverse", [7, 27], "modifier");
      define("hidden", [8, 28], "modifier");
      define("strikethrough", [9, 29], "modifier");
      define("black", [30, 39], "color");
      define("red", [31, 39], "color");
      define("green", [32, 39], "color");
      define("yellow", [33, 39], "color");
      define("blue", [34, 39], "color");
      define("magenta", [35, 39], "color");
      define("cyan", [36, 39], "color");
      define("white", [37, 39], "color");
      define("gray", [90, 39], "color");
      define("grey", [90, 39], "color");
      define("bgBlack", [40, 49], "bg");
      define("bgRed", [41, 49], "bg");
      define("bgGreen", [42, 49], "bg");
      define("bgYellow", [43, 49], "bg");
      define("bgBlue", [44, 49], "bg");
      define("bgMagenta", [45, 49], "bg");
      define("bgCyan", [46, 49], "bg");
      define("bgWhite", [47, 49], "bg");
      define("blackBright", [90, 39], "bright");
      define("redBright", [91, 39], "bright");
      define("greenBright", [92, 39], "bright");
      define("yellowBright", [93, 39], "bright");
      define("blueBright", [94, 39], "bright");
      define("magentaBright", [95, 39], "bright");
      define("cyanBright", [96, 39], "bright");
      define("whiteBright", [97, 39], "bright");
      define("bgBlackBright", [100, 49], "bgBright");
      define("bgRedBright", [101, 49], "bgBright");
      define("bgGreenBright", [102, 49], "bgBright");
      define("bgYellowBright", [103, 49], "bgBright");
      define("bgBlueBright", [104, 49], "bgBright");
      define("bgMagentaBright", [105, 49], "bgBright");
      define("bgCyanBright", [106, 49], "bgBright");
      define("bgWhiteBright", [107, 49], "bgBright");
      colors.ansiRegex = ANSI_REGEX;
      colors.hasColor = colors.hasAnsi = (str) => {
        colors.ansiRegex.lastIndex = 0;
        return typeof str === "string" && str !== "" && colors.ansiRegex.test(str);
      };
      colors.alias = (name, color) => {
        let fn = typeof color === "string" ? colors[color] : color;
        if (typeof fn !== "function") {
          throw new TypeError("Expected alias to be the name of an existing color (string) or a function");
        }
        if (!fn.stack) {
          Reflect.defineProperty(fn, "name", { value: name });
          colors.styles[name] = fn;
          fn.stack = [name];
        }
        Reflect.defineProperty(colors, name, {
          configurable: true,
          enumerable: true,
          set(value) {
            colors.alias(name, value);
          },
          get() {
            let color2 = (input) => style(input, color2.stack);
            Reflect.setPrototypeOf(color2, colors);
            color2.stack = this.stack ? this.stack.concat(fn.stack) : fn.stack;
            return color2;
          }
        });
      };
      colors.theme = (custom) => {
        if (!isObject(custom))
          throw new TypeError("Expected theme to be an object");
        for (let name of Object.keys(custom)) {
          colors.alias(name, custom[name]);
        }
        return colors;
      };
      colors.alias("unstyle", (str) => {
        if (typeof str === "string" && str !== "") {
          colors.ansiRegex.lastIndex = 0;
          return str.replace(colors.ansiRegex, "");
        }
        return "";
      });
      colors.alias("noop", (str) => str);
      colors.none = colors.clear = colors.noop;
      colors.stripColor = colors.unstyle;
      colors.symbols = require_symbols();
      colors.define = define;
      return colors;
    };
    module2.exports = create();
    module2.exports.create = create;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BOOLEAN: () => BOOLEAN,
  COMMENT_HEADER: () => COMMENT_HEADER,
  FALSE: () => FALSE,
  JS_ENUM_INVALID_CHARS_RE: () => JS_ENUM_INVALID_CHARS_RE,
  JS_PROPERTY_INDEX_INVALID_CHARS_RE: () => JS_PROPERTY_INDEX_INVALID_CHARS_RE,
  JS_PROPERTY_INDEX_RE: () => JS_PROPERTY_INDEX_RE,
  NEVER: () => NEVER,
  NULL: () => NULL,
  NUMBER: () => NUMBER,
  QUESTION_TOKEN: () => QUESTION_TOKEN,
  STRING: () => STRING,
  TRUE: () => TRUE,
  UNDEFINED: () => UNDEFINED,
  UNKNOWN: () => UNKNOWN,
  addJSDocComment: () => addJSDocComment,
  astToString: () => astToString,
  c: () => import_ansi_colors.default,
  createDiscriminatorProperty: () => createDiscriminatorProperty,
  createRef: () => createRef,
  debug: () => debug,
  default: () => openapiTS,
  enumCache: () => enumCache,
  error: () => error,
  formatTime: () => formatTime,
  getEntries: () => getEntries,
  injectOperationObject: () => injectOperationObject,
  oapiRef: () => oapiRef,
  resolveRef: () => resolveRef,
  scanDiscriminators: () => scanDiscriminators,
  stringToAST: () => stringToAST,
  transformComponentsObject: () => transformComponentsObject,
  transformHeaderObject: () => transformHeaderObject,
  transformMediaTypeObject: () => transformMediaTypeObject,
  transformOperationObject: () => transformOperationObject,
  transformParameterObject: () => transformParameterObject,
  transformPathItemObject: () => transformPathItemObject,
  transformPathsObject: () => transformPathsObject,
  transformRequestBodyObject: () => transformRequestBodyObject,
  transformResponseObject: () => transformResponseObject,
  transformResponsesObject: () => transformResponsesObject,
  transformSchema: () => transformSchema,
  transformSchemaObject: () => transformSchemaObject,
  transformSchemaObjectWithComposition: () => transformSchemaObjectWithComposition,
  tsArrayLiteralExpression: () => tsArrayLiteralExpression,
  tsDedupe: () => tsDedupe,
  tsEnum: () => tsEnum,
  tsEnumMember: () => tsEnumMember,
  tsIntersection: () => tsIntersection,
  tsIsPrimitive: () => tsIsPrimitive,
  tsLiteral: () => tsLiteral,
  tsModifiers: () => tsModifiers,
  tsNullable: () => tsNullable,
  tsOmit: () => tsOmit,
  tsPropertyIndex: () => tsPropertyIndex,
  tsRecord: () => tsRecord,
  tsUnion: () => tsUnion,
  tsWithRequired: () => tsWithRequired,
  walk: () => walk,
  warn: () => warn
});
module.exports = __toCommonJS(src_exports);
var import_openapi_core2 = require("@redocly/openapi-core");
var import_node_perf_hooks5 = require("perf_hooks");

// src/lib/redoc.ts
var import_openapi_core = require("@redocly/openapi-core");
var import_node_perf_hooks = require("perf_hooks");
var import_node_stream = require("stream");
var import_node_url = require("url");

// ../../node_modules/.pnpm/parse-json@8.1.0/node_modules/parse-json/index.js
var import_code_frame = __toESM(require_lib3(), 1);

// ../../node_modules/.pnpm/index-to-position@0.1.2/node_modules/index-to-position/index.js
var safeLastIndexOf = (string, searchString, index) => index < 0 ? -1 : string.lastIndexOf(searchString, index);
function getPosition(text, textIndex) {
  const lineBreakBefore = safeLastIndexOf(text, "\n", textIndex - 1);
  const column = textIndex - lineBreakBefore - 1;
  let line = 0;
  for (let index = lineBreakBefore; index >= 0; index = safeLastIndexOf(text, "\n", index - 1)) {
    line++;
  }
  return { line, column };
}
function indexToLineColumn(text, textIndex, { oneBased = false } = {}) {
  if (textIndex < 0 || textIndex >= text.length && text.length > 0) {
    throw new RangeError("Index out of bounds");
  }
  const position = getPosition(text, textIndex);
  return oneBased ? { line: position.line + 1, column: position.column + 1 } : position;
}

// ../../node_modules/.pnpm/parse-json@8.1.0/node_modules/parse-json/index.js
var getCodePoint = (character) => `\\u{${character.codePointAt(0).toString(16)}}`;
var _message;
var _JSONError = class _JSONError extends Error {
  constructor(message) {
    var _a;
    super();
    __publicField(this, "name", "JSONError");
    __publicField(this, "fileName");
    __publicField(this, "codeFrame");
    __publicField(this, "rawCodeFrame");
    __privateAdd(this, _message, void 0);
    __privateSet(this, _message, message);
    (_a = Error.captureStackTrace) == null ? void 0 : _a.call(Error, this, _JSONError);
  }
  get message() {
    const { fileName, codeFrame } = this;
    return `${__privateGet(this, _message)}${fileName ? ` in ${fileName}` : ""}${codeFrame ? `

${codeFrame}
` : ""}`;
  }
  set message(message) {
    __privateSet(this, _message, message);
  }
};
_message = new WeakMap();
var JSONError = _JSONError;
var generateCodeFrame = (string, location, highlightCode = true) => (0, import_code_frame.codeFrameColumns)(string, { start: location }, { highlightCode });
var getErrorLocation = (string, message) => {
  const match = message.match(/in JSON at position (?<index>\d+)(?: \(line (?<line>\d+) column (?<column>\d+)\))?$/);
  if (!match) {
    return;
  }
  let { index, line, column } = match.groups;
  if (line && column) {
    return { line: Number(line), column: Number(column) };
  }
  index = Number(index);
  if (index === string.length) {
    const { line: line2, column: column2 } = indexToLineColumn(string, string.length - 1, { oneBased: true });
    return { line: line2, column: column2 + 1 };
  }
  return indexToLineColumn(string, index, { oneBased: true });
};
var addCodePointToUnexpectedToken = (message) => message.replace(
  // TODO[engine:node@>=20]: The token always quoted after Node.js 20
  /(?<=^Unexpected token )(?<quote>')?(.)\k<quote>/,
  (_, _quote, token) => `"${token}"(${getCodePoint(token)})`
);
function parseJson(string, reviver, fileName) {
  if (typeof reviver === "string") {
    fileName = reviver;
    reviver = void 0;
  }
  let message;
  try {
    return JSON.parse(string, reviver);
  } catch (error2) {
    message = error2.message;
  }
  let location;
  if (string) {
    location = getErrorLocation(string, message);
    message = addCodePointToUnexpectedToken(message);
  } else {
    message += " while parsing empty string";
  }
  const jsonError = new JSONError(message);
  jsonError.fileName = fileName;
  if (location) {
    jsonError.codeFrame = generateCodeFrame(string, location);
    jsonError.rawCodeFrame = generateCodeFrame(
      string,
      location,
      /* highlightCode */
      false
    );
  }
  throw jsonError;
}

// src/lib/utils.ts
var import_ref_utils2 = require("@redocly/openapi-core/lib/ref-utils.js");
var import_ansi_colors = __toESM(require_ansi_colors(), 1);

// ../../node_modules/.pnpm/supports-color@9.4.0/node_modules/supports-color/index.js
var import_node_process = __toESM(require("process"), 1);
var import_node_os = __toESM(require("os"), 1);
var import_node_tty = __toESM(require("tty"), 1);
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : import_node_process.default.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = import_node_process.default;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min = forceColor || 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (import_node_process.default.platform === "win32") {
    const osRelease = import_node_os.default.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if ("GITHUB_ACTIONS" in env || "GITEA_ACTIONS" in env) {
      return 3;
    }
    if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: import_node_tty.default.isatty(1) }),
  stderr: createSupportsColor({ isTTY: import_node_tty.default.isatty(2) })
};
var supports_color_default = supportsColor;

// src/lib/utils.ts
var import_typescript2 = __toESM(require("typescript"), 1);

// src/lib/ts.ts
var import_ref_utils = require("@redocly/openapi-core/lib/ref-utils.js");
var import_typescript = __toESM(require("typescript"), 1);
var JS_PROPERTY_INDEX_RE = /^[A-Za-z_$][A-Za-z_$0-9]*$/;
var JS_ENUM_INVALID_CHARS_RE = /[^A-Za-z_$0-9]+(.)?/g;
var JS_PROPERTY_INDEX_INVALID_CHARS_RE = /[^A-Za-z_$0-9]+/g;
var BOOLEAN = import_typescript.default.factory.createKeywordTypeNode(import_typescript.default.SyntaxKind.BooleanKeyword);
var FALSE = import_typescript.default.factory.createLiteralTypeNode(import_typescript.default.factory.createFalse());
var NEVER = import_typescript.default.factory.createKeywordTypeNode(import_typescript.default.SyntaxKind.NeverKeyword);
var NULL = import_typescript.default.factory.createLiteralTypeNode(import_typescript.default.factory.createNull());
var NUMBER = import_typescript.default.factory.createKeywordTypeNode(import_typescript.default.SyntaxKind.NumberKeyword);
var QUESTION_TOKEN = import_typescript.default.factory.createToken(import_typescript.default.SyntaxKind.QuestionToken);
var STRING = import_typescript.default.factory.createKeywordTypeNode(import_typescript.default.SyntaxKind.StringKeyword);
var TRUE = import_typescript.default.factory.createLiteralTypeNode(import_typescript.default.factory.createTrue());
var UNDEFINED = import_typescript.default.factory.createKeywordTypeNode(import_typescript.default.SyntaxKind.UndefinedKeyword);
var UNKNOWN = import_typescript.default.factory.createKeywordTypeNode(import_typescript.default.SyntaxKind.UnknownKeyword);
var LB_RE = /\r?\n/g;
var COMMENT_RE = /\*\//g;
function addJSDocComment(schemaObject, node) {
  if (!schemaObject || typeof schemaObject !== "object" || Array.isArray(schemaObject)) {
    return;
  }
  const output = [];
  if (schemaObject.title) {
    output.push(schemaObject.title.replace(LB_RE, "\n *     "));
  }
  if (schemaObject.summary) {
    output.push(schemaObject.summary.replace(LB_RE, "\n *     "));
  }
  if (schemaObject.format) {
    output.push(`Format: ${schemaObject.format}`);
  }
  if (schemaObject.deprecated) {
    output.push("@deprecated");
  }
  const supportedJsDocTags = ["description", "default", "example"];
  for (const field of supportedJsDocTags) {
    const allowEmptyString = field === "default" || field === "example";
    if (schemaObject[field] === void 0) {
      continue;
    }
    if (schemaObject[field] === "" && !allowEmptyString) {
      continue;
    }
    const serialized = typeof schemaObject[field] === "object" ? JSON.stringify(schemaObject[field], null, 2) : schemaObject[field];
    output.push(`@${field} ${String(serialized).replace(LB_RE, "\n *     ")}`);
  }
  if ("const" in schemaObject) {
    output.push("@constant");
  }
  if (schemaObject.enum) {
    let type = "unknown";
    if (Array.isArray(schemaObject.type)) {
      type = schemaObject.type.join("|");
    } else if (typeof schemaObject.type === "string") {
      type = schemaObject.type;
    }
    output.push(`@enum {${type}${schemaObject.nullable ? "|null" : ""}}`);
  }
  if (output.length) {
    let text = output.length === 1 ? `* ${output.join("\n")} ` : `*
 * ${output.join("\n * ")}
 `;
    text = text.replace(COMMENT_RE, "*\\/");
    import_typescript.default.addSyntheticLeadingComment(
      /* node               */
      node,
      /* kind               */
      import_typescript.default.SyntaxKind.MultiLineCommentTrivia,
      // note: MultiLine just refers to a "/* */" comment
      /* text               */
      text,
      /* hasTrailingNewLine */
      true
    );
  }
}
function oapiRef(path) {
  const { pointer } = (0, import_ref_utils.parseRef)(path);
  if (pointer.length === 0) {
    throw new Error(`Error parsing $ref: ${path}. Is this a valid $ref?`);
  }
  let t = import_typescript.default.factory.createTypeReferenceNode(
    import_typescript.default.factory.createIdentifier(String(pointer[0]))
  );
  if (pointer.length > 1) {
    for (let i = 1; i < pointer.length; i++) {
      if (i > 2 && i < pointer.length - 1 && pointer[i] === "properties") {
        continue;
      }
      t = import_typescript.default.factory.createIndexedAccessTypeNode(
        t,
        import_typescript.default.factory.createLiteralTypeNode(
          typeof pointer[i] === "number" ? import_typescript.default.factory.createNumericLiteral(pointer[i]) : import_typescript.default.factory.createStringLiteral(pointer[i])
        )
      );
    }
  }
  return t;
}
function astToString(ast, options) {
  var _a, _b;
  const sourceFile = import_typescript.default.createSourceFile(
    (_a = options == null ? void 0 : options.fileName) != null ? _a : "openapi-ts.ts",
    (_b = options == null ? void 0 : options.sourceText) != null ? _b : "",
    import_typescript.default.ScriptTarget.ESNext,
    false,
    import_typescript.default.ScriptKind.TS
  );
  sourceFile.statements = import_typescript.default.factory.createNodeArray(Array.isArray(ast) ? ast : [ast]);
  const printer = import_typescript.default.createPrinter({
    newLine: import_typescript.default.NewLineKind.LineFeed,
    removeComments: false,
    ...options == null ? void 0 : options.formatOptions
  });
  return printer.printFile(sourceFile);
}
function stringToAST(source) {
  return import_typescript.default.createSourceFile(
    /* fileName        */
    "stringInput",
    /* sourceText      */
    source,
    /* languageVersion */
    import_typescript.default.ScriptTarget.ESNext,
    /* setParentNodes  */
    void 0,
    /* scriptKind      */
    void 0
  ).statements;
}
function tsDedupe(types) {
  var _a, _b;
  const encounteredTypes = /* @__PURE__ */ new Set();
  const filteredTypes = [];
  for (const t of types) {
    if (!("text" in ((_a = t.literal) != null ? _a : t))) {
      const { kind } = (_b = t.literal) != null ? _b : t;
      if (encounteredTypes.has(kind)) {
        continue;
      }
      if (tsIsPrimitive(t)) {
        encounteredTypes.add(kind);
      }
    }
    filteredTypes.push(t);
  }
  return filteredTypes;
}
var enumCache = /* @__PURE__ */ new Map();
function tsEnum(name, members, metadata, options) {
  var _a;
  let enumName = sanitizeMemberName(name);
  enumName = `${enumName[0].toUpperCase()}${enumName.substring(1)}`;
  let key = "";
  if (options == null ? void 0 : options.shouldCache) {
    key = `${members.slice(0).sort().map((v, i) => {
      var _a2, _b, _c;
      return `${(_b = (_a2 = metadata == null ? void 0 : metadata[i]) == null ? void 0 : _a2.name) != null ? _b : String(v)}:${((_c = metadata == null ? void 0 : metadata[i]) == null ? void 0 : _c.description) || ""}`;
    }).join(",")}`;
    if (enumCache.has(key)) {
      return enumCache.get(key);
    }
  }
  const enumDeclaration = import_typescript.default.factory.createEnumDeclaration(
    /* modifiers */
    options ? tsModifiers({ export: (_a = options.export) != null ? _a : false }) : void 0,
    /* name      */
    enumName,
    /* members   */
    members.map((value, i) => tsEnumMember(value, metadata == null ? void 0 : metadata[i]))
  );
  (options == null ? void 0 : options.shouldCache) && enumCache.set(key, enumDeclaration);
  return enumDeclaration;
}
function tsArrayLiteralExpression(name, elementType, values, options) {
  var _a;
  let variableName = sanitizeMemberName(name);
  variableName = `${variableName[0].toLowerCase()}${variableName.substring(1)}`;
  const arrayType = (options == null ? void 0 : options.readonly) ? import_typescript.default.factory.createTypeReferenceNode("ReadonlyArray", [elementType]) : import_typescript.default.factory.createArrayTypeNode(elementType);
  return import_typescript.default.factory.createVariableStatement(
    options ? tsModifiers({ export: (_a = options.export) != null ? _a : false }) : void 0,
    import_typescript.default.factory.createVariableDeclarationList(
      [
        import_typescript.default.factory.createVariableDeclaration(
          variableName,
          void 0,
          arrayType,
          import_typescript.default.factory.createArrayLiteralExpression(
            values.map((value) => {
              if (typeof value === "number") {
                if (value < 0) {
                  return import_typescript.default.factory.createPrefixUnaryExpression(
                    import_typescript.default.SyntaxKind.MinusToken,
                    import_typescript.default.factory.createNumericLiteral(Math.abs(value))
                  );
                } else {
                  return import_typescript.default.factory.createNumericLiteral(value);
                }
              } else {
                return import_typescript.default.factory.createStringLiteral(value);
              }
            })
          )
        )
      ],
      import_typescript.default.NodeFlags.Const
    )
  );
}
function sanitizeMemberName(name) {
  let sanitizedName = name.replace(JS_ENUM_INVALID_CHARS_RE, (c2) => {
    const last = c2[c2.length - 1];
    return JS_PROPERTY_INDEX_INVALID_CHARS_RE.test(last) ? "" : last.toUpperCase();
  });
  if (Number(name[0]) >= 0) {
    sanitizedName = `Value${name}`;
  }
  return sanitizedName;
}
function tsEnumMember(value, metadata = {}) {
  var _a;
  let name = (_a = metadata.name) != null ? _a : String(value);
  if (!JS_PROPERTY_INDEX_RE.test(name)) {
    if (Number(name[0]) >= 0) {
      name = `Value${name}`.replace(".", "_");
    } else if (name[0] === "-") {
      name = `ValueMinus${name.slice(1)}`;
    }
    const invalidCharMatch = name.match(JS_PROPERTY_INDEX_INVALID_CHARS_RE);
    if (invalidCharMatch) {
      if (invalidCharMatch[0] === name) {
        name = `"${name}"`;
      } else {
        name = name.replace(JS_PROPERTY_INDEX_INVALID_CHARS_RE, "_");
      }
    }
  }
  let member;
  if (typeof value === "number") {
    const literal = value < 0 ? import_typescript.default.factory.createPrefixUnaryExpression(
      import_typescript.default.SyntaxKind.MinusToken,
      import_typescript.default.factory.createNumericLiteral(Math.abs(value))
    ) : import_typescript.default.factory.createNumericLiteral(value);
    member = import_typescript.default.factory.createEnumMember(name, literal);
  } else {
    member = import_typescript.default.factory.createEnumMember(name, import_typescript.default.factory.createStringLiteral(value));
  }
  if (metadata.description === void 0) {
    return member;
  }
  return import_typescript.default.addSyntheticLeadingComment(
    member,
    import_typescript.default.SyntaxKind.SingleLineCommentTrivia,
    " ".concat(metadata.description.trim()),
    true
  );
}
function tsIntersection(types) {
  if (types.length === 0) {
    return NEVER;
  }
  if (types.length === 1) {
    return types[0];
  }
  return import_typescript.default.factory.createIntersectionTypeNode(tsDedupe(types));
}
function tsIsPrimitive(type) {
  if (!type) {
    return true;
  }
  return import_typescript.default.SyntaxKind[type.kind] === "BooleanKeyword" || import_typescript.default.SyntaxKind[type.kind] === "NeverKeyword" || import_typescript.default.SyntaxKind[type.kind] === "NullKeyword" || import_typescript.default.SyntaxKind[type.kind] === "NumberKeyword" || import_typescript.default.SyntaxKind[type.kind] === "StringKeyword" || import_typescript.default.SyntaxKind[type.kind] === "UndefinedKeyword" || "literal" in type && tsIsPrimitive(type.literal);
}
function tsLiteral(value) {
  if (typeof value === "string") {
    return import_typescript.default.factory.createIdentifier(JSON.stringify(value));
  }
  if (typeof value === "number") {
    const literal = value < 0 ? import_typescript.default.factory.createPrefixUnaryExpression(
      import_typescript.default.SyntaxKind.MinusToken,
      import_typescript.default.factory.createNumericLiteral(Math.abs(value))
    ) : import_typescript.default.factory.createNumericLiteral(value);
    return import_typescript.default.factory.createLiteralTypeNode(literal);
  }
  if (typeof value === "boolean") {
    return value === true ? TRUE : FALSE;
  }
  if (value === null) {
    return NULL;
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return import_typescript.default.factory.createArrayTypeNode(NEVER);
    }
    return import_typescript.default.factory.createTupleTypeNode(value.map((v) => tsLiteral(v)));
  }
  if (typeof value === "object") {
    const keys = [];
    for (const [k, v] of Object.entries(value)) {
      keys.push(
        import_typescript.default.factory.createPropertySignature(
          /* modifiers     */
          void 0,
          /* name          */
          tsPropertyIndex(k),
          /* questionToken */
          void 0,
          /* type          */
          tsLiteral(v)
        )
      );
    }
    return keys.length ? import_typescript.default.factory.createTypeLiteralNode(keys) : tsRecord(STRING, NEVER);
  }
  return UNKNOWN;
}
function tsModifiers(modifiers) {
  const typeMods = [];
  if (modifiers.export) {
    typeMods.push(import_typescript.default.factory.createModifier(import_typescript.default.SyntaxKind.ExportKeyword));
  }
  if (modifiers.readonly) {
    typeMods.push(import_typescript.default.factory.createModifier(import_typescript.default.SyntaxKind.ReadonlyKeyword));
  }
  return typeMods;
}
function tsNullable(types) {
  return import_typescript.default.factory.createUnionTypeNode([...types, NULL]);
}
function tsOmit(type, keys) {
  return import_typescript.default.factory.createTypeReferenceNode(import_typescript.default.factory.createIdentifier("Omit"), [
    type,
    import_typescript.default.factory.createUnionTypeNode(keys.map((k) => tsLiteral(k)))
  ]);
}
function tsRecord(key, value) {
  return import_typescript.default.factory.createTypeReferenceNode(import_typescript.default.factory.createIdentifier("Record"), [key, value]);
}
function tsPropertyIndex(index) {
  if (typeof index === "number" && !(index < 0) || typeof index === "string" && String(Number(index)) === index && index[0] !== "-") {
    return import_typescript.default.factory.createNumericLiteral(index);
  }
  return typeof index === "string" && JS_PROPERTY_INDEX_RE.test(index) ? import_typescript.default.factory.createIdentifier(index) : import_typescript.default.factory.createStringLiteral(String(index));
}
function tsUnion(types) {
  if (types.length === 0) {
    return NEVER;
  }
  if (types.length === 1) {
    return types[0];
  }
  return import_typescript.default.factory.createUnionTypeNode(tsDedupe(types));
}
function tsWithRequired(type, keys, injectFooter) {
  if (keys.length === 0) {
    return type;
  }
  if (!injectFooter.some((node) => {
    var _a;
    return import_typescript.default.isTypeAliasDeclaration(node) && ((_a = node == null ? void 0 : node.name) == null ? void 0 : _a.escapedText) === "WithRequired";
  })) {
    const helper = stringToAST("type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };")[0];
    injectFooter.push(helper);
  }
  return import_typescript.default.factory.createTypeReferenceNode(import_typescript.default.factory.createIdentifier("WithRequired"), [
    type,
    tsUnion(keys.map((k) => tsLiteral(k)))
  ]);
}

// src/lib/utils.ts
if (!supports_color_default.stdout || supports_color_default.stdout.hasBasic === false) {
  import_ansi_colors.default.enabled = false;
}
var DEBUG_GROUPS = {
  redoc: import_ansi_colors.default.cyanBright,
  lint: import_ansi_colors.default.yellowBright,
  bundle: import_ansi_colors.default.magentaBright,
  ts: import_ansi_colors.default.blueBright
};
function createDiscriminatorProperty(discriminator, { path, readonly = false }) {
  let value = (0, import_ref_utils2.parseRef)(path).pointer.pop();
  if (discriminator.mapping) {
    const matchedValue = Object.entries(discriminator.mapping).find(
      ([, v]) => !v.startsWith("#") && v === value || v.startsWith("#") && (0, import_ref_utils2.parseRef)(v).pointer.pop() === value
    );
    if (matchedValue) {
      value = matchedValue[0];
    }
  }
  return import_typescript2.default.factory.createPropertySignature(
    /* modifiers     */
    tsModifiers({
      readonly
    }),
    /* name          */
    tsPropertyIndex(discriminator.propertyName),
    /* questionToken */
    void 0,
    /* type          */
    tsLiteral(value)
  );
}
function createRef(parts) {
  let pointer = "#";
  for (const part of parts) {
    if (part === void 0 || part === null || part === "") {
      continue;
    }
    const maybeRef = (0, import_ref_utils2.parseRef)(String(part)).pointer;
    if (maybeRef.length) {
      for (const refPart of maybeRef) {
        pointer += `/${(0, import_ref_utils2.escapePointer)(refPart)}`;
      }
    } else {
      pointer += `/${(0, import_ref_utils2.escapePointer)(part)}`;
    }
  }
  return pointer;
}
function debug(msg, group, time) {
  if (process.env.DEBUG && (!group || process.env.DEBUG === "*" || process.env.DEBUG === "openapi-ts:*" || process.env.DEBUG.toLocaleLowerCase() === `openapi-ts:${group.toLocaleLowerCase()}`)) {
    const groupColor = group && DEBUG_GROUPS[group] || import_ansi_colors.default.whiteBright;
    const groupName = groupColor(`openapi-ts:${group != null ? group : "info"}`);
    let timeFormatted = "";
    if (typeof time === "number") {
      timeFormatted = import_ansi_colors.default.green(` ${formatTime(time)} `);
    }
    console.debug(`  ${import_ansi_colors.default.bold(groupName)}${timeFormatted}${msg}`);
  }
}
function error(msg) {
  console.error(import_ansi_colors.default.red(` \u2718  ${msg}`));
}
function formatTime(t) {
  if (typeof t === "number") {
    if (t < 1e3) {
      return `${Math.round(10 * t) / 10}ms`;
    }
    if (t < 6e4) {
      return `${Math.round(t / 100) / 10}s`;
    }
    return `${Math.round(t / 6e3) / 10}m`;
  }
  return t;
}
function getEntries(obj, options) {
  let entries = Object.entries(obj);
  if (options == null ? void 0 : options.alphabetize) {
    entries.sort(([a], [b]) => a.localeCompare(b, "en-us", { numeric: true }));
  }
  if (options == null ? void 0 : options.excludeDeprecated) {
    entries = entries.filter(([, v]) => !(v && typeof v === "object" && "deprecated" in v && v.deprecated));
  }
  return entries;
}
function resolveRef(schema, $ref, { silent = false, visited = [] }) {
  const { pointer } = (0, import_ref_utils2.parseRef)($ref);
  if (!pointer.length) {
    return void 0;
  }
  let node = schema;
  for (const key of pointer) {
    if (node && typeof node === "object" && node[key]) {
      node = node[key];
    } else {
      warn(`Could not resolve $ref "${$ref}"`, silent);
      return void 0;
    }
  }
  if (node && typeof node === "object" && node.$ref) {
    if (visited.includes(node.$ref)) {
      warn(`Could not resolve circular $ref "${$ref}"`, silent);
      return void 0;
    }
    return resolveRef(schema, node.$ref, {
      silent,
      visited: [...visited, node.$ref]
    });
  }
  return node;
}
function createDiscriminatorEnum(values, prevSchema) {
  return {
    type: "string",
    enum: values,
    description: (prevSchema == null ? void 0 : prevSchema.description) ? `${prevSchema.description} (enum property replaced by openapi-typescript)` : "discriminator enum property added by openapi-typescript"
  };
}
function patchDiscriminatorEnum(schema, ref, values, discriminator, discriminatorRef, options) {
  var _a;
  const resolvedSchema = resolveRef(schema, ref, {
    silent: (_a = options.silent) != null ? _a : false
  });
  if (resolvedSchema == null ? void 0 : resolvedSchema.allOf) {
    resolvedSchema.allOf.push({
      type: "object",
      // discriminator enum properties always need to be required
      required: [discriminator.propertyName],
      properties: {
        [discriminator.propertyName]: createDiscriminatorEnum(values)
      }
    });
    return true;
  } else if (typeof resolvedSchema === "object" && "type" in resolvedSchema && resolvedSchema.type === "object") {
    if (!resolvedSchema.properties) {
      resolvedSchema.properties = {};
    }
    if (!resolvedSchema.required) {
      resolvedSchema.required = [discriminator.propertyName];
    } else if (!resolvedSchema.required.includes(discriminator.propertyName)) {
      resolvedSchema.required.push(discriminator.propertyName);
    }
    resolvedSchema.properties[discriminator.propertyName] = createDiscriminatorEnum(
      values,
      resolvedSchema.properties[discriminator.propertyName]
    );
    return true;
  }
  warn(
    `Discriminator mapping has an invalid schema (neither an object schema nor an allOf array): ${ref} => ${values.join(
      ", "
    )} (Discriminator: ${discriminatorRef})`,
    options.silent
  );
  return false;
}
function scanDiscriminators(schema, options) {
  const objects = {};
  const refsHandled = [];
  walk(schema, (obj, path) => {
    var _a, _b;
    const discriminator = obj == null ? void 0 : obj.discriminator;
    if (!(discriminator == null ? void 0 : discriminator.propertyName)) {
      return;
    }
    const ref = createRef(path);
    objects[ref] = discriminator;
    if (!(obj == null ? void 0 : obj.oneOf) || !Array.isArray(obj.oneOf)) {
      return;
    }
    const oneOf = obj.oneOf;
    const mapping = {};
    for (const item of oneOf) {
      if ("$ref" in item) {
        const value = item.$ref.split("/").pop();
        if (value) {
          if (!mapping[item.$ref]) {
            mapping[item.$ref] = { inferred: value };
          } else {
            mapping[item.$ref].inferred = value;
          }
        }
      }
    }
    if (discriminator.mapping) {
      for (const mappedValue in discriminator.mapping) {
        const mappedRef = discriminator.mapping[mappedValue];
        if (!mappedRef) {
          continue;
        }
        if (!((_a = mapping[mappedRef]) == null ? void 0 : _a.defined)) {
          mapping[mappedRef] = { defined: [] };
        }
        (_b = mapping[mappedRef].defined) == null ? void 0 : _b.push(mappedValue);
      }
    }
    for (const [mappedRef, { inferred, defined }] of Object.entries(mapping)) {
      if (refsHandled.includes(mappedRef)) {
        continue;
      }
      if (!inferred && !defined) {
        continue;
      }
      const mappedValues = defined != null ? defined : [inferred];
      if (patchDiscriminatorEnum(schema, mappedRef, mappedValues, discriminator, ref, options)) {
        refsHandled.push(mappedRef);
      }
    }
  });
  walk(schema, (obj, path) => {
    var _a;
    if (!obj || !Array.isArray(obj.allOf)) {
      return;
    }
    for (const item of obj.allOf) {
      if ("$ref" in item) {
        if (!objects[item.$ref]) {
          return;
        }
        const ref = createRef(path);
        const discriminator = objects[item.$ref];
        const mappedValues = [];
        if (discriminator.mapping) {
          for (const mappedValue in discriminator.mapping) {
            if (discriminator.mapping[mappedValue] === ref) {
              mappedValues.push(mappedValue);
            }
          }
          if (mappedValues.length > 0) {
            if (patchDiscriminatorEnum(
              schema,
              ref,
              mappedValues,
              discriminator,
              item.$ref,
              options
            )) {
              refsHandled.push(ref);
            }
          }
        }
        objects[ref] = {
          ...objects[item.$ref]
        };
      } else if ((_a = item.discriminator) == null ? void 0 : _a.propertyName) {
        objects[createRef(path)] = { ...item.discriminator };
      }
    }
  });
  return { objects, refsHandled };
}
function walk(obj, cb, path = []) {
  if (!obj || typeof obj !== "object") {
    return;
  }
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      walk(obj[i], cb, path.concat(i));
    }
    return;
  }
  cb(obj, path);
  for (const k of Object.keys(obj)) {
    walk(obj[k], cb, path.concat(k));
  }
}
function warn(msg, silent = false) {
  if (!silent) {
    console.warn(import_ansi_colors.default.yellow(` \u26A0  ${msg}`));
  }
}

// src/lib/redoc.ts
async function parseSchema(schema, { absoluteRef, resolver }) {
  if (!schema) {
    throw new Error("Can\u2019t parse empty schema");
  }
  if (schema instanceof URL) {
    const result = await resolver.resolveDocument(null, absoluteRef, true);
    if ("parsed" in result) {
      return result;
    }
    throw result.originalError;
  }
  if (schema instanceof import_node_stream.Readable) {
    const contents = await new Promise((resolve) => {
      schema.resume();
      schema.setEncoding("utf8");
      let content = "";
      schema.on("data", (chunk) => {
        content += chunk;
      });
      schema.on("end", () => {
        resolve(content.trim());
      });
    });
    return parseSchema(contents, { absoluteRef, resolver });
  }
  if (schema instanceof Buffer) {
    return parseSchema(schema.toString("utf8"), { absoluteRef, resolver });
  }
  if (typeof schema === "string") {
    if (schema.startsWith("http://") || schema.startsWith("https://") || schema.startsWith("file://")) {
      const url = new URL(schema);
      return parseSchema(url, {
        absoluteRef: url.protocol === "file:" ? (0, import_node_url.fileURLToPath)(url) : url.href,
        resolver
      });
    }
    if (schema[0] === "{") {
      return {
        source: new import_openapi_core.Source(absoluteRef, schema, "application/json"),
        parsed: parseJson(schema)
      };
    }
    return (0, import_openapi_core.makeDocumentFromString)(schema, absoluteRef);
  }
  if (typeof schema === "object" && !Array.isArray(schema)) {
    return {
      source: new import_openapi_core.Source(absoluteRef, JSON.stringify(schema), "application/json"),
      parsed: schema
    };
  }
  throw new Error(`Expected string, object, or Buffer. Got ${Array.isArray(schema) ? "Array" : typeof schema}`);
}
async function validateAndBundle(source, options) {
  var _a, _b;
  const redocConfigT = import_node_perf_hooks.performance.now();
  debug("Loaded Redoc config", "redoc", import_node_perf_hooks.performance.now() - redocConfigT);
  const redocParseT = import_node_perf_hooks.performance.now();
  let absoluteRef = (0, import_node_url.fileURLToPath)(new URL((_a = options == null ? void 0 : options.cwd) != null ? _a : `file://${process.cwd()}/`));
  if (source instanceof URL) {
    absoluteRef = source.protocol === "file:" ? (0, import_node_url.fileURLToPath)(source) : source.href;
  }
  const resolver = new import_openapi_core.BaseResolver(options.redoc.resolve);
  const document = await parseSchema(source, {
    absoluteRef,
    resolver
  });
  debug("Parsed schema", "redoc", import_node_perf_hooks.performance.now() - redocParseT);
  const openapiVersion = Number.parseFloat(document.parsed.openapi);
  if (document.parsed.swagger || !document.parsed.openapi || Number.isNaN(openapiVersion) || openapiVersion < 3 || openapiVersion >= 4) {
    if (document.parsed.swagger) {
      throw new Error("Unsupported Swagger version: 2.x. Use OpenAPI 3.x instead.");
    }
    if (document.parsed.openapi || openapiVersion < 3 || openapiVersion >= 4) {
      throw new Error(`Unsupported OpenAPI version: ${document.parsed.openapi}`);
    }
    throw new Error("Unsupported schema format, expected `openapi: 3.x`");
  }
  const redocLintT = import_node_perf_hooks.performance.now();
  const problems = await (0, import_openapi_core.lintDocument)({
    document,
    config: options.redoc.styleguide,
    externalRefResolver: resolver
  });
  if (problems.length) {
    let errorMessage = void 0;
    for (const problem of problems) {
      if (problem.severity === "error") {
        errorMessage = problem.message;
        error(problem.message);
      } else {
        warn(problem.message, options.silent);
      }
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
  }
  debug("Linted schema", "lint", import_node_perf_hooks.performance.now() - redocLintT);
  const redocBundleT = import_node_perf_hooks.performance.now();
  const bundled = await (0, import_openapi_core.bundle)({
    config: options.redoc,
    dereference: (_b = options.dereferenced) != null ? _b : false,
    doc: document
  });
  if (bundled.problems.length) {
    let errorMessage = void 0;
    for (const problem of bundled.problems) {
      if (problem.severity === "error") {
        errorMessage = problem.message;
        error(problem.message);
        throw new Error(problem.message);
      } else {
        warn(problem.message, options.silent);
      }
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
  }
  debug("Bundled schema", "bundle", import_node_perf_hooks.performance.now() - redocBundleT);
  return bundled.bundle.parsed;
}

// src/transform/index.ts
var import_typescript14 = __toESM(require("typescript"), 1);
var import_node_perf_hooks4 = require("perf_hooks");

// src/transform/components-object.ts
var import_typescript11 = __toESM(require("typescript"), 1);
var import_node_perf_hooks2 = require("perf_hooks");

// src/transform/header-object.ts
var import_ref_utils4 = require("@redocly/openapi-core/lib/ref-utils.js");
var import_typescript4 = __toESM(require("typescript"), 1);

// src/transform/schema-object.ts
var import_ref_utils3 = require("@redocly/openapi-core/lib/ref-utils.js");
var import_typescript3 = __toESM(require("typescript"), 1);
function transformSchemaObject(schemaObject, options) {
  const type = transformSchemaObjectWithComposition(schemaObject, options);
  if (typeof options.ctx.postTransform === "function") {
    const postTransformResult = options.ctx.postTransform(type, options);
    if (postTransformResult) {
      return postTransformResult;
    }
  }
  return type;
}
function transformSchemaObjectWithComposition(schemaObject, options) {
  var _a, _b, _c, _d, _e, _f;
  if (!schemaObject) {
    return NEVER;
  }
  if (schemaObject === true) {
    return UNKNOWN;
  }
  if (Array.isArray(schemaObject) || typeof schemaObject !== "object") {
    throw new Error(`Expected SchemaObject, received ${Array.isArray(schemaObject) ? "Array" : typeof schemaObject}`);
  }
  if ("$ref" in schemaObject) {
    return oapiRef(schemaObject.$ref);
  }
  if (schemaObject.const !== null && schemaObject.const !== void 0) {
    return tsLiteral(schemaObject.const);
  }
  if (Array.isArray(schemaObject.enum) && (!("type" in schemaObject) || schemaObject.type !== "object") && !("properties" in schemaObject) && !("additionalProperties" in schemaObject)) {
    if (options.ctx.enum && schemaObject.enum.every((v) => typeof v === "string" || typeof v === "number")) {
      let enumName = (0, import_ref_utils3.parseRef)((_a = options.path) != null ? _a : "").pointer.join("/");
      enumName = enumName.replace("components/schemas", "");
      enumName = (_b = schemaObject["x-enum-name"]) != null ? _b : enumName;
      const metadata = schemaObject.enum.map((_, i) => {
        var _a2, _b2, _c2, _d2, _e2, _f2;
        return {
          name: (_c2 = (_a2 = schemaObject["x-enum-varnames"]) == null ? void 0 : _a2[i]) != null ? _c2 : (_b2 = schemaObject["x-enumNames"]) == null ? void 0 : _b2[i],
          description: (_f2 = (_d2 = schemaObject["x-enum-descriptions"]) == null ? void 0 : _d2[i]) != null ? _f2 : (_e2 = schemaObject["x-enumDescriptions"]) == null ? void 0 : _e2[i]
        };
      });
      const enumType2 = tsEnum(enumName, schemaObject.enum, metadata, {
        shouldCache: options.ctx.dedupeEnums,
        export: true
        // readonly: TS enum do not support the readonly modifier
      });
      if (!options.ctx.injectFooter.includes(enumType2)) {
        options.ctx.injectFooter.push(enumType2);
      }
      return import_typescript3.default.factory.createTypeReferenceNode(enumType2.name);
    }
    const enumType = schemaObject.enum.map(tsLiteral);
    if ((Array.isArray(schemaObject.type) && schemaObject.type.includes("null") || schemaObject.nullable) && !schemaObject.default) {
      enumType.push(NULL);
    }
    const unionType = tsUnion(enumType);
    if (options.ctx.enumValues && schemaObject.enum.every((v) => typeof v === "string" || typeof v === "number")) {
      let enumValuesVariableName = (0, import_ref_utils3.parseRef)((_c = options.path) != null ? _c : "").pointer.join("/");
      enumValuesVariableName = enumValuesVariableName.replace("components/schemas", "");
      enumValuesVariableName = `${enumValuesVariableName}Values`;
      const enumValuesArray = tsArrayLiteralExpression(
        enumValuesVariableName,
        oapiRef((_d = options.path) != null ? _d : ""),
        schemaObject.enum,
        {
          export: true,
          readonly: true
        }
      );
      options.ctx.injectFooter.push(enumValuesArray);
    }
    return unionType;
  }
  function collectUnionCompositions(items) {
    const output = [];
    for (const item of items) {
      output.push(transformSchemaObject(item, options));
    }
    return output;
  }
  function collectAllOfCompositions(items, required) {
    const output = [];
    for (const item of items) {
      let itemType;
      if ("$ref" in item) {
        itemType = transformSchemaObject(item, options);
        const resolved = options.ctx.resolve(item.$ref);
        if (resolved && typeof resolved === "object" && "properties" in resolved && // we have already handled this item (discriminator property was already added as required)
        !options.ctx.discriminators.refsHandled.includes(item.$ref)) {
          const validRequired = (required != null ? required : []).filter((key) => {
            var _a2;
            return !!((_a2 = resolved.properties) == null ? void 0 : _a2[key]);
          });
          if (validRequired.length) {
            itemType = tsWithRequired(itemType, validRequired, options.ctx.injectFooter);
          }
        }
      } else {
        const itemRequired = [...required != null ? required : []];
        if (typeof item === "object" && Array.isArray(item.required)) {
          itemRequired.push(...item.required);
        }
        itemType = transformSchemaObject({ ...item, required: itemRequired }, options);
      }
      const discriminator = "$ref" in item && options.ctx.discriminators.objects[item.$ref] || item.discriminator;
      if (discriminator) {
        output.push(tsOmit(itemType, [discriminator.propertyName]));
      } else {
        output.push(itemType);
      }
    }
    return output;
  }
  let finalType = void 0;
  const coreObjectType = transformSchemaObjectCore(schemaObject, options);
  const allOfType = collectAllOfCompositions((_e = schemaObject.allOf) != null ? _e : [], schemaObject.required);
  if (coreObjectType || allOfType.length) {
    const allOf = allOfType.length ? tsIntersection(allOfType) : void 0;
    finalType = tsIntersection([...coreObjectType ? [coreObjectType] : [], ...allOf ? [allOf] : []]);
  }
  const anyOfType = collectUnionCompositions((_f = schemaObject.anyOf) != null ? _f : []);
  if (anyOfType.length) {
    finalType = tsUnion([...finalType ? [finalType] : [], ...anyOfType]);
  }
  const oneOfType = collectUnionCompositions(
    schemaObject.oneOf || "type" in schemaObject && schemaObject.type === "object" && schemaObject.enum || []
  );
  if (oneOfType.length) {
    if (oneOfType.every(tsIsPrimitive)) {
      finalType = tsUnion([...finalType ? [finalType] : [], ...oneOfType]);
    } else {
      finalType = tsIntersection([...finalType ? [finalType] : [], tsUnion(oneOfType)]);
    }
  }
  if (finalType) {
    if (schemaObject.nullable && !schemaObject.default) {
      return tsNullable([finalType]);
    }
    return finalType;
  } else {
    if (!("type" in schemaObject)) {
      return UNKNOWN;
    }
    return tsRecord(STRING, options.ctx.emptyObjectsUnknown ? UNKNOWN : NEVER);
  }
}
function transformSchemaObjectCore(schemaObject, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  if ("type" in schemaObject && schemaObject.type) {
    if (typeof options.ctx.transform === "function") {
      const result = options.ctx.transform(schemaObject, options);
      if (result && typeof result === "object") {
        if ("schema" in result) {
          if (result.questionToken) {
            return import_typescript3.default.factory.createUnionTypeNode([result.schema, UNDEFINED]);
          } else {
            return result.schema;
          }
        } else {
          return result;
        }
      }
    }
    if (schemaObject.type === "null") {
      return NULL;
    }
    if (schemaObject.type === "string") {
      return STRING;
    }
    if (schemaObject.type === "number" || schemaObject.type === "integer") {
      return NUMBER;
    }
    if (schemaObject.type === "boolean") {
      return BOOLEAN;
    }
    if (schemaObject.type === "array") {
      let itemType = UNKNOWN;
      if (schemaObject.prefixItems || Array.isArray(schemaObject.items)) {
        const prefixItems = (_a = schemaObject.prefixItems) != null ? _a : schemaObject.items;
        itemType = import_typescript3.default.factory.createTupleTypeNode(prefixItems.map((item) => transformSchemaObject(item, options)));
      } else if (schemaObject.items) {
        if ("type" in schemaObject.items && schemaObject.items.type === "array") {
          itemType = import_typescript3.default.factory.createArrayTypeNode(transformSchemaObject(schemaObject.items, options));
        } else {
          itemType = transformSchemaObject(schemaObject.items, options);
        }
      }
      const min = typeof schemaObject.minItems === "number" && schemaObject.minItems >= 0 ? schemaObject.minItems : 0;
      const max = typeof schemaObject.maxItems === "number" && schemaObject.maxItems >= 0 && min <= schemaObject.maxItems ? schemaObject.maxItems : void 0;
      const estimateCodeSize = typeof max !== "number" ? min : (max * (max + 1) - min * (min - 1)) / 2;
      if (options.ctx.arrayLength && (min !== 0 || max !== void 0) && estimateCodeSize < 30) {
        if (min === max) {
          const elements = [];
          for (let i = 0; i < min; i++) {
            elements.push(itemType);
          }
          return tsUnion([import_typescript3.default.factory.createTupleTypeNode(elements)]);
        } else if (schemaObject.maxItems > 0) {
          const members = [];
          for (let i = 0; i <= (max != null ? max : 0) - min; i++) {
            const elements = [];
            for (let j = min; j < i + min; j++) {
              elements.push(itemType);
            }
            members.push(import_typescript3.default.factory.createTupleTypeNode(elements));
          }
          return tsUnion(members);
        } else {
          const elements = [];
          for (let i = 0; i < min; i++) {
            elements.push(itemType);
          }
          elements.push(import_typescript3.default.factory.createRestTypeNode(import_typescript3.default.factory.createArrayTypeNode(itemType)));
          return import_typescript3.default.factory.createTupleTypeNode(elements);
        }
      }
      const finalType = import_typescript3.default.isTupleTypeNode(itemType) || import_typescript3.default.isArrayTypeNode(itemType) ? itemType : import_typescript3.default.factory.createArrayTypeNode(itemType);
      return options.ctx.immutable ? import_typescript3.default.factory.createTypeOperatorNode(import_typescript3.default.SyntaxKind.ReadonlyKeyword, finalType) : finalType;
    }
    if (Array.isArray(schemaObject.type) && !Array.isArray(schemaObject)) {
      const uniqueTypes = [];
      if (Array.isArray(schemaObject.oneOf)) {
        for (const t of schemaObject.type) {
          if ((t === "boolean" || t === "string" || t === "number" || t === "integer" || t === "null") && schemaObject.oneOf.find((o) => typeof o === "object" && "type" in o && o.type === t)) {
            continue;
          }
          uniqueTypes.push(
            t === "null" || t === null ? NULL : transformSchemaObject(
              { ...schemaObject, type: t, oneOf: void 0 },
              // don’t stack oneOf transforms
              options
            )
          );
        }
      } else {
        for (const t of schemaObject.type) {
          if (t === "null" || t === null) {
            if (!schemaObject.default) {
              uniqueTypes.push(NULL);
            }
          } else {
            uniqueTypes.push(transformSchemaObject({ ...schemaObject, type: t }, options));
          }
        }
      }
      return tsUnion(uniqueTypes);
    }
  }
  const coreObjectType = [];
  for (const k of ["allOf", "anyOf"]) {
    if (!schemaObject[k]) {
      continue;
    }
    const discriminator = !schemaObject.discriminator && !options.ctx.discriminators.refsHandled.includes((_b = options.path) != null ? _b : "") && options.ctx.discriminators.objects[(_c = options.path) != null ? _c : ""];
    if (discriminator) {
      coreObjectType.unshift(
        createDiscriminatorProperty(discriminator, {
          path: (_d = options.path) != null ? _d : "",
          readonly: options.ctx.immutable
        })
      );
      break;
    }
  }
  if ("properties" in schemaObject && schemaObject.properties && Object.keys(schemaObject.properties).length || "additionalProperties" in schemaObject && schemaObject.additionalProperties || "$defs" in schemaObject && schemaObject.$defs) {
    if (Object.keys((_e = schemaObject.properties) != null ? _e : {}).length) {
      for (const [k, v] of getEntries((_f = schemaObject.properties) != null ? _f : {}, options.ctx)) {
        if (typeof v !== "object" || Array.isArray(v)) {
          throw new Error(
            `${options.path}: invalid property ${k}. Expected Schema Object, got ${Array.isArray(v) ? "Array" : typeof v}`
          );
        }
        if (options.ctx.excludeDeprecated) {
          const resolved = "$ref" in v ? options.ctx.resolve(v.$ref) : v;
          if (resolved == null ? void 0 : resolved.deprecated) {
            continue;
          }
        }
        let optional = ((_g = schemaObject.required) == null ? void 0 : _g.includes(k)) || schemaObject.required === void 0 && options.ctx.propertiesRequiredByDefault || "default" in v && options.ctx.defaultNonNullable && !((_h = options.path) == null ? void 0 : _h.includes("parameters")) && !((_i = options.path) == null ? void 0 : _i.includes("requestBody")) && !((_j = options.path) == null ? void 0 : _j.includes("requestBodies")) ? void 0 : QUESTION_TOKEN;
        let type = "$ref" in v ? oapiRef(v.$ref) : transformSchemaObject(v, {
          ...options,
          path: createRef([options.path, k])
        });
        if (typeof options.ctx.transform === "function") {
          const result = options.ctx.transform(v, options);
          if (result && typeof result === "object") {
            if ("schema" in result) {
              type = result.schema;
              optional = result.questionToken ? QUESTION_TOKEN : optional;
            } else {
              type = result;
            }
          }
        }
        const property = import_typescript3.default.factory.createPropertySignature(
          /* modifiers     */
          tsModifiers({
            readonly: options.ctx.immutable || "readOnly" in v && !!v.readOnly
          }),
          /* name          */
          tsPropertyIndex(k),
          /* questionToken */
          optional,
          /* type          */
          type
        );
        addJSDocComment(v, property);
        coreObjectType.push(property);
      }
    }
    if (schemaObject.$defs && typeof schemaObject.$defs === "object" && Object.keys(schemaObject.$defs).length) {
      const defKeys = [];
      for (const [k, v] of Object.entries(schemaObject.$defs)) {
        const property = import_typescript3.default.factory.createPropertySignature(
          /* modifiers    */
          tsModifiers({
            readonly: options.ctx.immutable || "readonly" in v && !!v.readOnly
          }),
          /* name          */
          tsPropertyIndex(k),
          /* questionToken */
          void 0,
          /* type          */
          transformSchemaObject(v, {
            ...options,
            path: createRef([options.path, "$defs", k])
          })
        );
        addJSDocComment(v, property);
        defKeys.push(property);
      }
      coreObjectType.push(
        import_typescript3.default.factory.createPropertySignature(
          /* modifiers     */
          void 0,
          /* name          */
          tsPropertyIndex("$defs"),
          /* questionToken */
          void 0,
          /* type          */
          import_typescript3.default.factory.createTypeLiteralNode(defKeys)
        )
      );
    }
    if (schemaObject.additionalProperties || options.ctx.additionalProperties) {
      const hasExplicitAdditionalProperties = typeof schemaObject.additionalProperties === "object" && Object.keys(schemaObject.additionalProperties).length;
      const addlType = hasExplicitAdditionalProperties ? transformSchemaObject(schemaObject.additionalProperties, options) : UNKNOWN;
      return tsIntersection([
        ...coreObjectType.length ? [import_typescript3.default.factory.createTypeLiteralNode(coreObjectType)] : [],
        import_typescript3.default.factory.createTypeLiteralNode([
          import_typescript3.default.factory.createIndexSignature(
            /* modifiers  */
            tsModifiers({
              readonly: options.ctx.immutable
            }),
            /* parameters */
            [
              import_typescript3.default.factory.createParameterDeclaration(
                /* modifiers      */
                void 0,
                /* dotDotDotToken */
                void 0,
                /* name           */
                import_typescript3.default.factory.createIdentifier("key"),
                /* questionToken  */
                void 0,
                /* type           */
                STRING
              )
            ],
            /* type       */
            addlType
          )
        ])
      ]);
    }
  }
  return coreObjectType.length ? import_typescript3.default.factory.createTypeLiteralNode(coreObjectType) : void 0;
}

// src/transform/media-type-object.ts
function transformMediaTypeObject(mediaTypeObject, options) {
  if (!mediaTypeObject.schema) {
    return UNKNOWN;
  }
  return transformSchemaObject(mediaTypeObject.schema, options);
}

// src/transform/header-object.ts
function transformHeaderObject(headerObject, options) {
  var _a, _b;
  if (headerObject.schema) {
    return transformSchemaObject(headerObject.schema, options);
  }
  if (headerObject.content) {
    const type = [];
    for (const [contentType, mediaTypeObject] of getEntries((_a = headerObject.content) != null ? _a : {}, options.ctx)) {
      const nextPath = `${(_b = options.path) != null ? _b : "#"}/${(0, import_ref_utils4.escapePointer)(contentType)}`;
      const mediaType = "$ref" in mediaTypeObject ? transformSchemaObject(mediaTypeObject, {
        ...options,
        path: nextPath
      }) : transformMediaTypeObject(mediaTypeObject, {
        ...options,
        path: nextPath
      });
      const property = import_typescript4.default.factory.createPropertySignature(
        /* modifiers     */
        tsModifiers({ readonly: options.ctx.immutable }),
        /* name          */
        tsPropertyIndex(contentType),
        /* questionToken */
        void 0,
        /* type          */
        mediaType
      );
      addJSDocComment(mediaTypeObject, property);
      type.push(property);
    }
    return import_typescript4.default.factory.createTypeLiteralNode(type);
  }
  return UNKNOWN;
}

// src/transform/parameter-object.ts
function transformParameterObject(parameterObject, options) {
  return parameterObject.schema ? transformSchemaObject(parameterObject.schema, options) : STRING;
}

// src/transform/path-item-object.ts
var import_typescript10 = __toESM(require("typescript"), 1);

// src/transform/operation-object.ts
var import_typescript9 = __toESM(require("typescript"), 1);

// src/transform/parameters-array.ts
var import_typescript5 = __toESM(require("typescript"), 1);
function transformParametersArray(parametersArray, options) {
  const type = [];
  const paramType = [];
  for (const paramIn of ["query", "header", "path", "cookie"]) {
    const paramLocType = [];
    let operationParameters = parametersArray.map((param) => ({
      original: param,
      resolved: "$ref" in param ? options.ctx.resolve(param.$ref) : param
    }));
    if (options.ctx.alphabetize) {
      operationParameters.sort((a, b) => {
        var _a, _b, _c, _d;
        return ((_b = (_a = a.resolved) == null ? void 0 : _a.name) != null ? _b : "").localeCompare((_d = (_c = b.resolved) == null ? void 0 : _c.name) != null ? _d : "");
      });
    }
    if (options.ctx.excludeDeprecated) {
      operationParameters = operationParameters.filter(
        ({ resolved }) => {
          var _a;
          return !(resolved == null ? void 0 : resolved.deprecated) && !((_a = resolved == null ? void 0 : resolved.schema) == null ? void 0 : _a.deprecated);
        }
      );
    }
    for (const { original, resolved } of operationParameters) {
      if ((resolved == null ? void 0 : resolved.in) !== paramIn) {
        continue;
      }
      let optional = void 0;
      if (paramIn !== "path" && !resolved.required) {
        optional = QUESTION_TOKEN;
      }
      const subType = "$ref" in original ? oapiRef(original.$ref) : transformParameterObject(resolved, {
        ...options,
        path: createRef([options.path, "parameters", resolved.in, resolved.name])
      });
      const property = import_typescript5.default.factory.createPropertySignature(
        /* modifiers     */
        tsModifiers({ readonly: options.ctx.immutable }),
        /* name          */
        tsPropertyIndex(resolved == null ? void 0 : resolved.name),
        /* questionToken */
        optional,
        /* type          */
        subType
      );
      addJSDocComment(resolved, property);
      paramLocType.push(property);
    }
    const allOptional = paramLocType.every((node) => !!node.questionToken);
    paramType.push(
      import_typescript5.default.factory.createPropertySignature(
        /* modifiers     */
        tsModifiers({ readonly: options.ctx.immutable }),
        /* name          */
        tsPropertyIndex(paramIn),
        /* questionToken */
        allOptional || !paramLocType.length ? QUESTION_TOKEN : void 0,
        /* type          */
        paramLocType.length ? import_typescript5.default.factory.createTypeLiteralNode(paramLocType) : NEVER
      )
    );
  }
  type.push(
    import_typescript5.default.factory.createPropertySignature(
      /* modifiers     */
      tsModifiers({ readonly: options.ctx.immutable }),
      /* name          */
      tsPropertyIndex("parameters"),
      /* questionToken */
      !paramType.length ? QUESTION_TOKEN : void 0,
      /* type          */
      paramType.length ? import_typescript5.default.factory.createTypeLiteralNode(paramType) : NEVER
    )
  );
  return type;
}

// src/transform/request-body-object.ts
var import_typescript6 = __toESM(require("typescript"), 1);
function transformRequestBodyObject(requestBodyObject, options) {
  var _a;
  const type = [];
  for (const [contentType, mediaTypeObject] of getEntries((_a = requestBodyObject.content) != null ? _a : {}, options.ctx)) {
    const nextPath = createRef([options.path, contentType]);
    const mediaType = "$ref" in mediaTypeObject ? transformSchemaObject(mediaTypeObject, {
      ...options,
      path: nextPath
    }) : transformMediaTypeObject(mediaTypeObject, {
      ...options,
      path: nextPath
    });
    const property = import_typescript6.default.factory.createPropertySignature(
      /* modifiers     */
      tsModifiers({ readonly: options.ctx.immutable }),
      /* name          */
      tsPropertyIndex(contentType),
      /* questionToken */
      void 0,
      /* type          */
      mediaType
    );
    addJSDocComment(mediaTypeObject, property);
    type.push(property);
  }
  return import_typescript6.default.factory.createTypeLiteralNode([
    import_typescript6.default.factory.createPropertySignature(
      /* modifiers     */
      tsModifiers({ readonly: options.ctx.immutable }),
      /* name          */
      tsPropertyIndex("content"),
      /* questionToken */
      void 0,
      /* type          */
      import_typescript6.default.factory.createTypeLiteralNode(
        type.length ? type : (
          // add `"*/*": never` if no media types are defined
          [
            import_typescript6.default.factory.createPropertySignature(
              /* modifiers     */
              void 0,
              /* name          */
              tsPropertyIndex("*/*"),
              /* questionToken */
              QUESTION_TOKEN,
              /* type          */
              NEVER
            )
          ]
        )
      )
    )
  ]);
}

// src/transform/responses-object.ts
var import_typescript8 = __toESM(require("typescript"), 1);

// src/transform/response-object.ts
var import_typescript7 = __toESM(require("typescript"), 1);
function transformResponseObject(responseObject, options) {
  var _a;
  const type = [];
  const headersObject = [];
  if (responseObject.headers) {
    for (const [name, headerObject] of getEntries(responseObject.headers, options.ctx)) {
      const optional = "$ref" in headerObject || headerObject.required ? void 0 : QUESTION_TOKEN;
      const subType = "$ref" in headerObject ? oapiRef(headerObject.$ref) : transformHeaderObject(headerObject, {
        ...options,
        path: createRef([options.path, "headers", name])
      });
      const property = import_typescript7.default.factory.createPropertySignature(
        /* modifiers     */
        tsModifiers({ readonly: options.ctx.immutable }),
        /* name          */
        tsPropertyIndex(name),
        /* questionToken */
        optional,
        /* type          */
        subType
      );
      addJSDocComment(headerObject, property);
      headersObject.push(property);
    }
  }
  headersObject.push(
    import_typescript7.default.factory.createIndexSignature(
      /* modifiers     */
      tsModifiers({ readonly: options.ctx.immutable }),
      /* parameters */
      [
        import_typescript7.default.factory.createParameterDeclaration(
          /* modifiers      */
          void 0,
          /* dotDotDotToken */
          void 0,
          /* name           */
          import_typescript7.default.factory.createIdentifier("name"),
          /* questionToken  */
          void 0,
          /* type           */
          STRING
        )
      ],
      /* type          */
      UNKNOWN
    )
  );
  type.push(
    import_typescript7.default.factory.createPropertySignature(
      /* modifiers     */
      void 0,
      /* name          */
      tsPropertyIndex("headers"),
      /* questionToken */
      void 0,
      /* type          */
      import_typescript7.default.factory.createTypeLiteralNode(headersObject)
    )
  );
  const contentObject = [];
  if (responseObject.content) {
    for (const [contentType, mediaTypeObject] of getEntries((_a = responseObject.content) != null ? _a : {}, options.ctx)) {
      const property = import_typescript7.default.factory.createPropertySignature(
        /* modifiers     */
        tsModifiers({ readonly: options.ctx.immutable }),
        /* name          */
        tsPropertyIndex(contentType),
        /* questionToken */
        void 0,
        /* type          */
        transformMediaTypeObject(mediaTypeObject, {
          ...options,
          path: createRef([options.path, "content", contentType])
        })
      );
      contentObject.push(property);
    }
  }
  if (contentObject.length) {
    type.push(
      import_typescript7.default.factory.createPropertySignature(
        /* modifiers     */
        void 0,
        /* name          */
        tsPropertyIndex("content"),
        /* questionToken */
        void 0,
        /* type          */
        import_typescript7.default.factory.createTypeLiteralNode(contentObject)
      )
    );
  } else {
    type.push(
      import_typescript7.default.factory.createPropertySignature(
        /* modifiers     */
        void 0,
        /* name          */
        tsPropertyIndex("content"),
        /* questionToken */
        QUESTION_TOKEN,
        /* type          */
        NEVER
      )
    );
  }
  return import_typescript7.default.factory.createTypeLiteralNode(type);
}

// src/transform/responses-object.ts
function transformResponsesObject(responsesObject, options) {
  const type = [];
  for (const [responseCode, responseObject] of getEntries(responsesObject, options.ctx)) {
    const responseType = "$ref" in responseObject ? oapiRef(responseObject.$ref) : transformResponseObject(responseObject, {
      ...options,
      path: createRef([options.path, "responses", responseCode])
    });
    const property = import_typescript8.default.factory.createPropertySignature(
      /* modifiers     */
      tsModifiers({ readonly: options.ctx.immutable }),
      /* name          */
      tsPropertyIndex(responseCode),
      /* questionToken */
      void 0,
      /* type          */
      responseType
    );
    addJSDocComment(responseObject, property);
    type.push(property);
  }
  return type.length ? import_typescript8.default.factory.createTypeLiteralNode(type) : NEVER;
}

// src/transform/operation-object.ts
function transformOperationObject(operationObject, options) {
  var _a, _b, _c;
  const type = [];
  type.push(...transformParametersArray((_a = operationObject.parameters) != null ? _a : [], options));
  if (operationObject.requestBody) {
    const requestBodyType = "$ref" in operationObject.requestBody ? oapiRef(operationObject.requestBody.$ref) : transformRequestBodyObject(operationObject.requestBody, {
      ...options,
      path: createRef([options.path, "requestBody"])
    });
    const required = !!((_b = "$ref" in operationObject.requestBody ? options.ctx.resolve(operationObject.requestBody.$ref) : operationObject.requestBody) == null ? void 0 : _b.required);
    const property = import_typescript9.default.factory.createPropertySignature(
      /* modifiers     */
      tsModifiers({ readonly: options.ctx.immutable }),
      /* name          */
      tsPropertyIndex("requestBody"),
      /* questionToken */
      required ? void 0 : QUESTION_TOKEN,
      /* type          */
      requestBodyType
    );
    addJSDocComment(operationObject.requestBody, property);
    type.push(property);
  } else {
    type.push(
      import_typescript9.default.factory.createPropertySignature(
        /* modifiers     */
        tsModifiers({ readonly: options.ctx.immutable }),
        /* name          */
        tsPropertyIndex("requestBody"),
        /* questionToken */
        QUESTION_TOKEN,
        /* type          */
        NEVER
      )
    );
  }
  type.push(
    import_typescript9.default.factory.createPropertySignature(
      /* modifiers     */
      tsModifiers({ readonly: options.ctx.immutable }),
      /* name          */
      tsPropertyIndex("responses"),
      /* questionToken */
      void 0,
      /* type          */
      transformResponsesObject((_c = operationObject.responses) != null ? _c : {}, options)
    )
  );
  return type;
}
function injectOperationObject(operationId, operationObject, options) {
  let operations = options.ctx.injectFooter.find(
    (node) => import_typescript9.default.isInterfaceDeclaration(node) && node.name.text === "operations"
  );
  if (!operations) {
    operations = import_typescript9.default.factory.createInterfaceDeclaration(
      /* modifiers       */
      tsModifiers({
        export: true
        // important: do NOT make this immutable
      }),
      /* name            */
      import_typescript9.default.factory.createIdentifier("operations"),
      /* typeParameters  */
      void 0,
      /* heritageClauses */
      void 0,
      /* members         */
      []
    );
    options.ctx.injectFooter.push(operations);
  }
  const type = transformOperationObject(operationObject, options);
  operations.members = import_typescript9.default.factory.createNodeArray([
    ...operations.members,
    import_typescript9.default.factory.createPropertySignature(
      /* modifiers     */
      tsModifiers({ readonly: options.ctx.immutable }),
      /* name          */
      tsPropertyIndex(operationId),
      /* questionToken */
      void 0,
      /* type          */
      import_typescript9.default.factory.createTypeLiteralNode(type)
    )
  ]);
}

// src/transform/path-item-object.ts
function transformPathItemObject(pathItem, options) {
  var _a, _b, _c, _d, _e;
  const type = [];
  type.push(
    ...transformParametersArray((_a = pathItem.parameters) != null ? _a : [], {
      ...options,
      path: createRef([options.path, "parameters"])
    })
  );
  for (const method of ["get", "put", "post", "delete", "options", "head", "patch", "trace"]) {
    const operationObject = pathItem[method];
    if (!operationObject || options.ctx.excludeDeprecated && ((_b = "$ref" in operationObject ? options.ctx.resolve(operationObject.$ref) : operationObject) == null ? void 0 : _b.deprecated)) {
      type.push(
        import_typescript10.default.factory.createPropertySignature(
          /* modifiers     */
          tsModifiers({ readonly: options.ctx.immutable }),
          /* name          */
          tsPropertyIndex(method),
          /* questionToken */
          QUESTION_TOKEN,
          /* type          */
          NEVER
        )
      );
      continue;
    }
    const keyedParameters = {};
    if (!("$ref" in operationObject)) {
      for (const parameter of [...(_c = pathItem.parameters) != null ? _c : [], ...(_d = operationObject.parameters) != null ? _d : []]) {
        const name = "$ref" in parameter ? (_e = options.ctx.resolve(parameter.$ref)) == null ? void 0 : _e.name : parameter.name;
        if (name) {
          keyedParameters[name] = parameter;
        }
      }
    }
    let operationType;
    if ("$ref" in operationObject) {
      operationType = oapiRef(operationObject.$ref);
    } else if (operationObject.operationId) {
      const operationId = operationObject.operationId.replace(HASH_RE, "/");
      operationType = oapiRef(createRef(["operations", operationId]));
      injectOperationObject(
        operationId,
        { ...operationObject, parameters: Object.values(keyedParameters) },
        { ...options, path: createRef([options.path, method]) }
      );
    } else {
      operationType = import_typescript10.default.factory.createTypeLiteralNode(
        transformOperationObject(
          { ...operationObject, parameters: Object.values(keyedParameters) },
          { ...options, path: createRef([options.path, method]) }
        )
      );
    }
    const property = import_typescript10.default.factory.createPropertySignature(
      /* modifiers     */
      tsModifiers({ readonly: options.ctx.immutable }),
      /* name          */
      tsPropertyIndex(method),
      /* questionToken */
      void 0,
      /* type          */
      operationType
    );
    addJSDocComment(operationObject, property);
    type.push(property);
  }
  return import_typescript10.default.factory.createTypeLiteralNode(type);
}
var HASH_RE = /#/g;

// src/transform/components-object.ts
var transformers = {
  schemas: transformSchemaObject,
  responses: transformResponseObject,
  parameters: transformParameterObject,
  requestBodies: transformRequestBodyObject,
  headers: transformHeaderObject,
  pathItems: transformPathItemObject
};
function transformComponentsObject(componentsObject, ctx) {
  const type = [];
  for (const key of Object.keys(transformers)) {
    const componentT = import_node_perf_hooks2.performance.now();
    const items = [];
    if (componentsObject[key]) {
      for (const [name, item] of getEntries(componentsObject[key], ctx)) {
        let subType = transformers[key](item, {
          path: createRef(["components", key, name]),
          ctx
        });
        let hasQuestionToken = false;
        if (ctx.transform) {
          const result = ctx.transform(item, {
            path: createRef(["components", key, name]),
            ctx
          });
          if (result) {
            if ("schema" in result) {
              subType = result.schema;
              hasQuestionToken = result.questionToken;
            } else {
              subType = result;
            }
          }
        }
        const property = import_typescript11.default.factory.createPropertySignature(
          /* modifiers     */
          tsModifiers({ readonly: ctx.immutable }),
          /* name          */
          tsPropertyIndex(name),
          /* questionToken */
          hasQuestionToken ? QUESTION_TOKEN : void 0,
          /* type          */
          subType
        );
        addJSDocComment(item, property);
        items.push(property);
      }
    }
    type.push(
      import_typescript11.default.factory.createPropertySignature(
        /* modifiers     */
        void 0,
        /* name          */
        tsPropertyIndex(key),
        /* questionToken */
        void 0,
        /* type          */
        items.length ? import_typescript11.default.factory.createTypeLiteralNode(items) : NEVER
      )
    );
    debug(`Transformed components \u2192 ${key}`, "ts", import_node_perf_hooks2.performance.now() - componentT);
  }
  return import_typescript11.default.factory.createTypeLiteralNode(type);
}

// src/transform/paths-object.ts
var import_typescript12 = __toESM(require("typescript"), 1);
var import_node_perf_hooks3 = require("perf_hooks");
var PATH_PARAM_RE = /\{[^}]+\}/g;
function transformPathsObject(pathsObject, ctx) {
  var _a, _b, _c;
  const type = [];
  for (const [url, pathItemObject] of getEntries(pathsObject, ctx)) {
    if (!pathItemObject || typeof pathItemObject !== "object") {
      continue;
    }
    const pathT = import_node_perf_hooks3.performance.now();
    if ("$ref" in pathItemObject) {
      const property = import_typescript12.default.factory.createPropertySignature(
        /* modifiers     */
        tsModifiers({ readonly: ctx.immutable }),
        /* name          */
        tsPropertyIndex(url),
        /* questionToken */
        void 0,
        /* type          */
        oapiRef(pathItemObject.$ref)
      );
      addJSDocComment(pathItemObject, property);
      type.push(property);
    } else {
      const pathItemType = transformPathItemObject(pathItemObject, {
        path: createRef(["paths", url]),
        ctx
      });
      if (ctx.pathParamsAsTypes && url.includes("{")) {
        const pathParams = extractPathParams(pathItemObject, ctx);
        const matches = url.match(PATH_PARAM_RE);
        let rawPath = `\`${url}\``;
        if (matches) {
          for (const match of matches) {
            const paramName = match.slice(1, -1);
            const param = pathParams[paramName];
            if (!param) {
              rawPath = rawPath.replace(match, "${string}");
            } else {
              rawPath = rawPath.replace(match, `\${${(_b = (_a = param.schema) == null ? void 0 : _a.type) != null ? _b : "string"}}`);
            }
          }
          const pathType = (_c = stringToAST(rawPath)[0]) == null ? void 0 : _c.expression;
          if (pathType) {
            type.push(
              import_typescript12.default.factory.createIndexSignature(
                /* modifiers     */
                tsModifiers({ readonly: ctx.immutable }),
                /* parameters    */
                [
                  import_typescript12.default.factory.createParameterDeclaration(
                    /* modifiers      */
                    void 0,
                    /* dotDotDotToken */
                    void 0,
                    /* name           */
                    "path",
                    /* questionToken  */
                    void 0,
                    /* type           */
                    pathType,
                    /* initializer    */
                    void 0
                  )
                ],
                /* type          */
                pathItemType
              )
            );
            continue;
          }
        }
      }
      type.push(
        import_typescript12.default.factory.createPropertySignature(
          /* modifiers     */
          tsModifiers({ readonly: ctx.immutable }),
          /* name          */
          tsPropertyIndex(url),
          /* questionToken */
          void 0,
          /* type          */
          pathItemType
        )
      );
      debug(`Transformed path "${url}"`, "ts", import_node_perf_hooks3.performance.now() - pathT);
    }
  }
  return import_typescript12.default.factory.createTypeLiteralNode(type);
}
function extractPathParams(pathItemObject, ctx) {
  var _a;
  const params = {};
  for (const p of (_a = pathItemObject.parameters) != null ? _a : []) {
    const resolved = "$ref" in p && p.$ref ? ctx.resolve(p.$ref) : p;
    if (resolved && resolved.in === "path") {
      params[resolved.name] = resolved;
    }
  }
  for (const method of ["get", "put", "post", "delete", "options", "head", "patch", "trace"]) {
    if (!(method in pathItemObject)) {
      continue;
    }
    const resolvedMethod = pathItemObject[method].$ref ? ctx.resolve(pathItemObject[method].$ref) : pathItemObject[method];
    if (resolvedMethod == null ? void 0 : resolvedMethod.parameters) {
      for (const p of resolvedMethod.parameters) {
        const resolvedParam = "$ref" in p && p.$ref ? ctx.resolve(p.$ref) : p;
        if (resolvedParam && resolvedParam.in === "path") {
          params[resolvedParam.name] = resolvedParam;
        }
      }
    }
  }
  return params;
}

// src/transform/webhooks-object.ts
var import_typescript13 = __toESM(require("typescript"), 1);
function transformWebhooksObject(webhooksObject, options) {
  const type = [];
  for (const [name, pathItemObject] of getEntries(webhooksObject, options)) {
    type.push(
      import_typescript13.default.factory.createPropertySignature(
        /* modifiers     */
        tsModifiers({
          readonly: options.immutable
        }),
        /* name          */
        tsPropertyIndex(name),
        /* questionToken */
        void 0,
        /* type          */
        transformPathItemObject(pathItemObject, {
          path: createRef(["webhooks", name]),
          ctx: options
        })
      )
    );
  }
  return import_typescript13.default.factory.createTypeLiteralNode(type);
}

// src/transform/index.ts
var transformers2 = {
  paths: transformPathsObject,
  webhooks: transformWebhooksObject,
  components: transformComponentsObject,
  $defs: (node, options) => transformSchemaObject(node, { path: createRef(["$defs"]), ctx: options })
};
function transformSchema(schema, ctx) {
  var _a, _b;
  const type = [];
  if (ctx.inject) {
    const injectNodes = stringToAST(ctx.inject);
    type.push(...injectNodes);
  }
  for (const root of Object.keys(transformers2)) {
    const emptyObj = import_typescript14.default.factory.createTypeAliasDeclaration(
      /* modifiers      */
      tsModifiers({ export: true }),
      /* name           */
      root,
      /* typeParameters */
      void 0,
      /* type           */
      tsRecord(STRING, NEVER)
    );
    if (schema[root] && typeof schema[root] === "object") {
      const rootT = import_node_perf_hooks4.performance.now();
      const subType = transformers2[root](schema[root], ctx);
      if ((_a = subType.members) == null ? void 0 : _a.length) {
        type.push(
          ctx.exportType ? import_typescript14.default.factory.createTypeAliasDeclaration(
            /* modifiers      */
            tsModifiers({ export: true }),
            /* name           */
            root,
            /* typeParameters */
            void 0,
            /* type           */
            subType
          ) : import_typescript14.default.factory.createInterfaceDeclaration(
            /* modifiers       */
            tsModifiers({ export: true }),
            /* name            */
            root,
            /* typeParameters  */
            void 0,
            /* heritageClauses */
            void 0,
            /* members         */
            subType.members
          )
        );
        debug(`${root} done`, "ts", import_node_perf_hooks4.performance.now() - rootT);
      } else {
        type.push(emptyObj);
        debug(`${root} done (skipped)`, "ts", 0);
      }
    } else {
      type.push(emptyObj);
      debug(`${root} done (skipped)`, "ts", 0);
    }
  }
  let hasOperations = false;
  for (const injectedType of ctx.injectFooter) {
    if (!hasOperations && ((_b = injectedType == null ? void 0 : injectedType.name) == null ? void 0 : _b.escapedText) === "operations") {
      hasOperations = true;
    }
    type.push(injectedType);
  }
  if (!hasOperations) {
    type.push(
      import_typescript14.default.factory.createTypeAliasDeclaration(
        /* modifiers      */
        tsModifiers({ export: true }),
        /* name           */
        "operations",
        /* typeParameters */
        void 0,
        /* type           */
        tsRecord(STRING, NEVER)
      )
    );
  }
  return type;
}

// src/index.ts
var COMMENT_HEADER = `/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

`;
async function openapiTS(source, options = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  if (!source) {
    throw new Error("Empty schema. Please specify a URL, file path, or Redocly Config");
  }
  const redoc = (_a = options.redocly) != null ? _a : await (0, import_openapi_core2.createConfig)(
    {
      rules: {
        "operation-operationId-unique": { severity: "error" }
        // throw error on duplicate operationIDs
      }
    },
    { extends: ["minimal"] }
  );
  const schema = await validateAndBundle(source, {
    redoc,
    cwd: options.cwd instanceof URL ? options.cwd : new URL(`file://${(_b = options.cwd) != null ? _b : process.cwd()}/`),
    silent: (_c = options.silent) != null ? _c : false,
    dereferenced: options.dereferenced
  });
  const ctx = {
    additionalProperties: (_d = options.additionalProperties) != null ? _d : false,
    alphabetize: (_e = options.alphabetize) != null ? _e : false,
    arrayLength: (_f = options.arrayLength) != null ? _f : false,
    defaultNonNullable: (_g = options.defaultNonNullable) != null ? _g : true,
    discriminators: scanDiscriminators(schema, options),
    emptyObjectsUnknown: (_h = options.emptyObjectsUnknown) != null ? _h : false,
    enum: (_i = options.enum) != null ? _i : false,
    enumValues: (_j = options.enumValues) != null ? _j : false,
    dedupeEnums: (_k = options.dedupeEnums) != null ? _k : false,
    excludeDeprecated: (_l = options.excludeDeprecated) != null ? _l : false,
    exportType: (_m = options.exportType) != null ? _m : false,
    immutable: (_n = options.immutable) != null ? _n : false,
    injectFooter: [],
    pathParamsAsTypes: (_o = options.pathParamsAsTypes) != null ? _o : false,
    postTransform: typeof options.postTransform === "function" ? options.postTransform : void 0,
    propertiesRequiredByDefault: (_p = options.propertiesRequiredByDefault) != null ? _p : false,
    redoc,
    silent: (_q = options.silent) != null ? _q : false,
    inject: (_r = options.inject) != null ? _r : void 0,
    transform: typeof options.transform === "function" ? options.transform : void 0,
    resolve($ref) {
      var _a2;
      return resolveRef(schema, $ref, { silent: (_a2 = options.silent) != null ? _a2 : false });
    }
  };
  const transformT = import_node_perf_hooks5.performance.now();
  const result = transformSchema(schema, ctx);
  debug("Completed AST transformation for entire document", "ts", import_node_perf_hooks5.performance.now() - transformT);
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BOOLEAN,
  COMMENT_HEADER,
  FALSE,
  JS_ENUM_INVALID_CHARS_RE,
  JS_PROPERTY_INDEX_INVALID_CHARS_RE,
  JS_PROPERTY_INDEX_RE,
  NEVER,
  NULL,
  NUMBER,
  QUESTION_TOKEN,
  STRING,
  TRUE,
  UNDEFINED,
  UNKNOWN,
  addJSDocComment,
  astToString,
  c,
  createDiscriminatorProperty,
  createRef,
  debug,
  enumCache,
  error,
  formatTime,
  getEntries,
  injectOperationObject,
  oapiRef,
  resolveRef,
  scanDiscriminators,
  stringToAST,
  transformComponentsObject,
  transformHeaderObject,
  transformMediaTypeObject,
  transformOperationObject,
  transformParameterObject,
  transformPathItemObject,
  transformPathsObject,
  transformRequestBodyObject,
  transformResponseObject,
  transformResponsesObject,
  transformSchema,
  transformSchemaObject,
  transformSchemaObjectWithComposition,
  tsArrayLiteralExpression,
  tsDedupe,
  tsEnum,
  tsEnumMember,
  tsIntersection,
  tsIsPrimitive,
  tsLiteral,
  tsModifiers,
  tsNullable,
  tsOmit,
  tsPropertyIndex,
  tsRecord,
  tsUnion,
  tsWithRequired,
  walk,
  warn
});