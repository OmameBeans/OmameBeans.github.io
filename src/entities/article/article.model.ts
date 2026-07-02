export interface Article {
    // slugやファイルパス
    id: string;
    // 記事のタイトル
    title: string;
    // 記事の内容
    content: string;
    // フロントマターの内容
    frontMatter: Record<string, any>;
}