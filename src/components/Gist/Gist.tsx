export default function Gist({ owner, id, height }: { owner: string; id: string; height: number }) {
  return (
    <iframe
      loading='lazy'
      allowFullScreen
      title='Codepen iframe'
      style={{ width: "100%", height: height }}
      src={`https://gist.github.com/${owner}/${id}.pibb`}
    />
  );
}
