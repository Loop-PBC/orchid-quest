import type { CollectionEntry } from 'astro:content';
import { slugify } from './slug';

export interface GraphNode {
  id: string;
  title: string;
  growth: 'seedling' | 'budding' | 'evergreen';
  constellation: string;
  href: string;
}

export interface GraphLink {
  source: string;
  target: string;
}

const WIKILINK = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;

export function buildGraph(notes: CollectionEntry<'notes'>[]) {
  const nodes: GraphNode[] = notes.map((note) => ({
    id: note.id,
    title: note.data.title,
    growth: note.data.growth,
    constellation: note.data.constellation,
    href: `/notes/${note.id}/`
  }));

  const ids = new Set(nodes.map((node) => node.id));
  const links: GraphLink[] = [];

  for (const note of notes) {
    WIKILINK.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = WIKILINK.exec(note.body ?? '')) !== null) {
      const target = slugify(match[1].trim());
      if (ids.has(target) && target !== note.id) {
        links.push({ source: note.id, target });
      }
    }
  }

  return { nodes, links };
}

export function backlinksFor(
  current: CollectionEntry<'notes'>,
  notes: CollectionEntry<'notes'>[]
) {
  const target = current.id;
  return notes.filter((note) => {
    const body = note.body ?? '';
    WIKILINK.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = WIKILINK.exec(body)) !== null) {
      if (slugify(match[1].trim()) === target) return true;
    }
    return false;
  });
}
