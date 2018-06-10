### 需要的准备
#### 1、配置babel环境
  ```
  npm install --save-dev babel-cli babel-preset-env

  ```
#### 2、创建.babelrc文件
  ```javascript
    {
         "presets": ["env"]
    }
  ```
#### 3、babel转译
```
cd scripts
babel index.es6 -o index.js
babel thumb.es6 -o thumb.js
```
#### 4、karma配置部分
```
npm install karma karma-cli karma-jasmine jasmine-core --save-dev
npm install phantomjs  karma-phantomjs-launcher --save-dev
```
#### 5、配置和执行karma
karma init
karma start
