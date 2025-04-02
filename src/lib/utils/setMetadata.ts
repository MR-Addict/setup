export default function setMetadata(title?: string) {
  return {
    title: (title ? title + " • " : "") + "Setup",
    description: "MR-Addict's ubuntu setup scripts"
  };
}
