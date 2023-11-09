import { XmlParser } from './xml-parser';
import fs from 'fs';

describe('XmlParser', () => {
  describe('fromString, fromObject', () => {
    it('should be able to read fromString and fromObject', () => {
      const parser = new XmlParser();
      const xml = fs.readFileSync('./src/test-files/sample.xml').toString();
      expect(parser.fromObject(parser.fromString(xml))).toBe(xml);
    });
  });
});