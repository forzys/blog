<!-- intro: React Native 打包发布 IOS 相关 流程记录 -->


### 1. 导出js bundle包和图片资源  
和打包React Native Android应用不同，无法通过命令一步进行导出React Native iOS应用。所以需要将JS部分的代码和图片等资源打包导出，然后通过XCode将其添加到iOS项目中。
```bash
react-native bundle --platform ios --entry-file index.js --bundle-output ./bundles/main.jsbundle --assets-dest  ./bundles --dev false
```
<img width="533" alt="image" src="https://github.com/user-attachments/assets/0e4fc129-4dae-483f-844d-9672b10d2fad">

> 其中，assets为项目中的JS部分所用到的图片资源(不包括原生模块中的图片资源)，main.jsbundle是JS部分的代码。

### 2. 将js bundle包和图片资源导入到iOS项目中
这一步需要用到XCode，选择assets文件夹与main.jsbundle文件将其拖拽到XCode的项目导航面板中。
<img width="513" alt="image" src="https://github.com/user-attachments/assets/a36b67d8-f927-400d-83c9-83c5401e3ea9">

然后，修改AppDelegate.m文件， 让React Native去使用我们刚才导入的jsbundle，这样以来就摆脱了对本地nodejs服务器的依赖。  
添加如下代码：
```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

  NSURL *jsCodeLocation;
 //jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
 +jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif ...
  return YES;
}
```

如果在项目中使用了CodePush热更新，那么需要可以直接通过CodePush来读取本地的jsbundle。  
添加如下代码：
```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
#ifdef DEBUG     jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
#else     jsCodeLocation = [CodePush bundleURL];
#endif ...
  return YES;
}
```

### 3. 发布iOS应用

发布iOS应用需要有一个99美元的账号用于将App上传到AppStore，或者是299美元的企业级账号用于将App发布到自己公司的服务器或第三方的服务器。

接下来我们就需要进行申请APPID -> 在Tunes Connect创建应用 -> 打包程序 ->  将应用提交到app store等几大步骤。
[App Store Connect Help](https://developer.apple.com/help/app-store-connect/#//apple_ref/doc/uid/TP40011225-CH1-SW1)
