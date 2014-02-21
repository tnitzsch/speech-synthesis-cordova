'use strict';

describe('unit specs', function() {

  var speechSynthesisPolyfill = window.speechSynthesisPolyfill;
  var SpeechSynthesisUtterancePolyfill = window.SpeechSynthesisUtterancePolyfill;

  describe('speechSynthesisPolyfill', function() {
    it('should be defined', function() {
      expect(speechSynthesisPolyfill).toBeDefined();
    });

    it('should be object', function() {
      expect(typeof speechSynthesisPolyfill).toBe('object');
    });

    it('should have attributes', function(){
      expect(speechSynthesisPolyfill.pending).toBeDefined();
      expect(speechSynthesisPolyfill.speaking).toBeDefined();
      expect(speechSynthesisPolyfill.paused).toBeDefined();

      expect(speechSynthesisPolyfill.pending).toBe(false);
      expect(speechSynthesisPolyfill.speaking).toBe(false);
      expect(speechSynthesisPolyfill.paused).toBe(false);
    });

    it('should have methods', function(){
      expect(speechSynthesisPolyfill.speak).toBeDefined();
      expect(speechSynthesisPolyfill.cancel).toBeDefined();
      expect(speechSynthesisPolyfill.pause).toBeDefined();
      expect(speechSynthesisPolyfill.resume).toBeDefined();
      expect(speechSynthesisPolyfill.getVoices).toBeDefined();

      expect(typeof speechSynthesisPolyfill.speak).toBe('function');
      expect(typeof speechSynthesisPolyfill.cancel).toBe('function');
      expect(typeof speechSynthesisPolyfill.pause).toBe('function');
      expect(typeof speechSynthesisPolyfill.resume).toBe('function');
      expect(typeof speechSynthesisPolyfill.getVoices).toBe('function');
    });

  });

  describe('SpeechSynthesisUtterancePolyfill', function() {
    it('should be defined', function() {
      expect(SpeechSynthesisUtterancePolyfill).toBeDefined();
    });

    it('should be function', function() {
      expect(typeof SpeechSynthesisUtterancePolyfill).toBe('function');
    });

    it('should have attributes', function() {
      var u = new SpeechSynthesisUtterancePolyfill('Hello there!');

      expect(u.text).toBeDefined();
      expect(u.lang).toBeDefined();
      expect(u.volume).toBeDefined();
      expect(u.rate).toBeDefined();
      expect(u.pitch).toBeDefined();
      expect(u.voiceURI).toBeDefined();

      expect(u.text).toBe('Hello there!');
      expect(u.lang).toBe('en-US');
      expect(u.volume).toBe(1.0);
      expect(u.rate).toBe(1.0);
      expect(u.pitch).toBe(1.0);
      expect(u.voiceURI).toBe('native');
    });

    it('should have a CORS proxy server', function() {
      var u = new SpeechSynthesisUtterancePolyfill('Hello there!');
      expect(u.corsProxyServer).toBe('http://www.corsproxy.com/');
    });  
  });
  
});