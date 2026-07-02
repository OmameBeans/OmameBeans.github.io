import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // mdのメタデータ(Front Matter)を解析する場合に便利

const DOCS_DIR = path.join(process.cwd(), 'docs');
const OUTPUT_FILE = path.join(process.cwd(), 'src/tree.json'); // または public/tree.json

function buildTree(dirPath, relativePath = '') {
  const result = [];
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  // アルファベット順やファイル名順でソート
  items.sort((a, b) => a.name.localeCompare(b.name));

  for (const item of items) {
    const itemPath = path.join(dirPath, item.name);
    const itemRelativePath = path.join(relativePath, item.name).replace(/\\/g, '/');

    if (item.isDirectory()) {
      // ディレクトリの場合（子階層を再帰的に取得）
      result.push({
        type: 'directory',
        name: item.name,
        path: itemRelativePath,
        children: buildTree(itemPath, itemRelativePath)
      });
    } else if (item.isFile() && item.name.endsWith('.md')) {
      // Markdownファイルの場合
      const fileContent = fs.readFileSync(itemPath, 'utf-8');
      // front-matterでタイトルなどを取得したい場合（任意）
      const { data } = matter(fileContent); 
      
      result.push({
        type: 'file',
        name: item.name,
        title: data.title || item.name.replace('.md', ''), // front-matterがなければファイル名
        path: itemRelativePath
      });
    }
  }
  return result;
}

// 実行と保存
const treeData = buildTree(DOCS_DIR);
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(treeData, null, 2));
console.log(`✅ Tree JSON generated at ${OUTPUT_FILE}`);