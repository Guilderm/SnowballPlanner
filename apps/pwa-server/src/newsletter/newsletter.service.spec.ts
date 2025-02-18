// apps\pwa-server\src\newsletter\newsletter.service.spec.ts

import { Test, TestingModule } from "@nestjs/testing";
import { NewsletterService } from "./newsletter.service.js";

describe("NewsletterService", () => {
  let service: NewsletterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsletterService],
    }).compile();

    service = module.get<NewsletterService>(NewsletterService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
