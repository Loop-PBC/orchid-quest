import { SKIP, visit } from 'unist-util-visit';
import type { Root, Text, Parent, PhrasingContent } from 'mdast';
import { slugify } from './slug';

const WIKILINK = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

export default function remarkWikilinks() {
  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (index === undefined || !parent || !node.value.includes('[[')) return;

      const replacement: PhrasingContent[] = [];
      let cursor = 0;
      let match: RegExpExecArray | null;

      WIKILINK.lastIndex = 0;
      while ((match = WIKILINK.exec(node.value)) !== null) {
        if (match.index > cursor) {
          replacement.push({ type: 'text', value: node.value.slice(cursor, match.index) });
        }

        const target = match[1].trim();
        const label = (match[2] ?? target).trim();
        replacement.push({
          type: 'link',
          url: `/notes/${slugify(target)}/`,
          data: { hProperties: { className: ['wikilink'], 'data-target': target } },
          children: [{ type: 'text', value: label }]
        });
        cursor = match.index + match[0].length;
      }

      if (cursor === 0) return;
      if (cursor < node.value.length) {
        replacement.push({ type: 'text', value: node.value.slice(cursor) });
      }

      (parent as Parent).children.splice(index, 1, ...replacement);
      return [SKIP, index + replacement.length];
    });
  };
}
