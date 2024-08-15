<!-- intro: 使用ffmpeg裁剪不定大小的透明图片 太大的保持比例缩放， 太小的将缺失部分填充为为透明背景 -->


需求来源：做饥荒小程序的时候需要很多角色生物的图片 比如“生物”图片就有216张，又都是特别小的图，一个个记录线上路径太麻烦，所以就把他们合并成一张精灵图， 但是每张图片的大小比例又都不一致 大的宽度超过1000px 小的却只有10px。为了方便查找，需要裁剪为固定大小(64*64)的图片。

```bash
#!/bin/bash
 
# 目标目录
input_dir="images"
# 输出目录
output_dir="output"
# 目标大小
target_size="64:64"
# 填充背景
color="0x00000000"
 
# 创建输出目录
mkdir -p "$output_dir"
 
# 遍历输入目录中的所有图片文件
for file in "$input_dir"/*; do
  # 输出文件名
  output_file="${output_dir}/$(basename "$file")"
  
  # 使用ffmpeg裁剪图片
  ffmpeg -i "$file" -vf "scale=$target_size:force_original_aspect_ratio=decrease,pad=$target_size:(ow-iw)/2:(oh-ih)/2:color=$color" "$output_file"
done
```

保存为`name.sh` `chmod +x name.sh` `./name.sh` 运行就可以了