如何为 hackathon.chat 贡献内容
非常感谢您有兴趣为 hackathon.chat 做出贡献！我们是一个开放的、由社区驱动的项目，旨在收录全球各地的黑客马拉松与科技大会信息。您的每一次贡献都非常有价值。

这份指南将引导您轻松地完成一次活动信息的添加。

贡献方式：添加一个 Markdown 文件
我们项目的核心理念是“一个活动 = 一个 Markdown 文件”。您不需要懂复杂的编程知识，只需要按照规定的格式，在指定文件夹中添加一个 .md 文件，就完成了一次贡献。

贡献流程 (通过 GitHub 网页)
这是最简单、最推荐的贡献方式，全程无需在您的电脑上安装任何东西。

Fork 本仓库：
首先，请访问我们的 GitHub 仓库主页，点击页面右上角的 Fork 按钮，将项目完整地复制到您自己的 GitHub 账号下。

进入活动文件夹：
在您刚刚 Fork 好的个人仓库中，导航到以下路径：src/content/events/。

创建新文件：
点击页面右上方的 Add file -> Create new file 按钮。

命名文件：
在顶部“Name your file...”输入框中，为您的文件命名。请遵循 YYYY-活动简称.md 的格式，例如 2025-eth-vietnam.md。

填写活动内容：
将下面的 内容模板 完整地复制并粘贴到文件编辑器中，然后像填空一样，仔细修改里面的活动信息。

提交 Pull Request：
填写完毕后，滚动到页面底部，点击 Commit new file 按钮。接着，页面会引导您创建一个 Pull Request (PR)。请简单描述一下您添加的活动，然后点击 Create pull request。

Markdown 文件规范
为了保证网站能正确地展示信息，请严格遵守以下文件规范。

1. 文件命名
采用 YYYY-活动简称.md 的格式，全部使用小写英文字母和短横线 -。

正确示例: 2025-global-ai-summit-sf.md

错误示例: Global AI Summit.md, 2025_ai_summit.md

2. Frontmatter 内容 (核心！)
这是文件最重要的部分，它定义了活动的所有结构化数据。请在文件的最顶部，用 --- 包裹这些内容。

---
title: "活动的完整官方名称"
startDate: YYYY-MM-DD
endDate: YYYY-MM-DD
organizer: "主办方名称"
location:
  city: "城市"
  country: "国家"
  online: false # 如果是纯线上活动，请改为 true
url: "https://活动官网地址" # 必须是有效的网址
image: "/images/your-image-name.png" # 图片的路径，请参考下方的“图片规范”
tags: ["标签1", "标签2"] # 附加标签，例如 "Gaming", "DeFi" 等

# --- 以下为筛选字段，请务必根据选项填写 ---
featured: false # 是否为精选活动？如果是，改为 true
eventType: ["Web3.0"]  # 活动分类(可多选), 可选值: "AI", "Big Data", "Cloud", "Fintech", "Gaming", "IoT", "Web3.0"
region: "Asia"     # 所在地区(单选), 可选值: "Americas", "Asia", "Europe", "Other"
category: "Conference" # 活动类型(单选), 可选值: "Conference", "Hackathon", "Meetup", "Workshop", "Expo"
---
字段说明
字段	说明	示例
title	活动的官方全称	"Global AI Conference 2025"
startDate	活动开始日期	2025-10-20
endDate	活动结束日期	2025-10-22
organizer	主办方机构名称	"Future Tech Org"
location	包含城市、国家和是否线上的对象	{ city: "San Francisco", country: "USA", online: false }
url	指向活动官网的有效链接	"https://example.com/aiconf"
image	活动的封面图路径	"/images/ai-event.png"
tags	描述活动内容的附加标签	["Machine Learning", "Data Science"]
featured	true 或 false，决定是否出现在精选区	true
eventType	活动所属的主要技术分类	["AI", "Big Data"]
region	活动举办的地理区域	"Americas"
category	活动的性质	"Conference"

当然有！您现在需要的是一份清晰、友好且详尽的贡献者指南。这份文档是您开源项目的“说明书”，它能极大地降低新参与者的门槛，确保提交的内容格式统一，并展现出您项目的专业性。

通常，在开源项目中，这份指南的名字是 CONTRIBUTING.md。

下面，我为您起草了一份可以直接使用的 CONTRIBUTING.md 文件内容。它结合了您最新的文件结构和 Frontmatter 规范，并采用了对新手最友好的“通过 GitHub 网页提交”的流程。

使用方法
在您的 hackathon 项目根目录下，找到 CONTRIBUTING.md 文件（如果不存在就新建一个）。

将下面的所有内容完整地复制并粘贴到 CONTRIBUTING.md 文件中。

保存文件，然后将它提交并推送到您的 GitHub 仓库。之后，在您的仓库主页，这个文件就会被醒目地展示给所有潜在的贡献者。

