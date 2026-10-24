export interface StrokePath {
  id: string;
  d: string;
  type?: string;
}

export interface StrokeNumber {
  text: string;
  x: number;
  y: number;
  transform?: string;
}

export interface ParsedKanjiSvg {
  paths: StrokePath[];
  numbers: StrokeNumber[];
}

// In-memory cache for raw SVG strings and parsed results
const rawCache = new Map<string, string>();
const parsedCache = new Map<string, ParsedKanjiSvg>();

export function parseKanjiSvgText(svgText: string): ParsedKanjiSvg {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgText, 'image/svg+xml');

  // Extract paths in order
  const pathElements = doc.querySelectorAll('g[id^="kvg:StrokePaths"] path, path[id*="-s"]');
  const paths: StrokePath[] = [];

  pathElements.forEach((p, idx) => {
    const d = p.getAttribute('d') || '';
    const id = p.getAttribute('id') || `stroke-${idx + 1}`;
    const type = p.getAttribute('kvg:type') || '';
    if (d) {
      paths.push({ id, d, type });
    }
  });

  // Extract numbers
  const textElements = doc.querySelectorAll('g[id^="kvg:StrokeNumbers"] text, text');
  const numbers: StrokeNumber[] = [];

  textElements.forEach((t) => {
    const text = t.textContent?.trim() || '';
    const transform = t.getAttribute('transform') || '';
    const x = parseFloat(t.getAttribute('x') || '0');
    const y = parseFloat(t.getAttribute('y') || '0');
    if (text) {
      numbers.push({ text, x, y, transform });
    }
  });

  return { paths, numbers };
}

export async function fetchKanjiSvg(hex: string): Promise<ParsedKanjiSvg> {
  if (parsedCache.has(hex)) {
    return parsedCache.get(hex)!;
  }

  let text = rawCache.get(hex);

  if (!text) {
    const primaryUrl = `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg`;
    const fallbackUrl = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`;

    try {
      const res = await fetch(primaryUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      text = await res.text();
    } catch {
      const resFallback = await fetch(fallbackUrl);
      text = await resFallback.text();
    }
    rawCache.set(hex, text);
  }

  const parsed = parseKanjiSvgText(text);
  parsedCache.set(hex, parsed);
  return parsed;
}
