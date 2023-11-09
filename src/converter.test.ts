import { makeConverter } from './make-converter';
import fs from 'fs';
import { Format } from './format';

describe('Converter', () => {
  //Todo: add more tests later
  it('Should be able to convert back to same json from yaml', () => {
    const converter = makeConverter();
    const input = fs.readFileSync('./src/test-files/sample.json').toString();
    expect(
      converter.convert(
        converter.convert(input, Format.JSON, Format.YAML),
        Format.YAML,
        Format.JSON)
    ).toBe(input);
  });
  it('Should be able to convert back to same xml from json', () => {
    const converter = makeConverter();
    const input = fs.readFileSync('./src/test-files/sample.xml').toString();
    expect(
      converter.convert(
        converter.convert(input, Format.XML, Format.JSON),
        Format.JSON,
        Format.XML)
    ).toBe(input);
  });
  it('Should be able to convert back to same json from xml', () => {
    const converter = makeConverter();
    const input = JSON.stringify({
      person: {
        name: 'Mohamed',
        email: 'test@mail.com'
      },
      task: {
        name: 'Format converter',
        version: 1
      }
    }, null, 2);
    expect(
      converter.convert(
        converter.convert(input, Format.JSON, Format.XML),
        Format.XML,
        Format.JSON)
    ).toBe(input);
  });
});