(请从下面这行开始复制)

如何为 hackathon.chat 贡献内容
非常感谢您有兴趣为 hackathon.chat 做出贡献！我们是一个开放的、由社区驱动的项目，旨在收录全球各地的黑客马拉松与科技大会信息。您的每一次贡献都非常有价值。

这份指南将引导您轻松地完成一次活动信息的添加。

贡献方式：添加一个 Markdown 文件
我们项目的核心理念是“一个活动 = 一个 Markdown 文件”。您不需要懂复杂的编程知识，只需要按照规定的格式，在指定文件夹中添加一个 .md 文件，就完成了一次贡献。

贡献流程 (通过 GitHub 网页)
这是最简单、最推荐的贡献方式，全程无需在您的电脑上安装任何东西。

Fork 本仓库：
首先，请访问我们的 GitHub 仓库主页，点击页面右上角的 Fork 按钮，将项目完整地复制到您自己的 GitHub 账号下。

进入活动文件夹：
在您刚刚 Fork 好的个人仓库中，导航到以下路径：src/content/events/。

创建新文件：
点击页面右上方的 Add file -> Create new file 按钮。

命名文件：
在顶部“Name your file...”输入框中，为您的文件命名。请遵循 YYYY-活动简称.md 的格式，例如 2025-eth-vietnam.md。

填写活动内容：
将下面的 内容模板 完整地复制并粘贴到文件编辑器中，然后像填空一样，仔细修改里面的活动信息。

提交 Pull Request：
填写完毕后，滚动到页面底部，点击 Commit new file 按钮。接着，页面会引导您创建一个 Pull Request (PR)。请简单描述一下您添加的活动，然后点击 Create pull request。

Markdown 文件规范
为了保证网站能正确地展示信息，请严格遵守以下文件规范。

1. 文件命名
采用 YYYY-活动简称.md 的格式，全部使用小写英文字母和短横线 -。

正确示例: 2025-global-ai-summit-sf.md

错误示例: Global AI Summit.md, 2025_ai_summit.md

2. Frontmatter 内容 (核心！)
这是文件最重要的部分，它定义了活动的所有结构化数据。请在文件的最顶部，用 --- 包裹这些内容。

内容模板
YAML

---
title: "活动的完整官方名称"
startDate: YYYY-MM-DD
endDate: YYYY-MM-DD
organizer: "主办方名称"
location:
  city: "城市"
  country: "国家"
  online: false # 如果是纯线上活动，请改为 true
url: "https://活动官网地址" # 必须是有效的网址
image: "/images/your-image-name.png" # 图片的路径，请参考下方的“图片规范”
tags: ["标签1", "标签2"] # 附加标签，例如 "Gaming", "DeFi" 等

# --- 以下为筛选字段，请务必根据选项填写 ---
featured: false # 是否为精选活动？如果是，改为 true
eventType: ["Web3.0"]  # 活动分类(可多选), 可选值: "AI", "Big Data", "Cloud", "Fintech", "Gaming", "IoT", "Web3.0"
region: "Asia"     # 所在地区(单选), 可选值: "Americas", "Asia", "Europe", "Other"
category: "Conference" # 活动类型(单选), 可选值: "Conference", "Hackathon", "Meetup", "Workshop", "Expo"
---
字段说明
字段	说明	示例
title	活动的官方全称	"Global AI Conference 2025"
startDate	活动开始日期	2025-10-20
endDate	活动结束日期	2025-10-22
organizer	主办方机构名称	"Future Tech Org"
location	包含城市、国家和是否线上的对象	{ city: "San Francisco", country: "USA", online: false }
url	指向活动官网的有效链接	"https://example.com/aiconf"
image	活动的封面图路径	"/images/ai-event.png"
tags	描述活动内容的附加标签	["Machine Learning", "Data Science"]
featured	true 或 false，决定是否出现在精选区	true
eventType	活动所属的主要技术分类	["AI", "Big Data"]
region	活动举办的地理区域	"Americas"
category	活动的性质	"Conference"

导出到 Google 表格
3. 正文内容
在下方 --- 分隔线之后，您可以使用标准的 Markdown 语法，添加关于活动的详细介绍、日程安排、演讲嘉宾等任何您认为有用的信息。

图片规范
图片尺寸：推荐使用宽高比为 16:9 的图片，例如 800x450 或 400x225 像素，以获得最佳展示效果。

上传位置：请将活动图片上传到项目的 public/images/ 文件夹中。

引用路径：在 .md 文件的 image 字段中，路径请以 /images/ 开头，例如 image: "/images/eth-vietnam.png"。

提交之后
在您提交 Pull Request 后，项目维护者会尽快进行审查。我们可能会提出一些修改建议。一旦您的 PR 被合并，GitHub Actions 会自动将您的贡献部署到 hackathon.chat 网站上。

再次感谢您的宝贵贡献！