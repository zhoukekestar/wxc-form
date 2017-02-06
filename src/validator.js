
var validator = {

  // Form validation: type=[email,number,cellphone]
  type: function(ele, msg) {

    var value = ele.attr.value || "";

    // if value is empty, it depends on input is required or not.
    if (value === "") return "";

    // @see https://github.com/jzaefferer/jquery-validation/blob/master/src/core.js
    switch (ele.attr.type) {
      case undefined:
        return "";
      case "hidden":
        return "";
      case "submit":
        return "";
      case "email":
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) ? "" : msg.email;
      case "number":
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value) ? "" : msg.number;
      case "cellphone":
      case "tel":
      case "phone":
        return /^[1][3,4,5,7,8][0-9]{9}$/.test(value) ? "" : msg.cellphone;
      case "integer":
        return /^\d+$/.test(value) ? "" : msg.integer;
      case "url":
        return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value) ? "" : msg.url;
      case 'date':
        return isNaN(new Date(value).getTime()) ? msg.date : '';
      default:
        return "";
    }

  },
  // Form validation: required.
  required: function(ele, msg) {
    if (ele.attr.required !== undefined && !ele.attr.value)
      return msg.required;
    return "";
  },
  // Form validation: pattern.
  pattern: function(ele, msg) {
    if (!ele.attr.pattern)
      return "";
    var reg = new RegExp(ele.attr.pattern);
    return reg.test(ele.attr.value) ? "" : msg.pattern;
  },
  minlength: function(ele, msg) {
    var l = ele.attr.minlength;
    if (!l || !ele.attr.value)
      return "";
    l = +l;
    if (ele.attr.value.length >= l) {
      return "";
    } else {
      return msg.minlength.replace("{num}", l);
    }
  },
  maxlength: function(ele, msg) {
    var l = ele.attr.maxlength;
    if (!l || !ele.attr.value)
      return "";
    l = +l;
    if (ele.attr.value.length <= l) {
      return "";
    } else {
      return msg.maxlength.replace("{num}", l)
    }
  },
  defaultMsg: {
    email: "邮箱地址错误",
    number: "数字格式错误",
    cellphone: "手机号错误",
    integer: "请输入整数",
    url: "请输入正确的网址",
    date: "日期错误",
    required: "必须填写",
    pattern: "请输入正确的值",
    fun: "请输入正确的值",
    minlength: "最小长度为{num}",
    maxlength: "最大长度为{num}"
  }
}

var validIt = function(input) {
  var inputmsg = JSON.parse(input.attr.msg || "{}")
    , key
    , msg = {}
    , returnMsg;

  for (key in validator.defaultMsg) {
    msg[key] = validator.defaultMsg[key];
  }
  for (key in inputmsg) {
    msg[key] = inputmsg[key];
  }

  returnMsg =
    // check type
    validator.type(input, msg) ||

    // check required
    validator.required(input, msg) ||

    // check pattern
    validator.pattern(input, msg) ||

    // check custom function
    validator.minlength(input, msg) ||

    // check custom function
    validator.maxlength(input, msg);

  return returnMsg;

}

module.exports = {
  validIt: validIt
}
