export interface UploadConfig {
  url: string;
  fileKey: string;
  extras?: UploadExtra[];

  [key: string]: any;
}

export interface UploadExtra {
  key: string;
  value: string;
}
