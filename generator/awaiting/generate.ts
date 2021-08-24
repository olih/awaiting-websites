import { readFileSync, writeFileSync, PathLike } from "fs";
import { compile } from "handlebars";
import { AwaitingWebsite } from "./model";
import { websitesData } from "./websites-data";


const readFileSyncAsString = (path: PathLike) => readFileSync(path, "utf8");

const writeFileSyncAsString = (path: PathLike, content: string) =>
  writeFileSync(path, content, "utf8");

const generate = (metadata: AwaitingWebsite) => {
  const template = readFileSyncAsString(
    "generator/awaiting/main-page-template.hbs"
  );
  const compiled = compile(template);
  const html = compiled(metadata);
  writeFileSyncAsString(`websites/${metadata.dest}/index.html`, html);
};

websitesData.forEach( metadata => generate(metadata))


