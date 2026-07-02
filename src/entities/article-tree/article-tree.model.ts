export interface ArticleTreeNode {
    type: 'directory' | 'file';
    name: string;
    // ファイルの場合のみ、フロントマターやファイル名から解決された表示用タイトル
    title?: string;
    path: string;
    children?: ArticleTreeNode[];
};

export const nodeToRoute = (path: string): string => {
    const withoutExt = path.replace(/\.md$/, '');
    const withoutIndex = withoutExt.replace(/(^|\/)index$/, '');
    return `/${withoutIndex}`.replace(/\/+/g, '/');
};

// ツリー構造からファイルノードのみを再帰的に平坦化する。
export const flattenFileNodes = (nodes: ArticleTreeNode[]): ArticleTreeNode[] => {
    return nodes.flatMap((node) =>
        node.type === 'file' ? [node] : flattenFileNodes(node.children ?? [])
    );
};

export const findFileNodeByRoute = (
    nodes: ArticleTreeNode[],
    route: string
): ArticleTreeNode | undefined => {
    return flattenFileNodes(nodes).find((node) => nodeToRoute(node.path) === route);
};