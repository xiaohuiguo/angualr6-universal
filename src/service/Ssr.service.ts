import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
@Injectable()
export class SsrService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}
    public ifPlatformBrowser = isPlatformBrowser(this.platformId);
}
