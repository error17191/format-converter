import { YamlParser } from './yaml-parser';
import fs from 'fs';

describe('YamlParser', () => {
  describe('fromString, fromObject', () => {
    it('should be able to read fromString and fromObject', () => {
      const parser = new YamlParser();
      const yaml = fs.readFileSync('./src/test-files/sample.yaml').toString();
      expect(parser.fromObject(parser.fromString(yaml))).toBe(yaml);
    });
  });
});