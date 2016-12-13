# wxc-form
Weex Component Form.

# Attributes
* `method` The method you want to use, possible values: `GET`, `POST`, `DELETE`, `PUT`, default: `POST`
* `action` The url you want to take action.

# Methods
* `submit(callback, [filter])`

Function `callback` will pass a parameter `response`.

Function `filter` is optional which can modify the body sent to server, if you return `null`, the current request will be canceled.

* `headers` `function` OR `object`. Function return object will set to current request headers.

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

# Local Develop
* `git clone https://github.com/zhoukekestar/wxc-form.git` Clone project.
* `npm install` Install project dependencies.
* `npm run serve` run web server, you can go `http://localhost:8080` to see the home page.
* `npm run dev` Transformer: `xx.we` --> `xx.js`

# Repos
* This Component Based on `form-json`
* [webcomponents form-json](https://github.com/zhoukekestar/webcomponents/tree/master/components/form-json)
* [modules form-json](https://github.com/zhoukekestar/modules/tree/master/src/formJSON)
