<!-- intro: React Native 打包发布 APK 相关 流程记录 -->

- **生成一个签名密钥**

```bash
$ keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

- **设置 gradle 变量**

```jsx
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

1. `my-release-key.keystore`文件放到项目中的`android/app`文件夹下
2. `项目目录/android/gradle.properties`（项目配置，只对所在项目有效）。 添加上面的代码
- **把签名配置加入到项目的 gradle 配置中**
    
    ```bash
    android {
        ...
        defaultConfig { ... }
        signingConfigs {
            release {
                if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                    storeFile file(MYAPP_RELEASE_STORE_FILE)
                    storePassword MYAPP_RELEASE_STORE_PASSWORD
                    keyAlias MYAPP_RELEASE_KEY_ALIAS
                    keyPassword MYAPP_RELEASE_KEY_PASSWORD
                }
            }
        }
        buildTypes {
            release {
                ...
                signingConfig signingConfigs.release
            }
        }
    }
    ```
    
- **生成发行 APK 包**
    
    ```bash
    $ cd android
    $ ./gradlew assembleRelease
    ```