import { Converter } from './converter';
import { Format } from './format';
import { Parser } from './parser/parser';
import { JsonParser } from './parser/json-parser';
import { XmlParser } from './parser/xml-parser';
import { YamlParser } from './parser/yaml-parser';

export const makeConverter = (): Converter => {
  return new Converter(new Map<Format, Parser>([
    [Format.JSON, new JsonParser()],
    [Format.XML, new XmlParser()],
    [Format.YAML, new YamlParser()]
    //.. More parsers
  ]));
};
