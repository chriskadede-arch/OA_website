export default function imageLoader({ src }) {
  if (src.startsWith('http') || src.startsWith('//') || src.startsWith('data:')) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (base && src.startsWith(base)) return src;
  return `${base}${src}`;
}
