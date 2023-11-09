import { JsonParser } from './json-parser';
import fs from 'fs';

describe('JsonParser', () => {
  describe('fromString, fromObject', () => {
    it('should be able to read fromString and fromObject', () => {
      const parser = new JsonParser();
      const json = fs.readFileSync('./src/test-files/sample.json').toString();
      expect(parser.fromObject(parser.fromString(json))).toBe(json);
    });
  });
});