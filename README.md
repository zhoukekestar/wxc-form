# wxc-form
Weex Component Form.

# Attributes
* `method` The method you want to use, possible values: `GET`, `POST`, `DELETE`, `PUT`, default: `POST`
* `action` The url you want to take action.
* `novalidate` Disable the validator that can validate input value is valid or not.

# Methods
* `submit(callback, [filter])`

  Function `callback` will pass a parameter `response`.

  Function `filter` is optional which can modify the body sent to server, if you return `null`, the current request will be canceled.

* `headers()` `function` OR `object`. Function return object will set to current request headers.
* `toast()` Show message function. Default: `modal.toast(msg)`.

# Quick Start
* [Try it online! 😁](https://zhoukekestar.github.io/wxc-form/public/)
* `npm install wxc-form --save` Save wxc-form to your project.
* require it
```html
<template>
  <div>
    <wxc-form id='form' action='/login' method='GET'>
      <input class='input' type="text" name="name" value="name">
      <input class='input' type="email" name="password" value="password">
      <text onclick='submit'>submit</text>
    </wxc-form>
    <text>
      response:
      {{response}}
    </text>
  </div>
</template>
<script>

  // Require wxc-form component
  require('wxc-form')

  module.exports = {
    data: {
      response: {}
    },
    methods: {
      submit: function() {
        var that = this
          , form = this.$vm('form')

        // Custom Headers, function.
        form.headers = function() {
          return {
            'x-client-id': Math.random()
          }
        }
        // form.headers = {'x-client-id': 'id'} // Or an object.

        // Submit
        form.submit(function(response) {

          // Get response here
          that.response = JSON.stringify(response, null, 2);

        }, function(data) {

          // Set your new body directly.
          data['random'] = Math.random();

          return data; // You have to return a new data ojbect,
          // return null; // This will cancel current request.
        })

      }
    }
  };
</script>
```

# Input Validator

## Form methods
* `toast` you can override the toast function. Default toast: `modal.toast(msg)`

## Input Attributes
|Attribute|Message Property|Default Message|Detail|
|--|--|--|
|`type="email"`| `email` | 邮箱地址错误 | Check the value is email or not.|
|`type="number"`| `number` | 数字格式错误 | Check the value is number or not.|
|`type="cellphone tel phone"` |`cellphone` | 手机号错误| The type can be one of `cellphone`, `tel`, `phone`. Check the value is phone number or not.|
|`type="integer"` |`integer`|请输入整数 | Check the value is integer or not.|
|`type="url"` | `url` |请输入正确的网址 | Check the value is url or not.|
|`type="date"`|`date` |日期错误 | Check the value is date or not.|
|`required` |`required` |必须填写 | Check the value is empty or not.|
|`pattern` | `pattern`|请输入正确的值 | Check the value is match current pattern or not. Demo: `<input patter="abc">`, you have to input "abc" to match it. |
|`minlength` | `minlength`| 最小长度为{num}| Check the value's length is less than current min-length or not. The `{num}` is your specified value.|
|`maxlength` |`maxlength` | 最大长度为{num}| Check the value's length is greater than current max-length or not.  The `{num}` is your specified value.|
|`msg` | \ | \ | A JSON Object that can be specify the invalid message.|

## Demo
```html
<template>
  <wxc-form id='form3' action='//dev-common.toomao.com/empty' method='POST'>
    <input type="email" name="email" value="" placeholder="email" required>
    <input type="password" name="password" value="" minlength='6' maxlength="20" required msg='{"minlength": "Password is too short", "required": "oh! you forget your password"}'>
    <text class='btn' id='submit' onclick='submit'>submit</text>
  </wxc-form>
</template>
<script>
  require('wxc-form');
  module.exports = {
    methods: {
      submit: function() {
        var form = this.$vm('form');
        form.toast = function(msg) {
          myDeautifulToast(msg);
        }
        form.submit()
      }
    }
  }
</script>
```
# Local Develop
* `git clone https://github.com/zhoukekestar/wxc-form.git` Clone project.
* `npm install` Install project dependencies.
* `npm run serve` run web server, you can go `http://localhost:8080` to see the home page.
* `npm run dev` Transformer: `xx.we` --> `xx.js`

# Repos
* This Component Based on `form-json`, `form-validator`
* [webcomponents form-json](https://github.com/zhoukekestar/webcomponents/tree/master/components/form-json)
* [modules form-json](https://github.com/zhoukekestar/modules/tree/master/src/formJSON)
