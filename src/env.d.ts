/// <reference path="../.astro/types.d.ts" />

interface Window {
  particlesInit(Engine): Promise<void>;
  particlesLoaded(Container): void;
}