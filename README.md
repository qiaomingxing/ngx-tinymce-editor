# ngx-tinymce-editor [![NPM version](https://img.shields.io/npm/v/ngx-tinymce-editor.svg)](https://www.npmjs.com/package/ngx-tinymce-editor)

[Tinymce](https://www.tinymce.com/) Components build with [Angular](https://angular.io/).

## Installation instructions

1. Install `tinymce` from `npm`
2. Install `ngx-tinymce-editor` from `npm`

```bash
npm install tinymce --save
npm install ngx-tinymce-editor --save
```

### Recommend

1. Import the `ngx-tinymce-editor` in to your root `AppModule`.
2. Copy the `node_modules/tinymce/skins` in to your directory `assets/tinymce/skins`.

```typescript
import { NgxTinymceModule } from 'ngx-tinymce-editor';

@NgModule({
    imports: [
        NgxTinymceModule.forRoot()
    ]
})
export class AppModule { }
```

### Usage

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ngx-tinymce-editor [(content)]="content" [upload]="{url:'http://files.upload.url',fileKey:'file'}"></ngx-tinymce-editor>`
})
export class AppComponent  {
    content = ``;
}
```

### How to use it

+ `angular-cli` please refer to **Installation instructions**.

### API

| Name    | Type           | Default  | Description         |
| ------- | -------------  | -----    | --------            |
| content | `string`       | ""       | editor content      |
| height  | `string`       | "500px"  | editor height       |
| upload  | `object`       | null     | upload image config |
| readonly| `any`          | false    | editor read only    |

### Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/qiaomingxing/ngx-tinymce-editor/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/qiaomingxing/ngx-tinymce-editor/blob/master/LICENSE) file for the full text)
