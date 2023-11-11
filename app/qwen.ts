export function makeQwenPath(path: string) {
  // should omit /v1 prefix
  path = path.replaceAll("openai/", "");

  // should add api-key to query string
  //path += `${path.includes("?") ? "&" : "?"}api-version=${apiVersion}`;

  return path;
}
