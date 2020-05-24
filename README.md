# 大分県 新型コロナウイルス感染症対策サイト
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![](https://github.com/covid-oita/covid19/workflows/production%20deploy/badge.svg)

[![大分県 新型コロナウイルス感染症対策サイト](https://user-images.githubusercontent.com/24912801/77246566-1f8fb180-6c6c-11ea-81b5-ebda94b8c163.png)](https://oita.stopcovid19.jp/)

### 日本語 | [English](./docs/en/README.md)

## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[貢献の仕方](./CONTRIBUTING.md)を御覧ください。

Code of Conduct は[こちら](./CODE_OF_CONDUCT.md)を御覧ください。


## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。


## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

**yarn を使う場合**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```

### VSCode + Remote Containersで開発する場合

1. VSCodeの拡張機能「[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」を導入します。
2. [この画像（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば環境構築が始まります。

#### Topic
- 設定を変更したい場合は、`.devcontainer/devcontainer.json`を修正してください。
詳細は[devcontainer.jsonのリファレンス](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照してください。
- Remote Container実行時のみ有効な拡張機能「ESLint」を導入していますが、必要に応じて`devcontainer.json`の`extensions`に追加してください。
詳細な手順は[こちら（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。

### 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。
テスト環境のみで実行したい処理がある場合はこちらの値をご利用ください。

### ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://oita.stopcovid19.jp/ が更新されます。

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://dev-covid19-oita.netlify.app/ が更新されます。

### ブランチルール

development以外は Pull Request は禁止です。
Pull Request を送る際の branch は、以下のネーミングルールでお願いします。

機能追加系： feature/#{ISSUE_ID}-#{branch_title_name}

#### 基本的なブランチ
| 目的 | ブランチ | 確認URL | 備考 |
| ---- | -------- | ---- | ---- |
| 開発 | development | https://dev-covid19-oita.netlify.app/ | base branch。基本はこちらに Pull Requestを送ってください |
| 本番 | master | https://oita.stopcovid19.jp/ | 管理者以外の Pull Request は禁止です |

#### システムで利用しているブランチ
| 目的 | ブランチ | 確認URL | 備考 |
| ---- | -------- | ---- | ---- |
| 本番サイト | production | https://oita.stopcovid19.jp/ | 静的ビルドされたHTMLが置いてある場所 |


### メディア掲載実績
- [大分県ホームページ](https://www.pref.oita.jp/site/covid19-oita/): リンクが掲載されました。

- [政府CIOポータル](https://cio.go.jp/node/2581/): 東京都のオープンソースを活用した新型コロナウイルス感染症対策サイトとして紹介されました。

- [TOSテレビ大分](https://www.tostv.jp/emergency/): コンテンツの一部が引用されました。

- [PhotoPRESS COVID-19 Dashboard](https://photopress.jp/covid19-dashboard): コンテンツの一部が引用されました。

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/nojiri1098"><img src="https://github.com/nojiri1098.png" width="100px;" alt=""/><br /><sub><b>Daiki Nojiri</b></sub></a><br /><a href="https://github.com/covid19-oita/covid19/commits?author=nojiri1098" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/varu_3"><img src="https://github.com/varusan.png" width="100px;" alt=""/><br /><sub><b>Subaru Nakamura</b></sub></a><br /><a href="https://github.com/covid19-oita/covid19/commits?author=varusan" title="Code">💻</a></td>
    <td align="center"><a href="https://shmokmt.github.io/"><img src="https://github.com/shmokmt.png" width="100px;" alt=""/><br /><sub><b>Shoma Okamoto</b></sub></a><br /><a href="https://github.com/covid19-oita/covid19/commits?author=shmokmt" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/satetsu"><img src="https://github.com/satetsu.png" width="100px;" alt=""/><br /><sub><b>satetsu</b></sub></a><br /><a href="#business-satetsu" title="Business development">💼</a></td>
    <td align="center"><a href="https://nakaokarei.github.io/my_portfolio"><img src="https://github.com/NakaokaRei.png" width="100px;" alt=""/><br /><sub><b>Nakaoka Rei</b></sub></a><br /><a href="#translation-NakaokaRei" title="Translation">🌍</a></td>
    <td align="center"><a href="https://pnnutkung.github.io/blog"><img src="https://github.com/PNNutkung.png" width="100px;" alt=""/><br /><sub><b>Pipatpol Tanavongchinda</b></sub></a><br /><a href="#translation-PNNutkung" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
