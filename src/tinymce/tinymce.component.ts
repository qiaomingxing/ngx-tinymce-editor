/**
 * Author: qiaomingxing
 * Time: 2018/5/31
 * Demo: <ngx-tinymce-editor [(content)]="value" [height]="'300px'" [upload]="{url:'',fileKey:'file'}"></ngx-tinymce-editor>
 * TODO tinymce editor 富文本编辑器
 */
import {
  Component, OnDestroy, AfterViewInit,
  EventEmitter, Input, Output, AfterViewChecked
} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UploadConfig} from './interface';

declare const tinymce: any;

@Component({
  selector: 'ngx-tinymce-editor',
  template: `<textarea id="{{elementId}}" [style.height]="height"></textarea>`
})

export class NgxTinymceComponent implements AfterViewInit, OnDestroy, AfterViewChecked {
  @Input() elementId = `ngx_tinymce_${Math.random().toString(36).substring(2)}`;
  @Input() content = '';
  @Output() contentChange = new EventEmitter<any>();
  @Input() height = '500px';
  uploadConfig: UploadConfig;
  readonlyValue = 0;
  editor;
  firstLoad = true;
  toolbar_image = '';

  constructor(private http: HttpClient) {
  }

  @Input()
  set upload(value: UploadConfig) {
    this.uploadConfig = value;
    this.toolbar_image = ' image';
  }

  @Input()
  set readonly(value) {
    this.readonlyValue = 1;
  }

  ngAfterViewInit() {
    const self = this;
    tinymce.init({
      selector: '#' + this.elementId,
      language: 'zh_CN',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'template paste textcolor colorpicker textpattern imagetools codesample'
      ],
      skin_url: 'assets/tinymce/skins/lightgray',
      toolbar1: `insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link ${this.toolbar_image}`,
      toolbar2: 'print preview media | forecolor backcolor | codesample | fontselect fontsizeselect',
      fontsize_formats: '8px 10px 12px 14px 18px 24px 36px',
      image_advtab: true,
      // codesample_content_css: '/assets/tinymce/prism.css',
      readonly: this.readonlyValue,
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          setTimeout(() => this.contentChange.emit(editor.getContent()));
        });
      },
      images_upload_handler: function (blobInfo, success, failure) {
        const formData = new FormData();
        formData.append(this.uploadConfig.fileKey, blobInfo.blob(), blobInfo.filename());
        if (this.uploadConfig.extras && this.uploadConfig.extras.length > 0) {
          this.uploadConfig.extras.forEach(value => {
            formData.append(value.key, value.value);
          });
        }
        self.http.post(this.uploadConfig.url, formData).subscribe((res: any) => {
          if (res.code === 200) {
            success(res.data.fullFileUrl);
          }
        });
      }
    });
  }

  ngAfterViewChecked() {
    if (this.editor) {
      if (this.firstLoad && this.content) {
        this.editor.setContent(this.content);
        this.firstLoad = false;
      }
      if (this.content !== this.editor.getContent()) {
        setTimeout(() => this.contentChange.emit(this.editor.getContent()));
      }
    }
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
